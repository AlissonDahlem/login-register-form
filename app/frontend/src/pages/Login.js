import React from 'react';
import './login.css'

function Login(props) {
  function signUp() {
    const { history } = props;
    history.push('/register')
  }

  function handleClickRecovery() {
    // const { history } = props
    // history.push('/recovery')
    console.log('EM DESENVOLVIMENTO');
  }
  return (
    <div className="loginPage">
      <div className="loginModal">
        <h1>Welcome back</h1>
        <div className="needAccont">
          <p>Need an account?</p>
          <p
            style={{marginLeft: '5px', color: 'blue'}}
            onClick={() => signUp()}
          >
            Sign Up
          </p>
        </div>
        <form>
          <div>
            <p>Email</p>
            <input
              className="input"
            />
            <hr className="linha"/>
            <p>Password</p>
            <input
              className="input"
              type="password"
            />
            <hr className="linha"/>
          </div>
        </form>
        <div className='forgotPassword'>
          <p
            style={{color: 'blue'}}
            onClick={() => handleClickRecovery()}
          >
            Forgot password?
          </p>
        </div>
        <button className="signInButton">
          Sign In
        </button>
      </div>
    </div>
  )
} 

export default Login;