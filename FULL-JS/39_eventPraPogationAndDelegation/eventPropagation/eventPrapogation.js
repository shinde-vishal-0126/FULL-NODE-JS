/*
# event propagation 
1.event prapogation refer a process to how the event are propagated or travel through the dom (document object model) hierarchy 
(i.e Event propagation in the DOM describes how events move through the HTML element hierarchy when an event is triggered.)

2. Event propagation is a way to describe the stack of events that are fired in a web browser.(i,e Event propagation mode determines in which order the element receives the event.)
3.Event propagation is a mechanism in the DOM (Document Object Model) or refer to the process that defines how events travel or flow or propagate through the HTML elements in response to an event (like a click or keypress). 
4. It determines the order in which event handlers are triggered for nested elements.
5. event propagation is crucial for managing and handling event in complex web application
6. event propagation mode determine in which order the element receive the event.

# 2 phase of event prapogation
    1. Capturing Phase (Trickles down)
    2. Target Phase (Hits the target element)
    3. Bubbling Phase (Bubbles up)

| Phase         | Description                           | Listener option                          |
| ------------- | ------------------------------------- | ---------------------------------------- |
| **Capturing** | Event moves top → target              | `addEventListener(..., true)`            |
| **Target**    | Event is at the actual target element | —                                        |
| **Bubbling**  | Event moves target → top              | `addEventListener(..., false)` (default) |


# Event Flow Recap
    1. When an event is triggered, it goes through three phases:
    2. Capturing Phase: document → down to the target
    3. Target Phase: event hits the target element
    4. Bubbling Phase: target → up to document (bubbles up)


# what is event capturing phase 
    1. event start form top to bottom
    2. The event starts from the window → document → html → body → down to the target element.
    3. In this phase, the event travels from the outermost ancestor to the actual target element.
    4. The event start from the root of the DOM and goes down to the target element handlers registered for the capturing phase are executed
    5. The event starts at the root of the DOM tree and propagates downward through the parent elements to until it reaches the target element.
    6. With event capturing the event is first captured by the outermost element and propagated to the inner element
    7. Capturing is also called as trickling which helps remember the propagation order.
    8. Going from the window to the event target phase.

# what is target Phase 
    1. Target Phase 
        : The event reaches the target element where the event was triggered. and handled registered for the target phase are executed

# what is event bubbling phase ?
    1. Event bubbling is one of the phases of the DOM event flow, where the event starts from the target element and propagates upward to its ancestors.
    2.event bubbling is make the event execution process bottom to top
    With event bubbling the event is first captured and handled by the innermost element and then propagated to outer element
    3. The event start from the target element to bubble up to the root of the DOM handlers registered for the bubbling phase are executed
    4. After the event reaches the target element, it propagates back up (or "bubbles") through its ancestors until it reaches the root again and Any event handlers attached to these ancestor elements will be triggered in this phase
    5. The event flows from the child button back up to the parent div, and eventually to the document. Form the event target parent back to the window

# by default which event are propagated 
    1. by default Bottom to Top (i.e target element to the root element)
    by default bubbling phase are propagated.
    so event propagation defined which order the element receive the event is called 


1.# CAPTURE PHASE : TOP --> BOTTOM : (  root of the DOM  ==> (target element to ==>)) window ==> document ==> html ==> body ==> button (TARGET PHASE)

2. # BUBBLE PHASE : BOTTOM --> TOP (target element to ==> root of the DOM) :(TARGET PHASE) <button> ==> div ==> body ==> html ==> document ==> window
If they are executed in a certain way can we change the sequences of event propagation so this complete process of deciding when and in which direction an event will be executed is called event propagation.

# if there is any way to stop this bubbling ? 
    1. So stop the bubbling and capturing you have to use the event.stopPropagation method and inside the event or callback function
    2. So by default is the bubbling process when we click on the button so way to do that called stop propagation
    I.e when we click on the button only button event executed and another event stop the propagation
 

# how to achieve the capturing phase in event prapogation ?
    1. To achieve event capturing, you used the third parameter of the addEventListener method which specifies whether the event should be captured during the capturing phase
    2. setting it to true will activate the captured phase (like give third parameter in in addEventListener as capture:true)
    3.To achieve the event capturing so you need to pass the third parameter in addEventlistener is the capture : true as an Object
    4. By setting { capture: true } in the addEventListener() method, you switch the event listener to the capturing phase.

# what is differences between e.target and e.currentTarget. and this.name 
1. all this are very important to know if you want to tackle event propagation.

# 1 event.currentTarget :
    1. event.currentTarget represent the element to which the element listener is currently attached.
    2. refer to the element to which the event listener is attached , this can be perticular useful when you have event delegation, where you attach an event listener to common ancestor of multiple element.
    3. This is element that currently handling the event, regardless of where the event originated.
    4. it remains the same regardless of where the event was actually triggered it always point to the element to which the event handler attached.

# 2. event.target 
    1. event.target represents the actual dom element on which the event was originated.
    2. refer the element that triggered the event 
    3. it can may be any decedent element within the target element,and it accurately identifies the element that triggered the event.
    (THis is actual element where the event occurred)
    e.g the element that was clicked or where the user interacted.
    4. if you click event on button within a div, event.target refer to the button not the div.
    it is references to the element that the event listener is attached to 
    5 whenever event.target is only naming towards the button become this is where the origin of our bubbling.


# this.tagName
    1. this in the context of an event handler usually refers to the element to which the event listener is attached.
    2. You can access its tagName property to get the tag name of that element (e.g., "div", "button", "a", etc.).
    3.This is often used to determine the type of element that triggered the event, but it doesn't give you the full context of the event like event.target does

    console.log('tagName', this.tagName)
    it print button, form , div

#  conclusion about e.target and e.currentTarget
    1.e.target :
        1. it is refer the element that triggered the event;
        2. this is actual element where the event occurred.

e.currentTarget
    1. it is refer the element to which  event listener is attached.
    2. This is the element that is currently handling the event, 
        regardless of where the event originated.


| Feature                      | `event.target`                                                                | `event.currentTarget`                                     |
| ---------------------------- | ----------------------------------------------------------------------------- | --------------------------------------------------------- |
| **Definition**               | The **actual element** that triggered the event                               | The **element on which the event listener is attached**   |
| **Use Case**                 | Use when you want to know **which child element** was clicked inside a parent | Use when you want to reference the **listener's element** |
| **Can be different?**        | Yes, especially in event bubbling or delegation                               | No, always refers to the element with the listener        |
| **Changes during bubbling?** | Yes, stays the same (origin of the event)                                     | Yes, changes as the event bubbles through parents         |


#Summary:
1. target → Who started the event
2. currentTarget → Who’s handling the event
3. Use target to detect what the user actually clicked, 
4. and currentTarget to refer back to the element your event listener is attached to.


# why we used e.preventdefault() in event handling
    1. When you're handling events in JavaScript (especially in forms or links), e.preventDefault() is used to stop the default action that the browser would normally perform.
    2. e.preventDefault() is a method used in JavaScript to prevent the default behavior of an event from occurring.
     e is the event object, which gets automatically passed to the event listener function.
    1. Forms : By default, submitting a form reloads the page.
    2. Anchor Tags (<a>) : Clicking an anchor tag navigates to a new page.
    
    #  Why use it?
        1.  To handle form data with JavaScript without refreshing the page.
        2.  To build Single Page Applications (SPAs) where navigation is handled via React/Vue, etc.
        3. To add custom behavior to elements (like drag & drop, buttons, etc.).




# what is differences between bugling phase and capture phase

| Feature                | **Event Bubbling**                                                                           | **Event Capturing**                                                                  |
| ---------------------- | -------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------ |
| **Order**              | Event starts from the **target element** → goes **upward** to parent, grandparent, document. | Event starts from the **top (document/root)** → goes **downward** to target element. |
| **Default Behavior**   | **Bubbling** is the default in JavaScript.                                                   | Capturing needs to be explicitly enabled.                                            |
| **When Listener Runs** | Runs **after** child → parent → grandparent.                                                 | Runs **before** parent → child → target.                                             |
| **Use**                | Most common (default) way to handle events.                                                  | Rarely used, useful when you want parent to handle before child.                     |
| **How to Enable**      | `element.addEventListener("click", handler, false)` (or just omit third param).              | `element.addEventListener("click", handler, true)` (third param = true).             |


*/
