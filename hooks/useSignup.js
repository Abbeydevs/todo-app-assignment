import { useState, useEffect } from 'react'
import { auth } from '../firebase/config'
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth'
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
      const response = await createUserWithEmailAndPassword(
        auth,
        email,
        password,
      )

      if (!response) {
        throw new Error('Could not create user')
      }

      //update user display name
      await updateProfile(response.user, { displayName })

      dispatch({
        type: 'LOGIN',
        payload: response.user
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
