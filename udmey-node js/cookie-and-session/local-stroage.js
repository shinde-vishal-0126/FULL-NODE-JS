

//? what is differences between local storage and session storage 
// - Local storage :
// Storage Duration  : Persistent (until manually cleared)
// Scope : Shared across all tabs/windows of the same origin
// Capacity : Typically around 5MB
// Data Persistence : Data persists across sessions
// Use Cases: Long-term data storage (user preferences, settings)
// Access : window.localStorage	


// - session storage:
// Storage Duration : Temporary (cleared when tab/window is closed)
// Scope: Specific to a single tab or window
// Capacity : Typically around 5MB
// Data Persistence : Data is cleared after the session ends
// Use Cases : Temporary data storage (form data, session-specific state)	
// Access: window.sessionStorage	