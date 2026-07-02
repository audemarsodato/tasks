const uuidv4 = require('uuid').v4

function generateUUID(req, res) {
        const uuid = uuidv4()
        res.status(200).json(uuid)
}

const { default: mongoose } = require('mongoose')
const User = require('../models/userModel')

async function signupUser(req, res) {
        try {
                const { email, password } = req.body
                const user = await User.signup(email, password)
                res.status(200).json(user)
        }
        catch (error) {
                res.status(400).json({error: error.message})
        }
}

async function loginUser(req, res) {
        const { email, password } = req.body
        res.status(200).json({email, password})
}

async function deleteUser(req, res) {
        const { id } = req.params
        console.log(id)

        if (!mongoose.Types.ObjectId.isValid(id)) {
                res.status(400).json({error: 'Invalid id'})
                return
        }

        const userExists = await User.findById(id)
        if (!userExists) {
                res.status(404).json({error: 'User does not exists'})
                return
        }

        const user = await User.findByIdAndDelete(id)

        res.status(200).json(user)
}

module.exports = {
        generateUUID,
        signupUser,
        loginUser,
        deleteUser
}