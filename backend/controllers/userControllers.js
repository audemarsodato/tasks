const uuidv4 = require('uuid').v4

function generateUUID(req, res) {
        const uuid = uuidv4()
        res.status(200).json(uuid)
}

const User = require('../models/userModel')

function signupUser(req, res) {
        const { email, password } = req.body
        res.status(200).json({email, password})
}

function loginUser(req, res) {
        const { email, password } = req.body
        res.status(200).json({email, password})
}

module.exports = {
        generateUUID,
        signupUser,
        loginUser
}