import React from 'react'

const About = () => {
  return (
    <section className="bg-white w-full py-20 px-6 sm:px-10 md:px-20 text-gray-800 pt-40">
      {/* Heading */}
      <div className="text-center mb-12" data-aos="fade-down">
        <h2 className="text-3xl sm:text-4xl font-bold text-red-600">SOBRE NOSOTROS</h2>
        <p className="text-sm sm:text-base text-gray-500 mt-2">Conoce más sobre Garay AutoParts</p>
      </div>

      {/* Why choose us */}
      <div className="text-center mt-20 mb-10" data-aos="fade-up" data-aos-delay="200">
        <h3 className="text-2xl font-bold text-gray-700">¿POR QUÉ ELEGIRNOS?</h3>
      </div>

      <div className="flex flex-col md:flex-row gap-6 md:gap-10 max-w-6xl mx-auto" data-aos="fade-up" data-aos-delay="300">
        <div className="flex-1 border px-8 py-10 rounded-xl text-gray-600 text-center hover:bg-red-600 hover:text-white transition-all duration-300 shadow-md">
          <h4 className="font-bold mb-3">Amplio Inventario</h4>
          <p className="text-sm">
            Contamos con una gran variedad de piezas automotrices para múltiples marcas y modelos. Desde frenos hasta baterías, encontrarás todo lo que necesitas para mantener tu vehículo en perfecto estado, sin perder tiempo buscando en distintos lugares.
          </p>
        </div>

        <div className="flex-1 border px-8 py-10 rounded-xl text-gray-600 text-center hover:bg-red-600 hover:text-white transition-all duration-300 shadow-md">
          <h4 className="font-bold mb-3">Asesoría Personalizada</h4>
          <p className="text-sm">
            Te brindamos atención experta con un trato cercano. Te orientamos en cada compra para que lleves exactamente lo que tu vehículo necesita, asegurando compatibilidad, rendimiento y una experiencia de compra confiable.
          </p>
        </div>

        <div className="flex-1 border px-8 py-10 rounded-xl text-gray-600 text-center hover:bg-red-600 hover:text-white transition-all duration-300 shadow-md">
          <h4 className="font-bold mb-3">Atención Rápida</h4>
          <p className="text-sm">
            Sabemos que el tiempo es vital. Por eso, nos enfocamos en entregas ágiles, atención eficiente y disponibilidad inmediata para que soluciones cualquier necesidad automotriz sin demoras ni complicaciones.
          </p>
        </div>
      </div>
    </section>
  )
}

export default About
