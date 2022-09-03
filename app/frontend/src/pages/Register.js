import React from 'react';
import './register.css'

export default function Register(props) {

function handleClick() {
  const { history } = props;
  history.push('/')
}
  return(
    <div className="loginPage">
      <div className="loginModal">
        <div>
          <h1 className='loginText'>Register</h1>
        </div>
        <form className='loginForm'>
          <p>First name</p>
          <input placeholder='Type your first name' className='input'/>
          <hr className='linha'/>
          <p>Last name</p>
          <input placeholder='Type your last name' className='input'/>
          <hr className='linha'/>
          <p>E-mail</p>
          <input placeholder='Type your e-mail' className='input'/>
          <hr className='linha'/>
          <p>Password</p>
          <input placeholder='Type your password' className='input' type='password'/>
          <hr className='linha'/>
        </form>
        <div className='buttons'>
        </div>
          <button className='registerButton' type='button'>Register</button>
          <p
          className='AlreadyRegisteredButton'
          onClick={() => handleClick()}
          >
            Already registered?
          </p>
      </div>
    </div>
  )
}