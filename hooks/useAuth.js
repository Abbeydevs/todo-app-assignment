import { useContext, useEffect } from 'react'
import { AuthContext } from '../context/AuthContext'
import { useRouter } from 'next/router'

export const useAuth = () => {
  const { user, authIsReady } = useContext(AuthContext)
  const router = useRouter()

  useEffect(() => {
    if (!authIsReady) return // If auth state is not yet ready, do nothing

    if (!user) {
      // If user is not authenticated, redirect to login page
      router.push('/login')
    }
  }, [user, authIsReady, router])

  return { user, authIsReady }
}