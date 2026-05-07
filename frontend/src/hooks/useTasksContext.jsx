import { useContext } from 'react'
import { TasksContext } from '../context/TasksContext'

export default function useTasksContext() {
        const context = useContext(TasksContext)

        if (!context) {
                throw Error('useTasksContext must be used inside the tasksContextProvider')
        }
        
        return context
}