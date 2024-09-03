const express = require('express')
const app = express()
const hostname = '127.0.0.3';
const port = 9000;
const blog = require('./routes/blog')
const fs = require("fs")

//app.use(express.static('public'))

app.use('/blog' , blog)

//middleware 1
app.use ((req, res, next) => {
    console.log(req.headers)
    req.deepa = "I am monkey";
  fs.appendFileSync("logs.txt", `${Date.now()} is a ${req.method}`)
  console.log(`${Date.now()} is a ${req.method}`)
  next()
})

//middleware 2
app.use ((req, res, next) => {
    console.log('m2')
    next()
  })
  

app.get('/', (req, res) => {
  res.send('Hello World! Hi Deepa')
})

app.get('/about', (req, res) => {
    res.send(' about us!'+ req.deepa)
  })
  
app.get('/contact', (req, res) => {
    res.send('Hello contact us!')
  })

app.listen(port,hostname, () => {
  console.log(`Example app listening on port ${hostname}:${port}`)
})