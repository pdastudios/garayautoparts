import React from 'react'
import Navbar from './components/Navbar'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Doctors from './pages/Doctors'
import Login from './pages/Login'
import About from './pages/About'
import Contact from './pages/Contact'
import Appointment from './pages/Appointment'
import MyAppointments from './pages/MyAppointments'
import MyProfile from './pages/MyProfile'
import Footer from './components/Footer'
import { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

const App = () => {
  
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      easing: 'ease-out',
    })
  }, [])

  return (
    <div className='w-full'>
    <div className="absolute z-20 left-1/2 transform -translate-x-1/2 p-10">
      <Navbar />
    </div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/doctors' element={<Doctors />} />
        <Route path='/doctors/:product' element={<Doctors />} />
        <Route path='/login' element={<Login />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/appointment/:docId' element={<Appointment />} />
        <Route path='/my-appointments' element={<MyAppointments />} />
        <Route path='/my-profile' element={<MyProfile />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App