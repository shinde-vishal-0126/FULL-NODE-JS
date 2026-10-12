/*
@ SYSTEM DESIGN

Q. what is system desing ?
    - System Design is the process of planning and designing the architecture, components, modules, databases, APIs, communication mechanisms, and data flow of a software system so that it can meet both functional and non-functional requirements efficiently.
    - System Design म्हणजे एखाद्या Software Application ची Architecture, Components, Modules, Database, APIs, Communication, Data Flow आणि Infrastructure यांचे आधी नियोजन (Planning) करणे.
    - System Design is the blueprint of a software application before writing the actual code.
    - System Design means planning how a software application will work internally and externally.
    - System Design is the process of designing scalable, reliable, maintainable, secure, and high-performance software architecture that satisfies business requirements.

Q. What Does System Design Actually Design?
    | Component     | Description                     | Example                 |
    | ------------- | ------------------------------- | ----------------------- |
    | Architecture  | Overall structure of the system | Monolith, Microservices |
    | Client        | Who uses the application        | Web App, Mobile App     |
    | Server        | Business logic                  | Node.js, Java, Go       |
    | Database      | Data storage                    | PostgreSQL, MongoDB     |
    | Cache         | Faster data access              | Redis                   |
    | APIs          | Communication                   | REST, GraphQL, gRPC     |
    | Message Queue | Asynchronous communication      | Kafka, RabbitMQ         |
    | Load Balancer | Traffic distribution            | Nginx, HAProxy          |
    | Storage       | Store files/images              | Amazon S3               |
    | CDN           | Faster content delivery         | CloudFront              |
    | Monitoring    | Observe system health           | Prometheus              |
    | Logging       | Debugging                       | ELK Stack               |

Q. Gole of system desing ?
    1. Scalability : Can the application handle increasing users, requests, and data without significant performance degradation?
    2. High perforamnces : The application should respond quickly.
    3. Reliability :The system should consistently produce correct results.
    4. Availability : The application should remain accessible even during failures or maintenance.
    5. Maintainability : The system should be easy to understand, update, fix, and extend.
    6. Security : Protect user data and services.
    7. Cost Efficiency : A good design avoids unnecessary infrastructure costs while still meeting requirements.

Q. Why is System Design Important?
    1. Ensures Scalability : Suppose your application suddenly becomes popular.
    2. Improves Performance : A good design reduces response times.
    3.Improves Reliability : Failures are inevitable. A reliable system handles them gracefully.
    4. Improves Maintainability :A modular design makes it easier to: Fix bugs , Add features, Replace components , Scale individual service
    5. Reduces Development Cost : Good planning prevents costly redesigns later.
    6. High Availability ; System Design incorporates redundancy and failover mechanisms to keep services online.
    7. Security : Security is considered from the beginning, not added later.

    System Design म्हणजे Software Application तयार करण्यापूर्वी तिचे संपूर्ण नियोजन (Blueprint) तयार करणे. यात Architecture, Components, APIs, Database, Cache, Message Queue, Security, Data Flow, Scalability, Reliability आणि Infrastructure यांचा विचार केला जातो. चांगले System Design केल्यामुळे Application भविष्यात लाखो-कोट्यवधी Users हाताळू शकते, जलद प्रतिसाद देते, सुरक्षित राहते आणि बदल करणे सोपे होते.

    System Design आवश्यक आहे कारण ते Application भविष्यात वाढणारे Users, Data आणि Traffic हाताळण्यास सक्षम बनवते. ते Performance सुधारते, Reliability आणि Availability वाढवते, Security मजबूत करते, Maintenance सोपे करते आणि Business ला दीर्घकाळ टिकणारे, विश्वासार्ह Software तयार करण्यास मदत करते.

Q. Key Components of System Design ?
    1. Architecture Design : Defines the overall structure of the application. ex. Monolithic Architecture, Microservices Architecture, Event-Driven Architecture
    2. Server : The server processes requests and executes business logic. responsible for Authentication, Validation, Database access, Business rules
    3. Database design : Determines how data is stored and organized
    4. API Design : APIs allow different systems to communicate.
    5. Cache : A cache stores frequently accessed data in memory.
    6. Message Queue : Enables asynchronous communication between services.
    7. Load Balancer : Distributes incoming traffic across multiple servers.
    8. Database Sharding : Large datasets are divided across multiple databases.
    9. Replication : Copies data across multiple servers.
    10. Security : Protects systems from attacks.

Q. Type of system Desing
# 1. High-Level Design (HLD)
    - High-Level Design describes the overall architecture of the system
    - High-Level Design (HLD) is the architectural blueprint of a software system.
    - It describes
        - Overall architecture
        - Major components
        - Technologies
        - Communication
        - Data flow
        - Infrastructure
    - What the system looks like and how major components interact.
    - It answers questions such as:
        1. Which architecture will be used?
        2. Which services are required?
        3. Which database will be chosen?
        4. How will services communicate?
        5. How will the system scale?
    - HLD focuses on "What components exist and how they interact."
    - HLD defines the major modules, technologies, communication flow, databases, scalability strategy, and infrastructure required to build the application.

Q. Purpose of HLD ?
    - Before writing any code,
    - Architects answer questions like
        - What architecture should we use?
        - Which database is suitable?
        - Should Redis be used?
        - Should Kafka be introduced?
        - Should we use Microservices?
        - Should we use REST or gRPC?
        - How will the application scale?
        - These are all HLD decisions.

Q. What Does HLD Include?
    1. System Overview - Provides a bird's-eye view of the application.
    2. Architecture - Defines the overall architecture. Monolithic, Microservices , Event Driven , Serverless
    3. Major Modules : like authentication, chat like Each module has a clear responsibility.
    4. Technology Stack - HLD defines technologies. like which programming language used like js , python etc.
    5. Database Selection  - Instead of creating tables, HLD only decides Which database?
    6. Defind Communication Between Services : REST API , GRPC, kafka , or websocket
    7. Data Flow
    8. Non Functional Requirements
        1. Scalability : can support 1 M or 10M users
        2.Availability : Should remain online
        3.Reliability : Messages should never disappear.
        4. security : JWT, OAuth , encryption, https
        5. performances : Low latency
        6. Infrastructure
            - Typical HLD diagram includes
                - Load Balancer
                - API Gateway
                - Cache
                - Database
                - Kafka
                - CDN
                - Object Storage
                - Monitoring
                - Logging
Q. Comman component in HLD
    | Component              | Purpose                 |
    | ---------------------- | ----------------------- |
    | Load Balancer          | Distributes traffic     |
    | API Gateway            | Single entry point      |
    | Authentication Service | Identity                |
    | User Service           | User Management         |
    | Redis                  | Cache                   |
    | Kafka                  | Event Streaming         |
    | RabbitMQ               | Message Queue           |
    | Database               | Data Storage            |
    | CDN                    | Faster Content Delivery |
    | S3                     | Image Storage           |
    | Monitoring             | Prometheus              |
    | Logging                | ELK                     |

Q. Why is High-Level Design Important?
1. Understand the Architecture  : Everyone understands, How the application work
2, Better Scalability Planning : Architects decide How the application will scale.
3. Better Technology Selection : Choosing the wrong database can cost months.
4. Clear Team Boundaries : Large companies divide teams by service.
5. Easier Communication : Instead of reading thousands of lines of code, developers understand, the architecture diagram.

# 2. Low-Level Design (LLD)
        - Low-Level Design describes the implementation details of the modules identified in HLD.
        - It answers questions such as:
            1. What classes are needed?
            2. Which methods should each class expose?
            3. How will APIs be structured?
            4. What does the database schema look like?
            5. What business logic will be implemented?
    - LLD focuses on "How each component is actually built."4

    Q. What Does LLD Include?
    | Component           | Purpose                                       |
    | ------------------- | --------------------------------------------- |
    | Classes             | Represent entities and business logic         |
    | Interfaces          | Define contracts between components           |
    | Methods / Functions | Implement operations                          |
    | Relationships       | Associations, inheritance, composition        |
    | Data Structures     | Arrays, Maps, Queues, Trees, Heaps            |
    | Database Tables     | Detailed schema design                        |
    | API Contracts       | Request/response formats                      |
    | Error Handling      | Exceptions and retry logic                    |
    | Sequence Diagrams   | Interaction flow between objects              |
    | Design Patterns     | Factory, Strategy, Observer, Repository, etc. |

Q. Why is Low-Level Design (LLD) Important?
    - Once the High-Level Design (HLD) is finalized, developers need detailed implementation instructions. That is the purpose of Low-Level Design (LLD).
    - LLD explains how every module identified in HLD will actually be built.
    - Without LLD, every developer may implement the same feature differently, resulting in inconsistent code, poor maintainability, and integration issues.
1. Removes Ambiguity
    - One of the biggest advantages of LLD is that it removes confusion
    EX . Instead of saying: create user services.
    - LLD explains:
        - Which classes are required?
        - Which methods should each class contain?
        - What are the request and response models?
        - Which design pattern should be used?
        - What validation is required?
    - without LLD
        - Duplicate code
        - Different coding styles
        - Integration problems
2. Faster Development
    - When implementation details are already designed,
    - developers spend less time thinking about architecture and more time writing code.
    - nstead of asking:
        - Which class should I create?
        - What methods are needed?
        - Which validation should be performed?
    - they simply implement the agreed design.
3. Better Code Quality
    - LLD encourages
    - SOLID Principles
    - Design Patterns
    - Reusable Components
    - Loose Coupling
4. Easier Maintenanc : If the code is well designed, easy to make changes.
5. Easier Testing : Because every component has a clear responsibility,
7. Prevents Implementation Mistake: LLD is reviewed before coding begins.

Q  HLD VS LLD

| High-Level Design (HLD)                  | Low-Level Design (LLD)                            |
| ---------------------------------------- | ------------------------------------------------- |
| Big-picture architecture                 | Detailed implementation                           |
| Defines major components                 | Defines classes and methods                       |
| Chooses technologies                     | Implements business logic                         |
| Focuses on scalability and communication | Focuses on code structure and object interactions |
| Architecture diagrams                    | Class, sequence, and component diagrams           |
| Answer: **What should be built?**        | Answer: **How should it be built?**               |


| Feature       | High-Level Design (HLD)                                              | Low-Level Design (LLD)                                                      |
| ------------- | -------------------------------------------------------------------- | --------------------------------------------------------------------------- |
| Purpose       | Defines the overall architecture and major components of the system  | Defines the detailed implementation of each module identified in HLD        |
| Focus         | What the system is and how components interact                       | How each component is built internally                                      |
| Audience      | Solution Architects, Tech Leads, Senior Engineers                    | Backend Developers, Software Engineers                                      |
| View          | Bird's-eye view                                                      | Code-level view                                                             |
| Level         | Macro                                                                | Micro                                                                       |
| Includes      | Architecture, modules, infrastructure, communication, data flow      | Classes, methods, interfaces, database schema, algorithms, business logic   |
| Database      | Database selection (e.g., PostgreSQL, MongoDB, Redis)                | Table schema, indexes, relationships, constraints                           |
| API           | Service-to-service communication (REST, gRPC, Kafka, WebSocket)      | API endpoints, request/response models, validation, error handling          |
| Output        | Architecture diagrams, component diagrams, deployment diagrams       | Class diagrams, sequence diagrams, ER diagrams, detailed design documents   |
| Scalability   | Decides scaling strategy (horizontal/vertical, caching, sharding)    | Implements efficient code to support the chosen strategy                    |
| Security      | Authentication architecture, authorization flow, encryption strategy | JWT validation, role checks, password hashing, middleware implementation    |
| Example       | "We will use Redis as a distributed cache."                          | "Implement Redis caching with TTL = 300 seconds using cache-aside pattern." |
| Main Question | **What should be built?**                                            | **How should it be built?**                                                 |

Q. system Desing process
1. Gather Requirements
    1. functional requirement :
        - Define what the system should do.
        - ex. whatapp
            - User registration
            - Login
            - Send messages
            - Voice calls
            - Video calls
            - Status updates
            - Group chats
    2. non - functional requirement :
        -  Define how well the system should perform.
        - ex
        - Support 100 million users
        - 99.99% availability
        - Message delivery within 100 ms
        - End-to-end encryption
        - High scalability
2. Estimate Scale
    - Estimate:
        - Daily Active Users (DAU)
        - Requests per second (RPS)
        - Storage requirements
        - Bandwidth
        - Read/Write ratio
    - These estimates influence database choice, caching, sharding, and infrastructure.

3. Step 3: Define APIs
    - Design external interfaces.
    - Also define: Request format, Response format, Authentication, Error codes
4. Choose the Architecture
    - Decide the overall architecture.
    - Examples: Monolithic, Microservices, Event-Driven, Serverless
5. Design Data Storage
    - Choose the appropriate storage technologies.
    - PostgreSQL for transactional data, MongoDB for chat messages, Redis for caching , S3 for media files
6. Design Communication
    - Decide how components communicate.
    - Examples: REST APIs, gRPC, Kafka events, RabbitMQ, WebSockets
7. Plan Scalability & Reliability
    - Design for: Horizontal scaling, Load balancing, Caching, Database replication, Sharding, Failover, Auto-scaling

8. Address Security
    - Include: Authentication (JWT/OAuth), Authorization, HTTPS/TLS, Encryption at rest and in transit, Rate limiting, Input validation

9. Monitoring & Logging
    - Plan observability.Application logs , Metrics, Distributed tracing, Alerts, Health checks
10. Review & Optimize : Finally, review the design for:
    - Bottlenecks
    - Single points of failure
    - Performance improvements
    - Cost optimization
    - Future scalability


@ comman tool are used in system desing
| Tool / Diagram             | Purpose                                                      | Common Tools                           |
| -------------------------- | ------------------------------------------------------------ | -------------------------------------- |
| UML Class Diagram          | Model classes, interfaces, inheritance, and relationships    | Draw.io, Lucidchart, StarUML           |
| Sequence Diagram           | Show step-by-step interactions between objects/services      | Draw.io, PlantUML, Lucidchart          |
| ER Diagram                 | Design database tables and relationships                     | MySQL Workbench, dbdiagram.io, Draw.io |
| Architecture Diagram       | Visualize the overall system architecture and infrastructure | Draw.io, Lucidchart, Excalidraw        |
| Deployment Diagram         | Show servers, containers, cloud resources, and deployments   | Draw.io, Lucidchart                    |
| Flowchart                  | Represent business workflows and decision logic              | Draw.io, Lucidchart                    |
| API Documentation          | Describe REST/gRPC APIs                                      | Swagger (OpenAPI), Postman             |
| Database Modeling          | Design schemas, indexes, and constraints                     | dbdiagram.io, MySQL Workbench          |
| Load Testing               | Measure performance under traffic                            | Apache JMeter, k6, Gatling             |
| Monitoring & Observability | Track metrics, logs, and traces                              | Prometheus, Grafana, ELK Stack, Jaeger |

*/
