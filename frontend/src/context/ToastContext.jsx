import { createContext, useState } from "react";
import { TasksContext } from "./TasksContext";
import Toast from '../components/Toast'

export const ToastContext = createContext()

export function ToastContextProvider({ children }) {
        const [ toast, setToast ] = useState(null)
 
        function showToast(message, type = 'info') {
                setToast({message, type, visible: true})

                setTimeout(() => {
                        setToast({message, type, visible : false})
                }, 4000)

                setTimeout(() => {
                        setToast(null)
                }, 4300)
        }

        return (
                <ToastContext.Provider value={{ showToast }}>
                        {children}
                        <Toast toast={toast}/>
                </ToastContext.Provider>
        )
}