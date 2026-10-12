

// First specify what to import inside the curly braces, which are called as binding
 import { message } from "./exportImport"; // this is called as nameSpace import 


// if you want to import everything form the module (as a single object) you have use the * symbol ()
import * as data from "./exportImport"
console.log(data);


//  To import both default and not default binding you specify a list of binding after the import keyword with the following rules
// The default binding must come first
// The non default binding must be surrounded by curly braces
// 
 import sort, {heapSort} from './sort.js'
sort([2,1,3]);
heapSort([3,2,1])
// To rename the default export used the as keyword as follow

const h1 = document.createElement('h1')
h1.textContent = message;
document.body.appendChild(h1)          
