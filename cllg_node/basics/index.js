// const http = require('http');

// const server = http.createServer((req, res) => {
//     res.writeHead(200, { 'Content-Type': 'text/plain' });
//     res.write('Hello, Node.js!\n');
//     res.write(`<h1>goldy</h1>`);
//     res.end()
// });

// server.listen(3000, () => {
//     console.log('Server running at server 3000');
// });


const obj = require("./circle.js")
const process = require('process')

const radius = Number(process.argv[2])

console.log('Area', obj.area(radius))
console.log('Circumference', obj.circumference(radius))

