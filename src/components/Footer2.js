import React from 'react'
import '../assets/styles/footer2.css'
import { SlSocialYoutube, SlSocialInstagram, SlSocialFacebook, SlSocialTwitter } from 'react-icons/sl'

function footer ({ email, number, direction }) {
  return (
    <footer>
      <div className='footer-container'>
        <div className='content-foo'>
          <h4>SEBASTIAN TORRES</h4>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Enim dolorum esse laboriosam tempora eaque modi delectus iure. Voluptates quia minus maxime exercitationem</p>
        </div>
        <div className='content-foo'>
          <h4>Proyectos</h4>
          <ul>
            <li>name of project 1</li>
            <li>name of project 2</li>
            <li>name of project 3</li>
            <li>name of project 4</li>
          </ul>
        </div>
        <div className='content-foo'>
          <h4>ENLACES DE INTERES</h4>
          <a href=''>Términos y Condiciones</a>
          <a href=''>Quiénes Somos</a>
          <a href=''>Libro de Reclamaciones</a>
          <a href=''>Ayuda</a>
        </div>
        <div className='content-foo'>
          <h4>CONTACTANOS</h4>
          <ul>
            <li><i className='fas fa-home'>{direction}</i></li>
            <li><i className='fas fa-home'>{email}</i></li>
            <li><i className='fas fa-phone'>{number}</i></li>
            <li><i className='fas fa-headset'>{number}</i></li>
          </ul>
        </div>
      </div>
      <div className='copyrigth'>
        <h2><i className='far fa-copyright'>2021 Copyrigth: Derechos reservados</i></h2>
        <div className='redes-sociales'>
          <div className='bubble'>
            <a href='#'><i className='icon-facebook'><SlSocialFacebook /></i></a>
          </div>
          <div className='bubble'>
            <a href='#'><i className='icon-instagram'><SlSocialInstagram /></i></a>
          </div>
          <div className='bubble'>
            <a href='#'><i className='icon-twitter'><SlSocialTwitter /></i></a>
          </div>
          <div className='bubble'>
            <a href='#'><i className='icon-youtube'><SlSocialYoutube /></i></a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default footer
