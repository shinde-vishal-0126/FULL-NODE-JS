
//| #  path module in node js : that provides utilities for working with file and directory paths.

//! path module in node js : that provides utilities for working with file and directory paths.

const path = require("path");

// return baseName : i.e current file name
// return the file name
const basename = path.basename(
  "/Users/vishalshinde/Documents/Node js/Path-module/path.js"
);
console.log(basename); // path.js

// return the directory name.
console.log(
  path.dirname("Users/vishalshinde/Documents/Node js/Path-module/path.js")
); // ''

// return the extension name
console.log(
  path.extname("Users/vishalshinde/Documents/Node js/Path-module/path.js")
); // .js

// return the object of all the data related to the path.
console.log(
  path.parse("Users/vishalshinde/Documents/Node js/Path-module/path.js")
);
// above log return following object  you can access any one of the property form the object.
// {
//     root: '',
//     dir: 'Users/vishalshinde/Documents/Node js/Path-module',
//     base: 'path.js',
//     ext: '.js',
//     name: 'path'
//   }


