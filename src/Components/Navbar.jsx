import React, { useState } from 'react'
import { CgMenuRight } from 'react-icons/cg'
import logo from '../mobile Assets/HOMEPAGE/flygreenz~1.webp'
import { useMediaQuery } from '@react-hook/media-query'
import { FaWhatsapp, FaInstagram, FaTwitter, FaFacebook } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'
function Navbar() {
  const navigate = useNavigate();

  const navigateHome = () => {
    navigate('/')
  }
  const aboutus = () => {
    navigate('/aboutus')
  }
  const contact = () => {
    navigate('/contact')
  }
  const packages = () => {
    navigate('/packages')
  }
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  }
  const isMedium = useMediaQuery('(min-width : 1024px)')
  if (isMedium) {
    return (
      <div className={' w-full h-auto flex justify-between text-white px-5 pt-5  items-center fixed z-10'}>
        <div className=' font-semibold'>
          <img src={logo} alt="" width={160} />
        </div>
        <div>
          <ul className=' flex gap-5 '>
            <li className=' ml-3 text-xl font-medium uppercase'>Home</li>
            <li className=' ml-3 text-xl font-medium uppercase'>services</li>
            <li className=' ml-3 text-xl font-medium uppercase'>Tour Packages</li>
            <li className=' ml-3 text-xl font-medium uppercase'>About</li>
          </ul>
        </div>
        <div>
          <h1>hello</h1>
        </div>
      </div>
    )
  }

  return (
    <div className='w-full px-5 h-24'>
      <div className='h-full flex justify-between'>
        <div onClick={navigateHome} className='flex items-center h-full'>
          <img src={logo} alt="" width={100} />
        </div>
        <div className='h-full flex items-center'>
          <h1 className='text-4xl' onClick={toggleSidebar}><CgMenuRight /></h1>
        </div>
      </div>

      {/* Sidebar */}
      <div className={`fixed top-0 left-0 w-52 h-screen bg-gray-700 z-50 transition-transform duration-300 ease-in-out transform ${isSidebarOpen ? '' : '-translate-x-full'}`}>
        <ul className='pt-10 text-white text-center'>
          <li className='flex justify-center mb-10'><img src={logo} alt="" width={150} /></li>
          <li onClick={navigateHome} className='text-lg mb-4'><a href='#'>Home</a></li>
          <li onClick={packages} className='text-lg mb-4'><a href='#'>Packages</a></li>
          <li onClick={aboutus} className='text-lg mb-4'><a href='#'>About Us</a></li>
          <li onClick={contact} className='text- mb-4'><a href='#'>Contact</a></li>
        </ul>
        <div className=' flex gap-5 mt-10 px-5 justify-center'>
          <h1 className=' text-white text-2xl'><FaWhatsapp /></h1>
          <h1 className=' text-white text-2xl'><FaInstagram /></h1>
          <h1 className=' text-white text-2xl'><FaTwitter /></h1>
          <h1 className=' text-white text-2xl'><FaFacebook /></h1>
        </div>
      </div>
    </div>
  )
}

export default Navbar