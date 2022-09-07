import React, { useState } from 'react';
import './login.css'

function Login(props) {
  const [userEmail, setUserEmail] = useState();
  const [userPassword, setUserPassword] = useState();
  const [backendReturned, setBackendReturned] = useState();

  function signUp() {
    const { history } = props;
    history.push('/register')
  }

  async function handleClickSignIn() {
    const { history } = props
    const request = await fetch('http://localhost:3001/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
          email: userEmail,
          password: userPassword,
      }),
      cache: 'default',
    })
    const data = await request.json()
    if (data.message) {
      return setBackendReturned(data.message);
    } if (data.token) {
      history.push('/DEUCERTO')
    } else {
      return setBackendReturned('Server problem')
    }
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
              onChange={({ target }) => setUserEmail(target.value)}
            />
            <hr className="linha"/>
            <p>Password</p>
            <input
              className="input"
              type="password"
              onChange={({ target }) => setUserPassword(target.value)}
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
          <p style={{color: 'red'}}>{ backendReturned }</p>
        <button className="signInButton" onClick={() => handleClickSignIn()}>
          Sign In
        </button>
      </div>
    </div>
  )
} 

export default Login;