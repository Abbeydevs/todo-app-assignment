import { useState } from 'react'
import styles from '../styles/Auth.module.css'
import Link from 'next/link'
import Head from 'next/head'
import { useSignup } from '../hooks/useSignup'
import { useRedirectIfLoggedIn } from '../hooks/useRedirectIfLoggedIn'
import MyTask from './tasks'

const Register = () => {
  const [displayName, setDisplayName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const { error, signup, isPending } = useSignup()
  const { user } = useRedirectIfLoggedIn()

  // useRedirectIfLoggedIn()

  const handleSubmit = e => {
    e.preventDefault()
    signup(displayName, email, password)
  }

  return (
    <>
      <Head>
        <title>TodoApp | Register</title>
        <meta name='description' content='todo app' />
      </Head>
      {user ? (
        <MyTask />
      ) : (
        <div className={styles.container}>
          <h1>Register Here!</h1>
          <form onSubmit={handleSubmit} className={styles.fcontainer}>
            <div className='username-field'>
              <label htmlFor='displayname'>Username</label>
              <input
                type='text'
                name='username'
                placeholder='Create a new username'
                value={displayName}
                onChange={e => setDisplayName(e.target.value)}
              />
            </div>
            <div className={styles.pfield}>
              <label htmlFor='email'>Email address</label>
              <input
                type='email'
                name='email'
                placeholder='Email Address'
                value={email}
                onChange={e => setEmail(e.target.value)}
              />
            </div>
            <div className={styles.pfield}>
              <label htmlFor='password'>Create Password</label>
              <input
                type='password'
                name='password'
                placeholder='Password'
                value={password}
                onChange={e => setPassword(e.target.value)}
              />
            </div>
            {!isPending && (
              <button className={styles.btn} type='submit'>
                Create Account
              </button>
            )}
            {isPending && (
              <button className={styles.btn} disabled>
                Loading...
              </button>
            )}
            <div className={styles.acctstatus}>
              <p>
                Already have an account?<Link href='/login'> Login now</Link>
              </p>
            </div>
            {error && (
              <div className={styles.errContainer}>
                <p>{error}</p>
              </div>
            )}
          </form>
        </div>
      )}
    </>
  )
}

export default Register
