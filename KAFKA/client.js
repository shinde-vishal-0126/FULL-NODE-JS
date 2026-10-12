/**
 * ============================================================================
 * FILE: client.js - Centralized Kafka Client Singleton Instance
 * ============================================================================
 * 
 * 📌 WHAT IS THIS FILE? (या फाईलचे काम काय?):
 * In Apache Kafka and Node.js, the Kafka client object manages TCP socket
 * connections, cluster metadata, broker discovery, and heartbeat polling.
 * 
 * 🚨 GOLDEN INTERVIEW RULE / मुलाखतीचा सुवर्ण नियम:
 * ALWAYS export a single shared Kafka client instance across your entire project.
 * NEVER create new Kafka client instances inside route handlers or functions.
 * (संपूर्ण प्रोजेक्टमध्ये एकच Singleton client वापरावा; प्रत्येक रिक्वेस्टवर नवा क्लायंट बनवू नये).
 */

const { Kafka, logLevel } = require('kafkajs');

/**
 * ----------------------------------------------------------------------------
 * ALL AVAILABLE KAFKA CLIENT CONFIGURATION VALUES (सर्व उपलब्ध कॉन्फिगरेशन व्हॅल्यूज)
 * ----------------------------------------------------------------------------
 * | Property            | Type          | Default     | Description / Production Use                                  |
 * |---------------------|---------------|-------------|---------------------------------------------------------------|
 * | clientId            | String        | 'kafkajs'   | Unique logical identifier for this client in broker logs.     |
 * | brokers             | Array[String] | (Required)  | Array of initial bootstrap broker addresses ['host:9092'].   |
 * | ssl                 | Boolean/Object| false       | Set true or pass TLS options (ca, cert, key) for security.   |
 * | sasl                | Object        | undefined   | Authentication config (PLAIN, SCRAM-SHA-256, AWS MSK IAM).   |
 * | connectionTimeout   | Number (ms)   | 1000        | Time to wait for initial TCP socket handshake.                |
 * | requestTimeout      | Number (ms)   | 30000       | Time to wait for a response from the broker.                  |
 * | retry               | Object        | default     | Exponential backoff retry policy for transient outages.       |
 * | logLevel            | logLevel enum | INFO        | NOTHING, ERROR, WARN, INFO, DEBUG for troubleshooting.       |
 */

const kafka = new Kafka({
  // 1. Client Identifier (used in server-side request logging & quota metrics)
  clientId: 'ecommerce-core-service',

  // 2. Initial Bootstrap Brokers (Cluster metadata will discover the rest automatically)
  brokers: (process.env.KAFKA_BROKERS || 'localhost:9092').split(','),

  // 3. Connection & Network Timeouts
  connectionTimeout: 5000, // 5 seconds: TCP handshake timeout
  requestTimeout: 30000,    // 30 seconds: Maximum time to await broker response

  // 4. Exponential Backoff Retry Policy for Network Drops
  retry: {
    maxRetryTime: 30000,    // Stop retrying if total retry time exceeds 30 seconds
    initialRetryTime: 300,  // Initial backoff wait: 300ms
    factor: 0.2,            // Randomization jitter to prevent thundering herd
    multiplier: 2,          // Exponential factor: 300ms -> 600ms -> 1200ms...
    retries: 8              // Maximum consecutive retry attempts
  },

  // 5. Logging Level
  logLevel: logLevel.INFO

  // 6. Security (Enable in Cloud / Production e.g., AWS MSK, Confluent Cloud):
  // ssl: true,
  // sasl: {
  //   mechanism: 'plain', // or 'scram-sha-256' | 'scram-sha-512'
  //   username: process.env.KAFKA_USERNAME,
  //   password: process.env.KAFKA_PASSWORD
  // }
});

module.exports = kafka;
