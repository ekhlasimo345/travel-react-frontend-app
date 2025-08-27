import Button from '@mui/material/Button';

import { useState } from 'react'


function MapPage() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Button variant="contained">This s map</Button>
    </>
  )
}

export default MapPage
