import { useContext } from 'react'
import { ToastContext } from '../context/ToastContext'

export default function useToastContext() {
        const context = useContext(ToastContext)
        if (!context) {
                throw Error('useToastContext cannot be used outside of its provider')
        }
        return context
}