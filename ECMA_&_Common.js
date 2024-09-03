//ECMA Script ES6 module import (loaded asynchronously), type:module


//import {a, b, e} from "./mymodule1.js"  //named export
//console.log(a, b, e)

//import obj from "./mymodule1.js"    //default export 
//console.log(obj)

//import deepa from "./mymodule1.js" // default export can be imported with any name
//console.log(deepa)




//CommonJS import using require (deafult import:loaded synchronously) 


const c = require("./mymodule2.js")
console.log(c, __dirname, __filename)