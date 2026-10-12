/**
 * ============================================================================
 * FILE: admin.js - Programmatic Topic & Cluster Administrator
 * ============================================================================
 * 
 * 📌 WHAT IS THIS FILE? (या फाईलचे काम काय?):
 * The Kafka Admin Client gives developers and DevOps full programmatic control
 * over cluster topology without using bash scripts. It creates topics, sets
 * partition counts, specifies replication factors, and inspects cluster metadata.
 * 
 * 💡 INTERVIEW QUESTION / मुलाखतीतील प्रश्न:
 * Q: Can we change partition count after a topic is created?
 * A: YES, partitions can ONLY be INCREASED (e.g., from 3 to 6). Partitions can
 *    NEVER be decreased, because doing so would destroy historical message logs!
 * 
 * 🚀 HOW TO EXECUTE / कसे चालवायचे:
 * node admin.js   (or: npm run admin)
 */

const kafka = require('./client');

/**
 * ----------------------------------------------------------------------------
 * ALL AVAILABLE ADMIN CONFIGURATION VALUES & METHODS
 * ----------------------------------------------------------------------------
 * | Method / Property         | Parameters                                  | Purpose / Use Case                                         |
 * |---------------------------|---------------------------------------------|------------------------------------------------------------|
 * | admin.connect()           | None                                        | Opens connection to cluster controller.                    |
 * | admin.createTopics()      | { topics, waitForLeaders, timeout }         | Creates new topics with partitions & configs.              |
 * | admin.listTopics()        | None                                        | Returns array of all active topic names.                  |
 * | admin.fetchTopicMetadata()| { topics: ['topic-name'] }                  | Returns partitions, leaders, replicas, and ISR list.       |
 * | admin.createPartitions()  | { topicPartitions: [{ topic, count }] }     | Dynamically increases partition count for high scale.      |
 * | admin.disconnect()        | None                                        | Gracefully closes admin connection.                        |
 */

async function setupKafkaCluster() {
  // 1. Instantiate the Admin Client
  const admin = kafka.admin({
    retry: { retries: 5 }
  });

  try {
    console.log('⏳ [Step 1] Connecting Kafka Admin Client to cluster...');
    await admin.connect();
    console.log('✅ [Step 1] Admin Client connected successfully!\n');

    // 2. Define Topics with Partitions, Replication Factor, and Retention Configurations
    console.log('🛠️ [Step 2] Creating required topics programmatically...');
    const created = await admin.createTopics({
      validateOnly: false,    // false = execute immediately; true = dry-run validation
      waitForLeaders: true,   // true = wait until leader partitions are fully elected across brokers
      timeout: 10000,         // 10 seconds timeout
      topics: [
        {
          topic: 'order-events',
          numPartitions: 3,         // 3 Partitions enable up to 3 parallel consumers in a group!
          replicationFactor: 1,     // In production multi-broker cluster: Set to 3
          configEntries: [
            // cleanup.policy: 'delete' (time/size retention) or 'compact' (keep latest key)
            { name: 'cleanup.policy', value: 'delete' },
            // retention.ms: 7 days retention (604,800,000 ms)
            { name: 'retention.ms', value: '604800000' },
            // min.insync.replicas: Minimum ISR needed to acknowledge writes when acks=all
            { name: 'min.insync.replicas', value: '1' }
          ]
        },
        {
          // Dedicated Dead Letter Queue topic for corrupted / unprocessable records
          topic: 'order-dead-letter-queue',
          numPartitions: 1,
          replicationFactor: 1,
          configEntries: [
            // Keep DLQ messages for 14 days (1,209,600,000 ms) for deep debugging
            { name: 'retention.ms', value: '1209600000' }
          ]
        }
      ]
    });

    if (created) {
      console.log('🎉 [Step 2] Successfully created topics: ["order-events", "order-dead-letter-queue"]');
    } else {
      console.log('ℹ️ [Step 2] Topics already exist in cluster. Skipping creation.');
    }

    // 3. Verify Active Topics in Cluster
    console.log('\n📋 [Step 3] Fetching list of all topics in cluster...');
    const allTopics = await admin.listTopics();
    const userTopics = allTopics.filter(name => !name.startsWith('__'));
    console.log('   Active User Topics:', userTopics);

    // 4. Fetch Deep Topic Metadata (Partitions, Leader, Replicas, ISR)
    console.log('\n🔍 [Step 4] Inspecting partition metadata for "order-events"...');
    const metadata = await admin.fetchTopicMetadata({ topics: ['order-events'] });
    const orderTopic = metadata.topics[0];

    orderTopic.partitions.forEach(partition => {
      console.log(`   👉 Partition ${partition.partitionId} | Leader Broker: ${partition.leader} | Replicas: [${partition.replicas}] | In-Sync Replicas (ISR): [${partition.isr}]`);
    });

    console.log('\n✅ [Summary] Topic infrastructure is production-ready!');

  } catch (error) {
    console.error('❌ Error during Admin cluster setup:', error);
  } finally {
    // 5. Always disconnect the Admin Client
    console.log('\n🔌 [Step 5] Disconnecting Admin Client...');
    await admin.disconnect();
    console.log('👋 Admin client disconnected cleanly.');
  }
}

// Run the script
setupKafkaCluster();
