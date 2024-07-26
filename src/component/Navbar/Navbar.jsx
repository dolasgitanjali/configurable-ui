import React from 'react'
import './Navbar.css'
import { theme } from '../../data'

function Navbar({name}) {
  return (
    <div className='navbar-container' style={{background: theme.navbarBg, color: theme.navbarText}}>
       <h1>{name}</h1>
    </div>
  )
}

export default Navbar