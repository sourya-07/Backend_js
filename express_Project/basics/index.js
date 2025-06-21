require('dotenv').config()
const express = require('express')
const app = express()
const port = 3000

const data = {
  "id": 0,
  "title": "string",
  "price": 0.1,
  "description": "string",
  "category": "string",
  "image": "http://example.com"
}

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/twitter', (req, res) => {
    res.send('souryadotcom')
})

app.get('/login', (req, res) => {
    res.send("<h1>This is our login page</h1>")
})

app.get("/sukriti", (req, res) => {
    res.send("<h2>Welcome to Sukriti's page</h2>")
})

app.get('/data', (req, res) => {
    res.json(data)
})

app.get('/youtube', (req, res) => {
    res.send("<h1>Welcome to my YouTube channel</h1>")
})

app.listen(process.env.PORT, () => {
    console.log(`Example app listening on port ${port}`)
})