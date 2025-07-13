const express = require("express")
const { connectToMonogoDB } = require('./connect')
const urlRoute = require('./routes/url')
const app = express()
const PORT = 4000

connectToMonogoDB('mongodb://127.0.0.1:27017/short-url').then(() => console.log('Mongo DB is connected'))

app.use(express.json())
app.use('/url', urlRoute)

app.listen(PORT, ()=> console.log(`Server Started at PORT: ${PORT}`))