import { AuthContextS } from "../context/AuthContextS"
import { useContext } from "react"

export const useAuthContextS = () => {
  const context = useContext(AuthContextS)

  if(!context) {
    throw Error('useAuthContext must be used inside an AuthContextProvider')
  }

  return context
}