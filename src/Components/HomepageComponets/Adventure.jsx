import React, { useContext, useEffect, useState } from 'react'
import { useMediaQuery } from '@react-hook/media-query'
import map from '../../greenz webp assets/map-bg-img.webp'
import adOne from '../../greenz webp assets/ad1.webp'
import adTwo from '../../greenz webp assets/ad2.webp'
import adThree from '../../greenz webp assets/ad3.webp'
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai'
import axios from 'axios'
import DataContext from '../../DataContext'
function Adventure() {
    // const [ads, setAds] = useState([]);
    // const getAds = async () => {
    //     const response = await axios('http://localhost:3001/packages/getAd');
    //     setAds(response.data)
    //     console.log(response.data);
    // }
    // useEffect(() => {
    //     getAds();
    // }, [])

    const { ads } = useContext(DataContext)
    const handleNextImage = () => {
        document.getElementById('ads').scrollLeft -= 500
    }
    const handlePrevImage = () => {
        document.getElementById('ads').scrollLeft += 500
    }
    const isMedium = useMediaQuery('(min-width : 1024px)')
    if (isMedium) {
        return (
            <div className=' pt-20'>
                <h1 className=' text-center my-text text-6xl text-gray-300'>adventure awaits</h1>
                <div className=' w-full min-h-80 h-auto px-10 py-10 bg-black bg-cover' style={{ backgroundImage: `url(${map})` }}>
                    <div id='ads' className=' flex overflow-scroll scroll-smooth items-center gap-10'>
                        {ads.map((items) => {
                            const base64String = btoa(
                                String.fromCharCode(...new Uint32Array((items.image.data.data)))
                            )
                            return (
                                <div className='flex-shrink-0 w-[300px] h-[350px] bg-black border border-8 border-white '>
                                    <img className=' w-full h-full object-cover' src={`data:image/jpeg;base64,${base64String}`} alt="" />
                                </div>
                            )
                        })}
                    </div>
                    <div className='mx-auto w-[1150px] flex justify-center items-center h-auto gap-3 mt-10'>
                        <h1 onClick={handleNextImage} className=' bg-black px-2 py-2 text-2xl text-white'><AiOutlineLeft /></h1>
                        <h1 onClick={handlePrevImage} className='bg-black px-2 py-2 text-white text-2xl'><AiOutlineRight /></h1>
                    </div>
                </div>
            </div>
        )
    }
    return (
        <div className=' mt-10 w-full h-auto'>
            <h1 className='my-text text-gray-400 text-center text-2xl'>adventure awaits</h1>
            <div className='w-full min-h-screen h-auto bg-cover bg-fixed' style={{ backgroundImage: `url(${map})` }}>
                <div className=' py-5 flex flex-col justify-center gap-5'>
                    {ads.map((items) => {
                        const base64String = btoa(
                            String.fromCharCode(...new Uint32Array((items.image.data.data)))
                        )
                        return (

                            <div className=' w-80 h-96 bg-black mx-auto rounded-3xl border border-4 border-white'>
                                    <img className=' w-full h-full object-cover rounded-3xl' src={`data:image/jpeg;base64,${base64String}`} alt="" />
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default Adventure