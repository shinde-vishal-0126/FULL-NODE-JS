/*
@ REPL

  - Read - Evaluate - Print - Loop
  - It is intaractive shell or environment provided by node js  that allow you to write, execute and test javascript or node js code line by line in real time. directly within terminal.
  - feature of node js very useful to experimenting with node js code
  - best playGround of node js , paly & important role in node js execution, quick testing, experimenting, learning, exploring new code .
  -

  R - read the user input & parse into the javascript code or parse into the data structure that the js engine can understand and stored in memory
  E - evalute : take input and evaluate (the parsed input is evaluated (executed) by the js engine if the input is a valid expression the repl compute the result.)
  p - Print : (print the result of evaluation to the console)  (the result of the evaluated expression is printed back to the console so the we can see the output)
  L - Loop : (loop back to read more user input) (the process then loop back waithing for the next input , and continues units the user does not exist.)
      - loop above command until user does not exist.


  # REPL provide imp features

  1. intaractive js execution
  2. immediate evaluation of expression
  3. access to Node js runtime api
  4. Multi line input (... prompt indicates the REPL waiting for additional input to complete the expression or block)
  5. session seving
  6. Special REPL command
  7. Quick experimentation



  # Benifities

  Q. When to use REPL

  1. StreamLine interactive shell : Execute javascript code interactively.
  2. Quick Testing : ideal for testing and debugging code snippest on the fly.
  3. Built - in top : Offers help commands via .help
  4. Session ManageMent : Support saving (.save) and loading (.load) code session
  5. Node js API access : Provide direct access to Node js api for experimentation
  6. Customizable : Allow customization of prompt and behaviour setting.
  7. perform quick calculation

# Note
  - REPL is useful for experimentation and quick testing  it should not be confused with a full debbuger.

Q. When not used REPL ?

  - Do not use REPL as the main place for developing a Large application.


# defination

  - "Node.js REPL is an interactive command-line environment where we can read, evaluate, print the result, and repeatedly execute JavaScript code."


# Load file in REPL
  - .load filename.js (REPL load and execute the javascript code from the file )

# save the current Sesstion
  - REPL provide .save to save the current session.
  ex.
    .save session.js

# exit REPL
  .exit

# REPL commands
  .clear
  .break
  .help


            USER
              |
              | JavaScript code
              v
          +---------+
          |  READ   |   : R - REPL waits for the user to enter javascript code
          +----+----+         - it determine what code / expression was entered and prepare it for execution
               |
               v
          +---------+
          | EVALUATE|   : E - REPL evaluate / execute the code that was entered
          +----+----+         -
               |
               v
          +---------+
          |  PRINT  |   : p - Dispaly the result of evaluation
          +----+----+           - not every statement produce a useful dispalyed value.
               |
               v
          +---------+
          |  LOOP   |     : L - after printing the result REPL goes back to waiting for the next input
          +----+----+           - this continue until the user exist the REPL
               |
               |
               +------------------+
                                  |
                                  v
                              Wait for
                            next input

Welcome to Node.js v24.13.0.
Type ".help" for more information.
> .help
.break    Sometimes you get stuck, this gets you out
.clear    Alias for .break
.editor   Enter editor mode
.exit     Exit the REPL
.help     Print this help message
.load     Load JS from a file into the REPL session
.save     Save all evaluated commands in this REPL session to a file

*/
