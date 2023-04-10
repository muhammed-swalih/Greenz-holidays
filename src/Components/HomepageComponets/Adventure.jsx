import React from 'react'
import { useMediaQuery } from '@react-hook/media-query'
import map from '../../greenz webp assets/map-bg-img.webp'
import adOne from '../../greenz webp assets/ad1.webp'
import adTwo from '../../greenz webp assets/ad2.webp'
import adThree from '../../greenz webp assets/ad3.webp'
function Adventure() {
    const isMedium = useMediaQuery('(min-width : 1024px)')
    if (isMedium) {
        return (
            <div className=' pt-20'>
                <h1 className=' text-center my-text text-6xl text-gray-300'>adventure awaits</h1>
                <div className=' w-full min-h-60 h-auto py-10 bg-black bg-cover' style={{ backgroundImage: `url(${map})` }}>
                    <div className=' flex justify-center items-center gap-10'>
                        <div className=' w-[300px] h-[350px] bg-black border border-8 border-white'>
                            <img className=' w-full h-full object-cover' src={adOne} alt="" />
                        </div>
                        <div className=' w-[300px] h-[350px] bg-black border border-8 border-white'>
                            <img className=' w-full h-full object-cover' src={adTwo} alt="" />

                        </div>
                        <div className=' w-[300px] h-[350px] bg-black border border-8 border-white'>
                            <img className=' w-full h-full object-cover' src={adThree} alt="" />

                        </div>
                    </div>
                </div>
            </div>
        )
    }
    return (
        <div>Adventure</div>
    )
}

export default Adventure