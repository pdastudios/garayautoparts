import React from 'react'
import Header from '../components/Header'
import StoreTour from '../components/StoreTour'
import Banner from '../components/Banner'
import ProductMenu from '../components/ProductMenu'
import Navbar from '../components/Navbar'
import Contact from './Contact'
import About from './About'

const Home = () => {
  return (
    <div>
      <Header />
      <ProductMenu />
      <Contact />
      <About />
      <StoreTour />
    </div>
  )
}

export default Home