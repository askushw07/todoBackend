const mongoose = require("mongoose");

const todoSchema = new mongoose.Schema({
    taskName: { type: String, required: true },
    status: { type: String, required: true },
    tag: { type: String, required: true },
    // userId:{type:String, required:true}
})

const Todo = mongoose.model("Todo", todoSchema);

module.exports = Todo;