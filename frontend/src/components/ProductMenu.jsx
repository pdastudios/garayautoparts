import React from 'react'
import { productData } from '../assets/assets'
import { Link } from 'react-router-dom'

const ProductMenu = () => {
  return (
    <div
      id="product"
      className="flex flex-col items-center gap-6 py-20 px-4 text-gray-800"
    >
      
      {/* Title */}
      <h1
        className="text-4xl sm:text-5xl font-extrabold tracking-wide text-red-600 drop-shadow-sm"
        data-aos="fade-up"
        data-aos-offset="20"
        data-aos-duration="500"
        data-aos-easing="ease-out"
      >
        Nuestros Productos
      </h1>


      {/* Subtitle */}
      <p
        className="sm:w-2/3 lg:w-1/2 text-center text-base sm:text-lg text-gray-600 leading-relaxed"
        data-aos="fade-up"
        data-aos-delay="150"
      >
        Conoce algunas de nuestras piezas automotrices más destacadas. Calidad garantizada para el mejor rendimiento de tu vehículo.
      </p>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 pt-16 w-full max-w-6xl">
        
        {productData.map((item, index) => (
          
          <Link
            to={`/doctors/${item.product}`}
            onClick={() => scrollTo(0, 0)}
            key={index}
            className="group bg-white p-8 rounded-2xl border border-gray-200 shadow-xl hover:shadow-2xl 
                       transform transition-all duration-500 ease-out hover:-translate-y-3 
                       hover:border-red-500 hover:scale-105 
                       flex flex-col items-center justify-between min-h-[280px] sm:min-h-[320px] lg:min-h-[360px]"
            data-aos="fade-up"
            data-aos-delay={index * 100}
          >
            
            <div className="bg-gradient-to-tr from-gray-200 via-white to-gray-100 p-8 rounded-full mb-6 shadow-inner 
                            group-hover:scale-110 group-hover:rotate-1 transition-transform duration-500 ease-in-out">
                              
              <img className="w-16 sm:w-24 md:w-28" src={item.image} alt={item.product} />
            </div>
            <p className="text-base md:text-lg font-semibold text-gray-700 group-hover:text-red-600 transition-colors duration-300 text-center">
              {item.product}
            </p>
            
          </Link>
          
        ))}
        
      </div>
      
    </div>
  )
}

export default ProductMenu
