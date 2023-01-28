const { Router } = require('express');
const express = require('express');
const app = express();
const connectDB = require('./db/connectDB')
require('dotenv').config()
// import router from routes/tasks.js
const tasks = require('./routes/tasks')

// middleware
app.use(express.static('./public'))
app.use(express.json())


// routes

app.use('/api/v1/tasks', tasks)




const port = 5000

const start = async () =>{
    try{
        await connectDB(process.env.Mongo_Uri)
        app.listen(port, console.log(`server is listening  on port ${port}....`))
    } catch (error) {
        console.log(error)
    }
}

start()
