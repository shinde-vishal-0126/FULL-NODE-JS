/*

# document object model

1. document is a child or part of the of a window object (Whatever present inside the document is always present inside the window because the document is a child of window object.
i.e If you have any work regarding the html then you have to use a document object
2. then window object represent the global window in a browser both browser object model and Document object model are part of the window object
like widow object contain :
           1.  bom (browser object model)
           2.  dom (document object model)

# What is the document object?
    1. The document object is part of the Window object.
    2. It represents the webpage loaded in the browser. it is tree like structure.
    3. It is the entry point to the DOM (Document Object Model).
    4. It allows JavaScript to read, modify, add, or remove elements in an HTML document.


# Relationship: window > document > HTML
✔️ Window:
    1. Global object in the browser.
    2. Represents the browser window.
    3. Encompasses both DOM and BOM.

✔️ Document:
    1. Child of window.
    2. Entry point to DOM.
    3. Deals with HTML content only.

# DOCUMENT OBJECT MODEL (DOM):

| Feature         | Description                                            |
| --------------- | ------------------------------------------------------ |
| **Structure**   | Tree-like structure of HTML elements                   |
| **Focus**       | Webpage content (HTML elements, attributes, text)      |
| **Use**         | JavaScript uses DOM to interact and manipulate content |
| **Root Node**   | `document.documentElement` (returns `<html>`)          |
| **Main Object** | `document`                                             |
| **Example**     | `document.getElementById('heading')`                   |

i.e
 1. The dom is primarily concerned with the content of the web page it is tree like structure that allow javascript to interact with and manipulate the html element
2.  Dom is focused on the content of the page. DOCUMENT (Deal with document the html element themselves)

# BROWSER OBJECT MODEL (BOM)

| Feature         | Description                                             |
| --------------- | ------------------------------------------------------- |
| **Structure**   | Represents browser-specific APIs                        |
| **Focus**       | Interacting with the **browser**, not webpage content   |
| **Use**         | Manage browser window, history, location, screen, etc.  |
| **Main Object** | `window`                                                |
| **Example**     | `alert()`, `navigator`, `location.href`, `setTimeout()` |

i,e 
1. Bom represent browser as an object and provide method and properties for interacting with the browser itself (not related to the content of web page))
2.BOM is focused on the browser environment
3.  OBJECT LIKE:
        1. navigator
        2.  screen
        3. location
        4. frames
        5. history
        6. XMLHTTP-request   

4. Method like:                                                                      
        1.  setInterval()
        2.  setTimeOut()                                                                                                              
                                                                
                                                 
5. PROPERTIES LIKE :
    1. innerHight,
    2. and innerWidth ( properties show the width and height of the browsers.)

6. functions :
        1.alert
        2. confirm
        3.  prompt are also part of Bom (They are directly not related to the document, but represent pure browser method of communicating with the user )
                                                                  
# JAVASCRIPT : 
        1. javascript to interact with and manipulate the html element 
        2. OBJECT      
        3.  ARRAY 
        4. FUNCTION                                           


# DOM Node Types
    1.Element node — HTML tags
    2. Text node — Text content
    3. Attribute node — Element attributes
    4. Comment node — HTML comments
    5. Document node — Root of document
    6. DocumentType node — DOCTYPE declaration



    

# DOM 
    1.First element inside the document is Html
    2. html (Html is the root element of the document.)
    3. body  : After Html is having body tag (contain another tag like anchor tag paragraph tag so on ) and) 
    4. head :  Head tag (head tag contain title , meta data, and links 
This entire Dom tree accessible to javascript as an object 

* Dom info
1. when a web browser load a html document, it parse the html source code and creates a tree-like structure known as the document object
2. this Dom tree represent the structure of the html document, with each html element being a node in the tree.
3. this entire DOM tree is then accessible to javascript as an object javascript can interact with the object to manipulate the content, structure, style of the document dynamically.
4.dom essentially serves as an interface between html document and javascript providing way to access and modify the document structure and content.
5. The document object model(Dom) in an application programming interface(apo) the dom tree is the structure of your html document as represented by dom api,
as stated this api then gives us many method and properties that we can use to manipulate the tree and therefore by extension the document

# How to dom work  ?
1. Dom is a tree-like structure of the html document
2. dom provide a way to interact with the html document using javascript
3. Dom is used to the help of javascript to chang or manipulate the content of the html
4.Dom is is bridge between html and javascript
5.dom provide the properties and method with the help of this method and properties dynamically change the content of html document using javascript.

*/

