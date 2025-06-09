const fs = require('fs') // Importing the file system module

//sync Function and it is a blocking req
// fs.writeFileSync('./test.txt', 'Hello world') // creates the test.txt file and reads it

// Async Function and it is non-blocking req
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





// fs.appendFileSync("./test.txt", `${Date.now()} Hey There \n`) // appends the data to the file


// fs.cpSync("./test.txt", './copy.txt') // used to copy a file

// fs.unlinkSync("./copy.txt") // used to delete a file

// console.log(fs.statSync('./test.txt')) // used to get the stats of a file










const os = require('os')

console.log(os.cpus().length)