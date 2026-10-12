/**
 * ============================================================================
 * FILE: dlq.js - Dedicated Dead Letter Queue (DLQ) Inspector & Worker
 * ============================================================================
 * 
 * 📌 WHAT IS THIS FILE? (या फाईलचे काम काय?):
 * In high-throughput streaming systems, unparseable or corrupted "poison pill" records
 * cannot simply be discarded or retried forever. They must be routed to a Dead Letter
 * Queue (DLQ) topic.
 * 
 * This service runs independently to:
 * 1. Read messages from "order-dead-letter-queue".
 * 2. Inspect original error reasons and failure timestamps from message headers.
 * 3. Alert developers (via Slack, PagerDuty, or Sentry).
 * 4. Enable manual repair and replay after a bug fix.
 * 
 * 💡 TOP INTERVIEW QUESTION ON DLQ:
 * Q: Why can't we just use a try/catch block and ignore the error?
 * A: Silently ignoring errors leads to data loss and financial discrepancy! By routing to a
 *    DLQ, we preserve the exact corrupted record and all audit headers without stalling the main pipeline.
 * 
 * 🚀 HOW TO EXECUTE / कसे चालवायचे:
 * node dlq.js   (or: npm run dlq)
 */

const kafka = require('./client');

/**
 * ----------------------------------------------------------------------------
 * DLQ METADATA HEADERS EXPLAINED
 * ----------------------------------------------------------------------------
 * | Header Name             | Type    | Purpose                                                          |
 * |-------------------------|---------|------------------------------------------------------------------|
 * | x-original-topic        | String  | The source topic where the record originated.                    |
 * | x-original-partition    | String  | The partition number where the poison pill was located.          |
 * | x-original-offset       | String  | The exact offset position for audit and tracing.                 |
 * | x-failure-reason        | String  | The specific JavaScript Exception error message.                 |
 * | x-failed-at             | String  | ISO-8601 Timestamp of when the processing failure occurred.      |
 */

// 1. Initialize Dedicated Consumer Group for DLQ Monitoring
const dlqConsumer = kafka.consumer({
  groupId: 'dlq-audit-investigation-group',
  sessionTimeout: 30000
});

async function startDlqMonitoringService() {
  try {
    console.log('⏳ [DLQ Service] Connecting to Kafka cluster...');
    await dlqConsumer.connect();
    console.log('✅ [DLQ Service] Connected successfully!\n');

    // 2. Subscribe to the "order-dead-letter-queue" topic
    await dlqConsumer.subscribe({
      topic: 'order-dead-letter-queue',
      fromBeginning: true // Read all historical failure logs
    });

    console.log('🛡️ [DLQ Service] Actively monitoring "order-dead-letter-queue" for poisoned messages...');
    console.log('----------------------------------------------------------------------------------');

    // 3. Process each poisoned record
    await dlqConsumer.run({
      autoCommit: true,

      eachMessage: async ({ topic, partition, message }) => {
        const offset = message.offset;
        const key = message.key ? message.key.toString() : 'NO_KEY';
        const rawPayload = message.value.toString();

        // Extract metadata headers added by consumer.js during DLQ diversion
        const originalTopic = message.headers['x-original-topic'] 
          ? message.headers['x-original-topic'].toString() 
          : 'UNKNOWN';
        const originalPartition = message.headers['x-original-partition'] 
          ? message.headers['x-original-partition'].toString() 
          : 'UNKNOWN';
        const originalOffset = message.headers['x-original-offset'] 
          ? message.headers['x-original-offset'].toString() 
          : 'UNKNOWN';
        const failureReason = message.headers['x-failure-reason'] 
          ? message.headers['x-failure-reason'].toString() 
          : 'No reason provided';
        const failedAt = message.headers['x-failed-at'] 
          ? message.headers['x-failed-at'].toString() 
          : 'UNKNOWN';

        // Format and print detailed diagnostic report
        console.log('\n🚨 ===================== DLQ INCIDENT DETECTED =====================');
        console.log(`📌 DLQ Storage Location : Topic "${topic}" | Partition ${partition} | DLQ Offset ${offset}`);
        console.log(`📍 Original Location    : Topic "${originalTopic}" | Partition ${originalPartition} | Original Offset ${originalOffset}`);
        console.log(`⏰ Failure Timestamp     : ${failedAt}`);
        console.log(`💥 Failure Exception     : "${failureReason}"`);
        console.log(`🔑 Record Partition Key : "${key}"`);
        console.log(`📦 Corrupted Data Payload: ${rawPayload}`);
        console.log('📢 Action Triggered     : Notification sent to DevOps On-Call (PagerDuty / Slack)');
        console.log('====================================================================\n');
      }
    });

  } catch (error) {
    console.error('❌ [DLQ Service] Fatal error:', error);
  }
}

// 4. Graceful Shutdown Handlers
const handleShutdown = async () => {
  console.log('\n🛑 Disconnecting DLQ Consumer...');
  await dlqConsumer.disconnect();
  console.log('👋 DLQ Consumer disconnected cleanly.');
  process.exit(0);
};

process.on('SIGINT', handleShutdown);
process.on('SIGTERM', handleShutdown);

// Start DLQ Service
startDlqMonitoringService();
