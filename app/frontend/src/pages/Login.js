import React from 'react';
// import { createBrowserHistory } from "history";
// const history = createBrowserHistory();
import './login.css'

function Login(props) {
  // function handleClick() {
  //   const { history } = props;
  //   history.push('/register')
  // }
  return (
    <div className="loginPage">
      <div className="loginModal">
        <div>
          <h1 id='loginText'>Login</h1>
        </div>
        <form id='loginForm'>
          <p>E-mail</p>
          <input placeholder='Type your e-mail' className='input'/>
          <hr className='linha'/>
          <p>Password</p>
          <input placeholder='Type your password' className='input'/>
          <hr className='linha'/>
          <h2>Forgot password?</h2>
        </form>
        <div className='buttons'>
        </div>
          <button id='loginButton' type='button'>LOGIN</button>
          <p id='signUpButton'>SIGN UP</p>
      </div>
    </div>

  )
} 

export default Login;