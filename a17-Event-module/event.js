
// Node js having built in module called as 'Events': that allow you to work with eventEmitter object 
// the module facilitates the event driven architecture of node js 
// where you have to 'create',  handling, fire, listen and emitting the events for your events.

// key concept of the event Modules 
// 1. EventEmitter : 
// The core class of in the events module is eventEmitter this class allow you to emit events and handle them by attaching listener function
// you have to create instances of EventEmitter and used to manage events

// 2. Emitting Events:
// you can use the .emit() method to trigger an event and pass data to the event handlers

//3. listening to events:
// you can attach event handlers using the .on() method which listen for a specific event and execute a callback when the event is emitted.

// In Node.js, the EventEmitter class from the events module is used to create, listen to, and handle events. 
// You can create an instance of EventEmitter and then emit custom events or respond to them.

// 1. Register for the event to be fired only one using only once.

const EventEmitter = require('events');
const event = new EventEmitter();

//register the event and  on method listen for specific event and execute a callback function when event is emitted
event.on('click', ()=>{
    console.log('Hi, i am vishal')
})
// emit() triggered the event and pass data to the event handlers.
event.emit('click');


// 2. create an event emitter instances and register couple of callbacks. (multiple event handler)
event.on('click', ()=>{
    console.log('Here first callback ')
})
event.on('click', ()=>{
    console.log('Here 2nd callback ')
})
event.on('click', ()=>{
    console.log('Here 3rd callback ')
})
// Here you have to defined couple of callbacks
// so using single event we have to call multiple callback function

event.emit('click');


// 3 Registering the event with callback parameters :
//Define an event handler function
event.on('pageCheck', (status, message)=>{
console.log(`state code is ${status} and message is ${message}`);
})
// Emit the pageCheck event, passing status and message as an argument
event.emit('pageCheck', 200, 'ok (successFull...)');


// imp method in EventEmitter class:
// on(event listener) : add listener function to the event, the listener are call every time the event is called.
// emit(event,[...args]):emits the event optionally passing any argument to the listener function
// once(event, listener): add a listener that will be called only the first time the event is emitted.
//removeListener(event,listener) or off(event, listener) : remove the listener from an event
// removeAllListeners(event) : remove all listeners for a specific event 
// listenerCount(event) : return the number of listeners for a specific event 