import { useAuthContextS } from "./useAuthSContext";

export const useLogoutS = () => {
    const { dispatch } = useAuthContextS()
    const { dispatch: dispatchWorkouts } = useWorkoutsContext()

  const logout = () => {
    // remove user from storage
    localStorage.removeItem('swarozgaruser')

    // dispatch logout action
    dispatch({ type: 'LOGOUT' })
    dispatchWorkouts({ type: 'SET_WORKOUTS', payload: null })
  }

  return { logout }
}