import React, { useState, useEffect } from 'react';

function ValidateAccont(props) {
  const [sucess, setSucess] = useState();

  async function validateAccont(token) {
    const request = await fetch(`http://localhost:3001/login/${token}`, {
      method: 'POST',
      cache: 'default'
    })
    const data = await request.json();
    if (await data.activated[0] === 1) {
      setSucess('Your accont has been activated')
    } else {
      setSucess('We had a problem activating your accont')
    }
  }
  
  useEffect(() => {
    validateAccont(props.match.params.token);
  }, [props.match.params.token])

  if(sucess) {
    return (
      <h1>{ sucess }</h1>
    )
  }
  return (
    <h1>validating your accont</h1>
  )
}

export default ValidateAccont;