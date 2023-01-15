const http = require('http');

const server = http.createServer((req, res) =>{
    //console.log(req)
    if (req.url === '/'){
    res.end("Welcome to our home page");
    }
    else if (req.url === '/about'){
        res.end("Welcome on the about section")
    }
    //console.log("server")
    else {res.end(
        `<h1> Oops!</h1>
        <p> Page does not exists</p>
        <a href="/">back home</a>`    
    )}
})

server.listen(5000)