import { useEffect, useState } from 'react'
import styles from '../styles/Auth.module.css'
import Link from 'next/link'
import Head from 'next/head'
import { useLogin } from '../hooks/useLogin'
import { useRedirectIfLoggedIn } from '../hooks/useRedirectIfLoggedIn'
import MyTask from './tasks'

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const { error, login, isPending } = useLogin()
  const { user } = useRedirectIfLoggedIn()

  // if (!authIsReady) {
  //   // If auth state is not yet ready, show a loading indicator
  //   // return <div>Loading...</div>
  // }

  const onSubmitForm = e => {
    e.preventDefault()
    login(email, password)
  }

  return (
    <>
      <Head>
        <title>TodoApp | Login</title>
        <meta name='description' content='todo app' />
      </Head>
      {user ? (
        <MyTask />
      ) : (
        <div className={styles.container}>
          <h1>Login to your account</h1>
          <form onSubmit={onSubmitForm} className={styles.fcontainer}>
            <div className='email-field'>
              <label htmlFor='username'>Email address</label>
              <input
                type='email'
                name='email'
                placeholder='Email Address'
                value={email}
                onChange={e => setEmail(e.target.value)}
              />
            </div>
            <div className={styles.pfield}>
              <label htmlFor='password'>Password</label>
              <input
                type='password'
                name='password'
                placeholder='Password'
                value={password}
                onChange={e => setPassword(e.target.value)}
              />
            </div>
            <div className={styles.forgotpassword}>
              <Link href='/forgotpass'>Forgot Password?</Link>
            </div>
            {!isPending && <button className={styles.btn}>Login</button>}
            {isPending && (
              <button type='button' className={styles.btn} disabled>
                <span className='spinner-border spinner-border-sm'></span>{' '}
                logging in...
              </button>
            )}
            <div className={styles.acctstatus}>
              <p>
                Don't have an account?
                <Link href='/register'> Create account</Link>
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

export default Login
