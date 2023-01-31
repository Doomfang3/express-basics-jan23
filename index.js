const express = require('express')
const expressLayouts = require('express-ejs-layouts')
const app = express()
const port = 3000

app.use(express.static('public'))

app.set('views', __dirname + '/views')
app.set('view engine', 'ejs')
app.use(expressLayouts)

app.get('/', (req, res) => {
  console.log(req.url)
  // res.sendFile(__dirname + '/views/index.html')
  res.render('index', { title: 'Homepage' })
})

app.get('/contact', (req, res) => {
  console.log(req.url)
  const hopper = { type: 'Dino', alive: false }
  const hopper2 = { type: 'Chimp', alive: true }
  // res.sendFile(__dirname + '/views/hopper.html')
  res.render('hopper', { pizza: hopper, pizza2: hopper2, title: 'Contact' })
})

app.get('/about', (req, res) => {
  console.log(req.url)
  // res.sendFile(__dirname + '/views/about.html')
  res.render('about')
})

app.get('/dog', (req, res) => {
  console.log(req.url)
  res.sendFile(__dirname + '/views/dog.html')
})

app.post('/dog', () => {})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
