import React from 'react'
import { assets } from '../assets/assets'
import { useNavigate } from 'react-router-dom'

const Banner = () => {

    const navigate = useNavigate()

    return (
        <div >
            <img onClick={() => navigate('/')} className='flex flex-col md:flex-row flex-wrap rounded-lg px-6 md:px-10 lg:px-20' src={assets.logotype} alt="LOGO HERE" />
        </div>
    )
}

export default Banner