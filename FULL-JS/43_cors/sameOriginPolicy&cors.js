/*
# same origin policy 

# What is Same-Origin Policy (SOP)?
1. The Same-Origin Policy (SOP) is a security feature implemented by web browsers
2. to restrict how documents or scripts from one origin can interact with resources from another origin.

#  Definition of "Origin"
1. An origin is defined by the combination of: schema like protocol http or https then Host like example.com , example.in or port 

| Part       | Example           |
| ---------- | ----------------- |
| **Scheme** | `http`, `https`   |
| **Host**   | `example.com`     |
| **Port**   | `80`, `443`, etc. |

# Two URLs have the same origin only if all three match exactly.

| URL 1                       | URL 2                       | Same Origin? |
| --------------------------- | --------------------------- | ------------ |
| `https://example.com/page1` | `https://example.com/page2` | ✅ Yes        |
| `http://example.com`        | `https://example.com`       | ❌ No         |
| `https://example.com`       | `https://sub.example.com`   | ❌ No         |
| `https://example.com:443`   | `https://example.com:8443`  | ❌ No         |

# Purpose of Same-Origin Policy
    1. To protect users from malicious websites accessing sensitive data from other websites via:
    1. cookies
    2.DOM access
    3. AJAX requests
    4. localStorage, sessionStorage

    
#  What Is Blocks same origin policy 

| Attempted Action                                | Allowed?                          |
| ----------------------------------------------- | --------------------------------- |
| One site's JS reading DOM of another site       | ❌ No                              |
| One site's JS accessing cookies of another site | ❌ No                              |
| AJAX (XHR or fetch) request to different origin | ❌ No     (unless CORS is enabled) |


#  What is Allows same origin policy 
| Action                                         | Allowed?                          |
| ---------------------------------------------- | --------------------------------- |
| Navigating to another origin (e.g., `<a>` tag) | ✅ Yes                             |
| Submitting a form to another origin            | ✅ Yes                             |
| Embedding an image from another origin         | ✅ Yes                             |
| Loading a script or style from another origin  | ✅ Yes   (but with limited access) |


# How to Bypass Same-Origin Policy
    1. CORS (Cross-Origin Resource Sharing)
    1. Server must explicitly allow other origins using HTTP headers:
    Access-Control-Allow-Origin: https://your-app.com


# Why SOP is Important
    1. Without Same-Origin Policy, any website you visit could:
    2. Steal your session cookies
    3. Read your emails or banking info
    4. Trick you into performing unintended actions (CSRF)

# summary table

    | Concept            | Description                                  |
| ------------------ | -------------------------------------------- |
| **SOP**            | Restricts access between different origins   |
| **Origin**         | Defined by scheme, host, and port            |
| **Blocked**        | Cross-origin JS, cookies, AJAX without CORS  |
| **Allowed**        | Navigation, form submission, media embedding |
| **Bypass Methods** | CORS, PostMessage, (legacy) JSONP            |



# cors 

# What is CORS (Cross-Origin Resource Sharing)?
    1. CORS is a security feature implemented by browsers 
    2. to control how web pages can make requests to a different origin (domain) than the one that served the web page.
    3. It’s essentially a relaxation of the Same-Origin Policy — but only if the server explicitly allows it.
    4. A way to allow cross-origin requests
    5. CORS (Cross-Origin Resource Sharing) is a browser security mechanism that allows or blocks web applications running at one origin (domain) from accessing resources from a different origin.
    6. This security rule is called the Same-Origin Policy, and CORS is the tool that controls which requests are allowed.

# Why Does CORS Exist?
    1. Browsers block requests from one origin to another unless the destination server gives permission. 
    2 This prevents malicious websites from reading sensitive data from another origin.

# What CORS Protects Against
    1. Prevents malicious websites from reading your private data from another domain.
    Example: attacker.com shouldn’t be able to read content from yourbank.com.


# When Do You See a CORS Error?
    1. You're calling a different origin (different domain, protocol, or port).
    2. The server does not include CORS headers allowing your origin.
    3. You're making a non-simple request (e.g., using PUT, DELETE, custom headers, or Content-Type: application/json) which triggers a preflight request.

# How to Avoid / Fix CORS Errors
    1. Enable CORS on the Server
        The server must include headers like:
        Access-Control-Allow-Origin: http://your-client.com
        Access-Control-Allow-Methods: GET, POST, PUT, DELETE
        Access-Control-Allow-Headers: Content-Type, Authorization

    2. Use a Proxy Server
        1. You can avoid CORS on the client by setting up a backend proxy that talks to the external API.

    3. Browser Plugin (Dev Only)
        1. You can install a plugin like "Allow CORS: Access-Control-Allow-Origin" in Chrome for development purposes.
    NEVER use this in production — it breaks the security model.


    # Summary table 
    | Topic            | Description                                                                               |
| ---------------- | ----------------------------------------------------------------------------------------- |
| CORS             | Mechanism to allow restricted resources on a web page to be requested from another origin |
| Triggered When   | Making a request from one origin to another                                               |
| Error Cause      | Server didn’t respond with appropriate `Access-Control-Allow-*` headers                   |
| Fix (Preferred)  | Add proper CORS headers on the server                                                     |
| Workaround (Dev) | Use proxy or CORS browser extension                                                       |


# How CORS Works
    1.Browser sends request to the server.
    2.Server must respond with special HTTP headers:
    3.Access-Control-Allow-Origin   (Optionally) Access-Control-Allow-Methods, Access-Control-Allow-Headers
    4. If headers are present and correct, browser allows the response.
    5. If not, the browser blocks it automatically.


# what simple request in cors 
    1.A simple request is a safe, allowed request that:
    2. Uses one of these HTTP methods:
        1. GET
        2. POST
        3. HEAD
    3. Uses only simple headers:
        1.Accept
\       2. Accept-Language
        3. Content-Type: Must be text/plain, application/x-www-form-urlencoded, or multipart/form-data (the ones HTML forms use)
    No authentication headers (like Authorization) or custom headers.

    ex.
    fetch("http://localhost:5000/data");
    1. Behind the scenes:
    The browser makes this request directly, without any pre-check: Access-Control-Allow-Origin: http://localhost:3000  The browser accepts the response.

# What is a Preflighted CORS Request?
    1. When the request is more risky, the browser double-checks with the server before sending the real request.This is called a preflight request. It uses the OPTIONS method.
    2. A preflighted request is one that doesn’t meet the conditions for a simple request. The browser sends a preflight OPTIONS request to ask the server if the actual request is safe to send.

    # What triggers preflight?
        1.You use methods like: PUT, DELETE, PATCH
        2. You use headers like: Authorization, X-Custom-Header
        3.You use Content-Type: application/json

        ex.
        fetch("http://localhost:5000/user", {
    method: "PUT",
    headers: {
        "Content-Type": "application/json",
        "Authorization": "Bearer myToken"
    },
    body: JSON.stringify({ name: "Vishal" })
    });

    Behind the scenes: The browser first sends: 
    OPTIONS /user HTTP/1.1
    Origin: http://localhost:3000
    Access-Control-Request-Method: PUT
    Access-Control-Request-Headers: Content-Type, Authorization

    The server must respond with:
    Access-Control-Allow-Origin: http://localhost:3000
    Access-Control-Allow-Methods: PUT
    Access-Control-Allow-Headers: Content-Type, Authorization

    If the response is valid, the browser sends the actual PUT request.






*/
