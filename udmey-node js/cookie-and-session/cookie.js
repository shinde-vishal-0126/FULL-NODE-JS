// # cookie 

// - cookie is a small piece of data stored on the user's computer by the web browser while browsing a website
// They are commonly used to store session information, user preferences, or authentication tokens.
// the size of the cookie is 4kb.

// - Benefits of Using Cookies
// Session Management: Cookies can store a session identifier, enabling session management for web applications.
// User Preferences: They allow websites to remember user preferences, such as language selection, themes, etc.
// Authentication: Cookies can store authentication tokens or session IDs to maintain a logged-in state for users.

//? what is differences between cookies and session 
// cookie
// Storage  :Client-side (browser)
// Size Limit	~4KB per cookie
// Persistence	Persistent (can be set with expiration)
// Security :	Less secure (client-side storage)
// Data Access : Can be accessed by both client and server
// Performance :	Sends data with every request
// Use Cases :Preferences, authentication tokens, tracking	
// Expiration :	Can be set with a specific expiration time	
// Storage Mechanism :	Stored in browser (client-side)


//session :
// Storage:	Server-side
// Unlimited (limited by server capacity)
// persistence: Temporary (usually expires after inactivity or logout)
// security: More secure (data stored on server)
// Data Access:	Only accessible by the server
// Performance :	Only sends session ID, reducing network load
// Use Cases :User authentication, shopping carts, session data
// expiration : Typically expires after a period of inactivity
// Stored on server (server-side)