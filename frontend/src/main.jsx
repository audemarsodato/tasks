import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { TasksContextProvider } from './context/TasksContext.jsx'
import { ToastContextProvider } from './context/ToastContext.jsx'
import { UserContextProvider } from './context/UserContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
        <UserContextProvider>
                <ToastContextProvider>
                        <TasksContextProvider>
                                <App />
                        </TasksContextProvider>
                </ToastContextProvider>
        </UserContextProvider>
  </StrictMode>
)
