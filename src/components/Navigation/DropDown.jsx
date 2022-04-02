import React from 'react'
import { Link } from 'react-router-dom'


function DropDown(props) {
    const {closeMenu}=props
  return (
    <div className='drop-down'>
    <Link to='category' onClick={closeMenu}>Fashion</Link>
    </div>
  )
}

export default DropDown