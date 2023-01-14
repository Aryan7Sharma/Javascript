const http = require('http')
const api = require('./api')
const hostname = '127.0.0.1'
const port = 3000;
console.log(api.getUsers()[0])
const server = http.createServer((req, res) =>{
    res.statusCode = 200;
    if (req.url === '/') {
        res.end('Welcome to our home page')
      } else if (req.url === '/about') {
        res.end('Here is our short history')
      } else {
        res.end(`
        <h1>Oops!</h1>
        <p>We can't seem to find the page you are looking for</p>
        <a href="/">back home</a>
        `)
      }
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});