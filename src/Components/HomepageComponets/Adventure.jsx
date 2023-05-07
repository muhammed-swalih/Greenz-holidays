import React, { useContext, useEffect, useState } from 'react'
import { useMediaQuery } from '@react-hook/media-query'
import map from '../../greenz webp assets/map-bg-img.webp'
import adOne from '../../greenz webp assets/ad1.webp'
import adTwo from '../../greenz webp assets/ad2.webp'
import adThree from '../../greenz webp assets/ad3.webp'
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai'
import axios from 'axios'
import DataContext from '../../DataContext'
import newmap from '../../NEW ASSETS/MOBILE HOMEPAGE/MAPBG.webp'
import newBg from '../../FINSLE ASSETS/ad-bg.webp'
function Adventure() {
    

    const { ads } = useContext(DataContext)
    const handleNextImage = () => {
        document.getElementById('ads').scrollLeft -= 500
    }
    const handlePrevImage = () => {
        document.getElementById('ads').scrollLeft += 500
    }
    const isMedium = useMediaQuery('(min-width : 1024px)')

    const MhandleNextImage = () => {
        document.getElementById('ads').scrollLeft -= 400
    }
    const MhandlePrevImage = () => {
        document.getElementById('ads').scrollLeft += 400
    }
    if (isMedium) {
        return (
            <div className=' pt-20'>
                <h1 className=' text-center my-text text-6xl text-gray-300'>adventure awaits</h1>
                <div className=' w-full min-h-80 h-auto px-10 py-10 bg-black bg-cover bg-fixed ' style={{ backgroundImage: `url(${map})` }}>
                    <div id='ads' className=' flex overflow-scroll scroll-smooth items-center gap-10'>
                        {ads.map((items) => {
                            const base64String = btoa(
                                String.fromCharCode(...new Uint32Array((items.image.data.data)))
                            )
                            return (
                                <div className='flex-shrink-0 w-[350px] h-[350px] bg-black  '>
                                    <img className=' w-full h-full object-cover' src={`data:image/jpeg;base64,${base64String}`} alt="image" />
                                </div>
                            )
                        })}
                    </div>
                    <div className='mx-auto w-[1150px] flex justify-center items-center h-auto gap-3 mt-10'>
                        <h1 onClick={handleNextImage} className=' bg-black px-4 py-4 text-2xl text-white'><AiOutlineLeft /></h1>
                        <h1 onClick={handlePrevImage} className='bg-black px-4 py-4 text-white text-2xl'><AiOutlineRight /></h1>
                    </div>
                </div>
            </div>
        )
    }
    return (
        <div className=' mt-10 w-full h-auto'>
            <h1 className='my-text text-gray-400 text-center text-2xl'>adventure awaits</h1>
            <div className='w-full   h-auto bg-cover ' style={{ backgroundImage: `url(${newBg})`, backgroundSize: 'cover' }}>
                <div id='ads' className=' w-full py-5 flex   gap-5 px-5 overflow-scroll scroll-smooth'>
                    {ads.map((items) => {
                        const base64String = btoa(
                            String.fromCharCode(...new Uint32Array((items.image.data.data)))
                        )
                        return (
                            <div className=' h-80 w-80  mx-auto rounded-3xl flex flex-shrink-0 ' >
                                <img className='h-full w-full  rounded-3xl object-cover' src={`data:image/jpeg;base64,${base64String}`} alt="" />
                            </div>
                        )
                    })}
                </div>
                <div className='flex justify-center gap-3 w-32 h-auto py-5 mx-auto'>
                    <h1 onClick={MhandleNextImage} className=' text-black bg-white px-3  py-3'><AiOutlineLeft /></h1>
                    <h1 onClick={MhandlePrevImage} className=' text-black bg-white px-3  py-3'><AiOutlineRight /></h1>
            </div>
            </div>
        </div>
    )
}

export default Adventure