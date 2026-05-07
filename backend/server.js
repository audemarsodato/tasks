require('dotenv').config()

const cors = require('cors')
const mongoose = require('mongoose')
const express = require('express')
const app = express()

const tasksRoutes = require('./routes/tasksRoutes.js')
const useRoutes = require('./routes/userRoutes.js')

app.use(cors('http://localhost:5173/'))
app.use(express.json())
app.use((req, res, next) => {
        const start = Date.now()
        res.on('finish', () => {
                const duration = Date.now() - start
                console.log(`${req.method} - ${req.originalUrl} - ${res.statusCode} - ${duration}ms`)
        })
        next()
})

app.use('/api/users', useRoutes)
app.use('/api/tasks', tasksRoutes)

mongoose.connect(process.env.MONGODB_URI)
        .then(() => {
                console.log('connected to db')
                app.listen(process.env.PORT, () => {
                        console.log('listening on port', process.env.PORT)
                })
        })
        .catch(error => {
                console.log(error)
        })