/*
# what is difference between the DOM and BOM

# Dom: 
child object or part of the Global object as window
Dom is an programming interface it is interact with html document and control the web content ;
dom is represent html document tree-like structure where each node in an object correspond to a part of the document (like element, attribute, text)
dom is an object is primarily concern with the content of the web page that allow javascript to interact with and manipulate the html element
Dom is focused on the content of the page
manipulating  element , attributes, text
main objet is document
Dom is live representation of our Html document



# BOM:
bom is also part of the Global object as window
Bom is also the programming interface provided by browser to interact with browser itself
 Bom is provide or represent method and properties to control the browser window, mange navigation, and handle cookies.
Bom represent browser as an object and provide method and properties for interacting with the browser itself (not related to the content of web page))
BOM is focused on the browser environment
manipulate or maintain history, location , navigator objet 
main object is window


| Feature         | DOM                           | BOM                                              |
| --------------- | ----------------------------- | ------------------------------------------------ |
| Purpose         | Work with **webpage content** | Work with **browser features**                   |
| Main Object     | `document`                    | `window`                                         |
| Focus           | HTML structure, content       | Browser APIs, environment                        |
| Access Elements | `getElementById`, etc.        | `alert`, `location`, `navigator`, `screen`, etc. |
| Structure       | Tree of nodes                 | No structured tree                               |
| Scope           | Inside webpage                | Outside (browser environment)                    |

*/

console.log(document); // returns the entire document object

// $0 used to get the current selected element

/*

# Accessing Document Nodes

| Task                | Code                       |
| ------------------- | -------------------------- |
| Get full document   | `document`                 |
| Get root (`<html>`) | `document.documentElement` |
| Get `<body>`        | `document.body`            |
| Get `<head>`        | `document.head`            |

# Navigating Nodes

| Property                                        | Description                                |
| ----------------------------------------------- | ------------------------------------------ |
| `childNodes`                                    | All child nodes (including text, comments) |
| `children`                                      | Only element nodes                         |
| `firstChild` / `lastChild`                      | First/last node (can be text)              |
| `firstElementChild` / `lastElementChild`        | First/last **element**                     |
| `nextSibling` / `previousSibling`               | Next/previous **node**                     |
| `nextElementSibling` / `previousElementSibling` | Next/previous **element**                  |

#  DOM Search Methods

| Method                              | Returns                 |
| ----------------------------------- | ----------------------- |
| `getElementById(id)`                | Single element with ID  |
| `getElementsByClassName(className)` | HTMLCollection          |
| `getElementsByTagName(tagName)`     | HTMLCollection          |
| `getElementsByName(name)`           | NodeList                |
| `querySelector(selector)`           | First matching element  |
| `querySelectorAll(selector)`        | NodeList of all matches |


# Difference: innerHTML, innerText, textContent

| Property      | Description                                |
| ------------- | ------------------------------------------ |
| `innerHTML`   | Includes HTML tags                         |
| `innerText`   | Only visible text (respects styles)        |
| `textContent` | All text (including hidden, no formatting) |

#  NOTE:
if you are work with dom then most of the time each and every part of the dom having 2 properties like childNode and children 
1. childNode,basically return the nodeList (childNode is represent tree-like structure of the node )
        NodeList meas representation Dom tree-structure data
        return like: NodeList(10) [text, h1, text, h3, text, div, text, comment, text, script]
2. Children return the Html collection (it is actual collection of the html)
        Html collection means representation of the html data
        return like HTMLCollection(4) [h1, h3, div, script]

? DOM-iteration:

iteration:
forEach (Array.from) iterate through nodeList or convert to an array for more flexible operation
also used for of loop or for loop

# very imp:
1. when you used the browsers developer tools console to select an element and change its text content using javascript. you are directly manipulating the DOM object in memory
2. since the dom is a live representation of the document, any changes you make to Dom object are immediately reflect in the rendered web page 
however these change are typically temporary and exist only in the current session when you refresh te page navigate away the browser reloads the original html 3. document form the server. and the DOM is reconstructed  during the parsing process. any modification made to the Dom objects during the previous session are lost and page restart to its original state.

*/

