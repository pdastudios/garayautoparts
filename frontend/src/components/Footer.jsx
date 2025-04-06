import React from 'react'
import { assets } from '../assets/assets'
import { FaPhoneAlt, FaEnvelope, FaClock } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className="bg-white w-full text-gray-700 px-6 sm:px-10 md:px-20 pt-20 pb-10 border-t border-gray-200">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
        {/* Logo & About */}
        <div>
          <img src={assets.logo} alt="Garay Logo" className="w-40 mb-4" />
          <p className="text-sm text-gray-600 leading-relaxed max-w-md">
            Garay AutoParts es tu tienda de confianza para piezas automotrices en Puerto Rico. Calidad, servicio y experiencia en cada entrega.
          </p>
        </div>

        {/* Horario */}
        <div>
          <h3 className="text-lg font-semibold mb-4">HORARIO</h3>
          <ul className="space-y-2 text-sm text-gray-600">
            <li className="flex items-center gap-2">
              <FaClock className="text-red-600" /> Lunes a Viernes: 10:00AM - 5:00PM
            </li>
            <li className="flex items-center gap-2">
              <FaEnvelope className="text-red-600" /> info@garayautoparts.com
            </li>
          </ul>
        </div>

        {/* Contacto */}
        <div>
          <h3 className="text-lg font-semibold mb-4">CONTÁCTANOS</h3>
          <ul className="space-y-2 text-sm text-gray-600">
            <li className="flex items-center gap-2">
              <FaPhoneAlt className="text-red-600" /> +1-787-627-0008
            </li>
            <li className="flex items-center gap-2">
              <FaPhoneAlt className="text-red-600" /> +1-787-613-6000
            </li>
            <li className="flex items-center gap-2">
              <FaEnvelope className="text-red-600" /> info@garayautoparts.com
            </li>
          </ul>
        </div>
      </div>

      {/* Footer Bar */}
      <div className="pt-10 mt-10 border-t border-gray-200 text-center text-xs text-gray-500">
        <p>© 2025 Garay AutoParts. Todos los derechos reservados.</p>
        <p className="mt-1">Icons by Freepik via flaticon.com</p>
      </div>
    </footer>
  )
}

export default Footer
