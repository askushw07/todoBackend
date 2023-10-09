const router = require('express').Router();
const Todo = require("../model/todos.model.js");
const mongoose = require("mongoose")

router.get("/",async (req, res) => {
    const todos = await Todo.find();
    res.json(todos);
})

router.post("/add",async (req, res) => {
    try {
        const todo = new Todo({ ...req.body });
        await todo.save();
        res.send("Todo created");
    } catch (error) {
        res.send("Error", error);
    }
})



router.delete("/delete/:id",async (req, res) => {
    const id = req.params.id;
    try {
        await Todo.findByIdAndDelete({ _id: id });
        res.send("Item Deleted Successfully")
    } catch (error) {
        res.send("Error");
    }
})

router.put("/update/:id",async (req, res) => {
    const id = req.params.id;
    try {
        await Todo.findByIdAndUpdate({ _id: id },{...req.body});
        res.send("Item updated Successfully")
    } catch (error) {
        res.send("Error");
    }
})




module.exports = router;