// 1. How to get whole document object ?
let parent = document;
// used to get whole document object )
console.log("whole document object :", document);

// 2. How to get the root element fo the document ?
//document.documentElement:return the root element of the document
const rootElement = document.documentElement;
console.log("rootElement", rootElement);

// 3. How to Get the body of the Document ?
let bodyElement = document.body;
console.log("bodyElement", bodyElement);

// 4. How to get the head of the document ?
let headElement = document.head;
console.log("headElement", headElement);

// 5 how to get perticular element child node lke document.childNodes. and also body.childNodes, and head.childNodes
console.log("document childnode :", document.childNodes);
// NodeList(2) [<!DOCTYPE html>, html]

// get the head childNodes:
console.log("HeadChildNode:", document.head.childNodes);
//NodeList(7) [text, meta, text, meta, text, title, text

//------------------------------------------------------------------------------------

// 6. How to navigate to  the childNode / children
// childNode/ children:
// navigate to child node or element of the body
const childNode = document.body.childNodes;
// childNode is a property that return a nodeList containing all child not of a give element including text node and comment node
console.log("childNode of the body", childNode);
// output NodeList(10) [text, h1, text, h3, text, div, text, comment, text, script]
// representation of the dom tree structure data

// if you are work with the dom the of the time each and every part of the dom having two properties like node properties and element properties
// like childNode or the  children
// node properties return nodeList (so node list are representation of the DOM tree-structure data)
// element or children properties return html collection so it si representation of the actual html data.

// Here example of 2nd properties :
const bodyEle = document.body.children;
console.log(bodyEle);
// output  HTMLCollection(4) [h1, h3, div, script]
// representation of the html data

// 1. children: Returns only element nodes.
const bodyChildren = document.body.children;
console.log(bodyChildren); // Logs the list of child elements

// 2.childNodes: Returns all nodes (elements, text, comments).
const bodyChildNodes = document.body.childNodes;
console.log(bodyChildNodes); // Logs all child nodes, including text nodes

// 3. firstChild: Returns the first node (can be text, comment, or element).
const bodyChildNodes1 = document.body.childNodes;
console.log(bodyChildNodes1); // Logs all child nodes, including text nodes

//4.  firstElementChild: Returns only the first element, ignoring text and comments.
const firstElementChild = document.body.firstElementChild;
console.log(firstElementChild); // Logs the first element node, skipping text nodes

//-------------------------------------------------------------------
//# what is differences between the firstChild and firstElementChild

//# firstChild
// Definition: Returns the first child node of an element, including text nodes, comment nodes, or element nodes.
// Characteristics:
// Includes all node types (e.g., elements, text nodes, comments).
// May return a text node if whitespace (like line breaks or spaces) exists before the first element node.
// Useful when you need to work with all types of child nodes, not just elements.

//# firstElementChild
// Definition: Returns the first element child of an element, ignoring text nodes and comments.
// Characteristics:
// Only considers element nodes.
// Ignores text nodes, comments, and whitespace.
// Useful when you are only interested in elements, not other node types.

// How to navigate to the first child node or element
// firstChild/ firstElementChild
// Navigate to the first child node or element
const firstChildNode = document.body.firstChild;
console.log("first-Child-Node of body", firstChildNode);
// #text

// firstChild element with 2nd property
// firstElementChild
const firstChildElement = document.body.firstElementChild;
console.log("first-Child-element of body", firstChildElement);
// return  h1 (actual html data)

// ---------------------------------------------------------------------------------

// How to navigate to the last child node or element
// firstChild/ firstElementChild
// Navigate to the first child node or element
const lastChildNode = document.body.lastChild;
console.log("last-Child-Node of body", firstChildNode);
// #text

// lastChild element with 2nd property
// firstElementChild
const lastChildElement = document.body.lastElementChild;
console.log("last-Child-element of body", lastChildElement);
// return  return script as last child element

// --------------------------------------------------------------------------

//  How to navigate to the next sibling node or element
// nextSibling/ nextElementSibling
// navigate to the next sibling node or element
const nextSiblingNode = document.body.firstChild.nextSibling;
console.log("nextSiblingNode", nextSiblingNode);
// <h1>BOM(browser object model)</h1>

