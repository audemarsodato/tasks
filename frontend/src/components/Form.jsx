import { useState } from "react"
import useTasksContext from '../hooks/useTasksContext'
import useToastContext from "../hooks/useToastContext"
import userUserContext from '../hooks/useUserContext'
import { isFull } from '../utilities'

export default function Form() {
        const [ taskInput, setTaskInput ] = useState(null)
        const { tasks, dispatch } = useTasksContext()
        const { showToast } = useToastContext()
        const { user_id } = userUserContext()
        
        // sundin at makinig kay trisha!!!
        // im done with assigning uuid or authentication for users. what is next is deployment tommorow. this is just a reminder, do not reply
        async function handleSubmit(event) {
                event.preventDefault()

                const defaultQuadrant = 2

                if (isFull(defaultQuadrant, tasks)) {
                        showToast('Q2 quadrant is full. Complete or move a task first.')
                        // setTaskInput('')
                        return
                }

                if (!taskInput) {
                        showToast('Enter what you need to finish')
                        return
                }

                try {
                        const task = {title: taskInput}
                        
                        const response = await fetch('http://localhost:3000/api/tasks', {
                                method: 'POST',
                                headers: {
                                        'Content-Type': 'application/json',
                                        user_id
                                },
                                body: JSON.stringify(task)
                        })

                        const json = await response.json()
                        
                        dispatch({type: 'ADD', payload: json})
                        setTaskInput('')
                }
                catch (error) {
                        console.log(error)
                }
        }

        return (
                <form onSubmit={handleSubmit}>
                        <input type='text' placeholder='New Task...' value={taskInput} onChange={event => setTaskInput(event.target.value)}/>
                </form>
        )
}