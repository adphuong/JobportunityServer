const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const User = mongoose.model("User");
// const bcrypt = require( 'bcryptjs' );               // Hashing password for security


router.get('/', (req, res) => {
    res.send("Users db")
})


// Signup route
router.post('/signup', (req, res) => {
    res.json({msg: 'Signup user'})
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
