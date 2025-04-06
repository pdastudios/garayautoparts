import React from 'react'
import { assets } from '../assets/assets'

const About = () => {
  return (
    <section className="bg-white w-full py-20 px-6 sm:px-10 md:px-20 text-gray-800">
      {/* Heading */}
      <div className="text-center mb-12" data-aos="fade-down">
        <h2 className="text-3xl sm:text-4xl font-bold text-red-600">SOBRE NOSOTROS</h2>
        <p className="text-sm sm:text-base text-gray-500 mt-2">Conoce más sobre Garay Autoparts</p>
      </div>

      {/* Why choose us */}
      <div className="text-center mt-20 mb-10" data-aos="fade-up" data-aos-delay="200">
        <h3 className="text-2xl font-bold text-gray-700">¿POR QUÉ ELEGIRNOS?</h3>
      </div>

      <div className="flex flex-col md:flex-row gap-6 md:gap-10 max-w-6xl mx-auto" data-aos="fade-up" data-aos-delay="300">
        {['Amplio inventario', 'Asesoría personalizada', 'Atención rápida'].map((reason, index) => (
          <div
            key={index}
            className="flex-1 border px-8 py-10 rounded-xl text-gray-600 text-center hover:bg-red-600 hover:text-white transition-all duration-300 shadow-md"
          >
            <h4 className="font-bold mb-3">{reason}</h4>
            <p className="text-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi cum nostrum molestias distinctio ratione.
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default About
