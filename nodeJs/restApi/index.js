const express = require("express")
const fs = require('fs')
const users = require("./MOCK_DATA.json")
const { error } = require("console")

const app = express()
const PORT = 8000

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

app.get('/users', (req, res) => {
    const html = `
    <ul>
        ${users.map((user) => `<li>First Name = ${user.first_name} and Last Name = ${user.last_name}</li>`
    ).join("")}
        
    </ul>
    `;
    res.send(html)

})

// Rest Api :-
app.get('/api/users', (req, res) => {
    res.setHeader("X-MyName", 'Sourya') // This is our custom Header
    // Always add X to custom headers
    console.log(req.headers)
    return res.json(users)
})



app
    .route("/api/users/:id")
    .get((req, res) => {
        const id = Number(req.params.id)
        const user = users.find((user) => user.id === id)
        if(!user) return res.status(404).json({ error: 'user not found' })
        return res.json(user)
    })
    .patch((req, res) => {
        //Edit user with id
        return res.json({ status: 'Pending' })
    })
    .delete((req, res) => {
        //Delete user with id
        const id = Number(req.params.id)
        const updatedUsers = users.filter((user) => user.id !== id)

        users.length = 0
        updatedUsers.forEach(user => users.push(user))

        fs.writeFile('./MOCK_DATA.json', JSON.stringify(users), (err, data) => {
            return res.json({ status: 'success', message: `User with id ${id} deleted.` })
        })
    })


app.post('/api/users', (req, res) => {
    // TODO: Create new user
    const body = req.body
    if(!body || !body.first_name || !body.last_name || !body.email || !body.gender || !body.job_title){
        return res.status(400).json({ msg: 'All fields are req...' })
    }

    // console.log("Body", body)
    users.push({ ...body, id: users.length + 1 })
    fs.writeFile('./MOCK_DATA.json', JSON.stringify(users), (err, data) => {
        return res.status(201).json({ status: 'success', id: users.length })
    })
})


app.listen(PORT, () => console.log(`Server Started at Port ${PORT}`))