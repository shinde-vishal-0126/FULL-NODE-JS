/*
@ kafka



--- - - - - - - - - - - - - - - -  - - -

Q. what is kafka ?
    - Kafka is open source, distibuted event streaming platform
    - used to handle real time data feed with high throughput and low latency.
    - Apache Kafka is a distributed event-streaming platform used to:
        1. Produce and consume messages/events
        2. Build asynchronous communication between services
        3. Process real-time data streams
        4. Decouple microservices
        5. Handle high-throughput data
        6. Build event-driven architectures
    - ex
        - Order Service
                 |
                 | Order Created Event
                 ↓
                Kafka
                /    \
                ↓     ↓
             Payment  Notification
            Service   Service

    - Instead of Order Service directly calling Payment and Notification services, it publishes an event to Kafka.
    - This gives us loose coupling between services.



==============================================================================================================

Q. Why do we use Kafka ?
    - Kafka is used for
        - high-throughput,
        - scalable,
        - fault-tolerant,
        - asynchronous communication
        - and real-time event streaming between distributed systems.

    - Main adventages.

        | Feature         | Meaning                                      |
        | --------------- | -------------------------------------------- |
        | High throughput | Handles millions of messages                 |
        | Distributed     | Runs across multiple servers                 |
        | Fault tolerant  | Data can be replicated                       |
        | Scalable        | Add brokers/partitions                       |
        | Durable         | Messages can be stored                       |
        | Asynchronous    | Producer doesn't need to wait                |
        | Replayable      | Consumers can read old messages again        |
        | Decoupling      | Services don't directly depend on each other |



==============================================================================================================

Q. Kafka Architecture ?

              Kafka Cluster
        ┌──────────────────────┐
        │                      │
Producer → Broker 1            │
        │ Broker 2             │
        │ Broker 3             │
        │                      │
        └──────────────────────┘
                  ↓
              Consumer

    - The important kafka concept are
        1. producer
        2. consumer
        3. broker
        4. topic
        5. Partition
        6. Offset
        7. Consumer group
        8. Replication
        9. Leader / follower
        10. Kafka cluster.


==============================================================================================================

Q. What is kafka broker  ?
    - Kafka Broker is kafak server.
    - for ex.
    Kafka Cluster
            ↓
        Broker 1
        Broker 2
        Broker 3

    - each broker store kafka partitions
    - ex
    - Topic : Orders
        Topic: orders
            ↓
            Partition 0 → Broker 1
            Partition 1 → Broker 2
            Partition 2 → Broker 3

    - so multiple broker togather is called as kafka Cluster.




==============================================================================================================

Q. what is Topic ?
    - A topic is a logical categories where message are stored.
    - ex.
        - order-created
        - payment-created
        - user-registered
        - notification
    - Producer sends messages to a topic:
        Producer
            |
            ↓
        order-created
    - Consumers subscribes to that topic .

==============================================================================================================

Q. what is Partition ?
    - A topic is divided into partitions.
    - ex.
        Topic: orders
                |
                ↓
            Partition 0
            Partition 1
            Partition 2

    - Each partition is an ordered sequence of records.
        Partition 0:
                   |
                   ↓
                Offset
                0 → Order A
                1 → Order B
                2 → Order C
                3 → Order D
    - Why partitions ?
        - Primarily for:
            - Scalability
            - Parallel processing
            - Higher throughput
    - for example
             Topic
                |
                +--- Partition 0 → Consumer 1
                |
                +--- Partition 1 → Consumer 2
                |
                +--- Partition 2 → Consumer 3

==============================================================================================================

Q. What is Offset?
    - An offset is the position of a message inside a partition.
    - ex.
    Partition 0
            |
            ↓
        Offset 0 → Message A
        Offset 1 → Message B
        Offset 2 → Message C
        Offset 3 → Message D
    - Kafka identifies a record using: Topic + Partition + Offset
                                     :  ex orders + Partition = 2 _ Offset = 105

==============================================================================================================

@ NOTE :
Q. Important: Kafka does NOT have global ordering
    - Kafka guarantees ordering within a partition, not across the entire topic.
    - ex Partition 0:
            A → B → C
        Partition 1:
            D → E → F
    - Kafka guarantees: A < B < C
    - But it doesn't guarantee:A < D < B < E


==============================================================================================================

Q. How can you guarantee ordering for a particular user/order ?

    - Use the same key
    - ex
        producer.send({
        topic: "orders",
        messages: [
        {
        key: "order-123",
        value: JSON.stringify(order)
        }
        ]
        });
    - Kafka hashes the key and routes the messages to the same partition.
    - ex
    - order-123
        ↓
        Partition 2
        ↓
        Event 1
        Event 2
        Event 3
    - Their ordering is maintained within that partition.

==============================================================================================================

Q. What is a Kafka Producer?
    - Producer publishes messages to Kafka.
    - Application
            |
            ↓
        Producer
            |
            ↓
        Kafka Topic
    - Example using Node.js and KafkaJS:

        import { Kafka } from "kafkajs";

        const kafka = new Kafka({
        clientId: "order-service",
        brokers: ["localhost:9092"]
        });

        const producer = kafka.producer();

        await producer.connect();

        await producer.send({
        topic: "orders",
        messages: [
            {
            key: "order-123",
            value: JSON.stringify({
                orderId: 123,
                amount: 500
            })
            }
        ]
        });

    await producer.disconnect();


==============================================================================================================

q. What is a Consumer ?
    - Consumer reads messages from Kafka.
    - Kafka
        |
        ↓
        Consumer
        |
        ↓
        Application logic
    - ex.
        const consumer = kafka.consumer({
            groupId: "order-service-group"
        });

        await consumer.connect();

        await consumer.subscribe({
        topic: "orders",
        fromBeginning: false
        });

        await consumer.run({
        eachMessage: async ({ topic, partition, message }) => {
            console.log({
            topic,
            partition,
            offset: message.offset,
            value: message.value.toString()
            });
        }
        });

==============================================================================================================
Q. What is a Consumer Group ?
    - A consumer group is a collection of consumers working together to consume a topic.
    - Topic: orders
            |
        Partition 0 ──→ Consumer A
        Partition 1 ──→ Consumer B
        Partition 2 ──→ Consumer C

    - All three belong to:Group: order-service
    - Each partition is assigned to only one consumer within the same consumer group at a time.

--- - - - - - - - - - - - - - - -  - - -

    # Consumer Group Example
    - suppose
        3 partitions
        3 consumers
    - Then
        P0 → C1
        P1 → C2
        P2 → C3
    -
    BUT
        3 partitions
        5 consumers
    - Then only 3 consumers can actively consume partitions at a time:
        P0 → C1
        P1 → C2
        P2 → C3
        C4 → idle
        C5 → idle
    - Number of active consumers in a consumer group cannot exceed the number of partitions.

---- - - - - - - - - - - - - - - -  - - -

    # Multiple Consumer Groups
    - suppose
        Topic: order-created
    - we have Group
        Group A → Payment Service
        Group B → Notification Service
        Group C → Analytics Service
    - so each group receive the event individually
                  Kafka
                    |
             order-created
             /      |      \
            ↓       ↓       ↓
        Payment  Notification Analytics
         Group      Group       Group


 --- - - - - - - - - - - - - - - -  - - -

Q. Consumer Group vs Consumer
    1.Consumer
        - A single application instance that reads messages.


    2. Consumer Group
        - A logical group of consumers that collectively consume partitions.
        - Consumer Group
                |
            ┌───┼───┐
            C1  C2  C3

==============================================================================================================

Q. What is Replication?
    - Kafka replicates partitions across brokers.
    - Partition 0
            |
        Broker 1 → Leader
        Broker 2 → Follower
        Broker 3 → Follower
    - If Broker 1 fails:
        Broker 2
            ↓
        becomes Leader
    - This provides fault tolerance

--- - - - - - - - - - - - - - - -  - - -
Q.Leader and Follower
    - Every partition has:
        1 Leader
        N Followers
    - ex
    - Partition 0
        Broker 1 → Leader
        Broker 2 → Follower
        Broker 3 → Follower

    - Producers and consumers normally interact with the partition leader.

==============================================================================================================

Q. What happens if Kafka Broker goes down?
    - supose
        Broker 1 → Leader
        Broker 2 → Replica
        Broker 3 → Replica
    - Broker 1 crashes.
    - Kafka can elect another in-sync replica as leader.
    - then
        Broker 2 → New Leader
        Broker 3 → Replica
    - Application can continue working.

==============================================================================================================

Q. What is ISR?
    - ISR means: In-Sync Replicas
    - ex
        Partition 0
            |
        Leader → Broker 1
        ISR:
        Broker 1
        Broker 2
        Broker 3
    - If Broker 3 falls behind significantly
        ISR:
        Broker 1
        Broker 2
    - Broker 3 may be removed from ISR until it catches up.

==============================================================================================================

Q. What is acks?
    - Producer acknowledgment configuration determines when Kafka considers a write successful.
    # acks=0 : Producer doesn't wait for broker acknowledgment.
        Producer → Kafka
                      |
                     no wait
        - Fastest but less reliable.
    # acks=1 : Leader acknowledges the message.
            Producer
                ↓
                Leader
                ↓
                ACK
    - If leader fails before replicas have replicated the message, data loss may be possible depending on configuration/timing.

    # acks = all
        - Leader waits for the required in-sync replicas according to the topic's replication/ack configuration.
        - More reliable but potentially higher latency.
    - acks=all provides the strongest producer acknowledgment semantics among the standard acks settings.


Q. What is Producer Idempotence?
    - Suppose producer sends: Message A, Network problem occurs.so Producer isn't sure whether Kafka received it.
    - It retries.Without idempotence: like a  - a twice (Duplicate message can occur.)
    - With idempotent producer: Kafka can identify duplicate retry attempts from the same producer session and avoid duplicate writes under the supported producer semantics.
    - const producer = kafka.producer({
        idempotent: true
        });
    - You may also see configurations such as: maxInFlightRequests: 1  (in systems that want particularly conservative ordering/retry behavior.)


Q. What is Message Key?
    - Kafka messages can have:
    {
    key: "user-123",
    value: "Hello"
    }
    - The key helps determine partitioning.
    ex.
        user-123 → Partition 2
        user-123 → Partition 2
        user-123 → Partition 2
    - This is useful when events for the same entity must remain ordered.


Q. . What is Rebalancing?
- Supose c1,c2,c3,if c2 is crash ,so kafka reassign partitions
Before:
    P0 → C1
    P1 → C2
    P2 → C3
After:
    P0 → C1
    P1 → C3
    P2 → C3
- This process is called consumer group rebalancing.
- Rebalancing can also happen when consumers join/leave or partition assignments change.


Q. What is Consumer Lag?
    - Consumer lag indicates how far a consumer group is behind the latest available records.
    - Latest offset = 1000
        Consumer offset = 850
        Lag = 150
    - High lag can indicate:
        - Consumer is slow
        - Traffic increased
        - Processing is expensive
        - Consumer errors/retries
        - Insufficient consumers/partitions
        - External dependency is slow
        - Kafka monitoring often tracks consumer lag closely.


Q. How do you handle Kafka consumer failures?
    - A good apprach
        Kafka
        ↓
        Consumer
        ↓
        Process
        ↓
        Success → commit offset
        Failure → retry / error handling
    - Possible strategies:
        - Retry
        - Backoff
        - Dead-letter topic
        - Idempotent processing
        - Manual offset management
        - Monitoring and alerting

Q. What is a Dead Letter Topic?
    - supoose
    orders
    ↓
    Consumer
    ↓
    Processing fails
    - After retries:
    orders-dlt
    - The failed message can be sent there for later investigation/reprocessing.



        */
