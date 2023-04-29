import { useState, useEffect } from 'react'
import { projectAuth } from '../firebase/config'
import { useAuthContext } from './useAuthContext'
import { useRouter } from 'next/router'

export const useLogout = () => {
  const [isCancelled, setIsCancelled] = useState(false)
  const [error, setError] = useState(null)
  const [isPending, setIsPending] = useState(false)
  const { dispatch } = useAuthContext()

  const router = useRouter()

  const logout = async () => {
    setError(null)
    setIsPending(true)


    // sign user out
    try {
      await projectAuth.signOut()

      //dispatch logout action
      dispatch({ type: 'LOGOUT' })
      router.push('/login')

      //   update state
      if (!isCancelled) {
        setIsPending(false)
        setError(null)
      }
    } catch (err) {
      if (!isCancelled) {
        console.log(err.message)
        setError(err.message)
        setIsPending(false)
      }
    }
  }
  return { logout }
}
