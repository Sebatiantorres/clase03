import React from 'react'
import Navbar from '../components/Navbar'
import Banner from '../components/Banner'
import Footer from '../components/Footer2'
import Cards from '../components/Cards'
const navData = [
  {
    route: '/',
    label: 'Home'
  },
  {
    route: '/services',
    label: 'services'
  },
  {
    route: 'projects',
    label: 'Projects'
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
      <Navbar color='#24252a' navlinks={navData} brand='texto' />
      <Banner
        color='#fff'
        description='Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos, quedando esencialmente igual al original. Fue popularizado en los 60s con la creación de las hojas cuales contenian pasajes de Lorem Ipsum, y más recientemente con software de autoedición, como por ejemplo Aldus PageMaker, l cual incluye versiones de Lorem Ipsum.'
        title='Acceder'
      />
      <Cards />
      <Footer
        number='+58 424 680 25 99'
        direction='Prolongacion amparo calle 83 sector lomas del valle 1'
        email='sebasss0390@gmail.com'
      />
    </section>
  )
}

export default Home
