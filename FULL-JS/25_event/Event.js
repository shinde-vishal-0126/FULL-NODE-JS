/*
#  event() in javascript :

An event is a signal that something has happened (like a click or key press), and you can write code to respond to it.

An event in JavaScript is an action or occurrence that happens in the browser, which can be detected and responded to using JavaScript code.

common example of event 

| Event Type  | Description                           |
| ----------- | ------------------------------------- |
| `click`     | When a user clicks an element         |
| `submit`    | When a form is submitted              |
| `keydown`   | When a key is pressed                 |
| `load`      | When a page finishes loading          |
| `mouseover` | When the mouse hovers over an element |
| `input`     | When input value changes              |


# 3 way of writing Events in javascript (how to write event in javascript)
1. What is Event object
2. Mouse event in javascript
3 .Keyboard event in javascript 
4. InputEvent in javascript

# What is an Event Object :
1. The event object in JavaScript represents the event that occurs when interacting with an HTML element.

2. it is automatically passed to the event handler (like function,used in addEventListener or inline handler)

3. it provide information about event such as type, target-element, current element and additional detail specific to the event type (e,g mouse position for click event)

4.you have to access event object as a parameter in your event handler


#  Html event are “things” that happen to html element
1. When javascript is used in Html page , javascript reacts to these events.
2. An html event can be something the browser does or something a user does.
3. An html page has finished Loading
4. An html input field changed
5. An html button was clicked
6. Often when events happen you may want to do something.

# what is used of event.preventDefault();
 In JavaScript, e.preventDefault() (or event.preventDefault()) is used to prevent the browser's default behavior for a particular event.

 | Event          | Default Behavior                        | Why Use `preventDefault()`                    |
| -------------- | --------------------------------------- | --------------------------------------------- |
| `form submit`  | Page reloads or navigates to action URL | Stop reload; handle submission via JavaScript |
| `anchor click` | Navigates to the `href` link            | Prevent navigation (e.g., single-page app)    |
| `drag/drop`    | File gets opened in browser             | Handle file manually                          |

*/

// event object :
const element = document.getElementById("eve");
console.log(element);
element.addEventListener("click", (event) => {
  console.log("event-object:", event); // Logs the event object
  //* Logs the event object

  // # type:  of event (return the type of event)
  console.log("type-of-event: ", event.type);

  // # target: (return the element that triggered the event)
  console.log("target-element: ", event.target);

  // # currentTarget: the element to which the event handler is attached.
  console.log("current-Target", event.currentTarget);

  // # preventDefault(): prevent the browser default action for the event(i.e stopping a form submission or like navigation)
  event.preventDefault(); // stop the navigation

  // # stoppropagation(): used to stop the event from bubbling up to parent element or capturing down
  event.stopImmediatePropagation();

  // # clientX / clientY (for mouse events)
  // The X and Y coordinates of the mouse pointer relative to the viewport
  console.log(event.clientX + " and " + event.clientY);

  // # for keyboard events : key / code (for keyboard events)
  // Provides information about the key pressed during a keydown or keyup event.
  element.addEventListener("keydown", (event) => {
    console.log("key-pass", event.key);
    console.log("key-code", event.code);
  });
});

// # Inline Event Object
// In inline event handlers, the event object is not explicitly passed, but it can still be accessed as event:
{
  /* <button onclick="console.log(event)">Click me</button> */
}
// Here, event refers to the global event object, which works in inline handlers but is not recommended for modern JavaScript practices.

/*

# ways to write events in javascript ..
1. inline event
2. dom event handler
3. addEventListener event handler


# . inline event 

1. onclick event:
using alert()  → using inline event

<a href="#" class="button_su_inner" onclick="alert('Hi welcome')">
<span class="button_text"> Simple inline alert</span>
</a> 

another example :
<h1>Inline Events</h1>
<button onclick="alert('welcome to event in javascript')"
  id="btn"
>
  Click on inline event
</button> 

# ondblclick event"
<button ondblclick="alert('welcome to javascript event : ondblclick')">ondblclick event</button> 
1.  In an inline event if you define the same event again and again it overrides the event and it shows the bottom (or last) event action.
2.  inline event handlers do not allow you to stack multiple event listeners on the same event.
3.  If multiple inline handlers are set for the same event, the last one will overwrite the previous ones, unless you explicitly call multiple functions inside the handler.
4.   If you are calling a function in an event like onclick we need to pass parentheses after the function name.



#  2.dom event handler
1 click event using dom event handler:
const button = document.getElementById('btn').onclick = function (){
       alert('welcome to dom event handler : onclick')
}
console.log(button);

const button1 = document.getElementById('btn').onclick = () =>{
        alert('welcome to dom event handler : onclick')
        console.log('inline event called.')
 }

 console.log(button1);




 # 3. addEventListener event handler

const newButton = document.getElementById('btn1');
console.log(newButton);
newButton.addEventListener('click',()=>{
        alert('welcome ot addEventListener event in javascript')
        console.log('event lister called first')
})
If using addEventListener you have to call same event multiple time so it not override the same event it show event multiple time
 addEventListener handler allow to stack multiple event listeners on the same event. (multiple listeners for the same event without overriding each)




# differences between inline event and addEventListener():

# 1 Inline Event Handlers: 
1.Events are directly defined within HTML attributes.
 <button onclick="alert('Clicked!')">Click Me</button>

2. Inline Event handler only one handler can be specified for an event if you  assign new onclick it overwrites the existing one.

i.e Inline event handlers (onclick): They overwrite any previously set handler, so only one event handler can exist for a given event at a time.

const button3 = document.querySelector("#btn2").onclick = function() {(alert('override the event in inline event handler'))};
console.log(button3)

(i.e  inline event if you define the same event again and again it overrides the event and it shows the bottom of the event.)
Inline Event Handlers: Cannot be removed without modifying the HTML directly.

# addEventListener
1. add eventListener() are attached programmatically in javascript using addEventListener() method

const button = document.querySelector("#btn2");
button.addEventListener("click", () => alert("Clicked!"));
button.addEventListener('click',()=>alert('click2'))

2 addEventListener: Supports attaching multiple handlers to the same event without overwriting.

i.e addEventListener: It allows attaching multiple event listeners for the same event on the same element. All attached listeners are executed when the event occurs, unless you manually remove them with removeEventListener.

i.e  addEventListener () : in addEventlistener if you define the same event again and again it does not override it call event one by one.
addEventListener: Handlers can be removed using removeEventListener if a named function is used.


*/
