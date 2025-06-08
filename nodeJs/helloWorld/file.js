const fs = require('fs') // Importing the file system module

//sync Function
// fs.writeFileSync('./test.txt', 'Hello world') // creates the test.txt file and reads it

// Async 
// fs.writeFile('./test.txt', 'hell0 world', (err) => {}); // creates the test.txt file and reads it






// reading of a file in sync function

// const result = fs.readFileSync("./contacts.txt", "utf-8")
// console.log(result)


// reading of a file in Async function

// fs.readFile("./contacts.txt", "utf-8", (err, result) => {
//     if (err) {
//         console.log("Error", err);
//     } else {
//         console.log(result)
//     }
// })





fs.appendFileSync("./test.txt", new Data().getData().toLocaleString())