import Button from '@mui/material/Button';

import { useState } from 'react'

import "./About.css"


function AboutPage() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>About Us</h1>
      <div className='aboutContainer'>
        <h2>Mohammad</h2>  
          <p>
            text heretext heretext heretext heretext heretext heretext heretext heretext heretext heretext heretext here
            text heretext heretext heretext heretext heretext heretext heretext heretext heretext heretext heretext here
            text heretext heretext heretext heretext heretext heretext heretext heretext heretext heretext heretext here
            text heretext heretext heretext heretext heretext heretext heretext heretext heretext heretext heretext here
            text heretext heretext heretext heretext heretext heretext heretext heretext heretext heretext heretext here
            text heretext heretext heretext heretext heretext heretext heretext heretext heretext heretext heretext here
          </p>
          <img src="https://i.natgeofe.com/n/548467d8-c5f1-4551-9f58-6817a8d2c45e/NationalGeographic_2572187_16x9.jpg?w=1200" alt="userPhoto" 
          />
      </div>
    </>
  )
}

export default AboutPage
