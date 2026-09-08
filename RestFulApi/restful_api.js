
// 1. what is restFul api ?
// Rest API stands for 
// REpresentational State Transfer,  Application programming interface

// A restful api is an architectural style for an application programming interface that uses http requests to access and use data.(data represent your resources)
// rest in not programming language.

// A REST API (Representational State Transfer API) is a type of web API that follows a set of architectural principles for communication and interaction between client and server over HTTP.

// REST APIs are designed to be simple, stateless, and scalable, and they are commonly used for web services.



//Key characteristics of REST APIs include:
// as per the rest(representational state transfer) architecture the server does not store any state about the client session on the server-side 
// stateless means that every http request happen in complete insolation when the client make and http request it include all information necessary for the server to fulfill that request 
// 1. Stateless Communication: Each API request from the client to the server must contain all the information the server needs to fulfill the request. The server does not store client context between requests, making the communication stateless.

// 2.Resource-Based: REST APIs focus on "resources," which are any kind of data or objects that the API provides access to (e.g., users, photos, posts). Each resource is identified by a URI (Uniform Resource Identifier), like https://api.example.com/users.

// 3 Standard HTTP Methods: REST APIs use standard HTTP methods to perform operations on resources:

// GET: Retrieve a resource.
// POST: Create a new resource.
// PUT or PATCH: Update an existing resource.
// DELETE: Remove a resource.
// JSON Format: Data is usually exchanged in JSON format (though XML and other formats are also possible), as JSON is lightweight and easy to work with.
// 4.  Uniform Interface: REST APIs follow a uniform interface, meaning they standardize how clients and servers interact, which makes APIs more predictable and easier to use.


// 2. what is api ?
// it is software that allows tow application to communicate with each other over the internet and through various devices
// every time you access an app like facebook or check the weather on your smartPhone 
// API (Application Programming Interface) is a set of rules and protocols that allow one software application to interact with another.
//  APIs specify how software components should interact, enabling communication between different applications or systems.



// Http Method :

// post
// Get
// put
// patch
// delete


// Q what is difference between put and patch :

// PUT Method :  (Full replacement of resource)
// Full Update: The PUT method is typically used to replace an entire resource with a new version. When you send a PUT request, you usually send the complete data for the resource, not just the part you want to update.
// Idempotent: Sending the same PUT request multiple times will always yield the same result since it completely replaces the resource each time.
// sent Entire resource data
// used to :Replace a resource

// PATCH Method  : (Partial update of resource)
// Partial Update: The PATCH method is used for making partial updates to a resource. You only need to send the fields you want to change, and the other fields will remain unchanged.
// Idempotent : PATCH is not inherently idempotent.(depends on the API implementation): Like PUT, PATCH is generally idempotent, but it’s more flexible since it modifies only specific fields rather than replacing the entire resource.
// sent : Only fields to be updated
// use to Modify specific fields


