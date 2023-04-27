import { useState } from 'react'

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const onSubmitForm = e => {
    e.preventDefault()
    alert(`this is your email: ${email} and password ${password}`)
  }

  return (
    <div>
      <h1>Login to your account</h1>
      <form action='' onSubmit={onSubmitForm}>
        <div className='email-field'>
          <label htmlFor='username'>Email address</label>
          <input
            type='email'
            name='email'
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
        </div>
        <div className='password-field'>
          <label htmlFor='username'>Password</label>
          <input
            type='password'
            name='password'
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
        </div>
        <button className='btn'>Login</button>
      </form>
    </div>
  )
}

export default Login
