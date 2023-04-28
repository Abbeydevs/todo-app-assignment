import { useAuthContext } from '../hooks/useAuthContext'
import { auth } from '../firebase/config'
import { signOut } from 'firebase/auth'
import { useRouter } from 'next/router'

export const useLogout = () => {

  const router = useRouter()

  const { dispatch } = useAuthContext()

  const logout = () => {
    signOut(auth)
      .then(() => {
        dispatch({ type: 'LOGOUT' })
        router.push('/login')
      })
      .catch(err => {
        console.log(err.message)
      })
  }
  return { logout }
}
