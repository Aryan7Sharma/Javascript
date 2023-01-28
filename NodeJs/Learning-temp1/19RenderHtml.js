const express = require('express')
const app = express();
//console.log(express)
//console.log(app)

let name = ""
app.listen(5000) // stablishing server
app.get("/", (req, resp) =>{
    name = req.query.name
    console.log(name)
    resp.send(`<h1>Welcome! ${name}</h1>`)
});
//console.log(name)
app.get("/help", (req, resp) =>{
    resp.send("Welcome to the help page")
});
app.get("/about", (req, resp) =>{
    resp.send(`
    <input type="text" placeholder="User Name">
    <button type = "submit">Click Me</button>
    `)
});
