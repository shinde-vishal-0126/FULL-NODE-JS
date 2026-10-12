// Import WebSocket and WebSocketServer from the `ws` npm package.
// WebSocket:
//   - Provides WebSocket constants and functionality.
//   - We use WebSocket.OPEN to check whether a client connection is open.
// WebSocketServer:
//   - Used to create and manage a WebSocket server.
// Install: npm install ws
import { WebSocket, WebSocketServer } from 'ws';

// ---------------------------------------------------------
// CREATE WEBSOCKET SERVER
// ---------------------------------------------------------

// Creates a standalone WebSocket server on port 8080. `port: 8080` means the WebSocket server will listen on:
// ws://localhost:8080
// Because this is a standalone WebSocket server, the `ws`
// library creates/manages the underlying HTTP server required
// for the initial WebSocket handshake.
// `wss` = WebSocket Server
const wss = new WebSocketServer({
  port: 8080,
});

// ---------------------------------------------------------
// CONNECTION EVENT
// ---------------------------------------------------------
// `connection` fires whenever a client successfully completes the WebSocket handshake and establishes a WebSocket connection.
// socket: - Represents ONE connected client. - Used to send data, receive messages, close the connection, etc.
// request: Represents the original HTTP Upgrade request. Useful for accessing headers, URL, IP address, etc.
wss.on('connection', (socket, request) => {
  // Get the IP address of the connected client.
  // `request.socket` = underlying Node.js TCP socket
  // `remoteAddress` = remote client's IP address
  const ip = request.socket.remoteAddress;
  console.log('Client connected:', ip);

  // -------------------------------------------------------
  // MESSAGE EVENT
  // -------------------------------------------------------

  // Runs whenever this particular client sends a message to the WebSocket server.
  // `rawData` is the data received from the client.
  socket.on('message', (rawData) => {
    // Convert the received Buffer into a normal string.
    // Example:
    // Client sends: "Hello"
    // rawData      → Buffer
    // message      → "Hello"
    const message = rawData.toString();
    console.log('Received message:', message);

    // -----------------------------------------------------
    // BROADCAST MESSAGE TO ALL CONNECTED CLIENTS
    // -----------------------------------------------------
    // `wss.clients` contains all currently connected WebSocket clients.
    // It is a Set<WebSocket>.
    // Example:
    // wss
    //  ├── Client A
    //  ├── Client B
    //  └── Client C
    // forEach() allows us to process each connected client.
    wss.clients.forEach((client) => {
      // Check whether the client's WebSocket connection is currently OPEN. readyState values:
      // 0 = CONNECTING
      // 1 = OPEN
      // 2 = CLOSING
      // 3 = CLOSED
      // `===` is important here.
      // Do NOT use `=` because `=` assigns a value.
      if (client.readyState === WebSocket.OPEN) {
        // Send the message to this client. Since we are looping through ALL clients, this becomes a broadcast.
        client.send(`server broadcast: ${message}`);
      }
    });
  });

  // -------------------------------------------------------
  // ERROR EVENT
  // -------------------------------------------------------

  // Runs when an error occurs on this client's WebSocket connection.
  socket.on('error', (err) => {
    console.log(`Error: ${err.message}, IP: ${ip}`);
  });

  // -------------------------------------------------------
  // CLOSE EVENT
  // -------------------------------------------------------
  // Runs when this client's WebSocket connection is closed.
  // IMPORTANT: `close` should be registered separately from `error`.
  // Do not put socket.on('close') inside the error handler, otherwise the close listener is registered only after an error occurs.
  socket.on('close', () => {
    console.log(`Client disconnected: ${ip}`);
  });
});

// Server startup message.
console.log('WebSocket server is live on ws://localhost:8080');

