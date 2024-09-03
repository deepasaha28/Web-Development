import path from "path"

let myPath = "C:\\Users\\Deepa\\OneDrive\\Documents\\GitHub\\Sigma-Web-Dev-Course\\WEB-DEV\\deepa.txt"
console.log(path.extname(myPath))   //gives exension of file

console.log(path.dirname(myPath))   //gives directory of file

console.log(path.basename(myPath))  //gives name of file

console.log(path.join("c:/","programs\\deepa.txt"))