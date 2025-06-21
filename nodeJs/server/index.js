const http = require("http")
// const fs = require("fs")
// const url = require("url")
const express = require("express")

const app = express()

app.get('/', (req, res)=> {
    return res.send("<h1>Hello from HomePage.</h1>")
})

app.get('/about', (req, res)=> {
    return res.send("Hello from About Page.")
    // return res.send(`Hello from About page, Hey ${req.query.name}, You are ${req.query.age}`)
})



function myHandler(req, res){
// In this function we can write our own logic of nodeJs.
    if (req.url === "/favicon.ico") return res.end()
    const log = `${Date.now()}: ${req.url} New Req Received \n`;
    const myUrl = url.parse(req.url, true)
    console.log(myUrl)
    fs.appendFile('log.txt', log, (err, data) => { })

    switch (myUrl.pathname) {
        case '/':
            if (req.method === 'GET') res.end("<h1>HomePage</h1>")
            break;
        case '/about': {
            const username = myUrl.query.myname
            res.end(`Hi, ${username}`)
            break
        }
        case '/search': {
            const search = myUrl.query.search_query
            res.end("Here are your results for " + search)
            break
        }
        case '/signup': {
            if (req.method === 'GET') res.end("This is a signup Form.")
            else if (req.method === 'POST') {
                // DB Query
                res.end("Success")
            }
            break
        }

        default:
            res.end("404 Not Found!")
    }

}


// const myServer = http.createServer(app)

// myServer.listen(3000, () => console.log("Server Stared!"))



app.listen(3000, () => console.log(("Server Started")))