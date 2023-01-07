const http = require('http')
const api = require('./api')
const hostname = '127.0.0.1'
const port = 3000;
console.log(api.getUsers()[0])
const server = http.createServer((req, res) =>{
    res.statusCode = 200;
    res.setHeader('Content-type', 'text/plain');
    res.end(`Hello World\n ${api.getUsers()[0].name}`);
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});