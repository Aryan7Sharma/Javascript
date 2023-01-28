const express = require('express')
const path = require('path')

const app = express();
const publicPath = path.join(__dirname,'Public')

app.listen(5000)

app.set('view engine', 'ejs'); //dynamic (Template Engine)


app.get('/', (req,res)=>{
    res.sendFile(`${publicPath}/index.html`)
})
app.get('/profile',(req,res)=>{
    const user = {
        name:'aryan sharma',
        age:20,
        designation:"Engineer"
    }
    res.render('profile', {user})
})
app.get('*', (req,res)=>{
    res.sendFile(`${publicPath}/404Page.html`)
})