/*
* What is WebSocketServer?
    - It is a class provided by ws that allows your Node.js application to accept WebSocket connections.

* What does { port: 8080 } mean?
    - You telling the ws library
        - Create a standalone WebSocket server and listen for connections on port 8080

* What does "standalone" mean?
        - you're asking ws to create/manage its own underlying HTTP server for the WebSocket handshake.
        - Conceptually
        Node.js
            │
            ▼
            WebSocketServer
            │
            ├── HTTP server internally
            │       │
            │       └── WebSocket handshake
            │
            └── WebSocket connections

* What happens when the server starts?
    - your Node.js process starts listening on:localhost:8080

* Client connects
    - const socket = new WebSocket("ws://localhost:8080");
        - he browser doesn't immediately start sending normal WebSocket message

    - First, it performs the WebSocket handshake.
    Browser                         Server
        │                              │
        │──── HTTP GET + Upgrade ─────>│
        │                              │
        │<── 101 Switching Protocols ──│
        │                              │
        │════ WebSocket connection ════│

* wss.on(...)
    - "Listen for the connection event on the WebSocket server.
    - The wss object is an EventEmitter-style object.

* What is 'connection'?
    - connection is triggered when a WebSocket client successfully connects
    - More specifically, after the WebSocket handshake succeeds.
    - client => http upgrade request --> server => 101 -> websocket established => connection event -> Your callback executes.

*  callback
    (socket,request)=>{}
    - ws library gives you important object here
    - socket, request

* what is socket ?
    - socket represent the individual websocket connection with the client.
        - userA -> server
        - userB -> server
        - userc -> server
    - the sever gets 3 differnt socket object
    - i.e socket contain the individual connection to one client

* How to send data to the client .
    - socket.send('Hello)
    - ex
     wss.on('connection', (socket, request)=>{
        socket.send('welcome')
        })
    Server
    │
    │ socket.send()
    ▼
    Specific connected client

* how to  Receiving message
    - you can listen for message for that specific clients
    wss.on('connection', (socket)=>{
        socket.on('message', (message)=>{
            console.log(message.tostring())
            })
        })
* what is request ?
    - request represent the initial upgrade request.
    - or request contain headers such as cookies, ip address and more from the upgraded request now if
    HTTP
    ↓
    WebSocket handshake
    ↓
    101
    ↓
    WebSocket
    - during the connection event you can access information from that initial request
    - like request.url
        - request.headers

* What is readyState in WebSocket?
    - readyState tells you the current status/state of a WebSocket connection.
    - websocket having 4 standard states.

    | Value | Constant     | Meaning                         |
    | ----: | ------------ | ------------------------------- |
    |   `0` | `CONNECTING` | Connection is being established |
    |   `1` | `OPEN`       | Connection is successfully open |
    |   `2` | `CLOSING`    | Connection is being closed      |
    |   `3` | `CLOSED`     | Connection is completely closed |
    - readyState tells us whether the WebSocket is connecting, open, closing, or closed.


"Whenever a client successfully completes the WebSocket handshake, give me its WebSocket connection (socket) and the original HTTP upgrade request (request), so I can manage that client.
    1. wss = entire WebSocket server / collection of connections
    2. socket = one specific client's WebSocket connection
    3. request = the initial HTTP upgrade request
    4. wss.clients = all currently connected websocket clients
    5. client.readyState = current connection state
    6. webSocket.OPEN =  connection is open & can safely send
    7. client.send() = send data to the particular client
    8. wss.clients.forEach()  userful for braodcase.


What is wscat?
    - it is a command-line tool for testing WebSocket connections.
    - wscat is like a Postman for WebSockets, but it runs in the terminal.
    - It lets you:
        - Connect to a WebSocket server
        - Send messages
        - Receive messages
        - Test whether your WebSocket server is working
        - Quickly debug WebSocket APIs
    - npm install -g wscat
    - if server running on  const wss = new WebSocketServer({ port: 8080 }); then used  wscat -c ws://localhost:8080
    - wscat = CLI tool used to connect to and test WebSocket servers from the terminal.
    */
