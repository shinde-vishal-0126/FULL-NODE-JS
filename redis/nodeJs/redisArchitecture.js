/*
@ REDIS ARCHITECTURE

- Redis is an open-source, in-memory data structure store that can be used as a database, cache, and message broker.
- Redis follows a client-server architecture, 
- where the Redis server handles data storage and retrieval, while clients interact with the server to perform operations.
- The Redis server is single-threaded 
- and uses an event-driven model to handle multiple client connections concurrently.
- Redis supports various data structures, including strings, lists, sets, hashes, and sorted sets, allowing developers to choose the most suitable structure for their use case.
- Redis provides persistence options, such as snapshotting and append-only files (AOF), to ensure data durability in case of server restarts or failures.

                  +-----------------------+
                  |      Client 1         |
                  +-----------+-----------+
                              |
                  +-----------v-----------+
                  |      Client 2         |
                  +-----------+-----------+
                              |
                 TCP Connection (6379)
                              |
             ---------------------------------
                              |
                     +--------v---------+
                     |   Redis Server   |
                     |                  |
                     | Command Parser   |
                     | Event Loop       |
                     | In-Memory DB     |
                     | Persistence      |
                     +--------+---------+
                              |
             ----------------------------------
             |                                |
       Save Snapshot (RDB)             Append Only File (AOF)
             |                                |
        Hard Disk                       Hard Disk          

# Main Components of Redis Architecture

1. Client : 
    - The client is any application that connects to Redis.
    - node js application 

! What is the Role of the Redis Server?
2. Redis Server :
    - Redis Server is the main process (program) that runs Redis. It listens for client requests, stores data in memory (RAM), executes Redis commands, and sends responses back to clients.
    - The Redis Server is the heart of Redis.
        1. Accepts client connections
        2. Processes commands
        3. Stores data
        4. Returns responses
    - The Redis server is the core component that handles data storage, retrieval, and processing.
    - It listens for incoming client connections, processes commands, and manages the in-memory data structures.
    - Default port for Redis server is 6379, but it can be configured to use a different port if needed.
    - start redis server : redis-server
    - stop redis server : redis-cli shutdown
    - Redis server can be configured using a configuration file (redis.conf) or command-line options.

@ Redis Server vs Redis Client
| Redis Server                    | Redis Client                  |
| ------------------------------- | ----------------------------- |
| Stores data                     | Sends commands                |
| Executes commands               | Receives responses            |
| Runs continuously               | Used by applications or users |
| Listens on port 6379 by default | Connects to the server        |


3. in-Memory Database :
    - This is Redis's biggest feature. Instead of storing data directly on disk:
    - Redis stores all data in memory, allowing for extremely fast read and write operations.
    - The in-memory database is the primary storage mechanism in Redis, enabling low-latency access to data.
    - It uses efficient data structures and algorithms to optimize performance for various use cases, such as caching, session management, and real-time analytics.

4. Event Loop :
    - Redis uses an event loop to process incoming requests efficiently.
    - Instead of creating a new thread for every request, Redis listens for requests, processes one operation at a time very quickly, and then moves to the next.
    - Redis uses a single-threaded event loop to handle multiple client connections concurrently.
    - The event loop listens for incoming requests, processes them, and sends responses back to clients.
    - This design allows Redis to efficiently manage thousands of concurrent connections without the overhead of multi-threading.
    - Since Redis operations are very fast (usually O(1) for many commands), it can handle a huge number of requests per second.

5. Single-Threaded Command Execution
    - Redis processes commands in a single-threaded manner, which simplifies the architecture and avoids the complexities of multi-threading.
    - This design choice allows Redis to achieve high performance and low latency for most use cases.
    - Redis processes commands in a single-threaded manner, which simplifies the architecture and avoids the complexities of multi-threading.
    - This design choice allows Redis to achieve high performance and low latency for most use cases.

6. Persistence :
    - RAM is volatile, so Redis provides persistence options to save data to disk.
    - Redis provides persistence options to ensure data durability in case of server restarts or failures.
    - Redis supports two main persistence mechanisms:
        1. Snapshotting (RDB) RDB (Redis Database Backup) : 
            - Periodically saves the dataset to disk. 
            - Creates a snapshot of the database at intervals.
        2. Append-Only File (AOF) :
            -  Logs every write operation received by the server, 
            - allowing for more fine-grained recovery of data.
            - Instead of snapshots: Redis writes every modifying command into a file.
7. Replication :
    - Replication creates copies of your Redis data on other servers.
    - Redis supports master-slave replication, allowing data to be replicated across multiple Redis instances for high availability and scalability.
    - The master handles writes, and replicas receive updates from the master. Replicas are often used to improve read scalability and provide redundancy

8. High Availability :
    - Redis Sentinel is a system designed to help manage Redis instances, providing high availability and monitoring capabilities.
    - If the master server fails:   A replica can be promoted to become the new master (commonly managed by systems such as Redis Sentinel).

9. Redis Cluster :
    - When one Redis server is not enough:Redis Cluster distributes data across multiple nodes.
    - Redis Cluster is a distributed implementation of Redis that allows data to be automatically partitioned across multiple nodes.
    - It provides horizontal scalability and fault tolerance by distributing data and requests across multiple Redis instances.
    - Benefits of Redis Cluster:
        1. Horizontal scaling - 
        2. High availability
        3. Automatic data distribution


# compleate redis flow 
                Client
                   │
            GET product:101
                   │
                   ▼
            Redis Server
                   │
          Search in Memory
           ┌─────────────┐
           │             │
         Found         Not Found
           │             │
           ▼             ▼
       Return Data   Database
                         │
                         ▼
                   Get Product
                         │
                         ▼
                 Store in Redis
                         │
                         ▼
                    Return Data


# REDIS ARCHITECTURE SUMMARY
    - Redis is an in-memory data structure store that follows a client-server architecture. 
    - The Redis server handles data storage, retrieval, and processing, while clients interact with the server to perform operations.
    - Redis uses an event-driven model and a single-threaded event loop to efficiently handle multiple client connections concurrently.
    - The in-memory database allows for fast read and write operations, while persistence options ensure data durability.
    - Replication, high availability, and Redis Cluster provide scalability and fault tolerance for Redis deployments.
    - Redis's architecture is designed to deliver high performance, low latency, and flexibility for a wide range of use cases, making it a popular choice for caching, session management, real-time analytics, and more.


    | Component                 | Purpose                                           |
    | ------------------------- | ------------------------------------------------- |
    | Client                    | Sends Redis commands                              |
    | Redis Server              | Processes commands and manages data               |
    | RAM                       | Stores data for very fast access                  |
    | Event Loop                | Efficiently handles incoming requests             |
    | Single-threaded execution | Executes data commands sequentially without locks |
    | RDB                       | Periodic snapshots for backups                    |
    | AOF                       | Logs write commands for better durability         |
    | Replication               | Copies data to replica servers                    |
    | Cluster                   | Distributes data across multiple nodes            |
    | Persistence               | Saves in-memory data to disk                      |

    

@ Redis Internal Memory
    - store data in key-vlaue pairs in memory, allowing for fast access and retrieval.
    - redis request life cucle 
    Client
    ↓
    TCP Connection
    ↓
    Redis Server
    ↓
    Parse Command
    ↓
    Search Memory
    ↓
    Execute
    ↓
    Return Result



@ Difference Between RDB and AOF

| Feature        | RDB                   | AOF                 |
| -------------- | --------------------- | ------------------- |
| Full Form      | Redis Database Backup | Append Only File    |
| Stores         | Snapshot              | Every write command |
| Speed          | Faster                | Slightly slower     |
| File Size      | Small                 | Larger              |
| Recovery       | Faster                | Slower              |
| Data Loss      | More possible         | Very little         |
| Human Readable | No                    | Yes                 |



@ What is Replication in Redis?

- Replication creates copies of data.

             Master
          +-----------+
          | Redis     |
          +-----+-----+
                |
      ------------------------
      |                      |
+-----v------+        +------v------+
| Replica 1  |        | Replica 2   |
+------------+        +-------------+

- workflow 
    - Client writes to the primary (master).
    - Primary updates its memory.
    - Primary sends changes to replicas.
    - Replicas apply the same updates.

- Benefits:
    - Read scaling
    - Backup copies
    - Disaster recovery
    - Failover support


@ What is a Redis Cluster?
    - Redis Cluster is a distributed implementation of Redis that allows data to be automatically partitioned across multiple nodes.
    - It provides horizontal scalability and fault tolerance by distributing data and requests across multiple Redis instances.
    - Redis Cluster uses a concept called "hash slots" to determine which node is responsible for storing a particular key.
    - Each key is assigned to one of 16,384 hash slots, and each node in the cluster is responsible for a subset of these slots.
    - When a client sends a command to the cluster, it can be directed to the appropriate node based on the hash slot of the key being accessed.
    A Redis Cluster distributes data across multiple Redis nodes using hash slots. , Redis Cluster has 16,384 hash slots.

    # Benefits:
    - Horizontal scaling
    - Higher throughput
    - Automatic partitioning (sharding)
    - Fault tolerance with replicas


@ How Does Redis Achieve High Availability?
    - High availability means the system continues serving requests even if a server fails.
    - Redis achieves high availability through replication, failover mechanisms, and monitoring tools like Redis Sentinel.
    - Replication allows data to be copied to multiple Redis instances, ensuring that if the primary server fails, a replica can take over as the new primary.
    - Failover mechanisms automatically detect failures and initiate the process of promoting a replica to the primary role.
    - Redis commonly uses:
        - Replication (primary + replicas)
        - Automatic failover (often managed by Redis Sentinel or by a Redis Cluster)


@ What Happens When a Redis Server Crashes if Persistence is Enabled? 
    - The behavior depends on the persistence mode
    1. Case 1: RDB Enabled
        - Redis will load the last snapshot from disk into memory upon restart.
        - Any changes made after the last snapshot will be lost.
    2. Case 2: AOF Enabled
        - Redis will replay the AOF log to reconstruct the dataset in memory.
        - This allows for more fine-grained recovery of data, minimizing data loss.
    3. Case 3: Both RDB and AOF Enabled
        - Redis will first load the last snapshot (RDB) and then replay the AOF log to recover any changes made after the snapshot.
        - This provides a balance between fast recovery and minimizing data loss.

- By default, Redis prefers the AOF file during recovery if it is available and valid because it usually contains the most recent state.



@ Can We Create a Database in Redis?    
    - Yes, but Redis databases are different from MySQL databases.  
    - Redis does not have tables.
    - It stores data as Key → Value pairs.
    - A Redis server contains a number of logical databases, identified by numbers
    - Database 0
        Database 1
        Database 2
        ...
        Database 15
    - The default configuration provides 16 logical databases (0–15), although this number can be changed in the Redis configuration.
    - Each logical database is isolated from the others, meaning that keys in one database do not interfere with keys in another.
    - select database 0 : select 0


@ How to Delete Current Database
    - To delete all keys in the currently selected database, you can use the FLUSHDB command.


@ How to Delete All Databases
    - To delete all keys in all databases, you can use the FLUSHALL command.


@ WHAT IS REDIS INSIGHT, REDIS CLI & REDIS SDK CLIENT

    - These are three different ways to interact with Redis.
    - Think of Redis as a person you want to communicate with. You can talk to it in different ways:
    1. Redis CLI → Using the terminal (command line)
    2. Redis Insight → Using a graphical interface (GUI)
    3. Redis SDK Client → Through your application code (Node.js, Java, Python, etc.)
                      Your Redis Server
                         │
      ┌──────────────────┼──────────────────┐
      │                  │                  │
      ▼                  ▼                  ▼
 Redis CLI         Redis Insight      Redis SDK Client
 (Terminal)           (GUI)           (Application Code)


 1. Redis CLI is a terminal-based tool used to communicate with a Redis server by typing commands. 
    - redis-cli
    # Advantages
        - Fast
        - Lightweight
        - Great for debugging
        - Commonly used by developers
# Best For
    - Learning Redis
    - Testing commands
    - Debugging
    - Server administration

2. Redis Insight 
    - is a graphical user interface (GUI) tool that provides a visual representation of your Redis data and allows you to manage and monitor your Redis server more easily.
    - Advantages

        - User-friendly
        - Visual representation of data
        - Easy to monitor and manage Redis instances
        - Provides insights into performance and usage

    - best For
        - Visualizing data
        - Monitoring performance
        - Managing Redis instances
        - Analyzing usage patterns

    3. Redis SDK Client
    - is a library or package that allows developers to interact with Redis from within their application code, using programming languages like Node.js, Python, Java, etc.
    - Advantages
        - Integrates Redis into your application
        - Provides programmatic access to Redis commands
        - Supports various programming languages
        
    */
