const express = require('express')
const path = require('path')

const app = express();
const publicPath = path.join(__dirname,'Public')

app.listen(5000)
app.get('/', (req,res)=>{
    res.sendFile(`${publicPath}/index.html`)
})
app.get('*', (req,res)=>{
    res.sendFile(`${publicPath}/404Page.html`)
})