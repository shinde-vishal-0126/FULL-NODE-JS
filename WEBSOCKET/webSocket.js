/*
@ websocket

----------------------------------------------------------------------------------------------------------------------------------
    # pooling
        - Polling is a technique where the browser repeatedly sends HTTP requests to the server to check whether something has changed.

        Browser                         Server
            │                              │
            │──── HTTP GET /messages ────>│
            │<────── No new message ──────│
            │                             │
            │──── HTTP GET /messages ────>│
            │<────── No new message ──────│
            │                             │
            │──── HTTP GET /messages ────>│
            │<────── New message ─────────│

        -This can be wasteful for real-time applications because the client keeps asking even when nothing has changed.
        - http if http are inefficinet for real time because Every HTTP request also carries request/response overhead such as headers.

----------------------------------------------------------------------------------------------------------------------------------

@ Why HTTP polling is not ideal for real-time apps?

    - For applications like chat, Discord, live notifications, live tracking, etc., the server may need to send data immediately when something happens.
    -   Client: "Anything new?"
        Server: "No."

        Client: "Anything new?"
        Server: "No."

        Client: "Anything new?"
        Server: "Yes! Here is the message."
    - There is a delay between polling intervals.

----------------------------------------------------------------------------------------------------------------------------------


@ How do real-time apps feel instant?

    - Instead of repeatedly asking: they establish a persistent connection:
    - Client ═════════════════ Server
              Open connection
    - The connection stays open, allowing the server to send data whenever an event occurs:

        Client                         Server
        │                              │
        │══════ persistent connection ═│
        │                              │
        │                              │ New message!
        │<────── message ──────────────│
        │                              │
        │<────── notification ─────────│
        │                              │

    - One common protocol for this is WebSocket.

# simple comparision

Polling:
--------
    Client ── HTTP Request ──> Server
    Client <─ HTTP Response ── Server

    Client ── HTTP Request ──> Server
    Client <─ HTTP Response ── Server

    Repeated again and again

WebSocket:
----------

    Client ═══════════════════ Server
            Persistent
            connection

    Server can send whenever needed

    - HTTP is excellent for request/response APIs. The issue is that repeated polling is inefficient for applications requiring low-latency, continuous updates.
    - WebSocket is designed for persistent, bidirectional communication.

----------------------------------------------------------------------------------------------------------------------------------

@ what is protocol ?
    - A protocol is a set of rules that defines how two systems communicate
    - Protocol = A predefined set of rules that defines how two systems communicate and exchange data.
    - Think of a protocol as a common language + rules between client and server.
    - comman protocol
        1. http : request -> response protocol
            - its ammazing for website, api, and loading pages.
            -
        2. webSocket : persistent connection & bidirectional communication
        3. tcp : Reliable transfer of bytes
        4. udp : fast datagram based communication

@ for websocket
    Browser
    │
    │ HTTP WebSocket Handshake
    ▼
    Server
    │
    │ 101 Switching Protocols
    ▼
    WebSocket Protocol
    │
    ╞══════════════════════╡
    │   Persistent connection
    │
    │ <──── data ────>
    │ ──── data ─────>

----------------------------------------------------------------------------------------------------------------------------------

# main concept of the websocket ?


                 WebSocket System
                       │
       ┌───────────────┼────────────────┐
       │               │                │
   Connection       Messaging        Reliability
       │               │                │
  Ghost connection   Unicast          ACK
  Ping/Pong          Broadcast        Retry
  Heartbeat          Room             Ordering
       │             Pub/Sub
       │               │
       └───────────────┼────────────────┘
                       │
                  Backpressure

----------------------------------------------------------------------------------------------------------------------------------

@ What is websocket ?

    - To real time communication we need ptotocoal that support a permanent two way connection .thas websocket.
    - WebSocket is a communication protocol that provides a persistent, full-duplex connection between client and server.
    - websocket connection stay open.so client and server can sned messages any time .(so client or server are communicate each other ) so this is called as full duplex.
        - i.e both side can talk same time
    - websocket are cheaper (less expensive )  then polling becaues with polling every check send large http headers. but the websocket once the connection open messages are tinly. its alos more efficinet for servers because its harder to handle thousand of http request opening & closing. then to keep thousands of websocket connection just setting there idel

----------------------------------------------------------------------------------------------------------------------------------

@ what is websocket handshaking ?

    - A WebSocket handshake is the initial process used to establish a WebSocket connection between the client and server.
    - WebSocket starts the connection using an HTTP request, then upgrades that connection to WebSocket.
    - WebSocket starts as an normal HTTP connection or requeat but the browser adds a special  header basically saying Hai server can we upgrage this connection to websocket , and then it the server supports it  replies with http 101 switcing protocol so it is upgraded from HTTP to WebSocket using the HTTP 101 Switching Protocols response. and now we have something called a websocket tunnel , open, persistent and real time
    - unlike http & https websocket also have 2 mode ws:// (unencrypted) and then ws:// (encrypted)
    - flow
    1. client start with HTTP (The browser initially send a normal http request )
            GET /chat HTTP/1.1
            Host: example.com
            Upgrade: websocket
            Connection: Upgrade
            Sec-WebSocket-Key: abc123...
            Sec-WebSocket-Version: 13

    - The important headers are:
            Upgrade: websocket
            Connection: Upgrade

    2. Server accepts the upgrade
        - If the server supports WebSocket, it responds:
            HTTP/1.1 101 Switching Protocols
            Upgrade: websocket
            Connection: Upgrade
            Sec-WebSocket-Accept: xyz...

    - They tell server i want to upgrade this http connection into a websocket connection

----------------------------------------------------------------------------------------------------------------------------------

@ What does 101 mean ?

    - 101 is http status code
    - it is a switching protocol
    - i.e i agree to switch existing coneection from http protocl to websocket protocol
            HTTP connection
            │
            │ Upgrade request
            ▼
        WebSocket handshake
            │
            │ 101 Switching Protocols
            ▼
        WebSocket connection

    - after 101 it is no longer normal HTTP .
    - before 101
        Client ───── HTTP Request ─────> Server
        Client <──── HTTP Response ───── Server
    - after 101
        Client <════════ WebSocket ════════> Server
    - Now both sides can continuously send WebSocket messages:
        Client ──────── message ─────────> Server
        Client <──────── message ───────── Server
        Client ──────── message ─────────> Server
        Server ──────── message ─────────> Client
    - There is no need to create a new HTTP request for every message.S
----------------------------------------------------------------------------------------------------------------------------------

Why is it called a "handshake"?
    - Because both sides first agree to establish the WebSocket communication.

# Note :
    - WebSocket uses HTTP for the initial handshake. The client sends an HTTP GET request with Upgrade: websocket and Connection: Upgrade headers. If the server accepts the upgrade, it responds with HTTP 101 Switching Protocols. After the 101 response, the connection switches from HTTP to the WebSocket protocol and supports persistent, full-duplex communication.

----------------------------------------------------------------------------------------------------------------------------------


@ How websocket manage a connections ?
    - a websocket connection as a long-lived conversation between client and server so its break down into the real production architecture
    - life cycle of webscoket connection

    Browser
        │
        │  1. Connect
        ▼
        HTTP WebSocket Handshake
        │
        │  2. Upgrade
        ▼
        101 Switching Protocols
        │
        │  3. Persistent connection
        ▼
        WebSocket Conversation
        │
        ├── Client → Server messages
        ├── Server → Client messages
        ├── Ping/Pong
        ├── ACK
        └── Close

    1. connect
        - client create websocket : const socket = new WebSocket("ws://localhost:8080");
        - at this movment the websocket connecton is not yet esabilished.
        - the browser stats the websocket handshake using http
    2. upgrate request
        - when browser send http request with header so server accept this request and switch 101 switchig protocol with websocket tunnel
    3. state
        - the big architecture picture differences
        1.http
            - no memory of previous requests
            - normal http is generally treated as stateless : the server does not inherently need to keep a live connection object representing that client between request.
            - you can still have application state with http session, cookie, database , cache etx but the http request itself is independent.


        2. websocket :
            - websocket connection oriented & stateful at the connection layer.
            - websocket other hand are stateful (the server hold a refrences to your websocket in memory) and that how it can push data to you instntly
            - The server maintains a live connection/reference:
            Client A
                │
                │ WebSocket connection
                ▼
                Server
                │
                └── socket object (Now the server knows Therefore, when something happens: The server doesn't need to wait for User B to ask:)
                    - No polling is required.

    # But state creates a new problem: Ghost connections
        - so what exactly happen
        - ex. the server (persisstent connection shared state) maintain the memroy but when ever if user A network suddenly disapppers but the server may temporarily still have
          User A
            X
            │
            Internet disconnected
            │
            ▼
            Server
    - connections.has(socketA) // true
    - even though the client is no longer reachable. That's a ghost/stale connection

------------------------------------------------------------------------------------------------------------------------------------------

@ What is Ghost connection ?
    - A ghost connection is a connection that appears alive from one side, but the client is actually disconnected/unreachable.
        Client ───────── WebSocket ───────── Server
            X
            Network disappears
    - The server may still have: socket.connected === true, but the client is actually gone.

------------------------------------------------------------------------------------------------------------------------------------------

@ how detect Ghost connection ?
    - Use heartbeat / Ping-Pong
    Server                         Client
        │                              │
        │ -------- PING -------------> │
        │ <-------- PONG ------------- │
        │                              │

    - If the client doesn't respond within a timeout
        PING
        ↓
        No PONG
        ↓
        Timeout
        ↓
        Close connection
        ↓
        Cleanup resources
    - Important: Ping/Pong is for connection health, not business-message reliability.

------------------------------------------------------------------------------------------------------------------------------------------

@ How do we solve ghost connections?
    - using hearbeat/ ping-pong
    - a server periodically check : "Are you still alive?" if the client respnse pong -> communication healthy
    - it doesn't
        PING
        ↓
        No PONG
        ↓
        Timeout
        ↓
        Close socket
        ↓
        Remove socket from memory
    - to prevent ghost connection the server send a tiny ping and the client responsds with a pong if the server stops hearing pongs it assumes the client is dead and terminates the socket that prevent the ghost connections.

    - now you might think wait if we ping every 30 seconds isn;t basically polling not even close because polling is an entire http request. but websocket ping is basically tiny impulse on an already open tunnel.
        - it is massively lighter,
        - massively cheaper
        - far easier on battery
------------------------------------------------------------------------------------------------------------------------------------------


@ what is ping pong
    - ping (Heartbeat)
    - pont (acknowledgment)
    - so ping pong is periodic ping / pong messages ensure the connection remains active and detec dropped connections.


@ production webSocket lifeCycle

        1. CONNECT
            ↓
        2. HTTP HANDSHAKE
            ↓
        3. UPGRADE
            ↓
        4. 101 SWITCHING PROTOCOLS
            ↓
        5. CONNECTION ESTABLISHED
            ↓
        6. AUTHENTICATION / IDENTIFICATION
            ↓
        7. STORE CONNECTION STATE
            ↓
        8. MESSAGE EXCHANGE
            ↓
        9. PING / PONG
            ↓
        10. ACK / RETRY (if required)
            ↓
        11. CLOSE / DISCONNECT
            ↓
        12. CLEANUP
    - "WebSocket maintains a persistent connection, and the server keeps connection-related state/reference for that active socket. Application state can still be stored externally in databases, Redis, etc."

------------------------------------------------------------------------------------------------------------------------------------------

@ now lets about data transfer  (like what actually gets sent through that tunnel )
    - so websocket send messages & there are 2 main types
        1. text (json)
            - most real time app send json things like user is typing, new messags ,
            - using socket you can send like
                socket.send(JSON.stringify({userid:42 , status:'typing'}))
            - text or json are human readable, easy to debug, and perfect for 99 % app
        2. binary (raw)
            - binary get audio streaming, video frames, large payloads.
            - insted of sending test you send raw bytes using
                1. arrayBuffer
                2. blob
            - so is faster, smaller, & more effcient.

------------------------------------------------------------------------------------------------------------------------------------------

@ But How does the server know of what type of message it is ?
    - at the lowest level websocket use something call an "opcode "
    - its basically a lable that says this frame is text, this frame is binary  this frame is closing and this fram is pingpong
    - you won't have deal with opcode directly most of the but its what makes the whole protocol work cleanly and then ther is back pressure .

------------------------------------------------------------------------------------------------------------------------------------------

@ What is opcode
    - opcode stand for : operation code
    - it is samll filed inside every websocket frame that tell the receiver what kind of frame it is.
    WebSocket Frame
        ┌───────────────┬───────────────┬──────────────┐
        │    Header     │    Opcode     │    Payload   │
        └───────────────┴───────────────┴──────────────┘
                            ↓
                    "What is this?"
    - Main websockets opcodes

        | Opcode | Name         | Purpose                        |
        | -----: | ------------ | ------------------------------ |
        |  `0x0` | Continuation | Continues a fragmented message |
        |  `0x1` | Text         | Text data, usually UTF-8       |
        |  `0x2` | Binary       | Binary data                    |
        |  `0x8` | Close        | Close the connection           |
        |  `0x9` | Ping         | Heartbeat/check connection     |
        |  `0xA` | Pong         | Response to Ping               |

    1. text 0x1
        - when you send socket.send('hello');
        - the websocket frame has opcode = 0x1 : This frame contains text data.
    2. binary 0x2
        - for binary data socket.send(binarydata)
        - the opcode is 0x2 (for binary data ) useful for  images, audio, video, binary files, efficient structured binary protocols
    3. ping  0x9
        - ping opcode 0x9 : to check whether the connection is alive.
    4. pong 0x8
        - when one side wants to colse  opcode is 0x8
            Client                    Server
                │                         │
                │──── CLOSE (0x8) ──────> │
                │<──── CLOSE (0x8) ────── │
                │                         │
                X     Connection closed
    5. Continuation — 0x0
        - Large messages can be split into multiple frames.
        Large message
            ↓
        ┌─────────┐
        │ Frame 1 │ Opcode 0x1
        ├─────────┤
        │ Frame 2 │ Opcode 0x0
        ├─────────┤
        │ Frame 3 │ Opcode 0x0
        └─────────┘
    - The first frame identifies the message type (text or binary), and continuation frames use 0x0.
    - easy way to remember
        0x0 → Continuation
        0x1 → Text
        0x2 → Binary

        0x8 → Close
        0x9 → Ping
        0xA → Pong
    - Opcode is a 4-bit field in a WebSocket frame that identifies the type or purpose of the frame, such as text, binary, ping, pong, close, or continuation.

------------------------------------------------------------------------------------------------------------------------------------------

@ What is Backpressure ?
    - Backpressure happen when the producer generates data faster then the consumer can process it.
    - Data is coming faster than the receiver can handle it.
    Producer
        │
        │ 1000 messages/sec
        ▼
        WebSocket Server
        │
        │ 100 messages/sec
        ▼
        Slow Client (he server is producing faster than the client can consume.)
    - eventually having memory problem
    - simple example
    - imagin websocket server sending live stock priece the producer produce 1000 message/sec but the client can process only 100 message/sec
    - so the remaining messages start building up in buffer / queues
          Messages
            ↓
            [1000]
            [2000]
            [5000]
            [10000]
            ↓
            Buffer keeps growing
            ↓
            Memory / latency problem
    - That's backpressure.
    - fro websocket application this can happen with
        - lacation tracking,
        - large chat room
        - real time analysis

------------------------------------------------------------------------------------------------------------------------------------------

@ how to handle backpressure ?
    1. Buffer :
        - Temporary store messages.
        - but the buffer have maximum limit
        - producer --> Buffer / queue --> consumer
    2.Drop old/ stale messages
        - for real time data you may not need every updated
        - if the client slow you may only care about the latest value
        - this is useful for things like current stock price or current location

    3. Throttle
        - reduce the sending rate

    4. Batch
        - insted of sending msg, msg2, mgs3, msg4... sned json
        - like {
        type:'batch'
        'evemts': [{
            {}
            {}
            {}
            }]
        }
    5. Disconnect extremely slow clients
        - if a client queue become to large
        - Queue --> Too large --> slow consumer --> close connection
        - so this perfect the server and other client

# note :
    - Backpressure is a situation where a producer generates or sends data faster than the consumer can process it.
    - In WebSocket systems, it can cause buffers to grow, increasing memory usage and latency. It can be handled using bounded queues, throttling, batching, dropping stale messages, or disconnecting extremely slow clients.

------------------------------------------------------------------------------------------------------------------------------------------

@ How to create websocket ?
    - There are 3 option to create websocket
        1. socket.io
        2. ws library
        3. pusher
        4. ably


1. socket.io
    - Socket.IO provides a higher-level real-time communication layer.
    - Bidirectional and low latency communication for ever platform
    - it's give full managment suites on top of websockets, reconnect, rooms, fallbacks, whole package
    - but it's heavier, you ship extra client code & every message comes with extra overhead, it speed for development  but not for the purest websocket experiences
        - Bidirectional communication
        - Low-latency communication
        - Automatic reconnection
        - Rooms
        - Namespaces
        - Events
        - Broadcasting
        - Acknowledgements
        - Connection management
        - Fallback transports when WebSocket isn't available

    - Disadventages
        - It has more abstraction and overhead than using the native WebSocket protocol directly.
        - You also need the Socket.IO client/server ecosystem rather than simply using a standard WebSocket client.

    - when to used
        - Chat
        - Rooms
        - Presence
        - Reconnection
        - Events
        - Fast development

------------------------------------------------------------------------------------------------------------------------------------------

2. pusher & ably
    - This are websocket as services tool
    - you dont host the server you just pay them and it just scales
    - Pusher is a WebSocket-based managed service.Instead of managing your own WebSocket infrastructure:

------------------------- -----------------------------------------------------------------------------------------------------------------


3. ws library
    - it is low level but high performances route
    - ws is a popular Node.js WebSocket library.
    - it is fast with minimul overhead and matches the brower websocket api closely
    - you build your features like room, hearbeat, reconnection, auth logic & if the performances and low latency matter this is real deal
            Your Application
            ↓
            ws
            ↓
         WebSocket protocol
            ↓
            TCP

    - Advantages
        - Lightweight
        - Low overhead
        - High performance
        - More control
        - Close to the WebSocket API

    - when to used Good when:
        - Performance matters
        - You need fine-grained control
        - You want minimal abstraction
        - You're building custom real-time infrastructure

@ websocket state machine
    - websocket is basically a state machine if you try to send data in the wrong state, you ll get bugs, broken messages or crashes,
    - so we need to understand 4 different state
            CONNECTING
            │
            │ handshake succeeds
            ▼
            OPEN
            │
            │ close() / disconnect
            ▼
            CLOSING
            │
            ▼
   CLOSED
    1. connectiong : handshake still happening (dont send yet) --> Don't try to send normal application messages before the connection is open.
    2. opem : This is safe zone for sending the data  , the tunnel is live you can send (The WebSocket connection is established.)
    3. closing : connection is shutting down. stop pushing data (The connection is in the process of shutting dow) --> Avoid sending new application messages.
    4. close : The connection has been completely closed.
    - and the reconnect

    - you can check anthing using
        - socket.readyState
    - we can managing this websocket from both client and server.


            new WebSocket(url)
                │
                ▼
        CONNECTING (0)
                │
                │ handshake
                │
                │ 101 Switching Protocols
                ▼
            OPEN (1)
                │
                ├── send()
                ├── receive
                ├── ping/pong
                └── messages
                │
                │ close()
                ▼
            CLOSING (2)
                │
                ▼
            CLOSED (3)
                │
                │ reconnect strategy
                ▼
        CONNECTING (0)

# note :
    - A WebSocket connection follows a lifecycle: CONNECTING, OPEN, CLOSING, and CLOSED.
    - During CONNECTING, the HTTP-based WebSocket handshake is performed.
    - After the server returns 101 Switching Protocols, the connection enters OPEN and both sides can exchange messages.
    - When either side closes the connection, it moves through CLOSING to CLOSED. Reconnection is not a WebSocket state;
    - it is an application-level mechanism that creates a new WebSocket connection.


------------------------- -----------------------------------------------------------------------------------------------------------------


@ server side event for the websocket :
    - on the server you are host, you are listening for client joining, sending data, disconnecting, crashing all of its.
    - On the server side, a WebSocket server usually handles a few important events during the connection lifecycle.
    - you starting pint is the connection
            connection
            ↓
        Client connected
            │
            ├── message
            │
            ├── pong
            │
            ├── error
            │
            └── close
    1. connection :
        - entry point
        - Triggered when the WebSocket handshake succeeds.
        - This is where you typically:
            - Authenticate/identify the client
            - Store the socket
            - Initialize connection state
            - Register event handlers
            - Join rooms/channels

            wss.on("connection", (socket) => {
            console.log("Client connected");

            });
    2. message :
        - Triggered when the client sends data.
             Client
            │
            │ message
            ▼
            Server
            │
            ▼
            message event

            socket.on("message", (data) => {
            console.log(data.toString());
            });
        -
    3. close
        - Triggered when the WebSocket connection closes.
        - This is very important for cleanup:
            close
            ↓
            Remove socket from connections
            ↓
            Leave rooms
            ↓
            Cleanup resources

            socket.on("close", () => {
            console.log("Client disconnected");
            });

    4. error :
        - Triggered when a WebSocket error occurs.
        - You should handle errors so connection problems don't become unhandled errors in your application.
            socket.on("error", (error) => {
            console.error(error);
            });

    5. pong
        - Used with server-side heartbeat.
            socket.on("pong", () => {
            socket.isAlive = true;
            });

            Server                    Client
                │                         │
                │──── PING ──────────────>│
                │<──── PONG ──────────────│
                │                         │
                │      Connection alive   │

# There are WebSocket protocol events/frames and library-level events.

    Protocol level
        ↓
        Text
        Binary
        Ping
        Pong
        Close

    - While in Node.js ws, you commonly handle them through:
        connection
        message
        close
        error
        pong


- On the server side, WebSocket applications typically handle connection, message, close, error, and heartbeat-related events such as pong.
    - The connection event initializes the client,
    - message handles incoming data,
    - pong is used for heartbeat checks,
    - error handles connection failures,
    - and close is used to clean up connection-related resources.
                */

