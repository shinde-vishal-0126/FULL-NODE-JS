//| what is module wrapper function :

// This function is part of Node.js's internal module system and is used to provide the scope and context for the module.
// the wrapper function is a construct that wraps every module's code when it is executed.
//! Under the hood, NodeJS does not run our code directly, it wraps the entire code inside a function before execution. This function is termed as Module Wrapper Function 
// This default wrapper function encapsulates the module’s code and provides a private scope for its variables and functions.
// when i have create any module so node js wrap the module with another wrapper function.
// how to work module wrapper function in node js ?
// here we have grouping operator and inside that having anonymous function and inside that anonymous function access whatever you have defined in the module
// When you create a file in Node.js, its content is not executed directly in the global scope. Instead, it is wrapped in a function that looks like this:
(function (exports, require, module, __filename, __dirname) {
  const name = "vishal shinde";
  console.log(name);
})();

// so this is immediate invoked function in javascript ES6 (IIFE in node js called as module wrapper function)
// get the current directory name
console.log('dir_name :', __dirname);
// get the current file name;
console.log('file_name :', __filename);



//! Key Parameters in the Wrapper Function
// exports: An object used to expose parts of the module to be imported by other modules.
// require: A function to import other modules.
// module: An object representing the current module. It contains metadata and a reference to exports.
// __filename: The absolute path to the current module file.
// __dirname: The absolute path to the directory containing the current module.


//! Purpose of the Wrapper Function
//! Isolation:
// It ensures that variables declared in one file/module are not accessible in another, avoiding global scope pollution.
// Each file in Node.js is treated as a separate module with its own scope.

//! Module System:
// The function provides key variables such as exports, require, module, __filename, and __dirname to enable the module system.

//! Performance:
// It helps optimize execution and allows Node.js to cache and manage modules efficiently.

//! Standardization:
// It creates a consistent environment for all modules in the system.


// note
// the wrapper function is an internal mechanism that provides structure, context, and functionality to Node.js modules, making the module system robust and efficient.
// A module wrapper function in Node.js is a mechanism by which Node.js encapsulates the code of every module before execution. It ensures that the module's scope is private and provides essential variables like require, exports, and module to the module.
// This function creates a private scope for the module. Variables declared inside a module do not pollute the global namespace.

