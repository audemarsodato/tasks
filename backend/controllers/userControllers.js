const uuidv4 = require('uuid').v4

function generateUUID(req, res) {
        const uuid = uuidv4()
        res.status(200).json(uuid)
}

module.exports = {
        generateUUID
}