const fs = require("fs")
//const fs =  require("fs/promises")

//console.log(fs)
console.log("start")
//fs.writeFileSync("deepa.txt","Deepa is a good girl")
fs.writeFile("deepa2.txt","deepa is good gurl",()=>{
    console.log("done")
    fs.readFile("deepa2.txt",(error, data)=>{
        console.log(error,data.toString())
    })
})

fs.appendFile("deepa.txt"," and a brilliant girl",(e,d)=>{
    console.log(d)
})
console.log("end")