// 2nd properties next
const nextSiblingElement = document.body.firstElementChild.nextElementSibling;
console.log("nextSiblingElement", nextSiblingElement);
// <h3>Understanding the Dom tree structure</h3>

// -----------------------------------------------------------------------------------

// #  How to navigate to the previous sibling node or element
// previousSibling/ previousElementSibling
// navigate to the previous sibling node or element
const previousSiblingNode = nextSiblingNode.previousSibling;
console.log("previousSiblingNode", previousSiblingNode);
// #text

// 2nd properties next
const previousSiblingElement = nextSiblingElement.previousElementSibling;
console.log("previousSiblingElement", previousSiblingElement);
//<h1>BOM(browser object model)</h1>

//? Closest(selector):
// closest find the closest ancestor of the current element that matches a given selector

// -------------------------------------------------------------------------------------------------

//# Dom search
// getElementById
let finElementById = document.getElementById("heading");
console.log("findElementById", finElementById);
// it return the element which have id as heading then we get the data of this element
console.log("element data using innerHTML :", finElementById.innerHTML);
console.log("element data using innerText:", finElementById.innerText);
console.log("element data using textContent:", finElementById.textContent);

//--------------------------------------------------------------

//getElementByClassName
let finElementByClass = document.getElementsByClassName("list-of-nodes");
// console.log('finElementByClass', finElementByClass)
// it return the element which have class as list-of-nodes then we get the data of this element
// so basically this methods are return HtmlCollection. so this collection are iterable then the data of this iterable objet using spread operator like
console.log("finElementByClass", ...finElementByClass);

// also used for of loop and get the data form the each element
for (let data of finElementByClass) {
  // console.log("data",data);
  console.log("data", data.innerHTML);
  console.log("data", data.innerText);
  console.log(data.textContent);
}

//---------------------------------------------------------------

// # what is differences between innerHtml, innerTest, and textContent
// 1.  innerHTML (display inner html  of the inside the given element)
// # Definition: Retrieves or sets the HTML content inside an element, including any tags and their attributes.
// Usage: Used to get or modify the entire HTML structure inside an element.
// innerHtml property return the complete content including all html tag, inside the ui element and their text content

// 2. innerText (hidden content are not display)
//#  Definition: Retrieves or sets the visible text content of an element, as rendered by the browser.
// Usage: Used to get or modify the text that a user can see, excluding hidden elements.
// innerTest print the text as it appear on screen considering styling and excluding hidden element

//3 textContent
// # Definition: Retrieves or sets the text content of an element, including hidden elements, without formatting or HTML tags.
// Usage: Used to get or set all text content within an element, regardless of visibility.
// textContent print text as it is in the markup including hidden text and without considering styling

// #  Best Use Cases:
// innerHTML: When you want to inject or extract HTML, including tags.
// innerText: When you want to get visible text only, as seen by users.
// textContent: When you want to get raw text, including hidden elements, fast and safely.

// ex.

<div id="example">
  <p>
    Hello <span style="display: none;">Invisible</span> <b>World</b>
  </p>
</div>;

const el = document.getElementById("example");

console.log("innerHTML:", el.innerHTML);
console.log("innerText:", el.innerText);
console.log("textContent:", el.textContent);
// output explanation

// | Property      | Output                                                                    | Description                                             |
// | ------------- | ------------------------------------------------------------------------- | ------------------------------------------------------- |
// | `innerHTML`   | `<p>Hello <span style="display: none;">Invisible</span> <b>World</b></p>` | Returns **HTML** markup inside the element              |
// | `innerText`   | `Hello World`                                                             | Returns **only visible text** (ignores `display: none`) |
// | `textContent` | `Hello Invisible World`                                                   | Returns **all text**, even hidden, without HTML         |

//-----------------------------------------------------------------

// getElementByTagName:
const getElementByTagName = document.getElementsByTagName("li");
console.log("get-element-by-tagname :", getElementByTagName);
// it return html collection we need to iterate using spread operator or for loop
// console.log('get-element-by-tagname :', ...getElementByTagName);
for (let tag of getElementByTagName) {
  console.log("tag", tag);
}

//--------------------------------------------------------------

