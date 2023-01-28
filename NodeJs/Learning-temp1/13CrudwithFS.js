const {writeFileSync,readdir, readFile, appendFile, unlinkSync} = require('fs')
const path = require('path')
const dirPath = path.join(__dirname,'crud');
const filepath = `${dirPath}/apple.txt`
console.log(__dirname)
console.log(dirPath)

//writeFileSync(filepath,'This is a simple text file');
readFile(filepath, 'utf-8',(err,item)=>{
    console.log(item)
})
writeFileSync(filepath,"add new data",{flag:'a'}) // update data we also use append function

appendFile(filepath," \n  add more data", (err)=>{
    if(!err){
        console.log("file updated")
    }
    else{
        console.log(err)
    }
})


// rename file or replace that file
unlinkSync(filepath) // delete file