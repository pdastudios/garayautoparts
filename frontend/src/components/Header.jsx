import React from 'react'
import { assets } from '../assets/assets'
import Navbar from './Navbar'

const Header = () => {
  return (
    <div className="relative h-[500px] sm:h-[600px] md:h-[800px] w-full overflow-hidden pt-40">
      {/* Background Image */}
      <img
        src={assets.store1}
        loading="lazy"
        alt="Garay Store"
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 z-10" />


      {/* Navbar on top of background 
      <div className="relative z-20 p-10">
        <Navbar />
      </div>
*/}
      {/* Optional: Add text content on top of the image */}
      <div className="flex justify-center relative z-20 text-white text-center mt-12 px-4">
        <img onClick={() => navigate('/')} className='w-90 cursor-pointer' src={assets.logo} alt="LOGO HERE" />
      </div>
    </div>
  )
}

export default Header
