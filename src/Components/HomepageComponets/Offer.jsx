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
    if(isMedium){
        return (
            <div className=' pt-20 pb-10 flex gap-20 w-[1250px] min-h-60 h-auto  mx-auto '>
                <div className=' w-[400px] h-[650px] rounded-2xl relative'>
                    <img className=' w-full h-full object-cover rounded-2xl' src={parachute} alt="" />
                    <img className='absolute top-[-30px] left-10' src={parachuteOne} alt="" width={180} />
                    <img className=' absolute top-60 left-[350px]' src={parachuteTwo} alt="" width={80} />
                </div>  
                <div className=' flex flex-col gap-5 '>
                    <div>
                        <h1 className=' my-text text-4xl'>what we offer</h1>
                        <h1 className=' mt-2 w-[500px] font-semibold uppercase'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </h1>
                    </div>
                    <div className=' flex flex-col ml-5 mt-5 gap-10'>
                        <div className=' flex gap-10'>
                            <div className=' flex flex-col gap-3'>
                                <img className=' mx-auto' src={earth} alt="" width={100} />
                                <h1 className=' text-center font-bold'>500 Destinations</h1>
                                <h1 className=' w-[300px] text-center'>Lorem Ipsum is simply typesetting industry. Lorem Ipsum</h1>
                            </div>
                            <div className=' flex flex-col gap-3'>
                                <img className=' mx-auto' src={adventure} alt="" width={100} />
                                <h1 className=' text-center font-bold'>Adventure</h1>
                                <h1 className=' w-[300px] text-center'>Lorem Ipsum is simply typesetting industry. Lorem Ipsum</h1>
                            </div>
                        </div>
                        <div className=' flex gap-10'>
                            <div className=' flex flex-col gap-3'>
                                <img className=' mx-auto' src={saveMoney} alt="" width={100} />
                                <h1 className=' text-center font-bold'>Save money</h1>
                                <h1 className=' w-[300px] text-center'>Lorem Ipsum is simply typesetting industry. Lorem Ipsum</h1>
                            </div>
                            <div className=' flex flex-col gap-3'>
                                <img className=' mx-auto' src={mermmories} alt="" width={100} />
                                <h1 className=' text-center font-bold'>Memories</h1>
                                <h1 className=' w-[300px] text-center'>Lorem Ipsum is simply typesetting industry. Lorem Ipsum</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
  return (
    <div className=' w-full  h-auto my-10 bg-fixed'>
        <div className=''>
            <h1 className=' text-center my-text text-4xl w-80 mx-auto tracking-wider'>what we offer</h1>
        </div>
        <div className=' w-[370px] h-auto mx-auto px-5  mt-16 rounded-3xl relative'>
            <img className=' rounded-3xl h-full w-full object-cover' src={parachute} alt="" />
            <img className='absolute top-[-30px] left-10' src={parachuteOne} alt="" width={150} />
            <img className='absolute top-16 left-[300px]' src={parachuteTwo} alt="" width={60} />
        </div>
        <div className=' flex flex-col mt-10 gap-5'>
            <div className=' flex justify-start'>
                <div className=' flex justify-center items-center px-3 w-[330px] h-32 bg-blue-600 rounded-r-3xl'>
                    <div className='flex justify-between w-full gap-5'>
                        <div>
                            <img src={earth} alt="" width={100} />
                        </div>
                        <div className=' flex flex-col items-center'>
                            <h1 className=' my-text text-white tracking-wider'>500 destinations</h1>
                            <h1 className=' text-white text-sm text-center'>Lorem ipsum is simmplhy typimng industty lorem ipsum </h1>
                        </div>
                    </div>
                </div>
            </div>
            <div className=' flex justify-end'>
                <div className=' flex justify-center items-center px-3 w-[330px] h-32 rounded-l-3xl bg-blue-600'>
                    <div className='flex justify-between w-full gap-5'>
                        <div>
                            <img src={adventure} alt="" width={150} />
                        </div>
                        <div className=' flex flex-col items-center'>
                            <h1 className=' my-text text-white tracking-wider'>adventure</h1>
                            <h1 className=' text-white text-sm text-center'>Lorem ipsum is simmplhy typimng industty lorem ipsum </h1>
                        </div>
                    </div>
                </div>
            </div>
            <div className=' flex justify-start'>
                <div className=' flex justify-center items-center px-3 w-[330px] h-32 rounded-r-3xl bg-blue-600'>
                    <div className='flex justify-between w-full gap-5'>
                        <div>
                            <img src={saveMoney} alt="" width={150} />
                        </div>
                        <div className=' flex flex-col items-center'>
                            <h1 className=' my-text text-white tracking-wider'>save money</h1>
                            <h1 className=' text-white text-sm text-center'>Lorem ipsum is simmplhy typimng industty lorem ipsum </h1>
                        </div>
                    </div>
                </div>
            </div>
            <div className=' flex justify-end'>
                <div className=' flex justify-center items-center px-3 w-[330px] h-32 rounded-l-3xl bg-blue-600'>
                    <div className='flex justify-between w-full gap-5'>
                        <div>
                            <img src={mermmories} alt="" width={200} />
                        </div>
                        <div className=' flex flex-col items-center'>
                            <h1 className=' my-text text-white tracking-wider'>memories</h1>
                            <h1 className=' text-white text-sm text-center'>Lorem ipsum is simmplhy typimng industty lorem ipsum </h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Offer