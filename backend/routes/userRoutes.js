const express = require('express')
const router = express.Router()

const {generateUUID, loginUser, signupUser, deleteUser} = require('../controllers/userControllers.js')

router.get('/uuid', generateUUID)
router.post('/signup', signupUser)
router.post('/login', loginUser)

// Update account, change username, email, password

// danger zone
router.delete('/delete/:id', deleteUser)

module.exports = router