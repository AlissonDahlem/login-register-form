import React, { useState, useEffect } from 'react';
import './register.css'

export default function Register(props) {
  const [userFirstName, setUserFirstName] = useState();
  const [userLastName, setUserLastName] = useState();
  const [userEmail, setUserEmail] = useState();
  const [userPassword, setUserPassword] = useState();
  const [isActivedRegisterButton, setIsActivedRegisterButton] = useState(true);
  const [backendRegisterReturned, setBackendRegisterReturned] = useState();
  const [userRegistered, setUserRegistered] = useState(false);
  
  useEffect(() => {
    function checkInputs(userFirstName, userLastName, userEmail, userPassword) {
      const checkFirstName = userFirstName === undefined ? false: userFirstName.length > 3;
      const checkLastName = userLastName === undefined ? false: userLastName.length > 3;
      const checkUserEmail = userEmail === undefined ? false : userEmail.length > 8
      const checkPassword = userPassword === undefined ? false : userPassword.length > 4

      if (checkFirstName && checkLastName && checkUserEmail && checkPassword) {
        setIsActivedRegisterButton(false)
      } else {
        setIsActivedRegisterButton(true)
      }
    };
    checkInputs(userFirstName, userLastName, userEmail, userPassword)
  }, [userFirstName, userLastName, userEmail, userPassword])

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
      cache: 'default',
    })
    const data = await request.json()
    if (data.message) {
      return setBackendRegisterReturned(data.message);
    } if (data.ok) {
      setUserRegistered(true)
    } else {
      return setBackendRegisterReturned('Server problem')
    }
  }

  function handleClick() {
    const { history } = props;
    history.push('/')
  };

  if (userRegistered) {
    return (
      <h1>Usuario registrado com sucesso</h1>
    )
  }
  return(
    <div className="registerPage">
      <div className="registerModal">
        <h1>Get Started</h1>
        <form>
          <div className="nameForm">
            <div>
              <p>First name</p>
              <input
                className='input'
                onChange={({ target }) => setUserFirstName(target.value)}
              />
              <hr className='linha'/>
            </div>
            <div>
              <p>Last Name</p>
              <input
                className='input'
                onChange={({ target }) => setUserLastName(target.value)}
              />
              <hr className='linha'/>
            </div>
          </div>
          <div>
            <div>
              <p>Email</p>
              <input
                className='input'
                onChange={({ target }) => setUserEmail(target.value)}
              />
              <hr className='linha'/>
            </div>
            <div>
              <p>Password</p>
              <input
                type='password'
                className='input'
                onChange={({ target }) => setUserPassword(target.value)}
              />
              <hr className='linha'/>
            </div>
          </div>
        </form>
        <p style={{color: 'red', opacity: '0.8'}}>{backendRegisterReturned}</p>
        <button
          className='signUpButton'
          onClick={() => registerButton()}
          type='button'
          disabled={isActivedRegisterButton}
        >
          Sign Up
        </button>
        <div className='alreadyAccont'>
          <p>
            Already have an accont?
          </p>
          <p
            style={{marginLeft: '5px', color: 'blue'}}
            onClick={() => handleClick()}
          >
            {` Sign In`}
          </p>
        </div>
      </div>
    </div>
  )
}