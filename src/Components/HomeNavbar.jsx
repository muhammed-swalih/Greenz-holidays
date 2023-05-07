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


  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  }

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

  const AirTicketing = () => {
    navigate('/airticketing')
}
const visitingVisa = () => {
    navigate('/visitingvisa')
}

const visaStamping = () => {
    navigate('/visastamping')
}
const hajjumrah = () => {
    navigate('/hajjandumrah')
}
const passport = () => {
    navigate('/passport')
}
const attestation = () => {
    navigate('/attestation')
}
const emigration = () => {
    navigate('/emigration')
}
const tickets = () => {
    navigate('/tickets')
}
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  }
  if (medium) {
    return (
      <div className={nav ? '  w-full h-auto flex justify-between  px-5 py-2 text-black  items-center fixed z-10 bg-white' : 'w-full h-auto flex justify-between text-white px-5 pt-5   items-center fixed z-10'}>
        <div className=' font-semibold mx-auto'>
          <img src={logo} alt="" width={130} />
        </div>
        <div>
          <ul className='flex gap-5 mx-auto text-sm'>
            <li onClick={navigateHome} className='ml-3 text-black font-medium uppercase hover:underline hover:font-medium hover:text-gray-800'>Home</li>
            <li onClick={packages} className='ml-3 text-black font-medium uppercase hover:underline hover:font-medium hover:text-gray-800'>Tour Packages</li>
            <li onClick={aboutus} className='ml-3 text-black font-medium uppercase hover:underline hover:font-medium hover:text-gray-800'>About</li>
            <li onClick={toggleDropdown}  className='relative ml-3 text-black font-medium uppercase hover:underline hover:font-medium hover:text-gray-800'>
              Services
              {isDropdownOpen && (
                <div onMouseLeave={toggleDropdown} className='absolute flex gap-5 z-10 mt-2 py-2 w-[350px] bg-white rounded-md shadow-lg'>
                  <div>
                    <a onClick={AirTicketing}  className='block text-sm px-4 py-2 text-gray-800 hover:bg-gray-200'>Air Ticketing</a>
                    <a onClick={visitingVisa} className='block text-sm px-4 py-2 text-gray-800 hover:bg-gray-200'>Visiting Visa</a>
                    <a onClick={hajjumrah} className='block px-4 py-2 text-sm text-gray-800 hover:bg-gray-200'>Hajj & umrah</a>
                    <a onClick={tickets}  className='block px-4 py-2 text-gray-800 text-sm hover:bg-gray-200'>Tickets</a>
                  </div>
                  <div>
                    <a onClick={passport} className='block px-4 py-2 text-gray-800 text-sm hover:bg-gray-200'>Passport services</a>
                    <a onClick={attestation} className='block px-4 py-2 text-gray-800 text-sm hover:bg-gray-200'>Attestation</a>
                    <a onClick={emigration} className='block px-4 py-2 text-gray-800 text-sm hover:bg-gray-200'>Emigration</a>
                    <a onClick={visaStamping} className='block px-4 py-2 text-gray-800 text-sm hover:bg-gray-200'>Visa Stamping</a>
                  </div>
                </div>
              )}
            </li>
            <li onClick={contact} className='ml-3 text-black font-medium uppercase hover:underline hover:font-medium hover:text-gray-800'>Contact</li>
          </ul>
        </div>
        <div className=' mx-auto'>
          <h1 className=' text-white px-2 py-2 rounded-full bg-green-500 text-2xl'><FaWhatsapp /></h1>
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
          <h1 className={nav ? 'text-4xl' : " text-4xl"} onClick={toggleSidebar}><CgMenuRight /></h1>
        </div>
      </div>

      {/* Sidebar */}
      <div className={` overflow-scroll fixed top-0 left-0 w-52 h-screen bg-gray-700 z-50 transition-transform duration-300 ease-in-out transform ${isSidebarOpen ? '' : '-translate-x-full'}`}>
        <ul className='pt-10 text-white my-font'>
          <li className='flex justify-center mb-10'><img src={logo} alt="" width={150} /></li>
          <li onClick={navigateHome} className='text-lg mb-2 px-6'><a href='#'>Home</a></li>
          <hr className=' mb-4 w-44 mx-auto'/>
          <li onClick={packages} className='text-lg mb-2 px-6'><a href='#'>Packages</a></li>
          <hr className=' mb-4 w-44 mx-auto'/>
          <li onClick={aboutus} className='text-lg mb-2 px-6'><a href='#'>About Us</a></li>
          <hr className=' mb-4 w-44 mx-auto'/>
          <li onClick={AirTicketing} className='text-lg mb-2 px-6'><a href='#'>Air Ticketing</a></li>
          <hr className=' mb-4 w-44 mx-auto'/>
          <li onClick={visitingVisa} className='text-lg mb-2 px-6'><a href='#'>Visiting visa</a></li>
          <hr className=' mb-4 w-44 mx-auto'/>
          <li onClick={visaStamping} className='text-lg mb-2 px-6'><a href='#'>Visa Stamping</a></li>
          <hr className=' mb-4 w-44 mx-auto'/>
          <li onClick={hajjumrah} className='text- mb-2 px-6'><a href='#'>Hajj & Umrah</a></li>
          <hr className=' mb-4 w-44 mx-auto'/>
          <li onClick={attestation} className='text- mb-2 px-6'><a href='#'>Attestaion</a></li>
          <hr className=' mb-4 w-44 mx-auto'/>
          <li onClick={emigration} className='text- mb-2 px-6'><a href='#'>Emigration</a></li>
          <hr className=' mb-4 w-44 mx-auto'/>
          <li onClick={passport} className='text- mb-2 px-6'><a href='#'>Passport Service</a></li>
          <hr className=' mb-4 w-44 mx-auto'/>
          <li onClick={tickets} className='text- mb-2 px-6'><a href='#'>Tickets</a></li>
          <hr className=' mb-4 w-44 mx-auto'/>
          <li onClick={contact} className='text- mb-2 px-6'><a href='#'>Contact</a></li>
          <hr className=' mb-4 w-44 mx-auto'/>
        </ul>
        <div className=' flex gap-5 mt-5 px-5 justify-center'>
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