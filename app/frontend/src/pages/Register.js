import React, { useState, useEffect } from 'react';

export default function Register(props) {
  const [userFirstName, setUserFirstName] = useState();
  const [userLastName, setUserLastName] = useState();
  const [userEmail, setUserEmail] = useState();
  const [userPassword, setUserPassword] = useState();
  const [userConfirmPassword, setUserConfirmPassword] = useState();
  const [isActivedRegisterButton, setIsActivedRegisterButton] = useState(true);
  const [backendRegisterReturned, setBackendRegisterReturned] = useState();
  
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
  }, [userFirstName, userLastName, userEmail, userPassword, userConfirmPassword,])

  async function registerButton() {
    const confirmPassword = userPassword === userConfirmPassword
    const { history } = props
    if(!confirmPassword) {
      return setBackendRegisterReturned('Passwords do not match')
    }
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
      history.push('/')
    } else {
      return setBackendRegisterReturned('Server problem')
    }
  }

  function handleClick() {
    const { history } = props;
    history.push('/')
  };

  return(
    <div className="loginPage">
      <div className="loginModal">

        <div>
          <h1 className='registerText'>Register</h1>
        </div>

        <form className='registerForm'>

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
            
          <hr className='linha' style={{backgroundColor: 'red'}}/>
          <p>Password</p>
          <input
            placeholder='Type your password'
            className='input'
            type='password'
            onChange={({ target }) => setUserPassword(target.value)}
          />
          <hr className='linha'/>

          <p>Confirm your password</p>
          <input
            placeholder='Confirm your password'
            className='input'
            type='password'
            onChange={({ target }) => setUserConfirmPassword(target.value)}
          />
          <hr clasEmail addressName='linha'/>

          <div style={{ height: '50px', width: '180px'}}>
            <p style={{color: 'red' }}>
              {backendRegisterReturned}
            </p>
          </div>

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