const express = require('express')
const router = express.Router()

const {generateUUID, loginUser, signupUser} = require('../controllers/userControllers.js')

router.get('/uuid', generateUUID)
router.post('/signup', signupUser)
router.post('/login', loginUser)

module.exports = router