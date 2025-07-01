const express = require("express")
const fs = require('fs')
const mongoose = require('mongoose')
// const users = require("./MOCK_DATA.json")

const app = express()
const PORT = 8000


// Connection 
mongoose
    .connect('mongodb://127.0.0.1:27017/youtube-app-1')
    .then(() => console.log('MongoDB Connected'))
    .catch((err) => console.log('Mongo Error', err))
// Schema 

const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    jonTitle: {
        type: String,
    },
    gender: {
        type: String,
    },

}, { timestamps: true })

const User = mongoose.model("user", userSchema)


// Middleware - Plugin
app.use(express.urlencoded({ extended: false }))

app.use((req, res, next) => {

    fs.appendFile("log.txt",
        `\n${Date.now()}: ${req.ip} ${req.method}: ${req.path}`, (err, data) => {
            next()
        })
    // console.log("Hello from middleware 1")
    // req.myUserName = 'Sourya'
    // return res.json({ msgs: "Hello from middleware 1" })
    // next();
})

// app.use((req, res, next) => {
//     // console.log("Hello from middleware 2", req.myUserName)
//     // return res.json({ msgs: "Hello from middleware 1" })
//     next()
// })

app.get('/users', async (req, res) => {
    const allDbUsers = await User.find()
    const html = `
    <ul>
        ${allDbUsers.map((user) => `<li>First Name = ${user.firstName} and Last Name = ${user.lastName} - ${user.email}</li>`
    ).join("")}
        
    </ul>
    `;
    res.send(html)

})

// Rest Api :-
app.get('/api/users', async (req, res) => {
    const allDbUsers = await User.find()

    res.setHeader("X-MyName", 'Sourya') // This is our custom Header
    // Always add X to custom headers
    console.log(req.headers)
    return res.json(allDbUsers)
})



app
    .route("/api/users/:id")
    .get( async (req, res) => {
        const user = await User.findById(req.params.id)
        if(!user) return res.status(404).json({ error: 'user not found' })
        return res.json(user)
    })
    .patch(async(req, res) => {
        //Edit user with id
        await User.findByIdAndUpdate(req.params.id, { lastName: 'Changed'})
        return res.json({ status: 'Success' })
    })
    .delete(async(req, res) => {
        //Delete user with id
        await User.findByIdAndDelete(req.params.id)
        return res.json({ status: 'Success' })
    })


app.post('/api/users', async (req, res) => {
    // TODO: Create new user
    const body = req.body
    if(!body || !body.first_name || !body.last_name || !body.email || !body.gender || !body.job_title){
        return res.status(400).json({ msg: 'All fields are req...' })
    }

    const result = await User.create({
        firstName: body.first_name,
        lastName: body.last_name,
        email: body.email,
        gender: body.gender,
        jobTitle: body.job_title,
    })

    return res.status(201).json({ msg: 'Sucess' })
    
})


app.listen(PORT, () => console.log(`Server Started at Port ${PORT}`))