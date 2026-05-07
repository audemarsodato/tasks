const { mongoose } = require('mongoose')
const Task = require('../models/taskModel')

const MAX_PENDING_TASK_PER_QUADRANT = 3
const STATUSES = ['pending', 'done']
const DEFAULT_STATUS = 'pending'
const DEFAULT_QUADRANT = 2

// TODO:
// add check for every time the frontend send data
// check if the req is not json

async function getTasks(req, res) {
        const user_id = req.headers.user_id 
        // TODOS:
        // temporary, replace with re.user._id from the middleware JWT
        // JWT make sure the user_id is registered and is in the list
        // it checks if the user is authentic
        if (!user_id) return res.status(403).json({error: 'Unauthorized access. Token required.'})

        try {        
                const tasks = await Task.find({user_id})
                res.status(200).json(tasks)
        }
        catch (error) {
                res.status(500).json({error: error.message})
        }
}

async function createTask(req, res) {
        const { title } = req.body
        const user_id = req.headers.user_id // temporary, replace with re.user._id from the middleware JWT
        if (!user_id) return res.status(403).json({error: 'Unauthorized access. Token required.'})

        let emptyFields = []
        if (!title) emptyFields.push('title')

        if (emptyFields.length > 0) {
                return res.status(400).json({error: 'Missing inputs!', emptyFields})
        }

        try {
                const tasksCountInQuadrant = await Task.countDocuments({quadrant: DEFAULT_QUADRANT, user_id, status: DEFAULT_STATUS})
                if (tasksCountInQuadrant >= MAX_PENDING_TASK_PER_QUADRANT) {
                        return res.status(400).json({error: "This quadrant is full. Complete or move a task first."})
                }

                const task = await Task.create({title, quadrant: DEFAULT_QUADRANT, status: DEFAULT_STATUS, user_id})
                res.status(201).json(task)
        }
        catch(error) {
                res.status(500).json({error: error.message})
        }
}

async function updateTask(req, res) {
        const { id } = req.params
        const { title, quadrant, status } = req.body
        const user_id = req.headers.user_id // temporary, replace with re.user._id from the middleware JWT
        if (!user_id) return res.status(403).json({error: 'Unauthorized access. Token required.'})

        if (!id) {
                return res.status(400).json({error: 'Task id is required for updateTask.'})
        }

        if (!mongoose.Types.ObjectId.isValid(id)) {
                return res.status(400).json({error: 'Invalid id! Check your id.', id})
        }


        const updates = {}

        if (quadrant !== undefined) {
                const quadrantTypeSafe = Number(quadrant)
                if (!Number.isInteger(quadrantTypeSafe)) return res.status(400).json({error: 'Quadrant must be a number from 1 to 4.'})
                if (quadrantTypeSafe > 4 || quadrantTypeSafe < 1) { // Quadrant number cannot be greater than 4 or less than 0. 
                        return res.status(400).json({error: 'Quadrant must only be 1 to 4.'})
                }
                updates.quadrant = quadrantTypeSafe
        }

        if (status !== undefined) {
                if (!STATUSES.includes(status)) return res.status(400).json({error: 'Invalid status update. Must only be pending or done'})
                updates.status = status
        }

        if (title !== undefined) updates.title = title

        try {
                const currentTask = await Task.findById(id)

                if (!currentTask) return res.status(404).json({error: 'Task does not exists! Task may already been deleted.'})

                if(currentTask.user_id.toString() !== user_id) return res.status(403).json({error: 'Action unauthorized. You dont have access to this task.'})

                if (updates.quadrant !== undefined && updates.quadrant !== currentTask.quadrant) {
                        const tasksCountInQuadrant = await Task.countDocuments({ quadrant: updates.quadrant, user_id: currentTask.user_id, status: 'pending' })
                        if (tasksCountInQuadrant >= MAX_PENDING_TASK_PER_QUADRANT) {
                                return res.status(400).json({error: "This quadrant is full. Complete or move a task first."})
                        }
                }

                const task = await Task.findByIdAndUpdate(id, updates, { returnDocument: 'after', runValidators: true })
                res.status(200).json(task)
        }
        catch(error) {
                res.status(500).json({error: error.message})            
        }
}

async function deleteTask(req, res) {
        const { id } = req.params
        const user_id = req.headers.user_id // temporary, replace with re.user._id from the middleware JWT
        if (!user_id) return res.status(403).json({error: 'Unauthorized access. Token required.'})

        if (!id) {
                return res.status(400).json({error: 'Task id is required for updateTask.'})
        }

        if (!mongoose.Types.ObjectId.isValid(id)) {
                return res.status(400).json({error: 'Invalid id! Check your id.', id})
        }

        try {
                const task = await Task.findOneAndDelete({_id: id, user_id})
                if (!task) {
                        return res.status(404).json({error: 'Task does not exists! Task may already been deleted or unauthorized.'})
                }
                res.status(200).json(task)
        }
        catch(error) {
                res.status(500).json({error: error.message})   
        }
}

module.exports = {
        getTasks,
        createTask,
        updateTask,
        deleteTask
}