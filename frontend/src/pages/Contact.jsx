import React from 'react'
import { assets } from '../assets/assets'
import { FaMapMarkerAlt, FaPhoneAlt, FaClock, FaEnvelope, FaBriefcase } from 'react-icons/fa'

const Contact = () => {
  return (
    <section className="bg-white w-full py-20 px-6 sm:px-10 md:px-20 text-gray-800">
      <div className="text-center mb-12">
        <h2 className="text-3xl sm:text-4xl font-bold text-red-600" data-aos="fade-down">
          CONTÁCTANOS
        </h2>
        <p className="text-gray-500 text-sm sm:text-base mt-2" data-aos="fade-up" data-aos-delay="100">
          Estamos aquí para ayudarte.
        </p>
      </div>

      <div className="flex flex-col md:flex-row justify-center items-center gap-10 max-w-5xl mx-auto" data-aos="fade-up" data-aos-delay="200">
        {/* Logo or image */}
        <img className="w-full md:max-w-[360px] rounded-lg shadow-md" src={assets.logo} alt="Garay Logo" />

        {/* Info Box */}
        <div className="flex flex-col justify-center items-start gap-6 text-sm text-left">
          {/* Address */}
          <div className="flex items-start gap-3">
            <FaMapMarkerAlt className="text-red-600 text-lg mt-1" />
            <div>
              <p className="text-lg font-semibold text-gray-700">NUESTRA OFICINA</p>
              <a
                href="https://www.google.com/maps/place/Garay+Auto+Parts/@18.2940916,-65.917043,20z/data=!4m14!1m7!3m6!1s0x8c035f7f83132f5f:0x79899ca55938ceca!2sGaray+Auto+Parts!8m2!3d18.2939196!4d-65.9173264!16s%2Fg%2F11s48_27l9!3m5!1s0x8c035f7f83132f5f:0x79899ca55938ceca!8m2!3d18.2939196!4d-65.9173264!16s%2Fg%2F11s48_27l9"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:underline inline-block mt-1 leading-relaxed"
              >
                Carr. 887, Carolina, 00987, Puerto Rico
              </a>

            </div>
          </div>

          {/* Contact */}
          <div className="flex items-start gap-3">
            <FaPhoneAlt className="text-red-600 text-lg mt-1" />
            <div>
              <p className="text-lg font-semibold text-gray-700">CONTACTO</p>
              <p className="text-gray-500 mt-1 leading-relaxed">
                Oficina: (787) 627 0008<br />
                Tel: (787) 613 6000<br />
                <span className="inline-flex items-center gap-1">
                  <FaEnvelope className="inline-block text-[14px]" /> info@garayautoparts.com
                </span>
              </p>
            </div>
          </div>

          {/* Hours */}
          <div className="flex items-start gap-3">
            <FaClock className="text-red-600 text-lg mt-1" />
            <div>
              <p className="text-lg font-semibold text-gray-700">HORARIO</p>
              <p className="text-gray-500 mt-1 leading-relaxed">
                Lunes a Viernes<br />
                10:00AM a 5:00PM
              </p>
            </div>
          </div>

          {/* Google Maps Embed */}
          <div className="w-full mt-6 rounded-md overflow-hidden shadow-md">
            <iframe
              title="Garay Auto Parts Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d380.4128128450328!2d-65.917043!3d18.2940916!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8c035f7f83132f5f%3A0x79899ca55938ceca!2sGaray%20Auto%20Parts!5e0!3m2!1sen!2spr!4v1712097344442!5m2!1sen!2spr"
              width="100%"
              height="250"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Contact
