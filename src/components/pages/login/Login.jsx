import React from 'react'
import styles from './Login.module.css'
import { useState } from 'react'
import { useLogin } from '../../../hooks/useLogin'

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const { login, pending, error } = useLogin()

  console.log('error1: ', error)
  const submitHandler = (e) => {
    e.preventDefault()
    login(email,password)
  }

  return (
    <form onSubmit={submitHandler} className={styles['login-form']}>
      <h2>Login</h2>
      <label>Email:
        <input type="email" onChange={(e) => setEmail(e.target.value)}/>
      </label>
      <label>Password:
        <input type="password" onChange={(e) => setPassword(e.target.value)}/>
      </label>
       <button className="btn">Login</button>
      {error && <p> {error}</p>}
    </form>
  )
}

export default Login
