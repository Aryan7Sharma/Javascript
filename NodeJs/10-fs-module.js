const {readFileSync, writeFileSync} = require('fs')
console.log(readFileSync.name, writeFileSync)

const first = readFileSync('./context/first.txt','utf-8');
const second = readFileSync('./context/second.txt','utf-8');
console.log(first,second)

writeFileSync('./context/result-sync.txt',`Here is the result : ${first}, ${second}`,{flag:'a'})
