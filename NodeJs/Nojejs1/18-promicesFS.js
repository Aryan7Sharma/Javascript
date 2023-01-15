const {readFile, writeFile} = require('fs')
const util = require('util');
const readFilePromice = util.promisify(readFile)
const writeFilePromice = util.promisify(writeFile)


const start = async() =>{
    try{
        const first = await readFilePromice('./content/first.txt', 'utf-8')
        const second = await readFilePromice('./content/subfolder/second.txt', 'utf-8')
        await writeFilePromice('./content/subfolder/result.mg.txt', `\nThis is Awesome: \n${first} \n${second}`,
        {flag:'a'})
        console.log(first,second)
    }catch (error) {
        console.log(error)
    }finally{
        //console.log(first)
    }
}
start()


// const { reject, result, first } = require('lodash')
// const { resolve } = require('path')
// const getText = (path) =>{
//     return new Promise((resolve, reject)=> {
//         readFile(path, 'utf8',(err,data) => {
//             if (err){
//                 reject(err)
//             } else {
//                 resolve(data)
//             }
//         })
//     })
// }

// console.log(getText('./content/first.txt'))
// getText('./content/first.txt')
//     .then((result) => console.log(result))
//     .catch((err) => console.log(err))


