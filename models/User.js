const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require( 'bcryptjs' );               // Hashing password for security
const validator = require('validator')

const UserSchema = new Schema ({
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
	// Validation

	// Check that all fields have values
	if (!email || !password) {
		throw Error('All fields must be filled')
	}
	// Check if email is valid
	if (!validator.isEmail(email)) {
		throw Error('Email is not valid')
	}
	// Check if password is strong
	if (!validator.isStrongPassword(password)) {
		throw Error('Password is not strong enough')
	}

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

// Static login method
UserSchema.statics.login = async function(email, password) {
	// Check that all fields have values
	if (!email || !password) {
		throw Error('All fields must be filled')
	}

	// Check if email exists in database
	const user = await this.findOne({ email })

	if (!user) {
		throw Error('Incorrect email')
	}

	// Compare hash passwords if user exists
	const match = await bcrypt.compare(password, user.password)
	if (!match) {
		throw Error('Incorrect password')
	}

	return user
}

// mongoose.model("User", UserSchema);
module.exports = mongoose.model('User', UserSchema)