import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import { Outlet } from "react-router"
import { NavLink } from "react-router"


import { useState } from 'react'
import NavMenu from './components/NavMenu'


function App() {
  const [count, setCount] = useState(0)

  return (
    <Container maxWidth="lg">
      <Box >
        <NavMenu />
              <Outlet />


              <footer>
                <p>copyright</p>
              </footer>
      </Box>
     
    </Container>
  )
}

export default App
