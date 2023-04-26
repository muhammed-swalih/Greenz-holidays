import React, { useContext, useEffect, useState } from 'react'
import packageBg from '../../DESKTOP/packages/bg.webp'
import Footer from '../HomepageComponets/Footer'
import { useMediaQuery } from '@react-hook/media-query'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import DataContext from '../../DataContext'
import Navbar from '../Navbar'
function Packages() {
    const navigate = useNavigate();

    const { packages } = useContext(DataContext)
    const navigateDeal = (id) => {
        navigate(`/packagedetails/${id}`)
    }
    const isMedium = useMediaQuery('(min-width : 1024px)')
    if (isMedium) {
        return (
            <div className=' w-full min-h-screen h-auto'>
                <div className=' w-full h-60 bg-black bg-cover pb-2 flex justify-center items-end' style={{ backgroundImage: `url(${packageBg})` }}>
                    <div className=' w-[1250px] min-h-32 h-auto '>
                        <h1 className=' my-text text-5xl tracking-widest text-white'>packages</h1>
                        <h1 className=' uppercase text-white text-xs font-semibold w-[400px]'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley</h1>
                    </div>
                </div>
                <div className=' w-[1250px] h-auto mx-auto my-10'>
                    <div className=' flex flex-wrap gap-10 justify-center'>
                        {packages.map((items) => {
                            const base64String = btoa(
                                String.fromCharCode(...new Uint32Array((items.image.data.data)))
                            )
                            return (

                                <div className=' flex-col w-72 h-auto bg-white shadow-xl'>
                                    <div className=' w-full h-48 bg-white'>
                                        <img className=' w-full h-full object-cover' src={`data:image/jpeg;base64,${base64String}`} alt="" />
                                    </div>
                                    <div className=' mt-3 mx-3 my-3 py-2 h-28  overflow-hidden '>
                                        <h1 className=' my-text text-black text-lg'>{items ? items.place : ""}</h1>
                                        <h1 className=' text-[12px] font-semibold'>{items ? items.description : ""}</h1>
                                    </div>
                                    <div className='  w-full bg-[#EAEAEA] min-h-10 py-1 flex justify-between'>
                                        <div>
                                            <h1 className='mx-2 text-xs font-semibold'>{items ? items.days : ""}</h1>
                                            <h1 className='mx-2 text-lg font-bold'>{items ? items.price : ""}</h1>
                                        </div>
                                        <div onClick={() => navigateDeal(items._id)} className=' mx-2 mt-2'>
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
        <div className='w-full h-auto'>
            <Navbar />
            <div className=' w-full h-52 bg-cover' style={{ backgroundImage: `url(${packageBg})` }}>
                <div className=' flex justify-center items-center w-full h-full'>
                    <div className=' text-center'>
                        <h1 className=' my-text text-white text-4xl tracking-wider'>packages</h1>
                        <h1 className=' text-white text-xs w-80'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley</h1>
                    </div>
                </div>
            </div>
            <div className=' mt-10 mb-10 px-5 w-full h-auto flex flex-col gap-8 '>
                {packages.map((items) => {
                    const base64String = btoa(
                        String.fromCharCode(...new Uint32Array((items.image.data.data)))
                    )
                    return (
                        <div>
                            <div className='w-full h-36'>
                                <img className='w-full h-full object-cover' src={`data:image/jpeg;base64,${base64String}`} alt="" />
                            </div>
                            <div className='bg-[#E9E9E9] shadow-xl'>
                                <div className='w-full h-auto pt-3  overflow-hidden '>
                                    <h1 className=' my-text text-black text-center text-3xl'>{items ? items.place : ""}</h1>
                                    <h1 className=' mt-3 px-5 text-center pb-2 text-sm h-10'>{items ? items.description : ""}</h1>
                                </div>
                                <div className=' flex justify-between mt-5 px-3 items-center'>
                                    <h1 className=' text-sm'>{items ? items.days : ""}</h1>
                                    <h1 className=' font-semibold text-lg'>Rs {items ? items.price : ""}</h1>
                                </div>

                                <div className=' w-full flex justify-center mt-5' onClick={()=> navigateDeal(items._id)}>
                                    <h1 className=' bg-[#4D5BDA] px-5 text-white my-text tracking-widest rounded-t-lg py-1'>view deal</h1>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Packages