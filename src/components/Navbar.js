/* eslint-disable react/prop-types */
import React from 'react'
import '../assets/styles/Navbar.css'
import Logo from '../img/logo.png'

function Navbar ({ brand, navlinks, color }) {
  return (
    <header>
      <img className='logo' src={Logo} />
      <nav style={{ backgroundColor: color }} className='navbar'>
        <h1 className='brand'>{brand}</h1>
        <ul className='elements'>
          {
            navlinks.map((element, index) => {
              return (
                <li key={index} className='element'>
                  <a href={element.route}>
                    {element.label}
                  </a>
                </li>
              )
            })
          }
        </ul>
      </nav>
      <a className='cta' href='#'><button>Contact</button></a>
    </header>
  )
}

export default Navbar
