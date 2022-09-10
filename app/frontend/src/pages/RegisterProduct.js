import React, { useState } from 'react';
import './register.css'

function RegisterProduct() {
  const [ productName, setProductName] = useState();
  const [ productPrice, setProductPrice ] = useState();
  const [ productDescription, setProductDescription ] = useState();
  const [ image, setImage ] = useState();

  async function uploadImage() {
    const request = await fetch('https://www.filestackapi.com/api/store/S3?key=A6heHIMVrQyCJKtc7eRIiz', {
      method: 'POST',
      headers: {
        'content-type': 'image/png'
      },
      body: image,
      cache: 'default',
    });
    const data = await request.json();
    console.log(await data);
  }

  return(
    <div className="registerProductPage">
      <form>
        <p>Nome do produto</p>
        <input onChange={({target}) => setProductName(target.value) }/>
        <p>Preço do produto</p>
        <input onChange={({target}) => setProductPrice(target.value)}/>
        <p>Descrição do produto</p>
        <textarea onChange={({target}) => setProductDescription(target.value)}/>
        <p>fotos do produto</p>
        <input 
          type='file'
          onChange={({target}) => setImage(target.files[0])}
          on
        />
        
        <button onClick={() => uploadImage()} type='button'>
          cadastrar produto
          </button>
      </form>
    </div>
    
  )
}

export default RegisterProduct;