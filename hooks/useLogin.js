import { useState, useEffect } from 'react'
import { projectAuth } from '../firebase/config'
import { useAuthContext } from './useAuthContext'
import { useRouter } from 'next/router'

export const useLogin = () => {
  const [isCancelled, setIsCancelled] = useState(false)
  const [error, setError] = useState(null)
  const [isPending, setIsPending] = useState(false)
  const { dispatch } = useAuthContext()

  const router = useRouter()

  const login = async (email, password) => {
    setError(null)
    setIsPending(true)

    try {
      const res = await projectAuth.signInWithEmailAndPassword(email, password)

      dispatch({
        type: 'LOGIN',
        payload: res.user
      })

      if (!isCancelled) {
        setIsPending(false)
        toast.success('Logged in successfully!')
        router.push('/')
      }
    } catch (err) {
      if (!isCancelled) {
        setError(err.message)
        setIsPending(false)
      }
    }

    return () => setIsCancelled(true)
  }

  return { error, login, isPending }
}
