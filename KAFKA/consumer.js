/**
 * ============================================================================
 * FILE: consumer.js - Resilient Production Kafka Consumer with DLQ Redirection
 * ============================================================================
 * 
 * 📌 WHAT IS THIS FILE? (या फाईलचे काम काय?):
 * The Consumer continuously polls records from topic partitions and processes them.
 * 
 * 💡 TOP 4 INTERVIEW RULES FOR KAFKA CONSUMERS:
 * 1. PULL MODEL: Consumers actively fetch data at their own pace. Brokers NEVER push.
 * 2. 1 PARTITION = 1 CONSUMER: Within the same Consumer Group, a partition is read by exactly
 *    ONE consumer instance. More consumers than partitions will result in idle consumers!
 * 3. GRACEFUL SHUTDOWN (SIGINT/SIGTERM): Always call `await consumer.disconnect()`.
 *    This immediately notifies the Group Coordinator, avoiding 30-45 second rebalance delays.
 * 4. DEAD LETTER QUEUE (DLQ): Never crash a consumer on a bad record! Catch the error,
 *    forward the corrupted record to a DLQ topic, and keep the main stream processing.
 * 
 * 🚀 HOW TO EXECUTE / कसे चालवायचे:
 * node consumer.js   (or: npm run consumer)
 */

const kafka = require('./client');

/**
 * ----------------------------------------------------------------------------
 * ALL AVAILABLE CONSUMER CONFIGURATION VALUES (सर्व उपलब्ध कन्झ्युमर कॉन्फिग्स)
 * ----------------------------------------------------------------------------
 * | Property                     | Default Value               | Description / Production Best Practice                           |
 * |------------------------------|-----------------------------|------------------------------------------------------------------|
 * | groupId                      | String (Required)           | Identifies the Consumer Group. Partitions are split within group.|
 * | sessionTimeout               | 30000 (30s)                 | Time coordinator waits without heartbeats before declaring dead. |
 * | rebalanceTimeout             | 60000 (60s)                 | Maximum time a consumer can take to rejoin during rebalance.     |
 * | heartbeatInterval            | 3000 (3s)                   | Frequency of background keep-alive ping (Set to sessionTimeout/3)|
 * | maxBytesPerPartition         | 1048576 (1MB)               | Maximum data read per partition per fetch request.               |
 * | minBytes                     | 1 byte                      | Minimum bytes to wait for before broker returns fetch response.  |
 * | maxWaitTimeInMs              | 5000 (5s)                   | Maximum time broker will wait for minBytes to accumulate.        |
 * | readUncommitted              | false                       | false = read only committed transactions (isolation.level).      |
 * 
 * ----------------------------------------------------------------------------
 * ALL AVAILABLE `consumer.run()` OPTIONS
 * ----------------------------------------------------------------------------
 * | Run Option                   | Default Value               | Description                                                      |
 * |------------------------------|-----------------------------|------------------------------------------------------------------|
 * | autoCommit                   | true                        | Periodically commits consumer offset to __consumer_offsets.      |
 * | autoCommitInterval           | 5000 (5s)                   | Interval in ms between automatic offset commits.                 |
 * | autoCommitThreshold          | null                        | Number of records processed before triggering an auto-commit.    |
 * | eachMessage                  | async function              | Handler function invoked for each individual record.             |
 * | eachBatch                    | async function              | Handler function invoked for a batch (high-throughput mode).     |
 * | partitionsConsumedConcurrently| 1                         | Number of partitions to process in parallel on this single node. |
 */

// 1. Initialize Consumer with Production Parameters
const consumer = kafka.consumer({
  groupId: 'order-fulfillment-group',
  sessionTimeout: 30000,    // 30 seconds
  heartbeatInterval: 3000,  // 3 seconds (1/10th of session timeout)
  rebalanceTimeout: 60000,
  maxBytesPerPartition: 1048576 // 1MB
});

