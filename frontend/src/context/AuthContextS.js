import { createContext, useReducer, useEffect } from 'react'

export const AuthContextS = createContext()

export const authReducer = (state, action) => {
  switch (action.type) {
    case 'LOGIN':      
      return { swarozgaruser: action.payload }
    case 'LOGOUT':
      return { swarozgaruser: null }
    default:
      return state
  }
}

export const AuthContextSProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, { 
    user: null
  })

  useEffect(() => {
    const swarozgaruser = JSON.parse(localStorage.getItem('swarozgaruser'))

    if (swarozgaruser) {
      dispatch({ type: 'LOGIN', payload: swarozgaruser }) 
    }
  }, [])

  console.log('AuthContext state:', state)
  
  return (
    <AuthContextS.Provider value={{ ...state, dispatch }}>
      { children }
    </AuthContextS.Provider>
  )

}