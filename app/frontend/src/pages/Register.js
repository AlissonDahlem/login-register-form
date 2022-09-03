import React, { useState, useEffect } from 'react';
import './register.css'

export default function Register(props) {
  const [userFirstName, setUserFirstName] = useState();
  const [userLastName, setUserLastName] = useState();
  const [userEmail, setUserEmail] = useState();
  const [userPassword, setUserPassword] = useState();
  const [isActivedRegisterButton, setIsActivedRegisterButton] = useState(true);

  useEffect(() => {
    checkInputs(userFirstName, userLastName, userEmail, userPassword)
  }, [userFirstName, userLastName, userEmail, userPassword])

  function checkInputs(userFirstName, userLastName, userEmail, userPassword) {
    const checkFirstName = userFirstName === undefined ? false: userFirstName.length > 3;
    const checkLastName = userLastName === undefined ? false: userLastName.length > 3;
    const checkUserEmail = userEmail === undefined ? false : userEmail.length > 8
    const checkPassword = userPassword === undefined ? false : userPassword.length > 6
    if (checkFirstName && checkLastName && checkUserEmail && checkPassword) {
      setIsActivedRegisterButton(false)
    }
  };

  async function registerButton() {

    const request = await fetch('http://localhost:3001/user', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
          firstName: userFirstName,
          lastName: userLastName,
          email: userEmail,
          password: userPassword,
      }),
      // mode: 'no-cors',
      cache: 'default',
    })
    const data = await request.json()
    
  }

  function handleClick() {
    const { history } = props;
    history.push('/')
  };

  return(
    <div className="loginPage">
      <div className="loginModal">

        <div>
          <h1 className='loginText'>Register</h1>
        </div>

        <form className='loginForm'>

          <p>First name</p>
          <input
            placeholder='Type your first name'
            className='input'
            onChange={({ target }) => setUserFirstName(target.value)}
          />
          <hr className='linha'/>

          <p>Last name</p>
          <input
            placeholder='Type your last name'
            className='input'
            onChange={({ target }) => setUserLastName(target.value)}
          />
          <hr className='linha'/>

          <p>E-mail</p>
          <input
            placeholder='Type your e-mail'
            className='input'
            onChange={({ target }) => setUserEmail(target.value)}
          />
            
          <hr className='linha'/>
          <p>Password</p>
          <input
            placeholder='Type your password'
            className='input'
            type='password'
            onChange={({ target }) => setUserPassword(target.value)}
          />
          <hr className='linha'/>
        </form>

        <div className='buttons'>
        </div>
          <button
            className='registerButton'
            type='button'
            disabled={isActivedRegisterButton}
            onClick={() => registerButton()}
            >
              Register
            </button>

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