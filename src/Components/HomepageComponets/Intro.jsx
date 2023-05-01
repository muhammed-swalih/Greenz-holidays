import React, { useState } from 'react'
import logo from '../../mobile Assets/HOMEPAGE/flygreenz~1.webp'
import introbg from '../../greenz webp assets/trainbg.webp'
import popular from '../../greenz webp assets/parachute-bg-img.webp'
import mobileBg from '../../mobile Assets/HOMEPAGE/BG.svg'
import { useMediaQuery } from '@react-hook/media-query'
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai'
import { CgMenuRight } from 'react-icons/cg'
import scrollImage from '../../mobile Assets/HOMEPAGE/German-Culture-and-Traditions.jpg'
import '../styles/scrollbar.css'
import { FaFacebook, FaInstagram, FaTwitter, FaWhatsapp } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'
import HomeNavbar from '../HomeNavbar'
import newbg from '../../NEW ASSETS/MOBILE HOMEPAGE/bg.webp'
import 'typeface-poppins'
import newdeskbg  from '../../NEW ASSETS/bgdesk.webp' 
import Navbar from '../Navbar'
function Intro() {
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
    const handleNextImage = () => {
        document.getElementById('popular').scrollLeft -= 500
    }
    const handlePrevImage = () => {
        document.getElementById('popular').scrollLeft += 500
    }
    const isMedium = useMediaQuery('(min-width : 1024px)')
    if (isMedium) {
        return (
            <div className=' w-full h-auto  flex  items-center my-font'>

                <div className=' w-full min-h-screen h-auto bg-cover   ' style={{ backgroundImage: `url(${newdeskbg})` }}>
                    <div className=' bg-gradient-to-t from-gray-900 flex '>
                    <HomeNavbar/>
                    <div className=' flex items-center w-5/6 min-h-screen h-auto mx-auto'>
                        <div className=' flex items-center'>
                            <div className='text-white  w-[1250px] min-h-60 h-60  mx-auto'>
                                <h1 className=' font-bold my-text   text-5xl tracking-widest w-[800px] leading-[60px]'>You Can Give Us a
                                    Tour To Remember
                                    Forever</h1>
                                <div className=' flex justify-between w-[1250px] mt-4 gap-0 h-60 '>
                                    <div className=' text-gray-100 w-[800px]'>
                                        <h1 className=' font-medium text-xl'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</h1>
                                    </div>
                                </div>
                               
                            </div>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        )
    }
    return (
        <div className=' w-full min-h-screen h-auto bg-cover   bg-fixed ' style={{ backgroundImage: `url(${newbg})` }}>
            <div className=' bg-gradient-to-t from-black flex'>

            <div className=' '>     
            <HomeNavbar/>
            <div className='  mx-auto h-screen pt-40 '>
                <div className=' mx-auto'>
                    <h1 className=' tracking-widest w-80 font-light    mx-7  my-font text-black leading-[40px] text-4xl uppercase text-center'>we can show you the unseen</h1>
                </div>
              
              

            </div>
            </div>
            </div>
           
        </div>


    )
}

export default Intro