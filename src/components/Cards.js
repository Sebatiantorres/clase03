import React from 'react'
import '../assets/styles/cards.css'
import card1 from '../img/card1.jpg'
import card2 from '../img/card2.jpg'
import card3 from '../img/card3.jpg'

function cards () {
  return (
    <div className='container'>
      <div className='card'>
        <figure>
          <img src={card1} />
        </figure>
        <div className='contenido'>
          <h3>Desarrollo Web</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
          <a href='#'>Leer mas</a>
        </div>
      </div>
      <div className='card'>
        <figure>
          <img src={card2} />
        </figure>
        <div className='contenido'>
          <h3>Administracion de bases de datos</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
          <a href='#'>Leer mas</a>
        </div>
      </div>
      <div className='card'>
        <figure>
          <img src={card3} />
        </figure>
        <div className='contenido'>
          <h3>Desarrollo de aplicaciones moviles</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
          <a href='#'>Leer mas</a>
        </div>
      </div>
    </div>
  )
}

export default cards
