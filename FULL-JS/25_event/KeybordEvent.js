
/*
?  Keyboard event
* Events that occur when a user presses a key on the keyboard. Belongs to the keyboardEvent object
1. onkeyPress 
2. onkeyDown
3. onkeyUp
*/

const keypress =(e) =>{
    console.log(e);
    const key = e.key;
    const code = e.keyCode;
    const charC = e.charCode;
    const type = e.type
    console.log(key,code,charC,type) 
document.querySelector('.keypress').textContent= e.key;
document.querySelector('.keycode').textContent= e.keyCode;
document.querySelector('.charCode').textContent= e.charCode;
document.querySelector('.eventType').textContent= e.type;
 
}

let key = document.getElementById('input');
console.log(key)
key.addEventListener('keypress',keypress);
