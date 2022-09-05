import React from 'react';
import './login.css'

function RecoveryPassword(props) {
  function handleClick() {
    console.log('ainda em desenvolvimento');
  }

  function handleClickSignIn() {
    const { history } = props;
    history.push('/')
  }
  return (
    <div className="loginPage">
      <div className="loginModal">
        <div>
          <h1 className='loginText'>Recovery Password</h1>
        </div>
        <form className='loginForm'>
          <p>E-mail</p>
          <input placeholder='Type your e-mail' className='input'/>
        </form>
        <div className='buttons'>
        </div>
          <button className='loginButton' type='button' onClick={ () => handleClick() }>Recovery Password</button>
          <p className='signInButton' onClick={() => handleClickSignIn()}>SIGN IN</p>
      </div>
    </div>
  )
} 

export default RecoveryPassword;