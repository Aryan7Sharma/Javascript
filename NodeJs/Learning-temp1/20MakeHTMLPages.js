const express = require('express')
const path = require('path')

const app = express();
const publicPath = path.join(__dirname,'Public')
//console.log(publicPath)


app.listen(5000)
app.use(express.static(publicPath));