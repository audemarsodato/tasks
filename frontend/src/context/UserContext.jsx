import { createContext, useReducer } from 'react'

export const UserContext = createContext()

function userReducer(state, action) {
        switch (action.type) {
                case 'SET':
                        return {
                                user_id: action.payload
                        }
                default:
                        return state
        }
}

export function UserContextProvider({children}) {
        const [state, dispatch] = useReducer(userReducer, {
                user_id: null
        })

        return (
                <UserContext.Provider value={{...state, dispatch}}>
                        {children}
                </UserContext.Provider>
        )
}