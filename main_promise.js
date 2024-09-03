import fs from "fs/promises"
let a = await fs.readFile("deepa.txt")
//let b = await fs.writeFile("deepa.txt",  // keeps only write text in file and removing the previous text
//    "\n\n\n this is amazing promise")
let b = await fs.appendFile("deepa.txt",  // adds new text in file keeping the previous text
        "\n\n\n deepa is amazing")    
console.log(a.toString(), b)