// document.getElementsByName: Returns a NodeList (like an array) of elements with the specified name attribute.
const elements = (document.getElementsByName("vishal").innerHTML =
  "hi welcome to the javascript");

console.log(elements);

//--------------------------------------------------------------------------------------------------

//query selector
const findByElementQuerySelector = document.querySelector("#heading");
// so here we have to change the html content dynamically with the help of javascript
// Dom is a way or source to javascript are communicate,navigate, manipulate with html
console.log(
  "findByElementQuerySelector",
  (findByElementQuerySelector.innerHTML =
    "welcome to javascript document object model")
);
console.log("findByElementQuerySelector", findByElementQuerySelector.innerText);
console.log(
  "findByElementQuerySelector",
  findByElementQuerySelector.textContent
);

// --------------------------------------------------------

const findElementByQuerySelectAll = document.querySelectorAll("li");
console.log("findElementByQuerySelectAll", findElementByQuerySelectAll);
// loop the the result
findElementByQuerySelectAll.forEach((ele) => {
  console.log("ele", ele);
});

// -------------------------------------------------------------------------------

// # What is the difference between getElementByid or quaySelector ?

//# getElementByid
// Syntax
// document.getElementById(‘id’);
// Return references to the element by its id
// If the element with the specified Id is not in the document it will return null.

//# getElementByClass
// Syntax
// document.getElementByClass(‘id’);
// Return references to the element by its className
// If the element with the specified className is not in the document it will return null

//? What is a quarry selector ?
// Syntax
// document.quaySelector(selectors);
// Return the first element within the document that matches the specified group of selectors
// It returns null if not found matches.

// ------------------------------------------------------------------------------------------
//#  summary :
//? Searching in dom objects
//? 1. How to search the element and the references

//? Document.getElementId(‘id/class’). innerHtml = 'rendering or replacing content’.
//  use id in html tag it only tackles only unique elements.
// When you defined id used #
// If you defined the class used .
// When you defined id used #
// If you defined the class used .

//? InnerHtml
// it is property (or part of the document object model )
// That allow javascript code to manipulate a website being display
// allows rendering and replacing everything within the Given dom element.
// InnerHtml used to add dynamic html on html documents.

//? you have to used following method
// 1. const data = document.getElementsByClassName('child1').innerHtml = document.body.style.color = 'green';
// 2. const data = document.getElementById('12').innerHtml = document.body.style.color = 'red';
// 3. const data = document.getElementsByTagName('div').innerHtml = document.body.style.color = 'red'
// 4. const data = document.getElementsByName('vishal').innerHtml = document.body.style.color = 'red';
// # document.getElementsByName('vishal') returns a NodeList of all elements with the name attribute set to 'vishal'. You cannot directly set innerHtml on a NodeList; instead, you need to access individual elements within the list.
// we need to iterate
// 5. Quay Selector
// Quaryselector having the class name of id name.
// const child = document.querySelector('.main');
//  return the first matching value where
//  const data = document.querySelector('.child1').innerHtml = document.body.style.color = 'green';
// 6. querySelectorAll  return all the matching elements.
// const data = document.querySelectorAll('.child1').innerHtml = document.body.style.color = 'green';

// =============================================================================================

// # How to find out the siblings of the body and head
// document.head.nextElementSibling → body (finds the next sibling element after head).
// document.head.nextSibling → text (finds the next sibling node, which may include text, comments, or elements).
// document.head.previousElementSibling → null (there’s no previous element sibling for head).
// document.body.previousElementSibling → head (finds the previous sibling element before body).
// document.body.previousSibling → text (finds the previous sibling node, which may include text or elements).
// document.body.nextElementSibling → null (there’s no element sibling after body).
// document.body.nextSibling → text (finds the next sibling node, often a text node or comment).

// nextElementSibling and previousElementSibling return element nodes.
// nextSibling and previousSibling return any node (element, text, or comment).

// ---------------------------------------------------------------------------------------------------------

//# 1 In document object find out the parent node
// Used parentNode  → return the parent element of the body
// document.body.parentNode
// 2 parentNode can return any type of node (including Document or DocumentFragment), while parentElement only returns an element.
// document.body.parentElement
//also used
// document.head.parentNode
// document.head.parentElement
// Also if you search the parent element of head it returns the same.

