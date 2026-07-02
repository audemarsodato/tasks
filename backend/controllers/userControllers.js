const uuidv4 = require('uuid').v4

function generateUUID(req, res) {
        const uuid = uuidv4()
        res.status(200).json(uuid)
}

const User = require('../models/userModel')

async function signupUser(req, res) {
        try {
                const { email, password } = req.body

                if (!email || !password) {
                        res.status(400).json({error: 'Missing required fields'})
                        return
                }

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

        // check if user does not exists
        
        const user = await User.findByIdAndDelete(id)

        res.status(200).json(user)
}

module.exports = {
        generateUUID,
        signupUser,
        loginUser,
        deleteUser
}