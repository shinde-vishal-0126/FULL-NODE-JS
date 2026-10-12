
/*

# 1. Input event in javascript  (used 'change' event like onclick
1. input event in javascript used get the value of an element has been change
2. change event in javascript used to get the value of input change and press enter 

*/


// you have to defined the onChange event using the tow way
// 1 using add EventLister 
const handleInput = (e) =>{
    document.querySelector('.inputValue').textContent = e.target.value
    document.querySelector('.inputName').textContent = e.target.name
    document.querySelector('.inputType').textContent = e.inputType
    document.querySelector('.eventType').textContent = e.type
}
const input = document.getElementById('myInput');
console.log(input);
// input.addEventListener('input', handleInput)
input.addEventListener('change', handleInput)



/*
 # todo

1. The onChange event occurs when the value of an element has been changed
2.The onchange event in JavaScript is triggered when the value of an input element changes and loses focus. It is commonly used in form elements like text fields, checkboxes, dropdown menus, and other interactive elements to detect and respond to user input changes.
3, For radioButtons and checkboxes, the onchange event occurs when the checked status has been changed.
4, Using onchange Attribute in HTML
5, This method adds the onchange handler directly to the HTML element.


1. If you defined the addEventLister so no need to define an onchange event in the program is defined in addEventListener argument
If you used an onchange event so after getting the references by using gentlemenById, querySelector, gentlemenByClass   you have to use value. Property of the onchange event .
like :   const inputChange = document.querySelector('#ice').value;
Value get the onchange value of the element
But if you deal with the text then you have to used the innerHtml property of the dom 




# what is differences between the onclick() event and addEventLister()
    
# onClick: 
    1. It's a property on DOM elements that you assign a function to handle the click event.
    2. When you assign a new function to onClick, it overwrites any previously assigned handler. You can only have one onClick handler at a time.
    3.  To remove an event handler, you can set element.onclick = null;, which will remove the click handler.
    4.  Does not provide such options. It is limited to handling the event in a straightforward way.
    5. Always listens to events during the bubbling phase, meaning it fires after the child elements have handled the event.

# addEventListener: 
    1. It's a method used to register event listeners for specific events (not just click) on DOM elements.    
    2. Allows you to attach multiple event listeners to the same event. Each listener will be called when the event occurs, and they won't override each other.
    3. You need to call removeEventListener to remove a specific listener, and it requires a reference to the exact function that was added. (element.removeEventListener("click", handleClick);)
    4. addEventListener: Provides more flexibility with options like { once: true }, which makes the event listener execute only once and then automatically remove itself
    5.  Allows you to choose whether to listen during the capturing phase (before child elements) or the bubbling phase (after child elements) by passing the { capture: true } option.
*/

