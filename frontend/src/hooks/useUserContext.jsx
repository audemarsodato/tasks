import { useContext } from 'react'
import { UserContext } from '../context/UserContext'

export default function userUserContext() {
        const context = useContext(UserContext)
        if (!context) {
                throw Error('useUserContext must be used inside the userContextProvider')
        }
        return context
}