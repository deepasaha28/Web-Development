const express = require('express')
const app = express()
const hostname = '127.0.0.3';
const port = 1628;

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    let siteName = "Adidas"
    let searchText = "Search Now"
    let arr = ["Web-Dev","App","AI"]
  res.render("bootstrap", {siteName: siteName, searchText: searchText, arr})
})

app.get('/blog/:slug', (req, res) => {
    let blogTitle = "Adidas why and when"
    let blogContent = "It is a very good brand"
  res.render("blogpost", {blogTitle: blogTitle,
    blogContent: blogContent})
})

app.listen(port,hostname, () => {
  console.log(`Example app listening on port ${hostname}:${port}`)
})