const {readFile, writeFile} = require('fs')
console.log(readFile, writeFile)

readFile('./content/first.txt','utf-8', (err, result) =>{
    if (err){
        console.log("error",err)
        return 
    }
    //console.log(result)
    const first = result
    readFile('./content/subfolder/second.txt','utf-8', (err, result) =>{
        if (err) {
            console.log("Errorn on Second.txt")
            console.log(err)
            return
        }
        const second = result
        console.log(first, second)
        writeFile(
            './content/result-sync.txt',
            `Here is the result : \n ${first}, \n ${second}`, (err, result)=>{
                if (err){
                    console.log("write error")
                    console.log(err)
                    return
                }
                console.log("Everthing run Perfectly")
            }
        ) 
    })
})
