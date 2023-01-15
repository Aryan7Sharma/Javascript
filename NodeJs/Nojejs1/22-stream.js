const { error } = require('console');
const {createReadStream} = require('fs');


const stream = createReadStream('./content/bigFile.txt',{
    highWaterMark:90000,
    //encoding:'utf8',
});

stream.on('data', (result) => {
    console.log(result)
})
stream.on('error', (erro) => {
    console.log(erro)
})
