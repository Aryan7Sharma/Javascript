const path = require('path')
//console.log(path)

console.log(path.sep)

const filePath = path.join('/content', 'subfolder', 'text.txt', 'text2.txt')
console.log(filePath)

const base = path.basename(filePath)
console.log(base)

console.log(__dirname)
const absolute = path.resolve(__dirname,'content','subfolder','text.txt');
console.log(absolute)