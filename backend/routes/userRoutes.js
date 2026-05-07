const express = require('express')
const router = express.Router()

const {generateUUID} = require('../controllers/userControllers.js')

router.get('/uuid', generateUUID)

module.exports = router