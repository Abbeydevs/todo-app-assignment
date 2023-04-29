import { useState, useEffect } from 'react'
import { projectAuth } from '../firebase/config'
import { useAuthContext } from './useAuthContext'
import { useRouter } from 'next/router'

export const useSignup = () => {
  const [isCancelled, setIsCancelled] = useState(false)
  const [error, setError] = useState(null)
  const [isPending, setIsPending] = useState(false)
  const { dispatch } = useAuthContext()

  const router = useRouter()

  const signup = async (displayName, email, password) => {
    setError(null)
    setIsPending(true)

    try {
      //signup users
      const res = await projectAuth.createUserWithEmailAndPassword(
        email,
        password
      )

      if (!res) {
        throw new Error('Could not create user')
      }

      //update user display name
      await res.user.updateProfile({ displayName })

      dispatch({
        type: 'LOGIN',
        payload: res.user
      })

      if (!isCancelled) {
        setIsPending(false)
        setError(null)
        router.push('/')
      }
    } 
    catch (err) {
      if (!isCancelled) {
        setError(err.message)
        setIsPending(false)
      }
    }
    return () => setIsCancelled(true)
  }

  return { error, signup, isPending }
}
