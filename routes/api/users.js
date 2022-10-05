const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const User = mongoose.model("User");
const jwt = require('jsonwebtoken')

const createToken = (_id) => {
    return jwt.sign({_id}, process.env.SECRET, {expiresIn: '3d'})
}

router.get('/', (req, res) => {
    res.send("Users db")
})


// Signup route
router.post('/signup', async (req, res) => {
    const {email, password} = req.body

    // Sign up a user
    try {
        // Create user in database
        const user = await User.signup(email, password)
        
        // Create a token
        const token = createToken(user._id)

        // Pass back to browser
        res.status(200).json({email, token})

    } catch(error) {
        res.status(400).json({error: error.message})
    }

})


// Login route
router.post('/login', async (req, res) => {
    const {email, password} = req.body 

    // Sign up a user
    try {
        const user = await User.login(email, password)
        
        // Create a token
        const token = createToken(user._id)

        // Pass back to browser
        res.status(200).json({email, token})

    } catch(error) {
        res.status(400).json({error: error.message})
    }
})



module.exports = router
