import { useDraggable } from '@dnd-kit/react'
import useTasksContext from '../hooks/useTasksContext'
import { useEffect } from 'react'
import userUserContext from '../hooks/useUserContext'

export default function TaskCard({ task, isTopTask }) {
        const { dispatch } = useTasksContext()
        const { user_id } = userUserContext()
        const { _id, title, quadrant } = task
        const { ref, listeners, attributes, isDragging, transform } = useDraggable({
                id: _id
        })

        async function deleteTask() {
                dispatch({type: 'DELETE', payload: task})
                try {
                        const response = await fetch('http://localhost:3000/api/tasks/' + task._id, {
                                method: 'DELETE',
                                headers: {
                                        user_id
                                }
                        })
                        // const json = await response.json()
                        // dispatch({type: 'DELETE', payload: json})
                }
                catch (error) {
                        console.log(error)
                }
        }

        async function markTaskDone() {
                dispatch({type: 'UPDATE', payload: {_id, status: 'done'}})
                try {
                        const updates = {...task, status: 'done'}
                        const response = await fetch('http://localhost:3000/api/tasks/' + task._id, {
                                method: 'PATCH',
                                headers: {
                                        'Content-Type': 'application/json',
                                        user_id
                                },
                                body: JSON.stringify(updates)
                        })
                        // const json = await response.json()
                        // dispatch({type: 'UPDATE', payload: json})
                }
                catch (error) {
                        console.log(error)
                }
        }

        function moveTask(newQuadrant) {
                dispatch({type: 'UPDATE', payload: {_id, quadrant: newQuadrant}})
        }

        return (
                <div 
                        ref={ref} 
                        {...listeners} 
                        {...attributes} 
                        className={`
                                task-card ${!isDragging ? (isTopTask ? 'top-task' : 'lower-tasks') : ''} 
                                ${isDragging ? ' grabbing' : ''}
                        `}
                >
                        <p className='task-text'>{title}</p>
                        <div className='actions'>
                                <span className='material-symbols-outlined button' onClick={markTaskDone}>check</span>
                                <span className='material-symbols-outlined button' onClick={deleteTask}>delete</span>
                                {/* <button onClick={() => moveTask(1)} style={{display: task.quadrant !== 1 ? 'inline' : 'none'}}>Q1</button>
                                <button onClick={() => moveTask(2)} style={{display: task.quadrant !== 2 ? 'inline' : 'none'}}>Q2</button>
                                <button onClick={() => moveTask(3)} style={{display: task.quadrant !== 3 ? 'inline' : 'none'}}>Q3</button>
                                <button onClick={() => moveTask(4)} style={{display: task.quadrant !== 4 ? 'inline' : 'none'}}>Q4</button> */}
                        </div>
                </div>
        )
}