import React, { useContext, useEffect, useState } from 'react'
import packageBg from '../../DESKTOP/packages/bg.webp'
import Footer from '../HomepageComponets/Footer'
import { useMediaQuery } from '@react-hook/media-query'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import DataContext from '../../DataContext'
import Navbar from '../Navbar'
import HomeNavbar from '../HomeNavbar'
import bg from '../../FINSLE ASSETS/TOURBG.webp'
import newbg from '../../NEW ASSETS/MOBILE OTHER PAGES/packages.webp'
import { BiTimeFive } from 'react-icons/bi'
function Packages() {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    const navigate = useNavigate();

    const { packages } = useContext(DataContext)
    const navigateDeal = (id) => {
        navigate(`/packagedetails/${id}`)
    }
    const isMedium = useMediaQuery('(min-width : 1024px)')
    if (isMedium) {
        return (
            <div className=' w-full min-h-screen h-auto my-font'>
                <HomeNavbar/>
                <div className=' w-full h-80 bg-black bg-cover pb-2 flex justify-center items-end' style={{ backgroundImage: `url(${newbg})` }}>
                    <div className=' w-[1250px] min-h-32 h-auto '>
                        <h1 className=' my-text text-5xl tracking-widest text-white'>packages</h1>
                        <h1 className=' uppercase text-white text-md font-semibold w-[400px]'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley</h1>
                    </div>
                </div>
                <div className=' w-[1250px] h-auto mx-auto my-10'>
                    <div className=' flex flex-wrap gap-10 justify-center'>
                        {packages.map((items) => {
                            const base64String = btoa(
                                String.fromCharCode(...new Uint32Array((items.image.data.data)))
                            )
                            return (

                                <div className=' flex-shrik-0 flex-col w-96 h-auto bg-white'>
                                    <div className=' w-full h-56 bg-yellow-300'>
                                        <img className=' w-full h-full object-cover' src={`data:image/jpeg;base64,${base64String}`} alt="" />
                                    </div>
                                    <div className='  mt-3 mx-3 my-3 py-2 h-28  overflow-hidden 
                                    '>
                                        <h1 className=' my-text text-black text-2xl text-center'>{items ? items.place : ""}</h1>
                                        <h1 className=' text-[15px] text-gray-800 font-semibold w-80 mx-auto text-center '>{items ? items.description : ""}</h1>
                                    </div>
                                    <div className='  w-full bg-[#EAEAEA] min-h-10 h-auto py-2 px-3 flex justify-between'>
                                        <div className=' flex flex-col gap-1'>
                                            <h1 className='mx-2 text-lg font-medium text-gray-800 '>{items ? items.days : ""}</h1>
                                            <h1 className='mx-2 text-xl font-semibold'>Rs {items ? items.price : ""}</h1>
                                        </div>
                                        <div onClick={() => navigateDeal(items._id)} className=' mx-2  flex items-center'>
                                            <h1 className=' px-2 py-1 rounded-full text-white font-semibold bg-[#4D5BDA]'>View Deal</h1>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
                <Footer />
            </div>
        )
    }
    return (
        <div className='w-full h-auto my-font'>
            <Navbar />
            <div className=' w-full h-52 bg-cover' >
                <div className=' flex justify-center items-center w-full h-full'>
                    <div className=' text-center'>
                        <h1 className=' my-text text-white text-4xl tracking-wider'>packages</h1>
                        <h1 className=' text-white text-md font-semibold w-80'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's </h1>
                    </div>
                </div>
            </div>
            <div className=' py-10  px-5 w-full h-auto flex flex-col gap-8 bg-cover items-center'>
                {packages.map((items) => {
                    const base64String = btoa(
                        String.fromCharCode(...new Uint32Array((items.image.data.data)))
                    )
                    return (
                        <div className='flex-shrink-0 flex flex-col w-auto h-auto py-5 bg-fixed'>
                        <div className=' bg-black'>
                            <img className=' w-80 h-72 object-cover' src={`data:image/jpeg;base64,${base64String}`} alt="" />
                        </div>
                        <div className=' w-80 h-auto flex flex-col justify-center bg-[#E7E7E7] shadow-xl '>
                            <div className='flex flex-col gap-3 w-full pt-1 pb-1 h-28 overflow-hidden'>
                                <h1 className='my-text mx-auto text-3xl'>{items ? items.place : ""}</h1>
                                <h1 className=' text-sm w-60 text-center mx-auto font-semibold'>{items ? items.description : ""}</h1>
                            </div>
                            <div className=' flex justify-between items-center px-2 pb-3 mt-10 mb-5'>
                                <div className=' flex gap-2 items-center'>
                                    <h1 className=' text-4xl text-gray-500'><BiTimeFive/></h1>
                                    <h1 className=' font-medium text-gray-700 w-20'>{items ? items.days : ""}</h1>
                                </div>
                                <div className=''>
                                    <h1 className='text-2xl font-medium'>Rs {items ? items.price : ""}</h1>
                                </div>
                            </div>
                            <div className=' w-full'>
                                <div onClick={()=> navigateDeal(items._id)} className=' flex justify-center'><h1 className=' py-2 rounded-t-xl w-40 text-center my-text bg-blue-500 text-white tracking-widest'>view Deal</h1></div>
                            </div>
                        </div>

                    </div>
                    )
                })}
            </div>
            <Footer/>
        </div>
    )
}

export default Packages