// 2. Initialize a dedicated DLQ Producer to isolate corrupted messages
const dlqProducer = kafka.producer();

async function startConsumerService() {
  try {
    console.log('⏳ [Consumer] Connecting Consumer and DLQ Producer to cluster...');
    await consumer.connect();
    await dlqProducer.connect();
    console.log('✅ [Consumer] Connected successfully!\n');

    // 3. Subscribe to the "order-events" topic
    await consumer.subscribe({
      topic: 'order-events',
      fromBeginning: true // true = re-read all historical records; false in production for live data
    });

    console.log('🎧 [Consumer] Listening for incoming messages on "order-events"...');
    console.log('-----------------------------------------------------------------');

    // 4. Run Message Polling Loop
    await consumer.run({
      autoCommit: true,
      autoCommitInterval: 5000, // Commit offset every 5 seconds

      eachMessage: async ({ topic, partition, message, heartbeat }) => {
        const offset = message.offset;
        const key = message.key ? message.key.toString() : 'NO_KEY';
        const rawValue = message.value.toString();
        const correlationId = message.headers['correlation-id'] 
          ? message.headers['correlation-id'].toString() 
          : 'N/A';

        console.log(`\n📩 [RECEIVED] Topic: "${topic}" | Partition: ${partition} | Offset: ${offset} | Key: "${key}"`);
        console.log(`   🔗 Correlation ID: ${correlationId}`);

        try {
          // Parse business JSON payload
          const order = JSON.parse(rawValue);

          // Business Rule Validation: Amount must be positive
          if (!order.amount || order.amount <= 0) {
            throw new Error(`Invalid order amount: ₹${order.amount}. Amounts must be greater than zero!`);
          }

          // Simulate Downstream Business Processing (e.g. Save to Postgres DB, Send Email Receipt)
          console.log(`   📦 Processing Order "${order.orderId}" for User "${order.userId}" in ${order.city}...`);
          console.log(`   💰 Item: ${order.item} | Amount: ₹${order.amount}`);

          // Heartbeat keeps consumer alive during heavy work to prevent session timeout
          await heartbeat();

          console.log(`   ✅ Order "${order.orderId}" successfully processed and inventory updated!`);

        } catch (error) {
          // ⚠️ POISON PILL DETECTED!
          console.error(`   ⚠️ [PROCESSING FAILED] at Offset ${offset}: ${error.message}`);
          console.log(`   🚨 Diverting poisoned record to "order-dead-letter-queue"...`);

          // Forward corrupted record to Dead Letter Queue (DLQ) with diagnostic headers
          await dlqProducer.send({
            topic: 'order-dead-letter-queue',
            messages: [
              {
                key: message.key,
                value: message.value,
                headers: {
                  ...message.headers,
                  'x-original-topic': topic,
                  'x-original-partition': String(partition),
                  'x-original-offset': String(offset),
                  'x-failure-reason': error.message,
                  'x-failed-at': new Date().toISOString()
                }
              }
            ]
          });

          console.log(`   📮 Record safely isolated in DLQ. Main stream continues without crashing!`);
        }
      }
    });

  } catch (error) {
    console.error('❌ [Consumer] Unhandled error:', error);
  }
}

// 5. Graceful Shutdown Handlers (अत्यंत महत्त्वाचे)
const handleGracefulShutdown = async (signal) => {
  console.log(`\n🛑 [${signal}] Signal received. Disconnecting consumer gracefully...`);
  try {
    await consumer.disconnect();
    await dlqProducer.disconnect();
    console.log('👋 [Consumer] Cleanly disconnected. Exiting process.');
    process.exit(0);
  } catch (err) {
    console.error('Error during shutdown:', err);
    process.exit(1);
  }
};

process.on('SIGINT', () => handleGracefulShutdown('SIGINT'));
process.on('SIGTERM', () => handleGracefulShutdown('SIGTERM'));

// Start consumer
startConsumerService();
