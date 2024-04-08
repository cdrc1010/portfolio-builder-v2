import React from 'react'
import styles from './Signup.module.css'
import { useState } from 'react'
import { useSignup } from '../../../hooks/useSignup'

const Signup = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [cPassword, setcPassword] = useState('')
  const [displayName, setDisplayName] = useState('')
  const { signup, pending, error } = useSignup()

  const submitHandler = (e) => {
    e.preventDefault()
    if (password !== cPassword) {
      return alert('password and confirm password does not match!')
    }

    signup(email, password, displayName)
  }

  return (
    <form onSubmit={submitHandler} className={styles['signup-form']}>
      <h2>Sign Up</h2>
      <label>
        <span>Email: </span>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      </label>
      <label>
        <span>Password: </span>
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      </label>
      <label>
        <span>Confirm Password: </span>
        <input type="password" onChange={(e) => setcPassword(e.target.value)} value={cPassword} />
      </label>
      <label>
        <span>Name: </span>
        <input type="text" value={displayName} onChange={(e) => setDisplayName(e.target.value)} />
      </label>
      <button className="btn">{pending ? '...': 'Signup'}</button>
      {/* {pending && <button className='btn' disabled>loading</button>} */}
      {error && <p>{error}</p>}
    </form>
  )
}

export default Signup
