import { useAuthContext } from '../hooks/useAuthContext'
import { useRouter } from 'next/router'

export const withProtectedRoute = WrappedComponent => {
  const ProtectedRoute = props => {
    const { isAuthenticated } = useAuthContext()
    const router = useRouter()
    if (isAuthenticated) {
      router.replace('/login')
      return <h1>Loading...</h1>
    }

    return <WrappedComponent isAuthenticated={isAuthenticated} {...props} />
  }

    return ProtectedRoute
}

// export withProtectedRoute
