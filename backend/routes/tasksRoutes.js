const express = require('express')
const router = express.Router()

const {
        createTask,
        getTasks,
        updateTask,
        deleteTask
} = require('../controllers/tasksControllers.js')

// CREATE task
router.post('/', createTask)

// GET all tasks
router.get('/', getTasks)

// UPDATE a task
router.patch('/:id', updateTask)

// DELETE a task
router.delete('/:id', deleteTask)

module.exports = router