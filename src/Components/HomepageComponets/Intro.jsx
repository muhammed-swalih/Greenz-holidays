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
import newbg from '../../FINSLE ASSETS/cutbg.webp'
import 'typeface-poppins'
import newdeskbg from '../../NEW ASSETS/bgdesk.webp'
import Navbar from '../Navbar'
import { Parallax, ParallaxProvider } from 'react-scroll-parallax';

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
            <div className=' w-full h-auto flex items-center my-font'>

                <div className=' w-full min-h-screen h-auto bg-cover bg-fixed ' style={{ backgroundImage: `url(${newdeskbg})` }}>
                    <div className='  bg-gradient-to-b from-white '>
                        <HomeNavbar />
                        <div className=' flex items-center w-5/6 min-h-screen h-auto mx-auto'>
                            <div className=' flex items-center'>
                                <div className='text-black  w-[1250px] min-h-60 h-60  mx-auto'>
                                    <h1 className=' font-semibold my-font   text-5xl   tracking-wide w-[700px] leading-[60px] uppercase '>You can give us a
                                        tour to remember
                                        forever</h1>
                                    <div className=' flex justify-between w-[1250px] mt-4 gap-0 h-60 '>
                                        <div className=' text-black w-[600px]'>
                                            <h1 className='  text-sm'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen.</h1>
                                            <div className='   mt-4 text-black   w-48 border border-2 border-white h-16 hover:bg-white cursor-pointer hover:text-black  '>
                                                <div className='flex justify-center items-center bg-white bg-opacity-30 h-full w-full hover:bg-white'>
                                                    <h1 className='uppercase text-xl  '>book a tour</h1>
                                                </div>
                                            </div>
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
        
            <div className=' w-full min-h-screen h-auto bg-cover ' style={{ backgroundImage: `url(${newbg})`, backgroundSize: 'cover' }}>
                <div className=' '>
                    <div className=' '>
                        <HomeNavbar />
                        <div className='  mx-auto h-screen pt-40 '>
                            <div className='  w-80 mx-7'>
                                <h1 className=' tracking-widest w-full font-semibold   my-font text-gray-200 leading-[36px] text-4xl uppercase '>There a lot of unseens. Let's Goo!</h1>
                                <h1 className=' uppercase text-sm mt-1 w-48 text-gray-200'>find the place you like around the world</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        


    )
}

export default Intro