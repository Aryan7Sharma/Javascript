// event  driven programming
const EventEmitter = require('events');

const customEmitter = new EventEmitter()

customEmitter.on('response',()=>{
    console.log(` data recived `)
})

customEmitter.emit('response')

customEmitter.on('response',()=>{
    console.log(` some other logic here `)
})
customEmitter.on('response',(name, id)=>{
    console.log(` data recived from user ${name}, ${id} `)
})
customEmitter.emit('responses')
customEmitter.emit('response', 'john', 34)


// const http = require('http');
// 
// const server = http.createServer()
// 
// server.on('request', (req, res) => {
//     res.end("welcome")
// })
// server.listen(5000)