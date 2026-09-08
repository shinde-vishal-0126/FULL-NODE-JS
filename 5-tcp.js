/*
@ TCP

Q. what is TCP ?

  - TCP stands for Transmission Control Protocol
  - TCP is a connection oriented protocol.
  - TCP is a reliable protocol.
  - TCP is a stream oriented protocol.
  - TCP is a transport layer protocol.
  - that provide a reliable, ordered, and error-checked delivery of a stream of data between applications running on hosts communicating via an IP network.
  - defination :
    - "TCP establishes a connection between two endpoints and provides reliable, ordered delivery of data."


Q why Tcp ?

  - Network is unreliable so network can experice problems like
      - packet loss
      - duplication
      - reordering
      - corruption,
      - congestion,(i.e too many packets in the network)

  - so TCP provides mechanisms for
      - reliable delivery
      - ordering
      - retransmission
      - flow control
      - congestion contorl (i.e to avoid congestion in the network means to avoid too many packets in the network)
 - so Tcp used to provide reliable communication over an unreliable network.
  - also TCP is used to provide a reliable communication channel between two applications running on different hosts in a network.


# Before normal TCP data transfer:

    Client
      |
      | SYN
      ↓
    Server
      |
      | SYN-ACK
      ↓
    Client
      |
      | ACK
      ↓
    Connection established
- This is called:
- TCP three-way handshake



# TCP THREE-WAY HANDSHAKE


1. SYN
  - Client asks: "Can we establish a connection?"
        ↓
2. SYN-ACK
  - Server responds: "Yes, I received your request and I'm ready."
        ↓
3. ACK : Client confirms: "Confirmed."
        ↓
TCP connection established.

# note

1. DNS → Finds the IP address.
2. IP → Identifies the network endpoint.
3. Port → Identifies the service endpoint on a host.
4. Socket → Communication endpoint used by an application.
5. TCP → Reliable, ordered byte-stream transport.
6. TLS → Secures communication.
7. HTTP → Application request/response protocol.
8. HTTPS → HTTP over TLS.



1. DNS is NOT a transport protocol.
  - DNS: Application-level naming/resolution system.
2 .TCP: Transport-layer protocol.
3. HTTP:Application-layer protocol.
4. HTTPS: HTTP secured using TLS.
5. IP: Network-layer protocol.


Q. TCP VS UDP
TCP:

- Connection-oriented
- Reliable
- Ordered byte stream
- Retransmission
- Flow control
- Congestion control

UDP:

- Connectionless
- No built-in delivery guarantee
- No ordering guarantee
- Message/datagram oriented
- Lower protocol overhead


Q. What happens when you enter an HTTPS URL in a browser?

- Answer:"When a user enters an HTTPS URL,
- the browser first resolves the domain name using DNS to obtain an IP address.
- DNS resolution may involve cached information, a recursive resolver, root servers, TLD servers, and the authoritative DNS server.
- After obtaining the IP address, the client establishes the appropriate transport connection. For traditional HTTPS over TCP, this starts with a TCP three-way handshake.
- Then TLS negotiation establishes a secure connection and allows the client to authenticate the server and establish encryption keys.
- After that, the browser sends an HTTP request over the secure connection. The server processes the request and sends an HTTP response containing a status code, headers, and optionally a body.
- The browser then processes the response and renders the result.


 # DNS → TCP → TLS → HTTP
This is one of the most important interview flows.

DNS: "Where is the server?"
        ↓
   IP address
        ↓
  TCP: "Let's establish reliable transport."
        ↓

    TCP connection
        ↓
  TLS:  "Let's secure the connection."
        ↓
    Secure connection

        ↓
  HTTP: "Let's exchange application data."
        ↓
  Request / Response


@ DNS vs TCP vs HTTP vs HTTPS

  1.DNS:
    - Purpose:Find the server's IP address.
    - Example:  example.com
                    ↓
                IP address

  2. TCP:
    - Purpose: Provides a reliable ordered byte-stream transport.
  3. HTTP:
    - Purpose: Defines application-level request/response communication.
  4. HTTPS:
    - Purpose: HTTP communication protected using TLS.


@ HTTP vs HTTPS

1. HTTP:

  - Not encrypted by TLS
  - Usually port 80
  - Data can be observed or modified by attackers on an
  - untrusted network

2. HTTPS:

  - HTTP over TLS
  - Usually port 443
  - Provides encryption, integrity protection and
  - server authentication

  Q. Complete web flow
  - User enters: https://www.example.com
        ↓
1. URL parsing
        ↓
2. DNS resolution
    www.example.com
        ↓
    IP address
        ↓
3. TCP connection
      SYN
        ↓
      SYN-ACK
        ↓
        ACK
        ↓
4. TLS handshake
        ↓
5. Secure connection established
        ↓
6. HTTP request
GET / HTTP/1.1
Host: www.example.com
        ↓
7. Server processes request
        ↓
8. Server sends HTTP response

HTTP/1.1 200 OK
        ↓
9. Browser receives response
        ↓
10. Browser parses/render resources
HTML
CSS
JavaScript
Images
etc.


@ Q. What is HTTP?

  - HTTP stands for: HyperText Transfer Protocol.
  - HTTP is an application-layer protocol used for communication between clients and servers.
  - An HTTP request contains:
      1. Method
      2. Target/URL/path
      3. Headers
      4. Optional body
  - HTTP itself is stateless : This means each request is independent from the protocol's perspective.
  - The server does not automatically remember previous requests.
  - Applications can maintain state using mechanisms such as:
    - cookies
    - sessions
    - tokens
    - databases
    - caches

@ Q. What is HTTPS?

 - HTTPS stands for: HyperText Transfer Protocol Secure.
 - HTTPS is HTTP sent over a secure TLS connection.

@ # WHY HTTPS?

  1. Confidentiality
    - Encrypts data so intermediaries cannot simply read it.
  2. Integrity
    - Protects against tampering and modification of data in transit.
    - Helps detect whether data was modified in transit.
  3. Authentication
    - Verifies the identity of the server (and optionally the client).

@ TLS
  - TLS stands for: Transport Layer Security.
  - TLS provides the security layer used by HTTPS.
  - Older documentation may mention: SSL
  - But modern HTTPS uses: TLS (not obsolete SSL versions.)

@ # TLS HANDSHAKE — HIGH LEVEL

Client
   |
   | ClientHello
   ↓
Server
   |
   | ServerHello + certificate
   ↓
Client verifies certificate
   |
   | Key agreement
   ↓
Secure session established
   |
   ↓
Encrypted application data

Modern TLS uses a key-agreement mechanism to establish
shared session keys.
*/
