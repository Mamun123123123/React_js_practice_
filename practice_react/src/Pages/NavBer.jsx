import React from 'react'
import { Link } from 'react-router-dom'
const NavBer = () => {
  return (
    <div className='bg-amber-900 p-4 justify-evenly flex '>
      <Link to='/'>Home</Link>
      <Link to='/about'>About</Link>
      <Link to='/contact'>Contact</Link>
    </div>
  )
}

export default NavBer
