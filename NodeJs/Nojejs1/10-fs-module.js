const fs = require('fs')
//console.log(fs)

const {readFileSync, writeFileSync} = require('fs') 
console.log(readFileSync,writeFileSync)

const first = readFileSync('./content/first.txt', 'utf-8')
const second = readFileSync('./content/subfolder/second.txt', 'utf-8')
console.log(first, second)


// this will overwrite the file
//writeFileSync('./content/result-sync.txt', `here is the result : ${first}---and----${second}`)

// appending content in the file not overwriting
writeFileSync(
    './content/result-sync.txt', 
    `here is the result : ${first}---and----${second}`,
    {flag: 'a'} // a means append
    )
