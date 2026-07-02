const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const validator = require('validator')

const Schema = mongoose.Schema
const userSchema = new Schema({
        email: {
                type: String,
                required: true,
                unique: true
        },
        password: {
                type: String,
                required: true
        }
}, { timestamps: true })

userSchema.statics.signup = async function(email, password) { // static method can use arrow function?
        const userExists = await this.findOne({ email })

        if (!email || !password) {
                throw Error('Missing required fields')
        }

        if (userExists) {
                throw Error('Email already in use')
        }
        
        if (!validator.isEmail(email)) {
                throw Error('Invalid email')
        }

        if (!validator.isStrongPassword(password)) {
                throw Error('Weak password')
        }


        const salt = await bcrypt.genSalt()
        const hashed = await bcrypt.hash(password, salt)

        const user = await this.create({email, password: hashed})

        return user
}

module.exports = mongoose.model('User', userSchema)