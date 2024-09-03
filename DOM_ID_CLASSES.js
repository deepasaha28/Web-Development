console.log("Deepa")

//let boxes = document.getElementsByClassName("box")
//console.log(boxes)
//boxes[2].style.backgroundColor="green"

//document.getElementById("redbox").style.backgroundColor = "red"

//document.querySelector(".box").style.backgroundColor="yellow";
console.log(document.querySelectorAll(".box"))
document.querySelectorAll(".box").forEach(e =>{
    e.style.backgroundColor="blue";
})
console.log(document.getElementsByTagName("div"))

//matches,closest and contains

e=document.getElementsByTagName("div")
console.log(e[4].matches("#redbox"));
console.log(e[3].matches("#redbox"));

console.log(e[4].closest("#redbox"));
console.log(e[3].closest("#redbox"));
console.log(e[3].closest(".container"));
console.log(e[3].closest("html"));

console.log(document.querySelector(".container").contains(e[2]))
console.log(document.querySelector(".container").contains(e[0]))

console.log(document.querySelector(".container").contains(document.querySelector("body")))
console.log(document.querySelector("body").contains(document.querySelector(".container")))
