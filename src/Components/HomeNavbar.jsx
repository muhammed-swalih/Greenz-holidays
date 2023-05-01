import React, { useEffect, useState } from 'react'
import { useMediaQuery } from '@react-hook/media-query'
import { useNavigate } from 'react-router-dom'
import { FaFacebook, FaInstagram, FaTwitter, FaWhatsapp } from 'react-icons/fa';
import { CgMenuRight } from 'react-icons/cg';
import logo from '../mobile Assets/HOMEPAGE/flygreenz~1.webp'
function HomeNavbar() {
  const medium = useMediaQuery('(min-width : 1024px)')
  const [nav, setNav] = useState(false)
  const navBarTransition = () => {
    if (window.scrollY > 100) {
      setNav(true)
    } else {
      setNav(false)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', navBarTransition)
    return () => window.removeEventListener('scroll', navBarTransition);
  }, [])

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
  if (medium) {
    return (
      <div className={nav ? ' w-full h-auto flex justify-between  px-5 py-2 text-black  items-center fixed z-10 bg-white' : 'w-full h-auto flex justify-between text-white px-5 pt-5  items-center fixed z-10'}>
      <div className=' font-semibold'>
        <img src={logo} alt="" width={160} />
      </div>
      <div>
        <ul className=' flex gap-5 '>
          <li onClick={navigateHome} className=' ml-3 text-xl font-medium '>Home</li>
          <li onClick={packages} className=' ml-3 text-xl font-medium '>Tour Packages</li>
          <li onClick={aboutus} className=' ml-3 text-xl font-medium '>About</li>
          <li onClick={contact} className=' ml-3 text-xl font-medium '>Contact</li>
        </ul>
      </div>
   <div>

   </div>
    </div>
    )
  }
  return (
    <div className={nav ? 'w-full h-20 fixed z-10 bg-white' : 'w-full h-24 fixed z-10'}>
      <div className='h-full flex justify-between px-5'>
        <div onClick={navigateHome} className='flex items-center h-full'>
          <img src={logo} alt="" width={110} />
        </div>
        <div className='h-full flex items-center'>
          <h1 className={nav ? 'text-4xl' : "text-white text-4xl"} onClick={toggleSidebar}><CgMenuRight /></h1>
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

export default HomeNavbar