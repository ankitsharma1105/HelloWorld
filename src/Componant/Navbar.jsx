import React from 'react'
import{NavLink} from 'react-router-dom'

function Navbar() {
  return (
    <div>
      <nav>
        <ul>
            <a href='home' className='home'><li><h3>Home</h3></li></a>
            <a href='about' className='about' ><li><h3>About</h3></li></a>
            <a href='home' className='home'><li><h3>Address</h3></li></a>
            <a href='login' className='Login'><li><h3>Login</h3></li></a>

        </ul>
      </nav>
    </div>
  )
}

export default Navbar
