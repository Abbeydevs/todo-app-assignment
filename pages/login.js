import { useState } from 'react'
import styles from '../styles/Auth.module.css'
import Link from 'next/link'

const Login = () => {
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
        setErrorMsg(false)
      }, 4000)
    } else {
      alert(`this is your email: ${email} and password ${password}`)
    }
  }

  return (
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
        {pswdErrorMsg && (
          <div className={styles.errContainer}>
            <p>Password is too short</p>
          </div>
        )}
        <div className={styles.forgotpassword}>
          <Link href='/forgotpass'>Forgot Password?</Link>
        </div>
        <button className={styles.btn}>Login</button>
        {errorMsg && (
          <div className={styles.errContainer}>
            <p>Input cannot be empty</p>
          </div>
        )}
      </form>
    </div>
  )
}

export default Login
