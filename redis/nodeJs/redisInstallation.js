/*
@ REDIS INSTALLATION 

- Install package :  npm install redis 
- createClient() : used to create a new Redis client instance.
- connect() : used to establish a connection to the Redis server.
- set() : used to set a key-value pair in Redis.
- get() : used to retrieve the value associated with a key from Redis.

*/

import { createClient } from 'redis';

// create a Redis client instance with RESP version 2
const client = createClient({
  RESP: 2
});

async function main() {
  try {
    // establish a connection to the Redis server
    await client.connect();

    // set a key-value pair in Redis
    await client.set('Message', 'Hello How are you');
    // get the value associated with the key 'Message' from Redis
    const value = await client.get('Message');

    console.log('Redis value:', value);
  } catch (error) {
    console.error('Redis error:', error);
  } finally {
    await client.disconnect();
  }
}

main();


