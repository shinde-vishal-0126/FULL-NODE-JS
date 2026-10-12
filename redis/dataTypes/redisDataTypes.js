/*
@ REDIS DATA-TYPES 
    - Redis supports a variety of data types,
    - each designed to handle different use cases and data structures efficiently.
    - The primary data types in Redis include:
        1. Strings
        2. Lists
        3. Sets
        4. Hashes
        5. Sorted Sets
        6. Bitmaps
        7. HyperLogLogs
        8. Geospatial Indexes
        9. Streams
        10. JSON (via RedisJSON module)
        11. Graph (via RedisGraph module)
        12. Time Series (via RedisTimeSeries module)
        13. Pub/Sub (Publish/Subscribe)
        14. Lua Scripting
        15. Transactions
        16. Replication
        17. Persistence
        18. Clustering
        19. Security
        20. Monitoring and Management
        21. Modules and Extensibility
        22. Client Libraries and APIs
        23. Community and Ecosystem
        24. Use Cases and Applications
        25. Performance and Benchmarking
        26. Best Practices and Optimization
        27. Troubleshooting and Debugging




@ 1. Strings
    - Strings are the simplest data type in Redis, representing a sequence of characters or binary data.
    - They can store text, numbers, or any binary data up to 512 MB in size.
    - Strings are commonly used for caching, storing user sessions, and managing counters.
    - ex :
        - SET key value
        - GET key
    - String : "Hello, Redis!"
    ! When to use Strings:
        - Use Strings when you need to store simple key-value pairs, such as user preferences, session data, or small pieces of information.
        - They are suitable for scenarios where you need fast read and write operations with minimal overhead.
        - example: Caching user profile information for quick access in a web application.

    ! command :
       # 1. SET key value
        Sets the value of a key.
        SET key value


        # 2. GET key
        Retrieves the value stored in a key.
        GET key


        # 3. DEL key
        Deletes a key and its associated value.
        DEL key


        # 4. APPEND key value
        Appends a value to the existing value of a key.
        APPEND key value


        # 5. STRLEN key
        Returns the length of the value stored at a key.
        STRLEN key


        # 6. MGET key1 key2 ...
        Retrieves the values of multiple keys.
        MGET key1 key2


        # 7. MSET key1 value1 key2 value2 ...
        Sets multiple keys with their respective values.
        MSET key1 value1 key2 value2


        # 8. MSETNX key1 value1 key2 value2 ...
        Sets multiple keys only if none of the keys already exist.
        MSETNX key1 value1 key2 value2


        # 9. INCR key
        Increments the integer value of a key by one.
        INCR key


        # 10. DECR key
        Decrements the integer value of a key by one.
        DECR key


        # 11. INCRBY key increment
        Increments the integer value of a key by a specified amount.
        INCRBY key increment


        # 12. DECRBY key decrement
        Decrements the integer value of a key by a specified amount.
        DECRBY key decrement


        # 13. INCRBYFLOAT key increment
        Increments the float value of a key by a specified amount.
        INCRBYFLOAT key increment


        # 14. DECRBYFLOAT key decrement
        Decrements the float value of a key by a specified amount.
        DECRBYFLOAT key decrement


        # 15. SETNX key value
        Sets a value only if the key does not already exist.
        SETNX key value


        # 16. SETEX key seconds value
        Sets a value with an expiration time in seconds.
        SETEX key seconds value


        # 17. PSETEX key milliseconds value
        Sets a value with an expiration time in milliseconds.
        PSETEX key milliseconds value


        # 18. GETSET key value
        Sets a new value and returns the old value.
        GETSET key value


        # 19. GETDEL key
        Retrieves the value and deletes the key.
        GETDEL key


        # 20. GETEX key
        Retrieves the value and optionally modifies expiration.
        GETEX key


        # 21. GETRANGE key start end
        Returns a substring from the string value.
        GETRANGE key start end


        # 22. SUBSTR key start end
        Returns a substring from a string value.
        SUBSTR key start end


        # 23. SETRANGE key offset value
        Overwrites part of a string starting from the given offset.
        SETRANGE key offset value


        # 24. SETBIT key offset value
        Sets or clears a bit at a specific position.
        SETBIT key offset value


        # 25. GETBIT key offset
        Returns the bit value at a specific position.
        GETBIT key offset


        # 26. BITCOUNT key
        Counts the number of set bits (1s) in a string.
        BITCOUNT key


        # 27. BITPOS key bit
        Finds the first position of a specified bit.
        BITPOS key bit


        # 28. BITOP operation destkey key1 key2 ...
        Performs bit operations like AND, OR, XOR, and NOT.
        BITOP operation destkey key1 key2


        # 29. BITFIELD key GET type offset
        Reads an integer from a specific bit range.
        BITFIELD key GET type offset


        # 30. BITFIELD key SET type offset value
        Sets an integer in a specific bit range.
        BITFIELD key SET type offset value


        # 31. BITFIELD key INCRBY type offset increment
        Increments an integer stored in a bitfield.
        BITFIELD key INCRBY type offset increment


        # 32. BITFIELD_RO key GET type offset
        Read-only version of BITFIELD.
        BITFIELD_RO key GET type offset


        # 33. EXISTS key
        Checks whether a key exists.
        EXISTS key


        # 34. EXPIRE key seconds
        Sets a time-to-live for a key in seconds.
        EXPIRE key seconds


        # 35. PEXPIRE key milliseconds
        Sets a time-to-live for a key in milliseconds.
        PEXPIRE key milliseconds


        # 36. EXPIREAT key timestamp
        Sets expiration using a Unix timestamp.
        EXPIREAT key timestamp


        # 37. PEXPIREAT key timestamp
        Sets expiration using a Unix timestamp in milliseconds.
        PEXPIREAT key timestamp


        # 38. TTL key
        Returns the remaining time-to-live in seconds.
        TTL key


        # 39. PTTL key
        Returns the remaining time-to-live in milliseconds.
        PTTL key


        # 40. PERSIST key
        Removes expiration from a key.
        PERSIST key


        # 41. TYPE key
        Returns the data type stored at a key.
        TYPE key



@ 2. Lists
    - Lists are ordered collections of strings,
    - allowing duplicate values.
    - insertion order is preserved,
    -  and elements can be added or removed from both ends of the list.
    - They are implemented as linked lists, making them efficient for operations at both ends (push and pop).
    - Lists are useful for implementing queues, stacks, and message brokering.  
    - ex :
        - LPUSH mylist "Hello"
        - RPUSH mylist "World"
        - LRANGE mylist 0 -1
    - List : ["Hello", "World"]

    ! When to use Lists:
        - Use Lists when you need to maintain the order of elements and allow duplicates.
        - They are suitable for scenarios where you need to process elements in a specific sequence, such as task queues or message streams.
        - example: Implementing a chat application where messages need to be stored in the order they are received.

    ! List Commands:
   #   1. LPUSH key value [value ...]
        Definition:
            Adds one or more values to the LEFT side (head) of a list.
        Usage:
            Used for stack implementation and adding new items at the beginning.
        Example:
            LPUSH users "John" "Alex"
        Output:
            ["Alex", "John"]


    #   2. RPUSH key value [value ...]
        Definition:
            Adds one or more values to the RIGHT side (tail) of a list.
        Usage:
            Used for queue implementation and adding items at the end.
        Example:
            RPUSH tasks "task1" "task2"
        Output:
            ["task1", "task2"]


    #   3. LPOP key
        Definition:
            Removes and returns the first element from the left side.
        Usage:
            Used to process items from the beginning of a queue.
        Example:
            LPOP tasks
        Output:
            "task1"


    #   4. RPOP key
        Definition:
            Removes and returns the last element from the right side.
        Usage:
            Used for stack operations.
        Example:
            RPOP tasks
        Output:
            "task2"


    #   5. LRANGE key start stop
    Definition:
            Returns elements from a list between start and stop indexes.
        Usage:
            Used for reading list data and pagination.

        Example:
            LRANGE users 0 -1
        Output:
            ["Alex", "John"]


    #   6. LLEN key
        Definition:
            Returns the total number of elements in a list.
        Usage:
            Used to check queue/list size.
        Example:
            LLEN users

        Output:
            2


    # 7. LINDEX key index
        Definition:
            Returns an element from a list using its index.
        Usage:
            Used to access a specific item from a list.
        Example:
            LINDEX users 0
        Output:
            "Alex"


    # 8. LSET key index value
        Definition:
            Updates the value of an element at a specific index.
        Usage:
            Used to modify existing list elements.
        Example:
            LSET users 0 "Mike"
        Output:
            ["Mike", "John"]

    # 9. LREM key count value
        Definition:
            Removes elements matching a given value.
        Count:
            Positive  -> Remove from left side
        Negative  -> Remove from right side
        Zero      -> Remove all matching elements
        Usage:
            Used to delete unwanted or duplicate values.
        Example
            LREM users 1 "John"


    # 10. LTRIM key start stop
        Definition:
            Keeps only the elements inside the given range.
            Removes all other elements.
        Usage:
            Used for limiting list size, such as keeping latest logs.
        Example:
            LTRIM logs 0 99
        Output:
             Keeps first 100 elements


    # 11. RPOPLPUSH source destination
        Definition:
            Removes the last element from source list
            and pushes it to destination list.
        Usage:
            Used for reliable queue transfer.
        Example:
            RPOPLPUSH pending processing


    # 12. BLPOP key [key ...] timeout
        Definition:
            Blocking version of LPOP.
            Waits until an element becomes available.
        Usage:
            Used by workers waiting for jobs.
        Example:
            BLPOP jobs 30
        Output:
            Waits maximum 30 seconds


    # 13. BRPOP key [key ...] timeout
        Definition:
            Blocking version of RPOP.
        Usage:
            Used for background job processing.
        Example:
            BRPOP jobs 60


    # 14. BRPOPLPUSH source destination timeout
        Definition:
            Blocking version of RPOPLPUSH.
        Usage:
            Used for reliable message processing systems.
        Example:
            BRPOPLPUSH pending processing 30


    # 15. LINSERT key BEFORE|AFTER pivot value
        Definition:
            Inserts a new value before or after an existing value.
        Usage:
            Used when inserting data at a specific position.
        Example:
            LINSERT users BEFORE "John" "Alex"


    # 16. LMOVE source destination LEFT|RIGHT LEFT|RIGHT
        Definition:
            Moves an element from one list to another list.
        Usage:
            Used for moving items between queues.
        Example:
            LMOVE pending processing LEFT RIGHT


    # 17. LPOS key element [RANK rank] [COUNT count] [MAXLEN maxlen]
        Definition:
            Returns the position/index of an element in a list.
        Usage:
            Used for searching an item inside a list.
        Example:
            LPOS users "John"


    # 18. LMPOP numkeys key [key ...] LEFT|RIGHT [COUNT count]
        Definition:
            Removes and returns elements from multiple lists.
        Available:
            Redis 7.0+
        Usage:
            Used for popping items from multiple queues.
        Example:
            LMPOP 2 queue1 queue2 LEFT COUNT 2


    # 19. BLMOVE source destination LEFT|RIGHT LEFT|RIGHT timeout
        Definition:
            Blocking version of LMOVE.
            Waits until an element is available.
        Available:
             Redis 6.2+
        Usage:
            Used for blocking queue transfer.
        Example:
            BLMOVE pending processing LEFT RIGHT 30


@ SET
    - Sets are unordered collections of unique strings, 
    - meaning they do not allow duplicate values.
    - Sets are implemented using hash tables, which provide efficient O(1) time complexity for adding, removing, and checking membership of elements.
    - Sets are useful for scenarios where you need to maintain a collection of distinct items, such as user IDs, tags, or categories.
    - ex :
        - SADD myset "apple"
        - SADD myset "banana"
        - SADD myset "orange"
        - SMEMBERS myset
    - Set : {"apple", "banana", "orange"}   

    ! When to use Sets:
        - Use Sets when you need to store unique elements and perform operations like union, intersection, and difference.
        - They are suitable for scenarios where you need to manage distinct items, such as user IDs, tags, or categories.
        - example: Managing a list of unique email addresses for a newsletter subscription.

    ! set commands 
    # 1. SADD key member [member ...]
        Definition:
            Adds one or more members to a Set.
        Usage:
            Used for storing unique values because Sets do not allow duplicate members.
        Example:
            SADD users "John" "Alex" "Mike"
        Output:
            Set contains:
            John, Alex, Mike

    # 2. SREM key member [member ...]
        Definition:
            Removes one or more members from a Set.
        Usage:
            Used to delete specific values from a Set.
        Example:
            SREM users "Alex"
        Output:
            Alex is removed from users Set.


    # 3. SMEMBERS key
        Definition:
            Returns all members stored in a Set.
        Usage:
            Used to get all values from a Set.
        Example:
            SMEMBERS users
        Output:
            John
            Mike


    # 4. SISMEMBER key member
    Definition:
            Checks whether a member exists in a Set.
        Usage:
            Used for checking if a value is present in a Set.
        Example:
            SISMEMBER users "John"
        Output:
         1


    # 5. SMISMEMBER key member [member ...]
        Definition:
            Checks multiple members at the same time in a Set.
        Usage:
            Used when checking multiple values in a Set.
        Example:
            SMISMEMBER users "John" "Alex"
        Output:
            1 0

    # 6. SCARD key
        Definition:
            Returns the number of members in a Set.
        Usage:
            Used to find the size of a Set.
        Example:
            SCARD users
        Output:
             3


    # 7. SPOP key [count]
        Definition:
            Removes and returns random members from a Set.
        Usage:
            Used for randomly selecting and removing values.
        Example:
            SPOP users 2
        Output:
            Returns 2 random members.

    # 8. SRANDMEMBER key [count]
        Definition:
            Returns random members from a Set without removing them.
        Usage:
            Used for random selection without changing the Set.
        Example:
            SRANDMEMBER users 2
        Output:
            Returns 2 random members.
            Set remains unchanged.

    # 9. SMOVE source destination member
        Definition:
            Moves a member from one Set to another Set.
        Usage:
            Used for transferring members between Sets.
        Example:
            SMOVE pending completed "Task1"
        Output:
            Task1 moved from pending Set to completed Set.


    # 10. SINTER key [key ...]
        Definition:
            Returns common members between multiple Sets.
        Usage:
            Used to find matching values between Sets.
        Example:
            SINTER users1 users2
        Output:
            Returns common members.


    # 11. SINTERSTORE destination key [key ...]
        Definition:
            Stores the intersection result into a new Set.
        Usage:
            Used to save common members from multiple Sets.
        Example:
            SINTERSTORE common users1 users2
        Output:
            Creates common Set.


    # 12. SUNION key [key ...]
        Definition:
            Returns all unique members from multiple Sets.
        Usage:
            Used to combine multiple Sets.
        Example:
            SUNION users1 users2
        Output:
            Returns all unique members.


    # 13. SUNIONSTORE destination key [key ...]
    Definition:
            Stores the union result into a new Set.
        Usage:
            Used to save combined Set results.
        Example:
            SUNIONSTORE allusers users1 users2
    Output:
        Creates allusers Set.


    # 14. SDIFF key [key ...]
        Definition:
            Returns members that exist in the first Set but not in other Sets.
        Usage:
            Used to find differences between Sets.
        Example:
            SDIFF users1 users2

        Output:
            Returns members only available in users1.


    # 15. SDIFFSTORE destination key [key ...]
    Definition:
            Stores the difference result into a new Set.
        Usage:
            Used to save Set difference results.
        Example:
            SDIFFSTORE difference users1 users2
    Output:
        Creates difference Set.


    # 16. SSCAN key cursor [MATCH pattern] [COUNT count]
        Definition:
            Iterates through Set members incrementally.
    Usage:
        Used for scanning large Sets without blocking Redis.
    Example:
        SSCAN users 0 MATCH "A*" COUNT 10
    Output:
        Returns matching members.

@ HASHES
    - Hashes are collections of key-value pairs,
    - where each key is unique within the hash.
    - They are implemented as hash tables, allowing for efficient storage and retrieval of data.
    - Hashes are useful for representing objects or entities with multiple attributes, such as user profiles or product details.
    - ex :
        - HSET user:1 name "John" age 30
        - HGETALL user:1
    - Hash : {name: "John", age: 30}    

    ! WHen to use Hashes:
        - Use Hashes when you need to store and retrieve structured data with multiple fields.
        - They are suitable for scenarios where you want to represent objects or entities with various attributes.
        - example: Storing user profile information, such as name, age, and email, in a single hash.
    
    ! COmmand : 
        ===========================
        REDIS HASH COMMANDS
        Total Commands: 16
        ===========================


    # 1. HSET key field value [field value ...]
            Definition:
                Sets one or more field-value pairs in a hash.
            Usage:
                Used to create or update fields in a hash.
            Example:
                HSET user:1 name "Vishal" age 25
            Output:
                Hash contains:
                name = Vishal
                age = 25


    # 2. HGET key field
            Definition:
                Returns the value of a specified field.
            Usage:
                Used to retrieve a single field value.
            Example:
                HGET user:1 name
            Output:
                Vishal

    # 3. HMSET key field value [field value ...]
            Definition:
                Sets multiple field-value pairs in a hash.
                (Deprecated. Use HSET instead.)
            Usage:
                Used for setting multiple fields at once.
            Example:
                HMSET user:1 city "Pune" country "India"
            Output:
                OK


    # 4. HMGET key field [field ...]
        Definition:
            Returns values of multiple fields.
        Usage:
            Used to retrieve multiple fields together.
        Example:
            HMGET user:1 name age
        Output:
            Vishal
            25


    # 5. HGETALL key
        Definition:
            Returns all fields and values in a hash.
        Usage:
            Used to retrieve the complete hash.
        Example:
            HGETALL user:1
        Output:
            name Vishal
            age 25


    # 6. HDEL key field [field ...]
        Definition:
            Removes one or more fields from a hash.
        Usage:
            Used to delete unwanted fields.
        Example:
            HDEL user:1 age
        Output:
            age removed


    # 7. HEXISTS key field
        Definition:
            Checks whether a field exists.
        Usage:
            Used before reading or updating a field.
        Example:
            HEXISTS user:1 age
        Output:
            1


    # 8. HLEN key
        Definition:
            Returns the number of fields in a hash.
        Usage:
            Used to count fields.
        Example:
            HLEN user:1
        Output:
            2


    # 9. HKEYS key
        Definition:
            Returns all field names.
        Usage:
            Used to list hash keys.
        Example:
            HKEYS user:1
        Output:
            name
            age


    # 10. HVALS key
        Definition:
            Returns all field values.
        Usage:
            Used to retrieve all values.
        Example:
            HVALS user:1
        Output:
            Vishal
            25


    # 11. HINCRBY key field increment
        Definition:
            Increments an integer field by a value.
        Usage:
            Used for counters.
        Example:
            HINCRBY user:1 age 1
        Output:
            26


    # 12. HINCRBYFLOAT key field increment
        Definition:
            Increments a floating-point field.
        Usage:   
            Used for decimal values.
        Example:
            HINCRBYFLOAT product:1 price 5.5
        Output:
            Updated price


    # 13. HSTRLEN key field
         Definition:
            Returns the length of a field value.
        Usage:
            Used to determine string size.
        Example:
            HSTRLEN user:1 name
        Output:
                6

    # 14. HSCAN key cursor [MATCH pattern] [COUNT count]
        Definition:    
            Iterates through hash fields incrementally.
        Usage:   
            Used for scanning large hashes.
        Example:
            HSCAN user:1 0 MATCH n*
        Output:
            Matching fields returned


    # 15. HSETNX key field value
        Definition:
            Sets a field only if it does not already exist.
        Usage:
            Used to avoid overwriting existing values.
        Example:
            HSETNX user:1 email "abc@gmail.com"
        Output:
            Field added only if email does not exist.


===========================
@ REDIS SORTED SET (ZSET) COMMANDS
Part 1 (1–18)
===========================


# 1. ZADD key score member [score member ...]
    Definition:
        Adds one or more members with scores to a sorted set.
    Usage:
        Used for ranking, leaderboards, and score-based ordering.
    Example:
        ZADD leaderboard 100 "Alice" 250 "Bob"
    Output:
        Members added to the sorted set.


# 2. ZCARD key
    Definition:
        Returns the number of members in a sorted set.
    Usage:
        Used to check the size of a sorted set.
    Example:
        ZCARD leaderboard
    Output:
        2


# 3. ZCOUNT key min max
    Definition:
        Returns the number of members within a score range.
    Usage:
        Used for counting ranked entries in a range.
    Example:
        ZCOUNT leaderboard 100 250
    Output:
        2


# 4. ZRANGE key start stop [WITHSCORES]
    Definition:
        Returns members in ascending order by score.
    Usage:
        Used to retrieve ranked members from low to high.
    Example:
        ZRANGE leaderboard 0 -1 WITHSCORES
    Output:
        Alice 100
        Bob 250


# 5. ZREVRANGE key start stop [WITHSCORES]
    Definition:
        Returns members in descending order by score.
    Usage:
        Used for top-ranked member retrieval.
    Example:
        ZREVRANGE leaderboard 0 -1 WITHSCORES
    Output:
        Bob 250
        Alice 100


# 6. ZRANK key member
    Definition:
        Returns the rank of a member in ascending order.
    Usage:
        Used to find a member's position in a leaderboard.
    Example:
        ZRANK leaderboard "Bob"
    Output:
        1


# 7. ZREVRANK key member
    Definition:
        Returns the rank of a member in descending order.
    Usage:
        Used to find reverse ranking position.
    Example:
        ZREVRANK leaderboard "Alice"
    Output:
        1


# 8. ZSCORE key member
    Definition:
        Returns the score of a member.
    Usage:
        Used to fetch the score of a specific member.
    Example:
        ZSCORE leaderboard "Alice"
    Output:
        100


# 9. ZREM key member [member ...]
    Definition:
        Removes one or more members from a sorted set.
    Usage:
        Used to delete ranked entries.
    Example:
        ZREM leaderboard "Alice"
    Output:
        1


# 10. ZREMRANGEBYRANK key start stop
    Definition:
        Removes members within a rank range.
    Usage:
        Used to remove a subset of ranked entries.
    Example:
        ZREMRANGEBYRANK leaderboard 0 0
    Output:
        Removes the first ranked member.


# 11. ZREMRANGEBYSCORE key min max
    Definition:
        Removes members within a score range.
    Usage:
        Used to delete members based on score.
    Example:
        ZREMRANGEBYSCORE leaderboard 100 150
    Output:
        Removes matching members.


# 12. ZINCRBY key increment member
    Definition:
        Increments the score of a member by a given amount.
    Usage:
        Used for updating leaderboard scores.
    Example:
        ZINCRBY leaderboard 50 "Alice"
    Output:
        150


# 13. ZLEXCOUNT key min max
    Definition:
        Returns the number of members in a lexicographical range.
    Usage:
        Used when members are sorted lexicographically.
    Example:
        ZLEXCOUNT names [A [M
    Output:
        Count of matching members.


# 14. ZRANGEBYLEX key min max [LIMIT offset count]
    Definition:
        Returns members within a lexicographical range.
    Usage:
        Used for alphabetic range queries.
    Example:
        ZRANGEBYLEX names [A [M
    Output:
        Members from A to M.


# 15. ZREVRANGEBYLEX key max min [LIMIT offset count]
    Definition:
        Returns members in reverse lexicographical order.
    Usage:
        Used for reverse alphabetic range queries.
    Example:
        ZREVRANGEBYLEX names [Z [A
    Output:
        Members returned in reverse order.


# 16. ZRANGESTORE dst source min max
    Definition:
        Stores a range of sorted set members into another key.
    Usage:
        Used to copy a filtered subset into a new sorted set.
    Example:
        ZRANGESTORE filtered leaderboard 0 1
    Output:
        Creates a new sorted set with selected members.


# 17. ZMSCORE key member [member ...]
    Definition:
        Returns the scores of one or more members.
    Usage:
        Used to fetch multiple member scores at once.
    Example:
        ZMSCORE leaderboard "Alice" "Bob"
    Output:
        100 250


# 18. ZPOPMIN key [count]
    Definition:
        Removes and returns the member(s) with the lowest score.
    Usage:
        Used for processing the lowest-priority or oldest items.
    Example:
        ZPOPMIN leaderboard
    Output:
        Alice 100


===========================
@ REDIS SORTED SET (ZSET) COMMANDS
Part 2 (19–36)
===========================


# 19. ZPOPMIN key [count]
    Definition:
        Removes and returns the member(s) with the lowest score.
    Usage:
        Used for processing the lowest-priority or oldest items.
    Example:
        ZPOPMIN leaderboard
    Output:
        Alice 100


# 20. ZPOPMAX key [count]
    Definition:
        Removes and returns the member(s) with the highest score.
    Usage:
        Used for retrieving top-ranked members.
    Example:
        ZPOPMAX leaderboard
    Output:
        Bob 250


# 21. BZPOPMIN timeout key [key ...]
    Definition:
        Blocking version of ZPOPMIN.
    Usage:
        Used when waiting for the lowest-score member to become available.
    Example:
        BZPOPMIN 30 leaderboard
    Output:
        Waits up to 30 seconds.


# 22. BZPOPMAX timeout key [key ...]
    Definition:
        Blocking version of ZPOPMAX.
    Usage:
        Used for blocking retrieval of the highest-score member.
    Example:
        BZPOPMAX 30 leaderboard
    Output:
        Waits up to 30 seconds.


# 23. ZMPOP numkeys key [key ...] MIN|MAX [COUNT count]
    Definition:
        Removes and returns members from one of multiple sorted sets.
    Usage:
        Used for priority queue processing across multiple sorted sets.
    Example:
        ZMPOP 2 set1 set2 MIN COUNT 2
    Output:
        Removes and returns members.


# 24. BZMPOP timeout numkeys key [key ...] MIN|MAX [COUNT count]
    Definition:
        Blocking version of ZMPOP.
    Usage:
        Used to wait for members in multiple sorted sets.
    Example:
        BZMPOP 30 2 set1 set2 MAX COUNT 1
    Output:
        Waits until data is available.


# 25. ZUNION numkeys key [key ...]
    Definition:
        Returns the union of multiple sorted sets.
    Usage:
        Used for combining rankings.
    Example:
        ZUNION 2 team1 team2
    Output:
        Combined sorted set returned.


# 26. ZUNIONSTORE destination numkeys key [key ...]
    Definition:
        Stores the union of multiple sorted sets.
    Usage:
        Used to save merged rankings.
    Example:
        ZUNIONSTORE final 2 team1 team2
    Output:
        Creates destination sorted set.


# 27. ZINTER numkeys key [key ...]
    Definition:
        Returns members common to all sorted sets.
    Usage:
        Used for finding common ranked members.
    Example:
        ZINTER 2 team1 team2
    Output:
        Common members returned.


# 28. ZINTERSTORE destination numkeys key [key ...]
    Definition:
        Stores the intersection of sorted sets.
    Usage:
        Used to save common ranking results.
    Example:
        ZINTERSTORE common 2 team1 team2
    Output:
        Creates common sorted set.


# 29. ZDIFF numkeys key [key ...]
    Definition:
        Returns members present in the first sorted set but not in others.
    Usage:
        Used for finding differences between sorted sets.
    Example:
        ZDIFF 2 team1 team2
    Output:
        Unique members returned.


# 30. ZDIFFSTORE destination numkeys key [key ...]
    Definition:
        Stores the difference into another sorted set.
    Usage:
        Used to save unique ranking data.
    Example:
        ZDIFFSTORE diff 2 team1 team2
    Output:
        Creates diff sorted set.


# 31. ZINTERCARD numkeys key [key ...]
    Definition:
        Returns the number of common members between sorted sets.
    Usage:
        Used for counting intersections efficiently.
    Example:
        ZINTERCARD 2 team1 team2
    Output:
        Returns count of common members.


# 32. ZSCAN key cursor [MATCH pattern] [COUNT count]
    Definition:
        Iterates through members of a sorted set incrementally.
    Usage:
        Used for scanning large sorted sets.
    Example:
        ZSCAN leaderboard 0 MATCH A* COUNT 10
    Output:
        Matching members returned.


# 33. ZRANDMEMBER key [count [WITHSCORES]]
    Definition:
        Returns one or more random members.
    Usage:
        Used for random selection from a sorted set.
    Example:
        ZRANDMEMBER leaderboard 2
    Output:
        Returns two random members.


# 34. ZRANGEBYLEX key min max
    Definition:
        Returns members within a lexicographical range.
    Usage:
        Used when members are sorted alphabetically with the same score.
    Example:
        ZRANGEBYLEX names [A [M
    Output:
        Members from A to M.


# 35. ZREVRANGEBYLEX key max min
    Definition:
        Returns members in reverse lexicographical order.
    Usage:
        Used for reverse alphabetical retrieval.
    Example:
        ZREVRANGEBYLEX names [Z [A
    Output:
        Members returned in reverse order.


# 36. ZUNIONSTORE destination numkeys key [key ...] WEIGHTS weight [weight ...] AGGREGATE SUM|MIN|MAX
    Definition:
        Stores the union of sorted sets with weights and aggregation.
    Usage:
        Used for advanced leaderboard calculations.
    Example:
        ZUNIONSTORE final 2 team1 team2 WEIGHTS 2 1 AGGREGATE SUM
    Output:
        Weighted union stored in destination sorted set.


===========================
@ REDIS STREAM COMMANDS
===========================


# 1. XADD key ID field value [field value ...]
    Definition:
        Appends a new entry to a stream.
    Usage:
        Used for event logging, activity feeds, and real-time data pipelines.
    Example:
        XADD events * user 1 action login
    Output:
        Returns the generated entry ID.


# 2. XLEN key
    Definition:
        Returns the number of entries in a stream.
    Usage:
        Used to check stream size.
    Example:
        XLEN events
    Output:
        Returns the entry count.


# 3. XRANGE key start end [COUNT count]
    Definition:
        Returns entries in a range of IDs.
    Usage:
        Used to read a portion of a stream.
    Example:
        XRANGE events - +
    Output:
        Returns all entries in the stream.


# 4. XREVRANGE key end start [COUNT count]
    Definition:
        Returns entries in reverse ID order.
    Usage:
        Used to read the latest entries first.
    Example:
        XREVRANGE events + - COUNT 5
    Output:
        Returns the latest entries.


# 5. XREAD [COUNT count] [BLOCK milliseconds] STREAMS key [key ...] ID [ID ...]
    Definition:
        Reads new entries from one or more streams.
    Usage:
        Used for consuming stream data in real time.
    Example:
        XREAD COUNT 2 STREAMS events 0
    Output:
        Returns new entries from the stream.


# 6. XGROUP CREATE key groupname id-or-$
    Definition:
        Creates a consumer group for a stream.
    Usage:
        Used for distributed stream processing.
    Example:
        XGROUP CREATE events group1 $ 
    Output:
        Creates a new consumer group.


# 7. XGROUP SETID key groupname id-or-$
    Definition:
        Sets the starting ID of a consumer group.
    Usage:
        Used to reset or initialize group consumption.
    Example:
        XGROUP SETID events group1 0
    Output:
        Updates the consumer group ID.


# 8. XGROUP DESTROY key groupname
    Definition:
        Deletes a consumer group.
    Usage:
        Used to remove a group no longer needed.
    Example:
        XGROUP DESTROY events group1
    Output:
        Removes the consumer group.


# 9. XGROUP DELCONSUMER key groupname consumername
    Definition:
        Removes a consumer from a group.
    Usage:
        Used to clean up inactive consumers.
    Example:
        XGROUP DELCONSUMER events group1 consumer1
    Output:
        Deletes the consumer entry.


# 10. XREADGROUP GROUP group consumer [COUNT count] [BLOCK milliseconds] STREAMS key [key ...] ID [ID ...]
    Definition:
        Reads entries from a stream using a consumer group.
    Usage:
        Used for reliable message processing.
    Example:
        XREADGROUP GROUP events group1 consumer1 COUNT 2 STREAMS events >
    Output:
        Returns pending messages for the consumer.


# 11. XACK key groupID id [id ...]
    Definition:
        Acknowledges one or more entries as processed.
    Usage:
        Used to mark stream entries as successfully handled.
    Example:
        XACK events group1 1526569495631-0
    Output:
        Returns the number of acknowledged entries.


# 12. XPENDING key groupname [start end count] [consumername]
    Definition:
        Returns information about pending entries.
    Usage:
        Used to inspect unacknowledged messages.
    Example:
        XPENDING events group1
    Output:
        Shows pending stream entries.


# 13. XCLAIM key group consumer min-idle-time ID [ID ...] [IDLE ms] [TIME ms] [RETRYCOUNT count] [FORCE] [JUSTID]
    Definition:
        Claims pending messages from another consumer.
    Usage:
        Used for recovery and load balancing.
    Example:
        XCLAIM events group1 consumer2 60000 1526569495631-0
    Output:
        Returns claimed entry IDs.


# 14. XAUTOCLAIM key group consumer min-idle-time start [COUNT count] [JUSTID]
    Definition:
        Automatically claims pending entries that have been idle too long.
    Usage:
        Used for reclaiming stuck messages.
    Example:
        XAUTOCLAIM events group1 consumer2 60000 0 COUNT 5
    Output:
        Returns newly claimed entries and the next start ID.


# 15. XTRIM key MAXLEN [~] count
    Definition:
        Trims a stream to a maximum length.
    Usage:
        Used to limit storage usage for long-running streams.
    Example:
        XTRIM events MAXLEN ~ 1000
    Output:
        Returns the number of entries deleted.


# 16. XDEL key ID [ID ...]
    Definition:
        Deletes one or more entries from a stream.
    Usage:
        Used to remove unwanted or expired entries.
    Example:
        XDEL events 1526569495631-0
    Output:
        Returns the number of deleted entries.


# 17. XINFO STREAM key
    Definition:
        Returns information about a stream.
    Usage:
        Used for stream metadata inspection.
    Example:
        XINFO STREAM events
    Output:
        Shows stream details such as length and radix tree keys.


# 18. XINFO GROUPS key
    Definition:
        Returns all consumer groups for a stream.
    Usage:
        Used to inspect consumer-group configuration.
    Example:
        XINFO GROUPS events
    Output:
        Lists the consumer groups attached to the stream.


# 19. XINFO CONSUMERS key groupname
    Definition:
        Returns all consumers in a group.
    Usage:
        Used to inspect consumers and their state.
    Example:
        XINFO CONSUMERS events group1
    Output:
        Lists the consumers in the group.


# 20. XSETID key last-id [entries-added]
    Definition:
        Sets the last entry ID of a stream.
    Usage:
        Used to manually update stream metadata.
    Example:
        XSETID events 1526569495631-0
    Output:
        Updates the stream entry ID state.


===========================
@ 6. BITMAPS
===========================
    - Bitmaps are compact data structures for storing bits.
    - Purpose: Store binary flags and boolean state efficiently.
    - They are useful for tracking flags, booleans, and daily activity.
    - Used: Track user activity, feature flags, and simple boolean states.
    - Common commands:
        - SETBIT key offset value
            Example: SETBIT daily:login 0 1
        - GETBIT key offset
            Example: GETBIT daily:login 0
        - BITCOUNT key
            Example: BITCOUNT daily:login
        - BITPOS key bit
            Example: BITPOS daily:login 1
        - BITOP operation destkey key1 key2
            Example: BITOP AND weekly:flags daily:login previous:login


===========================
@ 7. HYPERLOGLOGS
===========================
    - HyperLogLogs are probabilistic data structures for approximating set cardinality.
    - Purpose: Estimate the number of unique items in very large sets.
    - They are ideal for large-scale unique counting.
    - Used: Approximate unique visitors, page views, or distinct events.
    - Common commands:
        - PFADD key element [element ...]
            Example: PFADD unique:visitors user1 user2 user3
        - PFCOUNT key [key ...]
            Example: PFCOUNT unique:visitors
        - PFMERGE destkey sourcekey [sourcekey ...]
            Example: PFMERGE monthly:visitors weekly:visitors


===========================
@ 8. GEOSPATIAL INDEXES
===========================
    - Geospatial indexes store coordinates and support location-based queries.
    - Purpose: Store and query location-based data such as users or stores.
    - Common commands:
        - GEOADD key longitude latitude member [longitude latitude member ...]
            Example: GEOADD cities 77.5946 12.9716 Bengaluru
        - GEOPOS key member [member ...]
            Example: GEOPOS cities Bengaluru
        - GEODIST key member1 member2 [unit]
            Example: GEODIST cities Bengaluru Mumbai km
        - GEORADIUS key longitude latitude radius m|km|ft|mi [WITHCOORD] [WITHDIST] [COUNT count]
            Example: GEORADIUS cities 77.5946 12.9716 10 km
        - GEORADIUSBYMEMBER key member radius m|km|ft|mi
            Example: GEORADIUSBYMEMBER cities Bengaluru 20 km


===========================
@ 9. REDIS JSON (JSON MODULE)
===========================
    - RedisJSON adds JSON document support to Redis.
    - Purpose: Store and query JSON documents directly in Redis.
    - Common commands:
        - JSON.SET key path value
            Example: JSON.SET user:1 $.name "Asha"
        - JSON.GET key [path]
            Example: JSON.GET user:1
        - JSON.TYPE key [path]
            Example: JSON.TYPE user:1 $.name
        - JSON.ARRAPPEND key path value [value ...]
            Example: JSON.ARRAPPEND user:1 $.skills "Redis" "Node.js"
        - JSON.OBJLEN key [path]
            Example: JSON.OBJLEN user:1 $.address


===========================
@ 10. REDIS GRAPH (GRAPH MODULE)
===========================
    - RedisGraph adds graph database capabilities.
    - Purpose: Store and query connected data as a graph.
    - Common commands:
        - GRAPH.QUERY graph-name "query"
            Example: GRAPH.QUERY social "MATCH (u:User {name:'Asha'}) RETURN u"
        - GRAPH.EXPLAIN graph-name "query"
            Example: GRAPH.EXPLAIN social "MATCH (u:User) RETURN u"
        - GRAPH.DELETE graph-name
            Example: GRAPH.DELETE social


===========================
@ 11. REDIS TIME SERIES (TIME SERIES MODULE)
===========================
    - RedisTimeSeries enables time-series data storage and querying.
    - Purpose: Store and analyze time-series data efficiently.
    - Common commands:
        - TS.CREATE key
            Example: TS.CREATE temperature:city
        - TS.ADD key timestamp value
            Example: TS.ADD temperature:city 1710000000 32
        - TS.GET key
            Example: TS.GET temperature:city
        - TS.RANGE key from to
            Example: TS.RANGE temperature:city - +


===========================
@ 12. PUB/SUB (PUBLISH/SUBSCRIBE)
===========================
    - Pub/Sub allows real-time messaging between publishers and subscribers.
    - Purpose: Broadcast messages to many subscribers in real time.
    - Common commands:
        - PUBLISH channel message
            Example: PUBLISH alerts "Server restarted"
        - SUBSCRIBE channel [channel ...]
            Example: SUBSCRIBE alerts status
        - PSUBSCRIBE pattern [pattern ...]
            Example: PSUBSCRIBE order.*
        - UNSUBSCRIBE [channel [channel ...]]
            Example: UNSUBSCRIBE alerts


===========================
@ 13. LUA SCRIPTING
===========================
    - Lua scripting lets you run custom logic inside Redis.
    - Purpose: Execute custom server-side logic atomically.
    - Common commands:
        - EVAL script numkeys key [key ...] arg [arg ...]
            Example: EVAL "return redis.call('SET', KEYS[1], ARGV[1])" 1 counter 10
        - EVALSHA sha1 numkeys key [key ...] arg [arg ...]
            Example: EVALSHA <sha1> 1 counter 10
        - SCRIPT LOAD script
            Example: SCRIPT LOAD "return 1"


===========================
@ 14. TRANSACTIONS
===========================
    - Transactions group multiple commands to execute atomically.
    - Purpose: Execute a set of commands as one atomic unit.
    - Common commands:
        - MULTI
            Example: MULTI
        - EXEC
            Example: EXEC
        - DISCARD
            Example: DISCARD
        - WATCH key [key ...]
            Example: WATCH counter
        - UNWATCH
            Example: UNWATCH


===========================
@ 15. REPLICATION
===========================
    - Replication copies data from a primary instance to replicas.
    - Purpose: Provide redundancy and read scaling.
    - Common commands:
        - INFO replication
            Example: INFO replication
        - REPLICAOF host port
            Example: REPLICAOF 192.168.1.10 6379
        - SLAVEOF host port
            Example: SLAVEOF 192.168.1.10 6379


===========================
@ 16. PERSISTENCE
===========================
    - Persistence stores Redis data to disk for recovery.
    - Purpose: Protect data against restarts and crashes.
    - Common commands:
        - SAVE
            Example: SAVE
        - BGSAVE
            Example: BGSAVE
        - BGREWRITEAOF
            Example: BGREWRITEAOF
        - CONFIG SET appendonly yes
            Example: CONFIG SET appendonly yes


===========================
@ 17. CLUSTERING
===========================
    - Clustering distributes data across multiple Redis nodes.
    - Purpose: Scale horizontally and distribute workload.
    - Common commands:
        - CLUSTER INFO
            Example: CLUSTER INFO
        - CLUSTER NODES
            Example: CLUSTER NODES
        - CLUSTER SLOTS
            Example: CLUSTER SLOTS


===========================
@ 18. SECURITY
===========================
    - Security protects Redis instances with authentication and access control.
    - Purpose: Protect Redis from unauthorized access.
    - Common commands:
        - AUTH password
            Example: AUTH secret123
        - ACL LIST
            Example: ACL LIST
        - ACL SETUSER username on >password ~* +@all
            Example: ACL SETUSER appuser on >pass123 ~* +@all


===========================
@ 19. MONITORING AND MANAGEMENT
===========================
    - Monitoring helps track performance and health.
    - Purpose: Observe server health, latency, and memory usage.
    - Common commands:
        - INFO
            Example: INFO
        - MONITOR
            Example: MONITOR
        - SLOWLOG GET
            Example: SLOWLOG GET
        - CLIENT LIST
            Example: CLIENT LIST


===========================
@ 20. MODULES AND EXTENSIBILITY
===========================
    - Redis modules extend Redis with new capabilities.
    - Purpose: Extend Redis with additional data models and features.
    - Common commands:
        - MODULE LIST
            Example: MODULE LIST
        - MODULE LOAD path
            Example: MODULE LOAD /path/to/module.so
        - MODULE UNLOAD name
            Example: MODULE UNLOAD search


===========================
@ 21. CLIENT LIBRARIES AND APIS
===========================
    - Redis has official and community client libraries for many languages.
    - Purpose: Access Redis easily from different programming languages.
    - Example: Use Node.js with ioredis or Python with redis-py to connect to Redis.
    - Examples: Node.js, Python, Java, Go, .NET, PHP.


===========================
@ 22. COMMUNITY AND ECOSYSTEM
===========================
    - Redis has a large ecosystem including Redis Insight, Redis Stack, and Redis Enterprise.
    - Purpose: Support development, monitoring, and deployment workflows.
    - Example: Use Redis Insight to inspect keys and memory usage visually.
    - These tools help with development, monitoring, and deployment.


===========================
@ 23. USE CASES AND APPLICATIONS
===========================
    - Redis is commonly used for caching, session storage, real-time analytics, leaderboards, queues, and pub/sub systems.
    - Purpose: Solve many real-time application problems efficiently.
    - Example: Use Redis as a cache for frequently accessed user profiles.


===========================
@ 24. PERFORMANCE AND BENCHMARKING
===========================
    - Redis performance can be benchmarked using redis-benchmark.
    - Purpose: Measure throughput and latency before deployment.
    - Useful for measuring throughput, latency, and memory behavior.
    - Example: Run redis-benchmark -q -n 100000 to estimate write performance.


===========================
@ 25. BEST PRACTICES AND OPTIMIZATION
===========================
    - Use short and consistent key names.
    - Purpose: Improve readability and maintainability.
    - Example: Use user:1001 instead of a long random key name.
    - Set expiration for temporary data.
    - Use pipelining for bulk operations.
    - Choose the right data type for the workload.


===========================
@ 26. TROUBLESHOOTING AND DEBUGGING
===========================
    - Check logs, memory usage, and slow queries during issues.
    - Purpose: Diagnose application or server problems quickly.
    - Common commands:
        - MONITOR
            Example: MONITOR
        - SLOWLOG GET
            Example: SLOWLOG GET
        - INFO memory
            Example: INFO memory
        - DEBUG OBJECT key
            Example: DEBUG OBJECT user:1001

*/
