const fs = require('fs')

const data = fs.readFileSync("./new.txt", "utf-8")


// console.log(data)
const output = data.replaceAll('0', '🟪').replaceAll('1', '🟨').replaceAll('2', '🟥').replaceAll('3', '🟩').replaceAll('4', '🟨').replaceAll('5', '🟦')
console.log(output)