// This library tells babel to transpile everything after using the babel rules we set up in the .babelrc
// In this case we want babel to transpile our express file 
require("babel-register");
require("./express"); 