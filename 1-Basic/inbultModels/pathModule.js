/*
@ core module. (inbuilt in module)

    - node js provide several module as part of the node js runtime itself, these are call as core / built in module .
    - This module are already include in node js (so no need to install thos module )
    - ex. path, os, fs, http, event, crypt, stream. etc.

@ path module

    - built in module (no installation required, no third party package are required.), provide utilities for working with file & directory path.
    - hlep us to create, analyze, tranform, and manipulate file system path.
    - It provides utilities such as `join()`, `resolve()`,`parse()`, `basename()`, `dirname()`, `extname()`,`normalize()`, and `relative()`.
    - It also handles platform-specific path differences, making path-related code more portable across Windows, Linux, and macOS.

@ why do you need path module ?

    - different os system used different path separters for windows : C:\Users\Vishal\project\app.js , linux : /Users/Vishal/project/app.js when we create path manually our code can become os dependent.

*/

// import path module
const path = require('node:path');

// importing module in esm
// import path from 'node:path';

/*
@ comman js module variables. (__direname, __filename)

* so __dirname & _filename are comman js module-specific variables.
* __filename : represent the absoluate path of the current comman js module file, it contain drive, directory name, file name & extension
* __dirname :  represent the absoluate path of the directory containing the current commanJs module. it contain drive, directory name
* __direname & __filename are available dirctly in comman js but it not ES module __dirname & __filename are not provided in the same comman js way */
console.log(__dirname);
console.log(__filename);

/*
@ path module method
*/

// 1. parse() : break the path into individual components
const result = path.parse(__dirname);
console.log(result);

// 2. join() : join multiple segment into a single path
// Join simple string concatination.
// Join handle separator correctly for the current platform.
console.log(path.join(__dirname, 'example', 'user', 'data', 'sample.js'));
console.log(path.join('users', 'hi', 'abc.txt'));

// 3. path.resolve() : resolved sequences of path segment into an absolute path.
// differences :
// path.resolve() : resolve sequenst of path segment into absolute path (i.e find absoluate path)
// join() : join() multiple segment into a simple path (combine path)
console.log(path.resolve('abc', 'vishal.js'));

// 4. path.extname() : return extension of the file path
console.log(path.extname('vishal.txt'));
// if file does not having extention so it return empty
console.log(path.extname(''));
console.log(path.extname('abc/example.txt'));

// 5. path.basename() : return the last proth of the path (usually this is file name)
console.log(path.basename(__filename));
// if you remove the file extension pass 2nd argument as removed extension.
console.log(path.basename('abc/examle.pdf', 'pdf'));

// 6. path.dirname() : return the directory portion of the path
console.log(path.dirname(__filename));

// 7.path.sep : give the platfrom - specific path separator (it allow code to work the separator used by the current operating system.)
console.log(path.sep);

// 8 path.delimiter : gives the platfrom - specific delimeter used for lists of path
// path.sep vs path.delimiter
// path.sep : separate parts of one path
// path.delimiter : separate multiple path in a path list.
console.log(path.delimiter);

// 9. path.toNamespacePath() : convert a pth to a window specific namespace path when applicable.
// mainly useful for windows path handling and compability with windwos namespace paths.
console.log(path.toNamespacedPath(__filename));

// 10 path.format() : does approximately the reverse of path.parse()
const pathObject = {
  dir: '/home/user/project',
  base: 'app.js',
};
console.log(path.format(pathObject));

// 11. path.relative(from, to) : return the relative path from one location to another location
console.log(path.relative(__dirname, __filename));

// 12 path.isAbsolute() : check weather a path is absolute or not
// absolute path start from the root location.
// relative path depends on another location / or current directory
console.log(path.isAbsolute(__dirname));

// 13 path.normalize() : it resolved unnecessary . .. and repeated separaters where appropriate .
// .(dot means ) = current directory
// .. (double dot means) = parent directory
console.log(path.normalize(__filename));
/*

                    PATH MODULE
                              |
          +-------------------+-------------------+
          |                   |                   |
          v                   v                   v
      Analyze              Build               Check
          |                   |                   |
          |                   |                   |
    +-----+------+       +----+-----+       +-----+------+
    |            |       |          |       |            |
    v            v       v          v       v            v
  parse()     basename  join()   resolve() isAbsolute  relative
              dirname
              extname


                        PATH MODULE
                              |
                              v
                     Manipulate paths
                              |
          +-------------------+-------------------+
          |                   |                   |
          v                   v                   v
      normalize()          format()          platform
                                              properties
                                                 |
                                      +----------+----------+
                                      |                     |
                                      v                     v
                                   path.sep          path.delimiter


*/
