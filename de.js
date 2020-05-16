const fs = require('fs')

const reading = fs.readFileSync('details.json')

console.log(JSON.parse(reading))