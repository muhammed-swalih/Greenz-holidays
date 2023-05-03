import React from 'react'
import { useMediaQuery } from '@react-hook/media-query'
import parachute from '../../greenz webp assets/parachute-bg-img.webp'
import parachuteOne from '../../greenz webp assets/parachute1.webp'
import parachuteTwo from '../../greenz webp assets/parachute3.webp'
import adventure from '../../greenz webp assets/adventure.webp'
import saveMoney from '../../greenz webp assets/coins icons.webp'
import mermmories from '../../greenz webp assets/camera icon.webp'
import earth from '../../greenz webp assets/earth.webp'
function Offer() {
    const isMedium = useMediaQuery('(min-width : 1024px)')
    if (isMedium) {
        return (
            <div className=' pt-20 pb-10 flex gap-20 w-[1250px] min-h-60 h-auto  mx-auto my-font '>
                <div className=' w-[400px] h-[550px] rounded-2xl relative shadow-2xl shadow-black'>
                    <img className=' w-full h-full object-cover rounded-2xl' src={parachute} alt="" />
                    <img className='absolute top-[-30px] left-10' src={parachuteOne} alt="" width={180} />
                    <img className=' absolute top-60 left-[350px]' src={parachuteTwo} alt="" width={80} />
                </div>
                <div className=' flex flex-col gap-5 '>
                    <div className=' flex items-center '>
                        <div className=''>
                            <h1 className=' my-font text-4xl uppercase font-bold'>what we offer</h1>
                            <h1 className=' mt-2 w-[700px] text-sm font-semibold uppercase'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a  </h1>
                        </div>
                    </div>
                    <div className=' flex flex-col ml-5 mt-5 gap-10'>
                        <div className=' flex gap-10'>
                            <div className=' flex flex-col gap-3'>
                                <img className=' mx-auto' src={earth} alt="" width={100} />
                                <h1 className=' text-center font-bold'>500 Destinations</h1>
                                <h1 className=' w-[300px] text-sm text-center font-semibold'>Lorem Ipsum is simply typesetting industry. Lorem Ipsum</h1>
                            </div>
                            <div className=' flex flex-col gap-3'>
                                <img className=' mx-auto' src={adventure} alt="" width={100} />
                                <h1 className=' text-center font-bold'>Adventure</h1>
                                <h1 className=' w-[300px] text-sm text-center font-semibold'>Lorem Ipsum is simply typesetting industry. Lorem Ipsum</h1>
                            </div>
                        </div>
                        <div className=' flex gap-10'>
                            <div className=' flex flex-col gap-3'>
                                <img className=' mx-auto' src={saveMoney} alt="" width={100} />
                                <h1 className=' text-center font-bold'>Save money</h1>
                                <h1 className=' w-[300px] text-sm text-center font-semibold'>Lorem Ipsum is simply typesetting industry. Lorem Ipsum</h1>
                            </div>
                            <div className=' flex flex-col gap-3'>
                                <img className=' mx-auto' src={mermmories} alt="" width={100} />
                                <h1 className=' text-center font-bold'>Memories</h1>
                                <h1 className=' w-[300px] text-sm text-center font-semibold'>Lorem Ipsum is simply typesetting industry. Lorem Ipsum</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
    return (
        <div className=' w-full  h-auto mt-32 bg-fixed'>
            <div className=''>
                <h1 className=' text-center my-text text-4xl text-gray-800 w-80 mx-auto tracking-wider'>what we offer</h1>
            </div>
        
            <div className=' flex flex-col mt-10 gap-5'>
                <div className=' flex justify-start'>
                    <div className=' flex justify-center items-center px-3 w-[330px] h-32 bg-gray-800 shadow-xl shadow-gray-700 '>
                        <div className='flex items-center w-full gap-5'>
                            <img src={earth} alt="" width={100} />
                            <div className=' flex flex-col'>
                                <h1 className=' my-font text-xl font-semibold text-center uppercase  text-white tracking-wider'>500 destinations</h1>
                                <h1 className=' text-white text-xs text-center my-font'>Lorem ipsum is simmplhy  </h1>
                            </div>
                        </div>
                    </div>
                </div>
                <div className=' flex justify-end'>
                    <div className=' flex justify-center items-center px-3 w-[330px] h-32 bg-gray-800 shadow-xl shadow-gray-700 '>
                        <div className='flex items-center w-full gap-5'>
                            <img src={adventure} alt="" width={100} />
                            <div className=' flex flex-col'>
                                <h1 className=' my-font text-xl font-semibold text-center uppercase  text-white tracking-wider'>adventure</h1>
                                <h1 className=' text-white text-xs text-center my-font'>Lorem ipsum is simmplhy  </h1>
                            </div>
                        </div>
                    </div>
                </div>
                <div className=' flex justify-start'>
                    <div className=' flex justify-center items-center px-3 w-[330px] h-32 bg-gray-800  shadow-xl shadow-gray-700'>
                        <div className='flex items-center w-full gap-5'>
                            <img src={saveMoney} alt="" width={100} />
                            <div className=' flex flex-col'>
                                <h1 className=' my-font text-xl font-semibold text-center uppercase  text-white tracking-wider'>save money</h1>
                                <h1 className=' text-white text-xs text-center my-font'>Lorem ipsum is simmplhy  </h1>
                            </div>
                        </div>
                    </div>
                </div>
                <div className=' flex justify-end'>
                    <div className=' flex justify-center items-center px-3 w-[330px] h-32 bg-gray-800  shadow-xl shadow-gray-700'>
                        <div className='flex items-center w-full gap-5'>
                            <img src={mermmories} alt="" width={100} />
                            <div className=' flex flex-col'>
                                <h1 className=' my-font text-xl font-semibold text-center uppercase  text-white tracking-wider'>memories</h1>
                                <h1 className=' text-white text-xs text-center my-font'>Lorem ipsum is simmplhy  </h1>
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
    )
}

export default Offer