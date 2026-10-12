/*
# what happen when you try to execute js code 
1:when i write javascript code and run on browser then what happen in between running the code. in browser.


           ┌────────────────────────────┐
           │   JavaScript Source Code   │
           └────────────┬───────────────┘
                        ↓
              ┌──────────────────┐
              │  Lexical Analysis│
              │  (Tokenization)  │
              └────────┬─────────┘
                       ↓
              ┌──────────────────┐
              │ Syntax Analysis  │
              │   (Parsing AST)  │
              └────────┬─────────┘
                       ↓
              ┌──────────────────┐
              │   Compilation    │
              │(JIT Compiler)    │
              └────────┬─────────┘
                       ↓
              ┌──────────────────┐
              │   Execution      │
              │ (Run Machine Code)│
              └──────────────────┘


1. first phase is parsing phase 
    1.when you run the code goes into the parsing phase
    2 parsing having different step
        1. lexical analysis (tokenization)
            : also know as lexer
            1. break your code in to tokens
            ex let a =10;
            like let,a,=,10,;
            2:Tokens are the basic building blocks (keyword, identifiers, symbols, literals)
            3:once token are created then this token are pass to our syntax parser or syntax analysis.

        2. syntax analysis (parsing)
            (Check syntax and generate AST (Abstract Syntax Tree))
            1: syntax analysis or parser takes the stream of token from lexer 
            2: check if the code syntax is correct e.g let a =10; is valid or not if its valid or syntax are correct then it build or create tree structure called as AST

            AST:
                VariableDeclaration
                └── Identifier (a)
                └── Literal (10)
            3: once create  AST tree for abstract syntax tree  and pass this AST tree to the compiler


2. compilation phase : (Just-In-Time Compilation (JIT))
            ( Step 3: JIT Compiler compiles AST to machine code just before execution  ))
            1: The AST is passed to the JIT compiler.
            2: The JIT compiler converts code to machine code (or bytecode).
            3: Happens just before running the code (hence "Just in Time").
            3: Optimization is done based on how your code behaves at runtime.
            4: then created byteCode goes to execution phase 

3: execution phase:
            1: once the byte code come then execute the compile machine code )
            1: machine code is executed and result display

# once the code is compiled the js engine in execution phase when to start execute the code so js engine create execution context
    1: so everything in javascript happen inside the execution context.
# what happen when you run the javascript program ?
        1. when the javascript program is run execution context is created .
        1: so this execution over here not possible without 2 major component of javascript engine 
         1. memory heap
         2. call stack

    # 1: memory heap:
        1: this is place where all memory are stored.
        2. this memory are  constantly sync with call stack and garbage collection 
        3. so memory Heap is the space where all variable and function assign an memory 
        4.  heap memory is where dynamically allocated memory residers
        5. heap memory holds data that is referenced by these execution contexts.

    # what is call stack     
    # call stack :
        : cal stack is mechanism where to keep track fo all the function call
        1: javascript engine use call stack to keep track the execution context when a function is called a new frame is added to the call stack and when the function is complete its frame is removed (basically it work last in first out) (LIFO)
        2: inside the execution phase we have to call stack
        3:and inside the call stack we have  creation phase, execution context, and heap memory. 
        4: hoisting and scop chain are created in execution phase.
        5,in order to manage execution context the javascript engine use a call stack
        6.the call stack is data structure that keep track of the currently execution function in a program 
        7. it operate on the last in first out (LIFO) principle meaning that the last function added to the stack in the first one to be executed and completed

        # when first time run the js code global execution context is create
        1.the javascript engine goes through the creation phase before execution any code, during this phase it sets up global execution context ths global execution context is the first one to be created and pushed onto the call stack this happen when the javascript engine start executing the code.
            1: in global execution contest have 2 phase 
                1. so this execution context has 2 phase first one 
                        1. creation phase  (also known as memory creation phase)
                            1: creating the global object (window in browsers, global in node js) setting up the this references
                            1. js will allocate memory (or reserve memory) to all the variable and function stored with special value like undefined to variable and in case of function it literally store the whole code of the function inside this memory space.
                            2: where variable and function are hoisted
                            i.e These function are stored fully in memory, meaning the entire function is available for use before the code executes.also Variables (var, let, const): These are declared in memory: var variable are initialized with undefined.
                            let and const are declared but not initialized (remains in the temporal dead zone (TDZ) until the code assigning them a value is executed)

                        2: code execution phases (where the code is actually run)
                            1. after memory location code start the execution line by line 
                            2: variable assign their value , and if the  function are invoked or executed then an altogether new execution context is created and this execution contest  has 2 components which is the 
                            1. memory creation phase  
                                1: memory are allocated in first phase for variable and function inside this function
                            2. code execution phase
                                1. once memory allocate then start function execution in code execution phase and do the calculation and when encounter the special keyword return and result  this return keyword tell this function that you are done with your work and return the control back to the execution context where the function is invoke 
                                3:  is that this whole execution context for that instances of that function will be deleted.or remove form the call stack.

                1: so js done with all its work now program is finish then whole global execution context also remove or delete or goes off 
                2:it handle every thing  to manage this execution context creation , deletion and the control it manages a stack this is called as call stack
                3: so execution context mange by the call stack

             


# what is execution context ?
        1: the execution context it the environment in which javascript code is evaluated and executed.
        2. so execution context is bog box or container in which whole js code is executed.

# execution context is container it has two component 
    1 memory  component (memory creation phase)  (also know as variable environment)
        1.so this is place where all the variable and function are stored as key value pair like  key:value, a : 10, function : :{..}
        2: in this sort environment in which all these variable and function are stored as key value pair 
     2. code component  (code execution phase ) (this also know as thread of execution)
        1. this is place where code is executed one line at a time

 
        
# what is interpreter and compiler in js 
    # 1. interpreter :
            1. interpreter take your code translate and executed line by line 
            2. interpreter is slower because interpret every line at runtime 
            3. it is faster because is not wait to compile it start immediately execution  line by line 
            4: stop on the first error it encounters
            4.interpreter does not produce separate file.
            5. cannot optimize as effectively 

    # compiler:
            1. translate or compile entire or whole code even before execution and created into the optimize code or machine code and then it start execution 
            i.e translate or compile whole source code into machine code 
            2: faster execution (because code is already compiled.)
            3. run after full compilation
            4. show all error after compiling
            5.Generate separate machine code file e.g .exe
            6. can optimize code before execution


# differences between compiler and interpreter.

    | Feature                  | **Compiler**                                                    | **Interpreter**                               |
| ------------------------ | --------------------------------------------------------------- | --------------------------------------------- |
| 📜 **Definition**        | Translates the entire source code **at once** into machine code | Translates and executes **code line-by-line** |
| ⚡ **Speed**              | Faster execution (code is already compiled)                     | Slower (interprets every line at runtime)     |
| 🕒 **When Code Runs**    | Runs **after full compilation**                                 | Runs **immediately**, line-by-line            |
| 🧠 **Error Detection**   | Shows **all errors** after compiling                            | Stops on the **first error** it encounters    |
| 📦 **Output**            | Generates a separate **machine code file** (e.g., `.exe`)       | **Does not** produce a separate file          |
| 🔁 **Code Optimization** | Can optimize code before execution                              | Cannot optimize as effectively                |
| 🔧 **Used In**           | C, C++, Java (with JVM), Rust                                   | JavaScript (in browsers), Python, Ruby        |

    
# what jit compiler :
    1. just in time compiler
    2. It is a combination of a compiler and an interpreter, used in modern JavaScript engines (like V8 in Chrome) to boost performance.
    3: jit compiler does both 
        1. like start running code immediately (like interpreter)
        2. job for compiler is to compile hot code into the optimized machine code as much as on the runtime
    4 jit compiler used for Compile while running ("just in time")
    i.e used to optimize your code with fast or hight performances.
    5. jit compiler used to make you code more optimized and run very fast.
            




# Garbage collector :
        1. garbage collection is basically try to free up memory space whenever possible like some function not been used or we clear the timeout and collect oll garbage and sweep it  it is used mark and sweep algorithm
        2. garbage collection does the job of collection garbage and optimize the memory space used by the javascript engine 


# javascript engine used the optimizing technique like 
        1. inlining 
        2. copy elision 
        3. inline caching


# js runtime environment contain following content 
        1. js engine
                1. js having three phase 
                        1. parsing :
                            1. lexical analysis (tokenization)
                            2. syntax analysis (parsing )
                                : create ast 
                            3. compilation phase 
                            4. execution phase 
        2. web-api 
        3. event-loop
        4. ca;;back queue 
            1. macro task queue 
            2. micro task queue   

# js is synchronous single threaded language ?
    1.single thread means js can only execute one command at a time  and when i say 
    synchronous single threaded that means js can only execute one command at a time in specific order so that means that it can only go the next line once the current line has been finished execution 


            */
