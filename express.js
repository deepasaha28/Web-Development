const express = require('express')
const app = express()
const port = 4000  //hostname = '127.0.0.1'

app.use(express.static('public'))

//app.get or app.post or app.put or app.delete(path, handler)
app.get('/', (req, res) => {
  res.send('Hello World2!')
})

app.get('/about', (req, res) => {
  res.send(' about us!')
})

app.get('/contact', (req, res) => {
  res.send('Hello contact us!')
})

app.get('/blog', (req, res) => {
  res.send('Hello blog!')
})

app.get('/blog/:slug', (req, res) => {     //parameter
  //logic to fetch {slug} from db

  //for url: http://127.0.0.2:4000/blog/intro-to-python?mode=dark&region=in
  console.log(req.params) // gives output- params: { slug: 'intro-to-python' }
  console.log(req.query) // gives output- query: { mode: 'dark', region: 'in' }
  res.send(`Hello ${req.params.slug}`)
})

//app.get('/blog/:slug/:second', (req, res) => {     //two parameters
//  //logic to fetch {slug} from db
//  res.send(`Hello ${req.params.slug} and ${req.params.second}`)
//})


//app.get('/blog/intro-to-js', (req, res) => {
//  //logic to fetch intro-to-blog from db
//  res.send('Hello intro-to -js!')
//})

//app.get('/blog/intro-to-python', (req, res) => {
//  //logic to fetch intro-to-python from db
//  res.send('Hello intro-to -python!')
//})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})