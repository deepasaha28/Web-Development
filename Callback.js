console.log("Deepa is a Hacker")
console.log("Mouni is a Hecker")

setTimeout(() => {
   console.log("I am inside setTimeout")
}, 0);

setTimeout(() => {
    console.log("I am inside setTimeout2")
 }, 0);

console.log("The End")




const fn = () => {
  console.log("Nothing")
}
const callback = (arg, fn) => {
    console.log(arg)
    fn()
}
const loadscript = (src, callback) => {
   let sc = document.createElement("script");
   sc.src = src;
   sc.onload = callback("Deepa", fn);
   document.head.append(sc)  
}

loadscript("https://cdnjs.cloudflare.com/ajax/libs/prism/9000.0.1/prism.min.js",callback)
