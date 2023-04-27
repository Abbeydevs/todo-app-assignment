import { useState } from 'react'
import styles from '../styles/Auth.module.css'
import Link from 'next/link'
import Head from 'next/head'

const Register = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [errorMsg, setErrorMsg] = useState(false)
  const [pswdErrorMsg, setPswdErrorMsg] = useState(false)

  const onSubmitForm = e => {
    e.preventDefault()
    if (!email || !password) {
      setErrorMsg(!errorMsg)

      setTimeout(() => {
        setErrorMsg(false)
      }, 4000)
    } else if (password.length < 6) {
      setPswdErrorMsg(!pswdErrorMsg)

      setTimeout(() => {
        setPswdErrorMsg(false)
      }, 4000)
    } else {
      alert(`this is your email: ${email} and password ${password}`)
    }
  }

  return (
    <>
      <Head>
        <title>TodoApp | Register</title>
        <meta name='description' content='todo app' />
      </Head>
      <div className={styles.container}>
        <h1>Register Here!</h1>
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
            <label htmlFor='password'>Create Password</label>
            <input
              type='password'
              name='password'
              placeholder='Password'
              value={password}
              onChange={e => setPassword(e.target.value)}
            />
          </div>
          {pswdErrorMsg && (
            <div className={styles.errContainer}>
              <p>Password is too short</p>
            </div>
          )}
          <button className={styles.btn}>Create Account</button>

          <div className={styles.acctstatus}>
            <p>
              Already have an account?<Link href='/login'> Login now</Link>
            </p>
          </div>
          {errorMsg && (
            <div className={styles.errContainer}>
              <p>Input cannot be empty</p>
            </div>
          )}
        </form>
      </div>
    </>
  )
}

export default Register
