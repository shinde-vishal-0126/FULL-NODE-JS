/*
@ REDIS 
    - open source 
    - in memory data structure store 
    - used as a database, cache and message broker and queue
    - unlike traditional databases that primarily store data on disk , redis stores data in RAM (memory) making it extremely fast .
    ! Def 
        !- Redis is a super-fast in-memory database used to store data temporarily so applications can access it quickly.
        - Think of Redis as a high-speed notebook that your application can read and write almost instantly.



@ Why Redis is Needed ?
    - Imagine an e-commerce website. When a user opens the home page:
    - Application requests products.Database searches millions of records.
    - Database sends data back.
    - If 10,000 users visit simultaneously, the database becomes slow because it must execute the same query repeatedl.
    - insted 
        User
        │
        ▼
        Application
        │
        ▼
        Redis (Cache)
        │
        ├── Data Found ✔
        │       │
        │       ▼
        │   Return immediately
        │
        └── Data Not Found ❌
                    │
                    ▼
            MySQL Database
                    │
                    ▼
            Save into Redis
                    │
                    ▼
            Return to User
    - The next request gets the data from Redis instead of querying the database.
    ! - result 
        1. Faster application 
        2. Lower database Load 
        3. Better user experience
        4. Cost effective (less expensive than scaling database servers)


# Key Features
   - In-memory storage
   - Extremely Fast
   - Key-Value Store
   - Supports Multiple Data Types
   - Supports Expiration (TTL)
   - Supports Pub/Sub Messaging
   - Supports Persistence
   - High Availability
   - Replication
   - Clustering

@ Why Redis is Fast ?
    - Redis is fast because it stores data in memory (RAM) rather than on disk.
    - Accessing data from RAM is significantly faster than accessing it from disk, 
    - which allows Redis to provide rapid read and write operations. 
    - Additionally, Redis uses efficient data structures and algorithms that optimize performance for various use cases, such as caching, session management, and real-time analytics.
    - Redis can handle hundreds of thousands to millions of operations per second, depending on hardware and workload.

   - Additional Reasons
   1. In-memory Storage ===> Everything is already loaded into RAM.
   2. Simple Data Structures
      - Redis stores:Strings, Lists,Hashes,Sets 
   3. Single Threaded Event Loop

instead of complex table joins.
@ What are the Use Cases of Redis ?
# 1. Caching (Most Popular) :
    - Store Frequently Accessed Data in Memory
    - Redis is commonly used as a caching layer to store frequently accessed data in memory,
    - reducing the need to query slower databases. This improves application performance and reduces latency.
    - ex : Product list, user Profile , Blog Postas, Search result 

# 2. Session Management :
    - When users log in: Store User Session Data
    - Redis is often used to manage user sessions in web applications.
    - It can store session data, such as authentication tokens and user preferences, allowing for quick retrieval and validation of user sessions.

# 3. Rate Limiting :
    - Used by APIs to prevent abuse.
    - ex. Allow only 5 login attempts per minute.
    - Control the Number of Requests to an API
    - Redis can be used to implement rate limiting for APIs, preventing abuse and ensuring fair usage.
    - By storing request counts and timestamps in Redis, applications can enforce limits on how many requests a user or client can make within a specified time frame.

# 4. Queue :
    - Store background jobs.
    - Redis can be used as a message broker or queue to facilitate communication between different parts of an application.
    - It supports publish/subscribe messaging patterns and can be used to manage background jobs, task queues, and real-time messaging.
    - ex. Background Job Processing, Real-time Messaging, Task Queues
    - Redis provides data structures like lists and streams that are well-suited for implementing queues, allowing applications to enqueue and dequeue tasks efficiently.
    
# 5. Messaging :
    - Redis can be used for real-time messaging and communication between different components of an application.
    - It supports publish/subscribe messaging patterns, allowing applications to send messages to multiple subscribers in real time.
    - ex. Chat
    - Redis can be used to implement chat applications, where messages are published to channels and subscribers receive them in real time.

# 6. Leaderboards and Counting :
    - Redis can be used to implement leaderboards and counting systems for applications that require real-time ranking or scoring.
    - It provides data structures like sorted sets that allow for efficient ranking and retrieval of top scores or counts.
    - ex. Gaming Leaderboards, Real-time Analytics, Voting
    - Redis can be used to track and count events, such as page views, likes, or votes, in real time, enabling applications to provide up-to-date statistics and analytics.

# 5. Real-Time Analytics :
    - Redis can be used to perform real-time analytics on streaming data.
    - It can store and process large volumes of data in memory, allowing applications to analyze and visualize data in real time.
    - ex. Monitoring, Fraud Detection, IoT Data Processing

# 6. Real-time Chat :
    - Redis can be used to implement real-time chat applications, where messages are sent and received instantly between users.
    - Messages are temporarily stored and distributed quickly, making Redis useful for chat applications.
    - ex. Chat Rooms, Direct Messaging, Notifications


@ What are The Advantages of Redis ?
    1.  High Performance: Redis is designed for speed, providing low-latency access to data stored in memory.
    2.  Versatile Data Structures: Redis supports various data structures, including strings, hashes, lists, sets, and sorted sets, allowing developers to choose the most suitable structure for their use case.
    3.  Persistence Options: Redis offers different persistence options, such as snapshotting and append-only files, allowing data to be saved to disk for durability.
    4.  Scalability: Redis can be scaled horizontally by partitioning data across multiple instances (sharding) or using Redis Cluster for distributed deployments.
    5.  Pub/Sub Messaging: Redis supports publish/subscribe messaging patterns, enabling real-time communication between different components of an application.
    6.  Community and Ecosystem: Redis has a large and active community, providing extensive documentation, libraries, and tools for various programming languages.



@ What are The Disadvantages of Redis ?
    1.  Memory Usage: Since Redis stores data in memory, it can consume a significant amount of RAM, especially for large datasets. This can lead to higher infrastructure costs.
    2.  Data Loss Risk: While Redis provides persistence options, there is still a risk of data loss in certain scenarios, such as power failures or crashes, if not properly configured.
    3.  Limited Querying Capabilities: Redis is primarily a key-value store and does not provide advanced querying capabilities like traditional relational databases. Complex queries may require additional application logic.


# conclusion
    - Redis is a powerful in-memory data structure store that offers high performance, versatility, and scalability for various use cases.
    - It is widely used for caching, session management, real-time analytics, messaging, and more.
    - However, it is important to consider its memory usage, data loss risk, and limited querying capabilities when deciding to use Redis in an application.


@ REDIS BASIC COMMANDS

1. open redis-cli
   - redis-cli is the command-line interface for interacting with a Redis server.
   - उपयोग (Marathi): Redis सर्व्हरशी कनेक्ट होण्यासाठी आणि Redis commands चालवण्यासाठी वापरले जाते.

2. ping
   - The PING command is used to check the connectivity and responsiveness of the Redis server.
   - उपयोग (Marathi): Redis Server चालू आहे का आणि Connection योग्य आहे का हे तपासण्यासाठी वापरले जाते.

3. pong
   - When you send a PING command to the Redis server, it responds with PONG, indicating that the server is alive and reachable.
   - उपयोग (Marathi): PING command ला Redis Server कडून मिळणारा यशस्वी प्रतिसाद म्हणजे PONG.

4. set key value
   - The SET command is used to store a key-value pair in Redis. It sets the value of a specified key.
   - उपयोग (Marathi): Redis मध्ये नवीन Key-Value Pair साठवण्यासाठी किंवा आधीच्या Key ची Value बदलण्यासाठी वापरले जाते.

5. get key
   - The GET command is used to retrieve the value associated with a specified key in Redis.
   - उपयोग (Marathi): एखाद्या Key ची Value मिळवण्यासाठी वापरले जाते.

6. del key
   - The DEL command is used to delete a key and its associated value from Redis.
   - उपयोग (Marathi): Redis मधून एखादा Key आणि त्याची Value Delete करण्यासाठी वापरले जाते.

7. exists key
   - The EXISTS command is used to check if a specified key exists in Redis. It returns 1 if the key exists and 0 if it does not.
   - उपयोग (Marathi): दिलेला Key Redis मध्ये आहे की नाही हे तपासण्यासाठी वापरले जाते.

8. keys pattern

    1. keys *
       - The KEYS command is used to retrieve all keys that match a specified pattern in Redis.
       - उपयोग (Marathi): Redis मधील सर्व Keys पाहण्यासाठी वापरले जाते.

    2. keys user
       - The KEYS command can also be used to retrieve keys that match a specific pattern, such as "user" in this case.
       - ex. keys school will return all keys that contain the word "school" in their name.
       - उपयोग (Marathi): user किंवा school नावाचा Key शोधण्यासाठी वापरले जाते.

    3. keys user*
       - The KEYS command can also be used with a wildcard pattern, such as "user*", to retrieve all keys that start with the word "user".
       - ex. keys school* will return all keys that start with the word "school".
       - उपयोग (Marathi): user किंवा school ने सुरू होणारे सर्व Keys शोधण्यासाठी वापरले जाते.

    4. keys *user*
       - The KEYS command can also be used with a wildcard pattern, such as "*user*", to retrieve all keys that contain the word "user" anywhere in their name.
       - ex. keys *school* will return all keys that contain the word "school" anywhere in their name.
       - उपयोग (Marathi): नावामध्ये कुठेही user किंवा school असलेले सर्व Keys शोधण्यासाठी वापरले जाते.

    5. keys user?
       - The KEYS command can also be used with a wildcard pattern, such as "user?", where ? represents a single character.
       - ex. keys school? will return all keys that match the pattern "school" followed by any single character.
       - ex. keys school?? will return all keys that match the pattern "school" followed by any two characters.
       - उपयोग (Marathi): user किंवा school नंतर एक किंवा अधिक निश्चित अक्षरे असलेले Keys शोधण्यासाठी वापरले जाते.

    6. keys user[1-5]
       - The KEYS command can also be used with a character range pattern, such as "user[1-5]".
       - ex. keys school[1-5] will return all keys that match the pattern "school" followed by any single character in the range 1 to 5.
       - उपयोग (Marathi): user किंवा school नंतर 1 ते 5 मधील कोणताही एक अंक असलेले Keys शोधण्यासाठी वापरले जाते.

    7. keys user[!1-5]
       - The KEYS command can also be used with a negated character range pattern, such as "user[!1-5]".
       - ex. keys school[!1-5] will return all keys that match the pattern "school" followed by any single character that is not in the range 1 to 5.
       - उपयोग (Marathi): user किंवा school नंतर 1 ते 5 वगळता इतर कोणतेही अक्षर किंवा अंक असलेले Keys शोधण्यासाठी वापरले जाते.

   9. flushall
      - The FLUSHALL command is used to remove all keys and their associated values from the Redis database.
      - उपयोग (Marathi): Redis मधील सर्व Databases मधील सर्व Data Delete करण्यासाठी वापरले जाते.

   10. info
      - The INFO command is used to retrieve information and statistics about the Redis server.
      - उपयोग (Marathi): Redis Server ची माहिती, Memory Usage, Clients, CPU आणि इतर Statistics पाहण्यासाठी वापरले जाते.

   11. monitor
      - The MONITOR command is used to monitor all commands received by the Redis server in real time.
      - उपयोग (Marathi): Redis Server वर कोणत्या Commands चालू आहेत हे Live पाहण्यासाठी वापरले जाते.

   12. quit
      - The QUIT command is used to close the connection to the Redis server and exit the Redis CLI.
      - उपयोग (Marathi): Redis CLI मधून बाहेर पडण्यासाठी वापरले जाते.

   13. exit
      - The EXIT command is used to close the connection to the Redis server and exit the Redis CLI.
      - उपयोग (Marathi): Redis CLI बंद करण्यासाठी वापरले जाते.

   14. shutdown
      - The SHUTDOWN command is used to gracefully stop the Redis server. It saves the dataset to disk and then terminates the server process.
      - उपयोग (Marathi): Redis Server सुरक्षितपणे बंद करण्यासाठी वापरले जाते.

   15. save
      - The SAVE command is used to manually trigger a synchronous save of the dataset to disk.
      - उपयोग (Marathi): Redis मधील Data लगेच Disk वर Save करण्यासाठी वापरले जाते.

   16. bgsave
      - The BGSAVE command is used to trigger an asynchronous save of the dataset to disk.
      - उपयोग (Marathi): Redis चालू ठेवून Background मध्ये Data Disk वर Save करण्यासाठी वापरले जाते.

   17. lastsave
      - The LASTSAVE command is used to retrieve the timestamp of the last successful save operation performed by the Redis server.
      - उपयोग (Marathi): शेवटचा Data कधी Save झाला होता हे पाहण्यासाठी वापरले जाते.

   18. config get *
      - The CONFIG GET command is used to retrieve the current configuration settings of the Redis server.
      - उपयोग (Marathi): Redis चे सर्व Configuration Settings पाहण्यासाठी वापरले जाते.




      @ REDIS VS MYSQL


   | Feature     | Redis                   | MySQL                   |
   | ----------- | ----------------------- | ----------------------- |
   | Storage     | RAM                     | Disk                    |
   | Speed       | Very Fast               | Slower than Redis       |
   | Data Type   | Key-Value               | Tables                  |
   | Best For    | Cache, sessions, queues | Permanent business data |
   | Persistence | Optional                | Yes                     |
   | Queries     | Key-based               | SQL                     |

   - Redis stores temporary or frequently accessed data for speed.
   - MySQL stores permanent business data such as users, orders, and products.


@ What is Caching?
   - Caching means storing frequently accessed data in a fast storage (Redis) so future requests can be served quickly.
   - Instead of asking the database every time, the application first checks Redis.
   # - benifits 
      - Faster response
      - Lower database load
      - Better scalability
      - Reduced latency
      - Improved user experience


@ Explain Cache Hit and Cache Miss
   # - Cache Hit: When the requested data is found in the cache (Redis), it is called a cache hit. The application retrieves the data from Redis, resulting in faster response times.
   # - Cache Miss: When the requested data is not found in the cache (Redis), it is called a cache miss. The application retrieves the data from the database and stores it in Redis for future requests.



@ What is TTL (Time To Live) in Redis? 
   - TTL specifies how long a key should remain in Redis before it is automatically deleted.
   */
