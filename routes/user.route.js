const router = require('express').Router();
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const mongoose = require("mongoose");
const User = require("../model/user.model.js");


router.post("/signup", async(req, res) => {
    const { email, password } = req.body;
    // console.log({...req.body})
    const ipAddress = req.headers['x-forwarded-for'] ||
        req.socket.remoteAddress;
    try {
        
        bcrypt.hash(password, 5, async function(err, hash) {
            // Store hash in your password DB.
            if (err) return res.send("Error", err);
            const user = new User({ email, password:hash, ipAddress });
            await user.save();
            res.json("Sign up succesfull");
        });
        
    } catch (error) {
        res.json("Something went wrong");
    }
})

router.post("/login",async (req, res) => {
    const { email, password } = req.body;
    const user =await User.findOne({ email });
    try {
        bcrypt.compare(password, user.password, function(err, result) {
            if (err) return res.send("Error", err);
            var token = jwt.sign({ foo: 'bar' }, 'shhhhh');
            res.json({message:"Sign in Successfull",token});
        });
    } catch (error) {
        res.send("Error", "Someting went wrong");
    }
})

module.exports = router;