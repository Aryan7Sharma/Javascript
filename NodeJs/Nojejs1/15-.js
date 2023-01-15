const {readFile} = require('fs')
const { result } = require('lodash')

console.log('started a first task')
// Check File Path!!!!
readFile('./content/first.txt', 'utf-8', (err, result) =>{
    if (err) {
        console.log("errorrr")
        console.log(err)
        return
    }
    console.log(result)
    console.log('completed first task')
})
console.log('stating next task')
