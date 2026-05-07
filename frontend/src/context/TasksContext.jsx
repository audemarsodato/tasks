import { createContext, useReducer } from 'react'

export const TasksContext = createContext()

function taskReducer(state, action) {
        switch (action.type) {
                case 'SET':
                        return {
                                tasks: action.payload
                        }
                case 'ADD':
                        return {
                                tasks: [action.payload, ...state.tasks]
                        }        
                case 'UPDATE':
                        return {
                                tasks: state.tasks.map(task => task._id === action.payload._id ? {...task, ...action.payload} : task)
                        }
                case 'DELETE':
                        return {
                                tasks: state.tasks.filter(task => task._id !== action.payload._id)
                        }
                default:
                        state
        }
}

export function TasksContextProvider({ children }) {
        const [state, dispatch] = useReducer(taskReducer, {
                tasks: []
        })

        return (
                <TasksContext.Provider value={{...state, dispatch}}>
                        { children }
                </TasksContext.Provider>
        )
}