// --------------------------------------------------------------------------------------

/*
* on the client side the native websocket api give you 4 main event
    - websocket Client Events
    1. open :  connection established
    2. message : server sent data
    3. error : connection error
    4. close : connection closed
# client side example

const socket = new WebSocket("ws://localhost:8080");

1. Connection established
socket.onopen = () => {
    console.log("Connected");

    socket.send(JSON.stringify({
        type: "message",
        data: {
            text: "Hello Server"
        }
    }));
};

2. Server sends message
socket.onmessage = (event) => {
    console.log("Received:", event.data);
};

3. Error
socket.onerror = (error) => {
    console.error("WebSocket error:", error);
};

4. Connection closed
socket.onclose = (event) => {
    console.log("Disconnected");
    console.log("Close code:", event.code);

CLIENT SIDE
────────────
open → Connection established
message → Server sent data
error → WebSocket error occurred
close → Connection closed
send() → Client sends data
close() → Client closes connection
readyState → Check connection state

- On the browser side, I handle the WebSocket lifecycle using onopen, onmessage, onerror, and onclose. I use onopen to start communication, onmessage to process server messages, onerror to handle errors, and onclose to clean up and optionally trigger reconnection. I also check readyState before sending data



@ what is envelope pattern in websocket ?
    - Envelope pattern means putting your actual message/ data inside a strandard wrapper structure insted of sending randome data like
    - An envelope is a standard wrapper around your actual message/data.
{
name: 'vishal',
age : 25
}
- insted of that you define a common structure around the data:
{
  "type": "event",
  "event": "user.updated",
  "requestId": "req-123",
  "timestamp": 1726650000,
  "data": {
    "name": "Vishal",
    "age": 25
  }
}

- The outer part is the envelope and data is the acutal playload.
- Envelope Pattern = A standard message wrapper that contains metadata + the actual payload.
- without envelope patter
    - You might send different format so The server / client has to gess what type of message is this ? the become difficult as your application grow
- with envelope pattern
    - use one comman structure
    {
  "type": "event",
  "event": "order.updated",
  "requestId": "req-123",
  "timestamp": 1726650000,
  "data": {
    "orderId": 500,
    "status": "shipped"
  }
}

- Now the receiver immediately know
    - type : what kind of message ?
    - event : event -> what happen
    - order.updated
    - requestID - which request, req - 123
    - data - actual business data


# Comman envelope structure
{
  "type": "event",
  "event": "chat.message",
  "requestId": "req-123",
  "timestamp": 1726650000,
  "version": 1,
  "data": {}

1. type = defined the message categoreis like request, response, event, ack, error
2. event = Described what happen  like user.created, user.updated, user.created, order.updated , contest.started, contest.end
3. requestId = identifies a perticualr request  (this is very useful for ACK and request / respnse pattern )
4. timeStamp = Tell when the message was created, useful for - debugging, ordering, logging, monitoring
5. version = Message schema version - suppose later your message change version 1 to version 2
5. data = this is actual business playload

# request example
{
  "type": "request",
  "event": "user.get",
  "requestId": "req-123",
  "timestamp": 1726650000,
  "version": 1,
  "data": {
    "userId": 101
  }
}

# response example
{
  "type": "response",
  "event": "user.get",
  "requestId": "req-123",
  "timestamp": 1726650005,
  "version": 1,
  "data": {
    "userId": 101,
    "name": "Vishal"
  }
}
}
# event example
{
  "type": "event",
  "event": "order.updated",
  "timestamp": 1726650010,
  "version": 1,
  "data": {
    "orderId": 500,
    "status": "shipped"
  }
}

# ack example
{
  "type": "ack",
  "requestId": "req-123",
  "timestamp": 1726650011,
  "data": {
    "status": "success"
  }
}

# error example
{
  "type": "error",
  "requestId": "req-123",
  "timestamp": 1726650012,
  "version": 1,
  "error": {
    "code": "USER_NOT_FOUND",
    "message": "User does not exist"
  }
}


@ ey use envelop pattern
    - without envelope patter used differnt patter for differnet client
    - with envelope This give you
        - consistency  - every message follows the same structure
        - routing - type / event tell the server what to do
        - correlation  - requestId connect request & response
        - Debugging - timestampl & ids make tracing easier
        - versioning - version allow schema evolution
        - Error handling -  standarized error format
        - exeensibility - You can add metadata without chaining the payload structure.

- The Envelope Pattern is a messaging pattern where metadata such as message type, event name, request ID, timestamp, and version is placed in a standard wrapper around the actual business payload.
- It provides consistency, routing, correlation, error handling, and easier message evolution.
- Envelope = wrapper
- Payload = actual data

# in simple
type : what lgoic to run
id : track the messages
payload : acutal data
metadata : optional context


# there are 2 type of structure envelopes
    1. type base commands (list of action like chat messages, typing, user join )
        - this type base commands are perfrect for chat application, dashbord, collaborative tools

    2. topic bases messages
        - this is pub sub type or channel are dynamic
        - like topic : 'stock aapl ' data : {abdce} this are perfrect for sensors, Tickers, love markets, sports engines.


# differences between type/ command based vs Topic based ?
|             | Type/Command-based                         | Topic-based                          |
| ----------- | ------------------------------------------ | ------------------------------------ |
| Main field  | `type` / `action`                          | `topic` / `channel`                  |
| Purpose     | Tell server **what happened / what to do** | Tell server **which stream/channel** |
| Routing     | Based on message type                      | Based on subscription                |
| Example     | `typing`                                   | `stock.AAPL`                         |
| Typical use | Chat, collaboration                        | Stocks, sensors, sports              |
| Subscribers | Usually room/user based                    | Topic based                          |


@ Data transfer
    - 2 way to transfer data
        1. text (json)
            - json is default
            - it is easy, readable, debuggable, flexible
            - most of the app used json so json is the best choice
            - to send json string
            const message = {
            type: "chat.message",
            data: {
                userId: 101,
                message: "Hello"
            }
            };

ws.send(JSON.stringify(message));
        2. binray (raw bytes)
            - when binary are used when the messages have high frequency
            - it is used for GPS updates, mouse movements , Audion chunks, Game states. so insted of sending readable text you have to send raw bytes because it have less bandwidh and less latency for high speed data
            - comman binary format
                - Buffer - node js
                - ArrayBuffer - browser
                - Blob -  browser

# Important: WebSocket frames
    - At the protocol level, WebSocket transfers data using frames.
    - WebSocket
        │
        ├── Text Frame
        │      └── "Hello"
        │
        └── Binary Frame
                └── Buffer / Image / Audio / etc.
    - There are also control frames:
        Text      → application text
        Binary    → application binary data

        Ping      → connection health check
        Pong      → response to Ping
        Close     → close connection

    - WebSocket application data is primarily transferred as Text or Binary messages, which are carried inside WebSocket frames.And Ping/Pong/Close are control frames, not normal application data.



@ There are different pattern in which you can send messages
    - If you mean WebSocket communication patterns, these are the common patterns you should know for backend development and interviews.
    1. request - response patter
        - client send request and server send response
    2. Publish / Subscribe
        - a client subscribes to a topic / channel and the server publish event to subscribers.
        - At scale, Redis Pub/Sub is commonly used between multiple WebSocket servers.

    3.Broadcase
        - server send a messages to all connected clients
        - global announcement, live game events, system notification

    4. unicase
        - Server send a message to one specific client
        - used private messages , user specific notification

    5. Room / Group
        - Client are grouped into logical rooms
        - Use: chat rooms, multiplayer games, contests, live matches.

    6. Acknowledgement (ack)
        - Client send a message and server explicitly confirm that is processed it
        - use payment order important commands, message processing

    7. Event - deriven pattern
        - insted of asking the server repeatedly the server pushes event when something happen

    8. Heart beat / ping-pong
        - used to detect dead or stale connection
        - if the client doen't respond for a configured timeout

    9. reconnection pattern
        - When the connection break the client attemptes to reconnect.

    10. websocket + pub sub for scaling
        - for multiple websocket servers.
        - This is an important production WebSocket pattern.

1. Request/Response → client expects a result
2. Broadcast        → one → all (megaphone pattern :  one message go to every single connected client  ex. System announcements, Globla alerts, service status updates  )
3. Unicast          → one → one (it is DM direct Message only one person gets the message, you keep registry where you connect a specific user id to a socket  because used for private messages, user notification, Admin actions  )
4. multiCast        -> one to many  (used to send messages to specific rooms, groop chat pattern, you don't send to everyone you only send to a specific room used discord channels, game lobbies, live event chats, & collaborative documents.    )
4. Room             → one → group
5. Pub/Sub          → publish → subscribers
    - It is a messaging pattern where the publisher sends messages to a topic/channel, and subscribers receive messages from that topic/channel.
    - The publisher does not need to know who the subscribers are
             ┌──────────────┐
             │   Publisher  │
             └──────┬───────┘
                    │
                    │ publish
                    ↓
             ┌──────────────┐
             │    Topic     │
             │  "stock"     │
             └──────┬───────┘
                    │
             ┌──────┼──────┐
             ↓      ↓      ↓
          Client A Client B Client C
          subscriber subscriber subscriber

    - 1. publisher :  The publisher produce / send a messages
        - topic = stock:AAPL (it publich topic )
    2. topic / channel
        - The topic is the logical channel where messages are puhlished
        - ex
            stock:AAPL
            stock:TSLA
            chat:room:101
            contest:614
            notifications:user:123
        - Think of a topic as a radion channel

    3. subscriber
        - a subscriber says I am intereased in message from this toipc
        Client A → subscribe → stock:AAPL
        Client B → subscribe → stock:AAPL
        Client C → subscribe → stock:TSLA
        - ex when aapl price change
        Publisher
            │
            │ publish
            ↓
        stock:AAPL
            │
            ├────→ Client A
            └────→ Client B

    Q Why Pub/Sub is useful with WebSockets ?
            Load Balancer
             /     |     \
            ↓      ↓      ↓
          WS-1   WS-2   WS-3
    - Suppose you have 3 websocket client can connect to different servers
        Client A → WS-1
        Client B → WS-2
        Client C → WS-3
    - Now Client A sends an event that should reach B and C.
    - If you only use local WebSocket memory:
         WS-1
            └── Client A
    - WS-1 doesn't automatically know about clients connected to WS-2 and WS-3.
    - Pub/Sub solves this.
                Redis Pub/Sub
                /      |      \
               ↓       ↓       ↓
             WS-1    WS-2    WS-3
               │       │       │
               ↓       ↓       ↓
              A       B       C

    - WS-1 publishes'
    topic = contest:614
    message = "Question started"
    - Redis distributes it to the other WebSocket servers subscribed to that topic.

. Important difference: Broadcast vs Pub/Sub
        1. WebSocket Broadcast
        WebSocket Server
            │
            ├──→ Client A
            ├──→ Client B
            └──→ Client C
        - The server directly sends to it connected clients

        2. pub / sub
            - publisher => topic => subscribers
                - the publisher doesn't directly manage indicidual receivers.

@ pub / sub vs Queue
    1. pub/sub
        - one message can be delivered to multiple subscribers.
        Message
        ↓
        Topic
        ┌─┼─┐
        ↓ ↓ ↓
        A B C
    - good for
        - real time notification
        - live dashbord
        - stock prices
        - chat events
        - websocket synchronization

    2. Queue
        - Usually one message is processed by one consumer withing a consumer group
        - Message
            ↓
            Queue
            ┌─┼─┐
            ↓ ↓ ↓
            A B C
        - One worker processes the message
        - good for
            - background jobs
            - email processing
            - image processing
            - payment processing
            - asynchronous task
                - this is one reason kafka consumer group are different from simple pub sub

        1. Redis Pub/Sub Optimized for: "Deliver this event to currently connected real-time clients."
        2. Kafka Optimized for: "Process and retain this event reliably across distributed services."
        Pub/Sub is a messaging pattern where publishers send messages to a topic or channel without knowing the consumers, while subscribers listen to that topic and receive matching messages. It provides loose coupling between message producers and consumers.

6. ACK              → confirm processing (unlike http there no automati 200 so for critical action you add acks or acknowledgements. You send the message with an id the server process it and replies with the same id as a recept if the client doesn't get the recepit in time , retry thats how you add reliability on top of websocket  )
7. Event-driven     → server pushes when event happens
8. Heartbeat        → detect dead connections
9. Reconnect        → restore broken connection
10. Redis Pub/Sub    → synchronize multiple WS servers



@ Signaling in WebSocket
Signaling means exchanging the information required for two clients to find each other, establish a connection, and coordinate communication.
imp point
    . websocket itself is not a signaling protocol
    - websocket can be used as a signaling channel.
    - he server is mainly passing signaling messages between A and B.

Signaling vs WebSocket
    1. websocket
        - websocket is a communication mechanisum/ protocol provide persistent , bidirectional communication
    2.signaling
        - signaling is the purpose / role of the messages being exchagned to coordinate a connection
        WebSocket message:
        {
        "type": "call.request"
        } That is signaling.
    Where is signaling commonly used?

Especially in:

    Video calls
    Audio calls
    WebRTC
    Screen sharing
    Multiplayer games
    Peer-to-peer connections
    Connection negotiation

    - Signaling is the process of exchanging connection and session information between peers so they can establish and coordinate a communication session. WebSocket can be used as a signaling channel, especially for WebRTC, but WebSocket itself is not a signaling protocol.
websocket
    - Signaling + chat + join events
    - built on TCP and one of the primary way in which we transmit data on the internet
    - websocket run over the tcp
    tcp provide reliable delivery orderd delivery, retransmission of lost data.
     Important WebSocket point
     - WebSocket itself uses a single ordered TCP connection.
        - Therefore, if the underlying TCP stream is blocked by packet loss, WebSocket messages behind that point can experience delay.
webRtc
    - video/audio streaming


Head of line (HOL blocking)
    - when one message / packet at the front of a quest is delayed, it prevent the message behind it from being processed , even if those later messages are ready.
    - Head-of-Line Blocking occurs when a delayed or blocked message at the front of an ordered stream prevents subsequent messages from being delivered or processed, even when those later messages are otherwise ready.


sse (SEVER SENT EVENT)
    - SSE (Server-Sent Events) is a web technology that allows a server to continuously send real-time updates to a client over a single long-lived HTTP connection.
    - SSE = One-way real-time communication: Server → Client.
    - Unlike WebSocket, the client does not send messages back through the same SSE connection.

| Feature             | SSE             | WebSocket                 |
| ------------------- | --------------- | ------------------------- |
| Communication       | Server → Client | Client ↔ Server           |
| Direction           | One-way         | Two-way                   |
| Protocol            | HTTP            | WebSocket                 |
| Connection          | Long-lived HTTP | Persistent WebSocket      |
| Browser API         | `EventSource`   | `WebSocket`               |
| Automatic reconnect | Yes, built-in   | Usually application-level |
| Binary data         | No              | Yes                       |
| Real-time           | Yes             | Yes                       |
| Complexity          | Simple          | More flexible             |


# When should you use SSE?
SSE is useful when you mainly need server-to-client updates:
📈 Stock price updates
🔔 Notifications
📊 Live dashboards
📝 Live logs
🤖 AI response/token streaming
🚚 Delivery/order status
⚡ Server progress updates

- SSE (Server-Sent Events) is a server-push technology built on HTTP that allows a server to continuously send real-time event updates to a client over a persistent connection. It is one-way communication from server to client.
- it is lightweight,
simple
automatically reconnect


# differences websocket
    - two way real time apps , for chat, collaboration, dashbord

    2 webrtc
        - heacy medai , peer to peer

    3. webtransport
        - ultar low latency streaming, high performances, real time system

    4. sse
        - for one way server updates
         - feeds , streaming data ,.

- notes
    1. does the server need to push updates yes used sse , websockets
    2. does the clien need to talk back : websockets
    2. it it haeavy  audio/ video or huge data Yes the used webRtc.
    */
