const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require( 'bcryptjs' );               // Hashing password for security

const UserSchema = new Schema ({
	// name: {
	// 	type: String,
	// 	required: true
	// },

	email: {
		type: String,
		required: true,
		unique: true
	},

	password: {
		type: String,
		required: true
	},
})


// Static signup method
UserSchema.statics.signup = async function(email, password) {
	// Check if email exists in database
	const exists = await this.findOne({ email })

	if (exists) {
		throw Error('Email already in use')
	}

	const salt = await bcrypt.genSalt(10)
	const hash = await bcrypt.hash(password, salt)

	const user = await this.create({ email, password: hash})

	return user
}


// mongoose.model("User", UserSchema);
module.exports = mongoose.model('User', UserSchema)