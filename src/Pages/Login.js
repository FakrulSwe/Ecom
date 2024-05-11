import React from 'react'
import './CSS/LoginSignup.css'

const Login = () => {
  return (
    <div className='loginsignup'>
        <div className="loginsignup-container">
            <h1>Sign In</h1>
            <div className="loginsignup-fields">
                <input type="email" placeholder='Email Address'/>
                <input type="password" placeholder='Password'/>
            </div>
            <button>Login</button>
        </div>
    </div>
  )
}

export default Login