import React, { useState } from 'react'
import { assets } from '../assets/assets'
import { NavLink, useNavigate } from 'react-router-dom'
import { useLocation } from 'react-router-dom'

const Navbar = () => {
  const location = useLocation()
  const navigate = useNavigate()

  const [showMenu, setShowMenu] = useState(false)
  const [token, setToken] = useState(true)
  const [isActive, setIsActive] = useState()
  const isAltPage = location.pathname === '/about' || location.pathname === '/contact'

  return (
  <div className="flex h-20 items-center justify-between text-sm py-4 mb-5">
  <ul className={`md:flex items-center justify-center gap-5 font-medium hidden 
    px-8 py-3 rounded-full shadow-lg 
    border transition-all duration-300 
    ${isAltPage ? 'bg-red-800/40 border-red-400' : 'bg-blue-900 hover:border-blue-400'} backdrop-blur-sm`}>


  <NavLink
    to="/"
    className={({ isActive }) =>
      `py-1 px-2 transition-colors duration-300 ${
        isActive 
        ? 'text-yellow-300 border-b-2 border-yellow-300'
        : 'text-white hover:text-yellow-300 border-b-2 border-transparent'
      }`
    }
  >
    INICIO
  </NavLink>

  <NavLink
    to="/about"
    className={({ isActive }) =>
      `py-1 px-2 transition-colors duration-300 ${
        isActive 
        ? 'text-yellow-300 border-b-2 border-yellow-300'
        : 'text-white hover:text-yellow-300 border-b-2 border-transparent'
      }`
    }
  >
    SOBRE NOSOTROS
  </NavLink>

  <NavLink
    to="/contact"
    className={({ isActive }) =>
      `py-1 px-2 transition-colors duration-300 ${
        isActive 
        ? 'text-yellow-300 border-b-2 border-yellow-300'
        : 'text-white hover:text-yellow-300 border-b-2 border-transparent'
      }`
    }
  >
    CONTÁCTANOS
  </NavLink>
</ul>

</div>

  )
}

export default Navbar