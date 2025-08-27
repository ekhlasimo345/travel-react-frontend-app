import Button from '@mui/material/Button';
import { Outlet } from "react-router"
import { NavLink } from "react-router"

import { useState } from 'react'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <nav >
        <NavLink to="/">menu map</NavLink>
        <NavLink to="/about">menu about</NavLink>

      </nav>
      
      <Outlet />


      <footer>
        <p>copyright</p>
      </footer>
    </>
  )
}

export default App
