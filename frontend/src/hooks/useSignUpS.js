import { useState } from 'react'
import { useAuthSContext } from './useAuthSContext'

export const useSignupS = () => {
  const [error, setError] = useState(null)
  const [isLoading, setIsLoading] = useState(null)
  const { dispatch } = useAuthSContext()

  const signup = async (name, email, password, location, dob, gender, phone, interest) => {
    setIsLoading(true)
    setError(null)

    const response = await fetch('/api/user/signups', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({name, email, password, location, dob, gender, phone, interest})
    })
    const json = await response.json()

    if (!response.ok) {
      setIsLoading(false)
      setError(json.error)
    }
    if (response.ok) {
      // save the user to local storage
      localStorage.setItem('swarozgaruser', JSON.stringify(json))

      // update the auth context
      dispatch({type: 'LOGIN', payload: json})

      // update loading state
      setIsLoading(false)
    }
  }

  return { signup, isLoading, error }
}