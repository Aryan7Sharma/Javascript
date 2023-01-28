const {writeFileSync, unlinkSync} = require('fs')
const input = process.argv;

if (input[2] == 'add'){
    writeFileSync(`${input[3]}.txt`, input[4])
}else if (input[2] == 'remove'){
    unlinkSync(`${input[3]}.txt`)
} else{
    console.log("invalid input")
}