// -------------------------------------------------------------------------------
// # What is used of createElement() : The createElement() method in JavaScript is used to create a new DOM element dynamically. It is commonly used to add elements to the DOM programmatically.
// Used to create dynamically html element nodes with specified name via javascript.
// This method take the name of the element as the parameter and create new element node
//* document.createElement(tagName);

// Step 1: Create a new <p> element
const newElement = document.createElement("p");
// Step 2: Add text content to the element
newElement.textContent = "Hello, this is a dynamically created paragraph!";
// Step 3: Append the element to the body
document.body.appendChild(newElement);

// example2
// Create a new button element
const button = document.createElement("button");
// Set text content
button.textContent = "Click Me";
// Add a click event listener
button.addEventListener("click", () => {
  alert("Button clicked!");
});
// Append the button to the body
document.body.appendChild(button);

//# question:

//#  what is the root element of the Document( which method return the root element)
document.documentElement;

//# How to return the document body
document.body;

//# How to return the head of the document
document.head;

//#  How to find out how many child present in body tag
document.body.childNodes;

// # If you want actual element inside the body so you have used
document.body.children;
HTMLCollection[div.main]; // Return the actual 0r parent child in the body.

// # whether an element has a child node or not ?
document.body.hasChildNodes(); // true

let inputValue = document.getElementById("inputfield");
let button = document.querySelector(".btn"); // return  <button class="btn" name="abc", id="bt">Click me</button>
// let button1 = document.querySelectorAll('.btn') //return NodeList [button#bt.btn]
// let button2 = document.getElementsByClassName('.btn') //return HTMLCollection []
// let button3 = document.getElementsByTagName('button'); //return  HTMLCollection [button#bt.btn, bt: button#bt.btn, abc: button#bt.btn]
// let button4 = document.getElementsByName('abc') //return NodeList [button#bt.btn]
// let button5 = document.getElementById('bt') //  <button class="btn" name="abc", id="bt">Click me</button>
// console.log("button", button)
// console.log("button1", button1)
// console.log("button2", button2)
// console.log("button3", button3)
// console.log("button4", button4)
// console.log("button5", button5)
let todoFile = document.getElementById("hi");

const addTodo = () => {
  console.log(inputValue.value);
  // todoFile.innerHTML = inputValue.value
  // by creating new element you have to create display the value.
  const data = document.createElement("p");
  data.innerHTML = inputValue.value;
  console.log(data);
  todoFile.appendChild(data);
  if (inputValue.value) {
    inputValue.value = "";
  }
};

button.addEventListener("click", () => {
  addTodo();
});

todoFile.addEventListener("click", (event) => {
  // event object
  console.log(event);
  console.log(event.target);
  let currentElement = event.target;
  currentElement.remove();
});

//? createElement(tagName): create new HTML element
//? appendChild(nde) :Append a node as the last child fo a parent node
//? removeChild(node) : remove a child node from its parent
//? addEventListener(event, callback_function) :create new eventListener to handle event
//? removeEventListener(event,function) : Remove an even listener;
//? setAttribute(name, value) : set the value of attribute on an element
//? getAttribute(name) : get the value of specific attribute on an element

// # what is differences between append() and appendChild() method in dom;
// append()
// Definition: Adds one or more elements, text, or DOM nodes to the end of a parent element.
// Accepts multiple arguments. (You can add multiple things at the same time.)
// Can add both Node objects (elements) and plain text strings.
// Does not return the appended node.
// If appending a text string, it automatically creates a text node.
// You can add text or elements to a parent element
const parent11 = document.getElementById("parent");
// Append a new paragraph and text
parent11.append("Hello World", document.createElement("p"));

// appendChild()
// Definition: Adds a single Node object to the end of a parent element.
// Key Features:
// Only accepts a Node object (e.g., element or text node). u can only add one element (or node) at a time.
// Throws an error if you pass a plain string.
// Returns the appended node.
// Cannot add plain text (it must be inside a node).
const parent1 = document.getElementById("parent");
//Create a new paragraph element
const paragraph = document.createElement("p");
paragraph.textContent = "Hello World";
// Append the paragraph to the parent
parent1.appendChild(paragraph);

// #
// append(): For adding text + elements together or multiple things at once.
// appendChild(): For adding only one element (not plain text).
