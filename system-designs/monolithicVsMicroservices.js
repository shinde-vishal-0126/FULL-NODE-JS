/*
# MONOLITHIC & MICROSERVICES ARCHITECTIRE
Q. What is software architecture ?
    - Software Architecture is the high-level blueprint of a software system.
    - It defines how different parts (components/services) of the application are organized, how they communicate, and how the system meets business and technical requirements.
    - Software Architecture is the process of defining the structure, components, interactions, technologies, and design principles of a software system to ensure it is scalable, maintainable, secure, reliable, and performant.
    - 2 type of software architecture
                  Software Architecture
                           │
        ┌──────────────────┴──────────────────┐
        │                                     │
        ▼                                     ▼
 Monolithic Architecture          Microservices Architecture

 # 1. Monolithic architecture
    - A Monolithic Architecture is a software architecture style where the entire application is developed, built, deployed, and maintained as a single unified codebase and deployment unit.
    - monolithic architecture is an appraoch where the entire application is built as single unit.
    - The typcial application consists of three main componentes.
        1. frontEnd (ui)
        2. backend (Business Login)
        3. Database (Data access Layer);
    - In a monolithic architecture, all these components are part of one codebase and are deployed together.
    - "Mono" means single or one. Therefore, a monolithic application has one codebase and is deployed as a single application
    - Definition : A monolithic system is an application in which all modules are: Written together, Built together, Deployed together Run as a single unit This means ui (frontEnd, backend(Business Logic, and database access code )) are all combined in one project.

# Charactereistics
    - single codebase
    - All components (ui, Business Logic, Data Access)
    - Deployed as single (war, jar docker image)
    - all module or components are tightly couples
    - The entire application runs as single process
    - changes to amy module require redeploying the whole applidation

Q, @ When Monolithic architecture is Good ?
    - A Monolithic Architecture is a good choice when you are building a small or medium-sized application, especially in the early stages of a project.
    - Suitable for Starting a New Project
    - In monoLithic architecture all the modules are present in the single system, so they require fewer network calls as compared to another architecture.
    - Also having small Team
    - Also need faster development
    - It is comparatively easier to secure monolithic system
    - Integration testing easier
    - Less confusion .
- Monolithic Architecture नवीन किंवा लहान प्रोजेक्टसाठी सर्वोत्तम असते. कारण सर्व Modules एकाच Codebase मध्ये असल्यामुळे Development, Testing आणि Deployment सोपे होते. Modules मध्ये Direct Communication होत असल्यामुळे Network Calls कमी लागतात आणि Performance चांगली मिळते. तसेच Security Manage करणे आणि Integration Testing करणेही सोपे असते. त्यामुळे कमी Team आणि कमी Complexity असलेल्या Projects साठी Monolithic Architecture हा चांगला पर्याय आहे.
              Client
                │
                ▼
        Monolithic Application
   ┌────────────────────────────────────┐
   │   Authentication Module            │
   │   User Module                      │
   │   Product Module                   │
   │   Order Module                     │
   │   Payment Module                   │
   │   Notification Module              │
   └────────────────────────────────────┘
                      │
                      ▼
                  Database
    - All those model are defined in single code base i.e all the modules are tightly coupled to each other.

#  Advantages
    - Easy to develop for small applications / simple architecture
    - Less architectural complexity.
    - Easier to understand.
    - Faster initial development. ⇒ Easy Deployment
    - Higher developer productivity for small teams.
    - Easier debugging because everything is in one application.
    - Better Security (Initially) : Since all components are in one environment, fewer attack surfaces.
    - Fast Communication  ⇒ Less Network Calls - Modules communicate internally via function calls, not APIs → faster.
    - Less Infrastructure
# Disadvantages
    - A large codebase becomes difficult to maintain.
    - Tightly coupled modules. ⇒ All modules depend on each other. A bug in one module can crash the entire system.,
    - The entire system will be hanged because every module is interLinked and tightly couple
    - Slow deployments ⇒ The entire application must be redeployed for even a small change.
    - Scaling problem ⇒ Scaling requires scaling the whole application. ⇒ You cannot scale only one module
    - Single point of Failure ⇒ One module failure can impact the entire application ⇒ .In monolithic architecture every module is combined in a single system, if there is an error or bug in single module it can destroy the complete system
    - Technology Lock  ⇒ whole project build using same Technology
    - Difficult to Update ⇒ Changing one small feature requires redeploying the entire system.
    - Slower build and deployment as the application grows.
    - Technology Lock-in ⇒ All modules must use the same: Language , Framework, Database You cannot mix technologies easily.
    - Large Codebase Becomes Hard to Maintain ⇒ As the system grows, understanding and modifying code becomes harder.



# 2. Mocroservices architecture
    - Microservices Architecture is an architectural style in which an application is divided into multiple small, independent services. Each service is responsible for a specific business functiion and can be developed, deployed, scaled, and maintained independently.
    - This sercies run independently, have their own codebase, their own database or storage and 
                    Client
                      │
                      ▼
                 API Gateway
                      │
     ┌──────────┬──────────┬──────────┐
     ▼          ▼          ▼          ▼
 User Service  Chat     Payment   Notification
               Service   Service      Service
     │          │          │           │
     ▼          ▼          ▼           ▼
 PostgreSQL   MongoDB    MySQL      Redis



*/
