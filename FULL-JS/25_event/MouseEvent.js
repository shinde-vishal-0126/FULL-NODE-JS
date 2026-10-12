
/*
# MouseEvent in javascript
The mouse event object
Events that occur when the mouse interacts with the html documents belong to the mouse event objects.

1. onclick: the user click on an element
2.oncontextmenu: the user click on an element
3.ondblclick : the user double click on an element
4.onmousedown : The mouse button is pressed over an element (a pointing device button is pressed on an element)
5.onmouseenter: Then pointer is moved onto an element (if you enter mouse any element it change the property)
6.onmouseleave: The pointer is moved out of an element (if you leave the moused any element)
7.onmousemove: The pointer is moving over an element
8.onmouseout: The mouse  pointer moves out of an element
9.onmouseover: the mouse pointer moved over an element
10. onmouseup: The mouse button is released over an element
*/

const mouse1 =document.getElementById('point1');
console.log(mouse1);
mouse1.addEventListener('click',(e)=>{
    alert(`${e.clientX}  and ${e.clientY} `)
})

const mouse2 =document.getElementById('point2');
console.log(mouse2);
mouse2.addEventListener('contextmenu',(e)=>{
    alert('oncontextmenu')
})
const mouse3 =document.getElementById('point3');
console.log(mouse3);
mouse3.addEventListener('dblclick',(e)=>{
    alert('hi')
})
const mouse4 =document.getElementById('point4');
console.log(mouse4);
mouse4.addEventListener('mousedown',(e)=>{
    alert('hi')
})
const mouse5 =document.getElementById('point5');
console.log(mouse5);
mouse5.addEventListener('mouseenter',(e)=>{
    alert('hi')
})
const mouse6 = document.getElementById('point6');
console.log(mouse6);
mouse6.addEventListener('mouseleave',(e)=>{
    alert('hi')
})
const mouse7 =document.getElementById('point7');
console.log(mouse7);
mouse7.addEventListener('mousemove',(e)=>{
    alert('hi')
})
const mouse8 =document.getElementById('point8');
console.log(mouse8);
mouse8.addEventListener('mouseout',(e)=>{
    alert('hi')
})
const mouse9 =document.getElementById('point9');
console.log(mouse9);
mouse9.addEventListener('mouseover',(e)=>{
    alert('hi')
})
const mouse0 =document.getElementById('point0');
console.log(mouse0);
mouse1.addEventListener('mouseup',(e)=>{
    alert('hi')
})

