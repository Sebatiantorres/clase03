/* eslint-disable react/prop-types */
import React from 'react'
/* import TorontoBanner from '../img/banner.jpg' */
import '../assets/styles/banner.css'
function Banner ({ color, description, title }) {
  return (
    <div className='banner'>
      <div className='content_banner'>
        <h1 className='bannertitle' style={{ color: color }}>Este es el banner</h1>
        <p className='paragraf'>{description}</p>
        <a href='#' className='boton'>{title}</a>
      </div>
    </div>
  )
}

export default Banner
