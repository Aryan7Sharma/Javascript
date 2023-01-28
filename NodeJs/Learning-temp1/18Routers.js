const express = require('express')
const app = express();
//console.log(express)
//console.log(app)

const name = []
app.listen(5000) // stablishing server
app.get("/", (req, resp) =>{
    name.push(req.query.name)
    console.log(name)
    resp.send(`Welcome ${name[name.length-1]}`)
});
//console.log(name)
app.get("/help", (req, resp) =>{
    resp.send("Welcome to the help page")
});
app.get("/about", (req, resp) =>{
    resp.send("Welcome to the about page")
});
