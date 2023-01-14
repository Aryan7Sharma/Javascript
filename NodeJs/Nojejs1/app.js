const { readFile, writeFile} = require('fs')
console.log(readFile, writeFile)
readFile('./context/first.txt', 'utf-8', (err, result) => {
    if (err) {
        console.log(err)
        return
    }
    const first = result
    readFile('./context/second.txt', 'utf-8', (err, result) =>{
        if (err){
            console.log(err)
            return
        }
        const second = result
        writeFile('./context/result-sycn.txt', `Here is the result: ${first}, ${second}`, (err, result) => {
            if (err) {
                console.log(err)
                return
            }
            console.log('done with this task')
        })
    })
})
console.log('starting new task')
