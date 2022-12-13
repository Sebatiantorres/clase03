/* eslint-disable react/prop-types */
import React from 'react'
import TorontoBanner from '../utils/toronto-banner.jpg'
import '../assets/styles/banner.css'
function Banner ({ color, description, title }) {
  return (
    <div className='banner'>
      <img src={TorontoBanner} />
      <h1 className='bannertitle' style={{ color: color }}>Este es el banner</h1>
      <p className='paragraf'>{description}</p>
      <a href='#' className='boton'>{title}</a>
    </div>
  )
}

export default Banner
