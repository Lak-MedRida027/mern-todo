const mongoose = require("mongoose")
const Schema = mongoose.Schema

const TodoSchema = new Schema({
    task: String,
    done:{
        type:Boolean,
        default:false
    }
})

module.exports = mongoose.model('TodoModule' , TodoSchema)