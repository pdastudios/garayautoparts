import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import StoreTour from '../components/StoreTour'
import Banner from '../components/Banner'
import ProductMenu from '../components/ProductMenu'
import Navbar from '../components/Navbar'
import Contact from './Contact'
import About from './About'

const Home = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 50) // minimal delay for animation
    return () => clearTimeout(timer)
  }, [])

  return (
    <div>
      <Header />
      <div
        className={`transition-opacity duration-700 ease-out ${
          isVisible ? 'opacity-100' : 'opacity-0'
        }`}
      >
        
        <ProductMenu />
        <Contact />
        <About />
        <StoreTour />
      </div>
    </div>
  )
}

export default Home
