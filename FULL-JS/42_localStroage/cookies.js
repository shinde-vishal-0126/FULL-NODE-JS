/*
# cookies
    1. Cookies are small pieces of data (usually < 4KB) stored on the user's computer by the browser, 
    2.sent to the server with every HTTP request.

# Use Case
    1. Storing login sessions (e.g., authentication tokens).
    2. Tracking user behavior (analytics, ad personalization).
    3. Remembering user preferences (e.g., language selection).


    | #  | Use Case                    | Description                                        | Real-World Example                                                |
| -- | --------------------------- | -------------------------------------------------- | ----------------------------------------------------------------- |
| 1  | **Session Management**      | To track user sessions (logged-in status)          | Staying logged into Gmail or Facebook                             |
| 2  | **User Authentication**     | Store tokens/session IDs to validate identity      | JWT or session ID stored in cookie after login                    |
| 3  | **User Preferences**        | Save settings like theme, language, font size      | Light/Dark mode saved in cookie                                   |
| 4  | **Shopping Carts**          | Retain cart items across sessions/pages            | Amazon remembers cart items even after refresh                    |
| 5  | **Tracking and Analytics**  | Track user behavior, page visits, conversions      | Google Analytics uses cookies to identify repeat visits           |
| 6  | **Advertisement Targeting** | Deliver personalized ads based on user behavior    | Facebook or YouTube showing ads based on your history             |
| 7  | **Security Measures**       | Prevent CSRF attacks using secure cookies          | CSRF token stored in cookie for form validation                   |
| 8  | **A/B Testing**             | Identify which version of a page a user should see | Show different layouts to users and store the variant in a cookie |
| 9  | **Multi-language Sites**    | Remember selected language                         | `lang=en` stored in cookie when user selects English              |
| 10 | **Geolocation Preferences** | Store user’s location for regional content         | Show local news based on previously selected city                 |

# key point

    | Property           | Value                                     |
| ------------------ | ----------------------------------------- |
| Max Size           | \~4 KB                                    |
| Expiry             | Set manually using `expires` or `max-age` |
| Scope              | Domain + Path                             |
| Sent with          | Every HTTP request to matching domain     |
| Accessible from JS | If not `HttpOnly`                         |


| 🔑 Point                      | 📌 Description                                                                              |
| ----------------------------- | ------------------------------------------------------------------------------------------- |
| **1. Stored in Browser**      | Cookies are small text files stored in the user's browser (on their computer/mobile).       |
| **2. Key-Value Pair**         | Cookies store data as `key=value` pairs, e.g., `username=Vishal`.                           |
| **3. Auto-sent to Server**    | Cookies are automatically sent to the server with every request to the same domain.         |
| **4. Limited Size**           | Max size per cookie: \~4KB. Most browsers allow up to 20-50 cookies per domain.             |
| **5. Expiry Control**         | Cookies can be session-based (deleted on close) or persistent (with expiry/max-age).        |
| **6. Domain & Path Specific** | Cookies can be set for specific domains/subdomains and paths.                               |
| **7. Security Options**       | Use `HttpOnly`, `Secure`, and `SameSite` flags to protect against attacks like XSS or CSRF. |
| **8. Accessible in JS**       | Can be read/written via `document.cookie`, unless marked `HttpOnly`.                        |
| **9. Used for Sessions**      | Commonly used to manage login sessions and user authentication.                             |
| **10. Used for Tracking**     | Also used in analytics, A/B testing, and ad targeting to track user behavior.               |


*/
// Setting a cookie
document.cookie =
  "username=Vishal; expires=Tue, 10 Sep 2025 12:00:00 UTC; path=/";

// Reading cookies
console.log(document.cookie); // "username=Vishal"

// Security Tips
// Use HttpOnly to prevent JavaScript access (helps prevent XSS).
// Use Secure to send cookies only over HTTPS.S
