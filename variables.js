console.log("Variables in Javascript")

var b = 7;
var c = "Deepa";
var _a = "Sneha";
//var 55a = "Chizu"; not allowed
const a1 = 8;
//a1 = a1+1; not allowed because a1 is const.

console.log(b+8)
console.log(typeof b,typeof c)




let a = 5; //let is block-scoped
a = a+1
{
    let a = 66;
    console.log(a)
}

var d = 5; //var is globally-scoped
d = d+1 
{
    var d = 66;
    console.log(d)

}

//primitive data types

let x = "Deepa Darling";
let y = 22;
let z = 3.14;
const p =true;
let q = undefined;
let r = null;

console.log(x,y,z,p,q,r)
console.log(typeof x,typeof y,typeof z,typeof p,typeof q,typeof r)


//objects

let o = {
    "name":"Harry",
    "job code": 5600,
    "is_handsome": true
}

console.log(o)
o.salary = "100crores";
console.log(o)
o.salary = "500crores";
console.log(o)




