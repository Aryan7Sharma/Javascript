const mongoose = require('mongoose') // library for connect mongodb database

const connectDB = (url) => {
    return mongoose.connect(url, {
        useNewUrlParser:true,
        useCreateIndex:true,
        useFindAndModify:false,
        useUnifiedTopology:true,
    })
}

module.exports = connectDB