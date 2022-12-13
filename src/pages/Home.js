import React from 'react'
import Navbar from '../components/Navbar'
import Banner from '../components/Banner'

const navData = [
  {
    route: '/',
    label: 'Home'
  },
  {
    route: '/about',
    label: 'About'
  },
  {
    route: '/faq',
    label: 'FAQ'
  }
]

function Home () {
  return (
    <section className='home'>
      <Navbar color='#ccc' navlinks={navData} brand='texto' />
      <Banner
        color='#fff'
        description='Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos, quedando esencialmente igual al original. Fue popularizado en los 60s con la creación de las hojas cuales contenian pasajes de Lorem Ipsum, y más recientemente con software de autoedición, como por ejemplo Aldus PageMaker, l cual incluye versiones de Lorem Ipsum.'
        title='Acceder'
      />
    </section>
  )
}

export default Home
