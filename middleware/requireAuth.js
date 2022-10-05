const jwt = require('jsonwebtoken')
const User = require('../models/User')

const requireAuth = async (req, res, next) => {
    
    // Verify authentication
    const { authorization } = req.headers

    if (!authorization) {
        return res.status(401).json({error: 'Authorization token required'})
    }

    // Split string into two parts - we just want the second string
    const token = authorization.split(' ')[1]

    try {
        // Verify the token and grab id from token
        const {_id} = jwt.verify(token, process.env.SECRET)

        // Use id to find user in database
        req.user = await User.findOne({ _id }).select('_id')
        next()

    } catch (error) {
        console.log(error)
        res.status(401).json({error: 'Request is not authorized'})
    }
}

module.exports = requireAuth