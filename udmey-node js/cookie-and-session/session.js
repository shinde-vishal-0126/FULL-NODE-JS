//  # session 
// A session in the context of web development refers to a way of storing data about a user across multiple HTTP requests.
//  HTTP is a stateless protocol, meaning each request from a client to a server is independent and doesn't carry information about previous requests
// Sessions solve this issue by providing a way to persist data between requests for a specific user.
// sessions are commonly used for things like authentication, user preferences, and shopping cart data, among other things. In most web frameworks, sessions are implemented by generating a unique session ID that is associated with a particular user and stored either in memory or in a database.

// - How Sessions Work
// Session ID: When a user first visits a website, the server generates a unique session ID. 
// This session ID is usually stored in a cookie on the client-side, often named connect.sid (in Node.js with Express.js). 
// This ID helps the server recognize subsequent requests as coming from the same user.

// Server-Side Storage: The server keeps track of the session information (such as user data, preferences, or authentication status) using the session ID. 
// This data can be stored in different places:
// In-memory store (like Redis): Fast and temporary, but limited in capacity.
// Database (like MongoDB or SQL databases): Persistent but slower.
// File system: Stores session data on the server.
// Session Persistence: With each subsequent request, the client sends the session ID stored in the cookie back to the server, which uses the session ID to retrieve the corresponding session data. The server can then use this data to "remember" the user between requests.
// Session Expiration: Sessions typically expire after a certain period of inactivity (e.g., after 30 minutes) or when the user logs out. Once expired or invalidated, the server will no longer recognize the session ID and the user will need to log in again.