import { useContext, useEffect } from 'react'
import { AuthContext } from '../context/AuthContext'
import { useRouter } from 'next/router'

export const useRedirectIfLoggedIn = () => {
  const { user, authIsReady } = useContext(AuthContext)
  const router = useRouter()

  useEffect(() => {
    if (!authIsReady) return // If auth state is not yet ready, do nothing

    if (user) {
      // If user is authenticated, redirect to home page
      router.push('/')
    }
  }, [user, authIsReady, router])

  return { user, authIsReady }
}
