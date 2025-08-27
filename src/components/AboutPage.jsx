import Button from '@mui/material/Button';

import { useState } from 'react'


function AboutPage() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Button variant="contained">This is about</Button>
    </>
  )
}

export default AboutPage
