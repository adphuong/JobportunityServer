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

// router.post('/signup', (req, res) => {
// 	var {name, email, password} = req.body
// 	console.log(req.body)

// 	if(!email || !password || !name) {
//         return res.status(422).json({error:"Add all data"})
//     }

//     bcrypt.hash(password, 12)
//     .then((hashedpw) => {
//     	User.findOne({email:email})
// 	   .then((savedUser)=>{
// 	       if(savedUser){
// 	            return res.status(422).json({error:"User already exists with that email"})
// 	       }
// 	       const user=new User({
// 	        email,
// 	        password:hashedpw,
// 	        name,
// 		    })
// 		    user.save()
// 		    .then((user)=>{
// 		        res.json({message:"Saved Successfully"})
// 		        console.log(user.email)
// 		    })
// 		    .catch((err)=>{
// 		        console.log(err)
// 		    })
// 		})
// 		.catch((err)=>{
// 		    console.log(err)
// 		})
//     })
// })

// Login route
router.post('/login', (req, res) => {
    res.json({msg: 'login user'})
})


// router.post('/login', (req, res) => {
// 	var {email,password} = req.body
//     if(!email || !password )
//     {
//         return res.status(422).json({error:"Please add all fields"})
//     }

//     User.findOne({email:email})
//     .then((savedUser) => {
//         if(!savedUser) {
//             return res.status(422).json({error:"Invalid Email or password"})
//         } 
//         bcrypt.compare(password, savedUser.password)
//         .then(match => {
//             if(match) {
//                 res.json({message:"Login Successfull"})
//             }
//             else {
//                 return res.status(422).json({error:"Invalid email or password"})
//             }
//         })
//         .catch((err) => {
//             console.log(err)
//         })
//     })
// })


module.exports = router
