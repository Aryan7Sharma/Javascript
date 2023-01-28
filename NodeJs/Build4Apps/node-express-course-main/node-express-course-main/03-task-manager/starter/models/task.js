const mongoose = require('mongoose')

const TaskSchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true,'must provided name'],
        trim:true,
        maxlength:[40, 'name can not be meore that 40 characters'],
    },
    completed:{
        type:Boolean,
        default:false,
    },
})

module.exports = mongoose.model('Task', TaskSchema)