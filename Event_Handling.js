let button = document.getElementById("btn")

button.addEventListener("dblclick", ()=>{
     //alert("I was clicked , yayy!!")
     document.querySelector(".box").innerHTML="<b>Enjoy your Click!</b>Yay you are clicked"
    
})

button.addEventListener("contextmenu", ()=>{
    alert("Don't hack us by right click")

})

document.addEventListener("keydown", ()=>{
    console.log(e, e.key, e.keyCode)
    
})

