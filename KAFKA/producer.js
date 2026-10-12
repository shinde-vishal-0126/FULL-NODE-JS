/**
 * ============================================================================
 * FILE: producer.js - High-Reliability Production Kafka Producer
 * ============================================================================
 * 
 * 📌 WHAT IS THIS FILE? (या फाईलचे काम काय?):
 * The Producer publishes events (records) into Kafka topics.
 * 
 * 💡 TOP 4 INTERVIEW RULES FOR KAFKA PRODUCERS:
 * 1. SINGLETON CONNECTION: Connect the producer ONCE when the app boots (`await producer.connect()`).
 *    Never call `connect()` on every incoming HTTP request.
 * 2. DETERMINISTIC KEY: Pass a key (e.g. `userId`) so all related events land in the SAME partition,
 *    guaranteeing strict chronological order.
 * 3. ACKS = -1 (ALL): Guarantees Zero Data Loss by waiting for Leader + all In-Sync Replicas (ISR).
 * 4. COMPRESSION: GZIP / Snappy / LZ4 reduces network bandwidth by 60-80% with minimal CPU overhead.
 * 
 * 🚀 HOW TO EXECUTE / कसे चालवायचे:
 * node producer.js   (or: npm run producer)
 */

const { CompressionTypes, Partitioners } = require('kafkajs');
const kafka = require('./client');

/**
 * ----------------------------------------------------------------------------
 * ALL AVAILABLE PRODUCER CONFIGURATION VALUES (सर्व उपलब्ध प्रोड्युसर कॉन्फिग्स)
 * ----------------------------------------------------------------------------
 * | Property                | Default Value               | Description / Production Best Practice                           |
 * |-------------------------|-----------------------------|------------------------------------------------------------------|
 * | createPartitioner       | DefaultPartitioner          | LegacyPartitioner or DefaultPartitioner (MurmurHash2).           |
 * | retry                   | { retries: 5 }              | Exponential backoff retries for transient network drops.         |
 * | metadataMaxAge          | 300000 (5 mins)             | Frequency in ms to refresh cluster topic/broker metadata.        |
 * | allowAutoTopicCreation  | false                       | Keep FALSE in production to prevent typo topics from auto-creation|
 * | idempotent              | true (default in v2)        | Prevents duplicate records on network retry (PID + Seq Number).  |
 * | transactionTimeout      | 60000 (60s)                 | Maximum time a transaction can remain open before expiring.       |
 * 
 * ----------------------------------------------------------------------------
 * ALL AVAILABLE `producer.send()` OPTIONS
 * ----------------------------------------------------------------------------
 * | Send Option             | Available Values            | Description                                                      |
 * |-------------------------|-----------------------------|------------------------------------------------------------------|
 * | topic                   | String (Required)           | Destination topic name.                                          |
 * | acks                    | 0, 1, -1 (all)              | 0 = Fire & forget; 1 = Leader only; -1 = Leader + all ISR (Safest)|
 * | timeout                 | Number in ms (default 30000)| Timeout to await broker acknowledgment.                         |
 * | compression             | None, GZIP, Snappy, LZ4, ZSTD| Compresses batch before wire transfer to boost throughput.      |
 * | messages                | Array of Message objects    | [{ key, value, headers, partition, timestamp }]                  |
 */

// 1. Initialize Producer Singleton
const producer = kafka.producer({
  createPartitioner: Partitioners.DefaultPartitioner, // MurmurHash2 key partitioner
  allowAutoTopicCreation: false,                     // Prevent accidental auto-created topics
  transactionTimeout: 30000,
  retry: {
    initialRetryTime: 100,
    retries: 5
  }
});

/**
 * Publishes an array of orders to the "order-events" topic
 */
async function publishOrderEvents() {
  try {
    console.log('⏳ [Producer] Connecting to Kafka cluster...');
    await producer.connect();
    console.log('✅ [Producer] Connected successfully!\n');

    // Sample Ecommerce Orders to Publish
    const orderBatch = [
      {
        orderId: 'ORD-101',
        userId: 'user_pune_99',      // Key 1: All orders for this user go to the SAME partition!
        amount: 2499.00,
        item: 'Mechanical Keyboard',
        city: 'Pune'
      },
      {
        orderId: 'ORD-102',
        userId: 'user_mumbai_88',    // Key 2: Routed deterministically by MurmurHash2
        amount: 899.00,
        item: 'Wireless Mouse',
        city: 'Mumbai'
      },
      {
        orderId: 'ORD-103',
        userId: 'user_pune_99',      // Key 1: Guarantees strict ordering with ORD-101!
        amount: 350.00,
        item: 'Desk Mat XL',
        city: 'Pune'
      },
      {
        orderId: 'ORD-FAIL-999',
        userId: 'user_bad_payload',  // POISON PILL TEST: Negative amount will fail validation in consumer
        amount: -500.00,             // This will trigger the consumer's DLQ logic!
        item: 'Corrupted Test Order',
        city: 'Nagpur'
      }
    ];

    console.log(`📤 [Producer] Sending batch of ${orderBatch.length} messages with acks=-1 and GZIP compression...\n`);

    // 2. Publish records using producer.send()
    for (const order of orderBatch) {
      const response = await producer.send({
        topic: 'order-events',
        compression: CompressionTypes.GZIP, // Amortizes network overhead
        acks: -1,                           // acks=all: Leader + all ISR nodes must commit to disk

        messages: [
          {
            key: order.userId,              // Record Key for deterministic partition selection
            value: JSON.stringify({
              orderId: order.orderId,
              userId: order.userId,
              amount: order.amount,
              item: order.item,
              city: order.city,
              createdAt: new Date().toISOString()
            }),
            headers: {
              'source-app': 'ecommerce-checkout-api',
              'correlation-id': `txn_${order.orderId}_${Date.now()}`
            }
          }
        ]
      });

      console.log(`🚀 [SENT] Order "${order.orderId}" | Key: "${order.userId}" ──► Partition: ${response[0].partition} | Offset: ${response[0].baseOffset}`);
    }

    console.log('\n✨ [Producer] All messages published successfully!');

  } catch (error) {
    console.error('❌ [Producer] Publish error:', error);
  } finally {
    // 3. Graceful disconnect
    console.log('\n🔌 [Producer] Disconnecting from cluster...');
    await producer.disconnect();
    console.log('👋 [Producer] Disconnected cleanly.');
  }
}

// Execute
publishOrderEvents();
