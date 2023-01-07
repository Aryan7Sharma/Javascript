const { readFile, writeFile} = require('fs')

console.log(readFile, writeFile)
readFile('./context/first.txt', 'utf-8', (err, result) => {
    if (err) {
        console.log(err)
        return
    }
    console.log(result)
})