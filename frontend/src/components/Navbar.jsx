import React, { useState } from 'react'
import { assets } from '../assets/assets'
import { NavLink, useNavigate, useLocation } from 'react-router-dom'
import { FaBars, FaTimes } from 'react-icons/fa'

const Navbar = () => {
  const location = useLocation()
  const navigate = useNavigate()
  const isAltPage = location.pathname === '/about' || location.pathname === '/contact'

  const [showMenu, setShowMenu] = useState(false)

  return (
    <div className="flex h-10 items-center justify-between lg:text-sm md:text-xs py-4 mb-6 px-4 sm:px-10 relative z-50">



      {/* Desktop Nav */}
      <ul
        className={`md:flex items-center justify-center gap-6 font-semibold hidden
          px-10 py-4 rounded-full backdrop-blur-sm transition-all duration-300
          shadow-lg border
          ${isAltPage ? 'bg-red-800/30 border-red-400' : 'bg-white/15 border-white/70'}
        `}
      >
        <NavLink
          to="/"
          className={({ isActive }) =>
            `tracking-wide transition-all duration-300 px-3 py-1 rounded-md ${
              isActive
                ? 'text-white border-b-2 border-white'
                : 'text-white/60 hover:text-white border-transparent hover:scale-[1.02] will-change-transform'
            }`
          }
          data-aos="fade-left"
          data-aos-offset="20"
          data-aos-duration="500"
          data-aos-easing="ease-out"
        >
          INICIO
        </NavLink>

        <NavLink
          to="/about"
          className={({ isActive }) =>
            `tracking-wide transition-all duration-300 px-3 py-1 rounded-md ${
              isActive
                ? 'text-white border-b-2 border-white'
                : 'text-white/60 hover:text-white border-transparent hover:scale-[1.02] will-change-transform'
            }`
          }
          data-aos="fade-left"
          data-aos-offset="20"
          data-aos-duration="500"
          data-aos-easing="ease-out"
        >
          SOBRE NOSOTROS
        </NavLink>

        <NavLink
          to="/contact"
          className={({ isActive }) =>
            `tracking-wide transition-all duration-300 px-3 py-1 rounded-md ${
              isActive
                ? 'text-white border-b-2 border-white'
                : 'text-white/60 hover:text-white border-transparent'
            }`
          }
          data-aos="fade-left"
          data-aos-offset="20"
          data-aos-duration="500"
          data-aos-easing="ease-out"
        >
          CONTÁCTANOS
        </NavLink>
      </ul>

      {/* Mobile Icon */}
      <div className="md:hidden text-white text-xl" onClick={() => setShowMenu(!showMenu)}>
        {showMenu ? <FaTimes /> : <FaBars />}
      </div>

      {/* Mobile Dropdown Menu */}
      {showMenu && (
        <div
          className={`absolute top-16 left-4 w-52 rounded-xl border px-5 py-6 bg-blue-900/90 text-white flex flex-col gap-5 shadow-lg backdrop-blur-md
          ${isAltPage ? 'border-red-400 bg-red-800/80' : 'border-blue-500'}`}
        >
          <NavLink
            to="/"
            onClick={() => setShowMenu(false)}
            className={({ isActive }) =>
              `transition-all duration-300 ${
                isActive ? 'text-yellow-300' : 'hover:text-yellow-300'
              }`
            }
          >
            INICIO
          </NavLink>

          <NavLink
            to="/about"
            onClick={() => setShowMenu(false)}
            className={({ isActive }) =>
              `transition-all duration-300 ${
                isActive ? 'text-yellow-300' : 'hover:text-yellow-300'
              }`
            }
          >
            SOBRE NOSOTROS
          </NavLink>

          <NavLink
            to="/contact"
            onClick={() => setShowMenu(false)}
            className={({ isActive }) =>
              `transition-all duration-300 ${
                isActive ? 'text-yellow-300' : 'hover:text-yellow-300'
              }`
            }
          >
            CONTÁCTANOS
          </NavLink>
        </div>
      )}
    </div>
  )
}

export default Navbar
