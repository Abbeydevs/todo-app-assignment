import { useState, useEffect } from 'react'
import { auth } from '../firebase/config'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { useAuthContext } from '../hooks/useAuthContext'
import { toast } from 'react-toastify'
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
      const userCredentials = await signInWithEmailAndPassword(
        auth,
        email,
        password
      )

      dispatch({
        type: 'LOGIN',
        payload: userCredentials.user
      })

      if(!isCancelled) {
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

  // useEffect(() => {
  //   const unsubscribe = auth.onAuthStateChanged((user) => {
  //     if (!user) {
  //       // Redirect to the login page if user is not authenticated
  //       router.replace('/login')
  //     }
  //   })
  //   // Clean up the listener on unmount
  //   return unsubscribe
  // }, [router])

  return { error, login, isPending }
}
