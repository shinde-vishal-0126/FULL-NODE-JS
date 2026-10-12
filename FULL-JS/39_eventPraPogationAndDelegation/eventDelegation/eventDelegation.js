/*
# event delegation with bubbling phase
    1. event delegation is js pattern to efficiently handle the event.
    2. event delegation is technique in javascript where you attach a single event listener to a parent element instead of adding event listeners to individual child element (so event can be added to parent element instead of adding every element)
    3. so The event listener on the parent element can handle event triggered by its child element due to event bubbling.
    4. event delegation is technique in js where you attach a single event listener to a common ancestor of multiple element, instead of attaching individual event listeners to each of those element.


# imp
1. event bubbling :
    1.when the event triggered on an element it first run the handler on that event and then it propagates (or bubble) to its parent element.
    2. i.e if you click on child element its parent and all other ancestors 
    will also receive the event unless stopped 

2. single event listener :
    1.Instead of attaching event listeners to multiple child element you can take advantage of event bubbling by placing a single listeners on a common parent when the event bubble up to the parent you can determine which child element triggered the event by using event .target

# advantages of event delegation :
    1. performances 
        1. you avoid attaching multiple event listeners to each child element reducing memory usage, especially in case where many child element are created dynamically.
    2. Dynamic content :
        1. it allow handling event on element that are added to the dom dynamically after the initial page load without needing to reattach event listeners.
    3. this is perticular useFul for optimizing the performance and managing event on large number of element efficiently 
    4. when an event occurs the listener check the event.target property to determine which specific element triggered the event 
    (i.e event delegation refer the process of the using event propagation (bubbling to handle the higher level in the dom then the element on which the event oriented))


# which phase are able to handled the event delegation 
1. bubble phase handle the event delegation 

2. event delegation is a concept in js where instead of attaching event listeners to individual element you attach a single event listener to a common ancestor of those element.
3. this perticular useFul when you have a large number of similar element and want to reduce number of event listeners. 
*/
