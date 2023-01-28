const {writeFileSync,readdir} = require('fs')
const path = require('path')
const dirPath = path.join(__dirname,'files')
console.log(__dirname)
console.log(dirPath)

for (i=0; i<5; i++){
    writeFileSync(`${dirPath}/hello${i}.txt`, "a simple text file")
}
//writeFileSync('apple.txt','this is a apple file')

readdir(dirPath, (err,files) =>{
    //console.log(files)
    files.forEach((item)=>{
        console.log(item) // for iterating all values of array
    })
}) 