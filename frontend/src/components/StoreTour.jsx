import React from 'react'
import { storeTourData } from '../assets/assets'

const StoreTour = () => {

  return (
    <section className="bg-white py-20 px-6 text-center text-gray-800">
      <h2 className="text-3xl sm:text-4xl font-bold text-red-600 mb-4" data-aos="fade-up">
        Mira al rededor de la tienda
      </h2>
      <p className="text-gray-600 text-sm sm:text-base max-w-xl mx-auto mb-10" data-aos="fade-up" data-aos-delay="100">
        Descubre lo que tenemos en Garay Autoparts. ¡Explora cada rincón!
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {storeTourData.map((item, index) => (
          <div
            key={index}
            className="overflow-hidden rounded-xl shadow-lg"
            data-aos="fade-up"
            data-aos-delay={index * 100}
          >
            <img src={item.image} alt={item.title} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
            <p className="mt-2 text-sm font-medium text-gray-700">{item.title}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default StoreTour
