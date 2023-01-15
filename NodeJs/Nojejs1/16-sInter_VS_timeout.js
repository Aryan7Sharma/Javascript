//const { setTimeout } = require("timers/promises")
//
//setInterval(() =>{
//    console.log('hello world')
//}, 2000)
console.log(`I will run first`)
// process stay alive
// kill process CONTROL + C
// unexpected error

// started operating sysyem process
console.log('first')
setTimeout(() => {
    console.log('second')
},0)
console.log('third')
