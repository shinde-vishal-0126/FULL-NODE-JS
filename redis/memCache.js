
/*
@ MemCache
-   MemCache is a high-performance, distributed memory caching system 
- that is used to speed up dynamic web applications by reducing the database load.
- (often called Memcache, though the software is officially named Memcached) is a high-performance, distributed, in-memory caching system. 
- It stores data in memory (RAM) for quick access, 
- allowing frequently accessed data to be retrieved faster than from a traditional database.
- Memcached is an in-memory cache that stores temporary data in RAM to make applications faster.
- Think of it as a temporary storage box for data your application needs often.


@ Why Do We Need Memcached?
    - Suppose your application has to fetch product information from a database.
    - Every user request goes to the database.
    - If 10,000 users request the same product:- 
        - Database receives 10,000 queries
        - Database becomes slower
        - Application response time increases

               User
                 │
                 ▼
          Node.js Server
                 │
                 ▼
           Memcached
          ┌────────────┐
          │            │
      Cache Hit    Cache Miss
          │            │
          ▼            ▼
     Return Data    MySQL Database
                         │
                         ▼
                  Store in Memcached
                         │
                         ▼
                    Return Data

- The first request gets data from MySQL and stores it in Memcached.
- 

@ Why Is Memcached Fast? 
- Because it stores data in RAM, not on disk.
- It uses a simple key-value store, which allows for quick retrieval of data.

@ How Memcached Stores Data?
 - Memcached stores only Key → Value pairs.
 - It does not support complex data structures like lists or sets.
 - It is designed to be simple and fast, focusing on caching frequently accessed data.'
 

@ Data Expiration (TTL)
    - Memcached allows you to set an expiration time (Time-To-Live or TTL) for each cached item.
    - After the TTL expires, the cached item is automatically removed from the cache.
    - This helps to ensure that stale data is not served to users.

# Advantages
    - Extremely fast
    - Reduces database load
    - Simple key-value storage
    - Easy to scale across multiple servers
    - Improves application performance
# Limitations
    - Stores data only in memory
    - Data is lost if the server restarts
    - Supports only simple key-value storage
    - Does not support advanced data structures like lists, sets, or hashes


# Memcached vs Redis
| Feature     | Memcached                         | Redis                                                    |
| ----------- | --------------------------------- | -------------------------------------------------------- |
| Storage     | RAM                               | RAM                                                      |
| Data Type   | String key-value                  | Strings, Lists, Sets, Hashes, Sorted Sets, Streams, etc. |
| Persistence | ❌ No                             | ✅ Optional (RDB/AOF)                                   |
| Replication | Basic client-managed distribution  | Built-in replication                                    |
| Pub/Sub     | ❌ No                              | ✅ Yes                                                 |
| Queues      | ❌ No                              | ✅ Yes                                                 |
| Cache       | ✅ Excellent                       | ✅ Excellent                                           |
| Sessions    | ✅ Yes                             | ✅ Yes                                                  |




@ When Should You Use Memcached?
- Choose Memcached when:
    - You only need simple caching.
    - Maximum simplicity and speed are your priority.
    - Losing cached data after a restart is acceptable.

- Choose Redis when:
    - You need caching plus advanced features.
    - You need persistence.
    - You need data structures, Pub/Sub, queues, leaderboards, or rate limiting.
    */