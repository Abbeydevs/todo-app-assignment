import Link from 'next/link'
import { useLogout } from '../hooks/useLogout'
import { useAuthContext } from '../hooks/useAuthContext'

const Navbar = () => {
  const { logout } = useLogout()
  const { user } = useAuthContext()

  return (
    <nav>
      <Link href='/'>
        <h1>
          <span className='logo-text'>todo</span>App
        </h1>
      </Link>
      <div className='nav-links'>
        {user && <p>Welcome, {user.displayName}</p>}
        {!user && <Link href='/login'>Login</Link>}
        {!user && <Link href='/register'>Register</Link>}
        {user && (
          <Link href='/' className='logout-btn' onClick={logout}>
            Logout
          </Link>
        )}
      </div>
    </nav>
  )
}

export default Navbar
