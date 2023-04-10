import React from 'react'
import popular from '../../greenz webp assets/popular.webp'
import popularImage from '../../greenz webp assets/trainbg.webp'
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai'
import 'typeface-poppins'
import { useMediaQuery } from '@react-hook/media-query'
function Popular() {
    
    const handleNextImage = () => {
        document.getElementById('packages').scrollLeft -= 500
    }
    const handlePrevImage = () => {
        document.getElementById('packages').scrollLeft += 500
    }
    const isMedium = useMediaQuery('(min-width : 1024px)')
    if(isMedium){
        return (
            <div className=' w-full h-[500px] bg-cover pt-20 px-20' style={{ backgroundImage: `url(${popular})` }}>
            <div  className=' flex items-center mx-auto justify-center '>
                <div id='packages' className=' flex items-center w-[1150px] min-h-60 h-auto gap-4  mx-auto overflow-scroll scroll-smooth'>
                    <div className=' flex-shrik-0 flex-col w-60 h-auto bg-white'>
                        <div className=' w-full h-40 bg-yellow-300'>
                            <img className=' w-full h-full object-cover' src={popularImage} alt="" />
                        </div>
                        <div className=' mt-3 mx-3 my-3 '>
                            <h1 className=' my-text text-black text-lg'>valanchery</h1>
                            <h1 className=' text-[12px] font-semibold'>Hello Guys, This is Travel Mobile App Design Hope you like it and feel free to leave comments and feedback. .Raed more..</h1>
                        </div>
                        <div className='  w-60 bg-[#EAEAEA] min-h-10 py-1 flex justify-between'>
                            <div>
                                <h1 className='mx-2 text-xs font-semibold'>4 Days/3 Nights</h1>
                                <h1 className='mx-2 text-lg font-bold'>Rs 3400</h1>
                            </div>
                            <div className=' mx-2 mt-2'>
                                <h1 className=' px-2 py-1 rounded-full text-white font-semibold bg-[#4D5BDA]'>View Deal</h1>
                            </div>
                        </div>
                    </div>
                    <div className=' flex-shrik-0 flex-col w-60 h-auto bg-white'>
                        <div className=' w-full h-40 bg-yellow-300'>
                            <img className=' w-full h-full object-cover' src={popularImage} alt="" />
                        </div>
                        <div className=' mt-3 mx-3 my-3 '>
                            <h1 className=' my-text text-black text-lg'>valanchery</h1>
                            <h1 className=' text-[12px] font-semibold'>Hello Guys, This is Travel Mobile App Design Hope you like it and feel free to leave comments and feedback. .Raed more..</h1>
                        </div>
                        <div className='  w-60 bg-[#EAEAEA] min-h-10 py-1 flex justify-between'>
                            <div>
                                <h1 className='mx-2 text-xs font-semibold'>4 Days/3 Nights</h1>
                                <h1 className='mx-2 text-lg font-bold'>Rs 3400</h1>
                            </div>
                            <div className=' mx-2 mt-2'>
                                <h1 className=' px-2 py-1 rounded-full text-white font-semibold bg-[#4D5BDA]'>View Deal</h1>
                            </div>
                        </div>
                    </div>
                    <div className=' flex-shrik-0 flex-col w-60 h-auto bg-white'>
                        <div className=' w-full h-40 bg-yellow-300'>
                            <img className=' w-full h-full object-cover' src={popularImage} alt="" />
                        </div>
                        <div className=' mt-3 mx-3 my-3 '>
                            <h1 className=' my-text text-black text-lg'>valanchery</h1>
                            <h1 className=' text-[12px] font-semibold'>Hello Guys, This is Travel Mobile App Design Hope you like it and feel free to leave comments and feedback. .Raed more..</h1>
                        </div>
                        <div className='  w-60 bg-[#EAEAEA] min-h-10 py-1 flex justify-between'>
                            <div>
                                <h1 className='mx-2 text-xs font-semibold'>4 Days/3 Nights</h1>
                                <h1 className='mx-2 text-lg font-bold'>Rs 3400</h1>
                            </div>
                            <div className=' mx-2 mt-2'>
                                <h1 className=' px-2 py-1 rounded-full text-white font-semibold bg-[#4D5BDA]'>View Deal</h1>
                            </div>
                        </div>
                    </div>
                    <div className=' flex-shrik-0 flex-col w-60 h-auto bg-white'>
                        <div className=' w-full h-40 bg-yellow-300'>
                            <img className=' w-full h-full object-cover' src={popularImage} alt="" />
                        </div>
                        <div className=' mt-3 mx-3 my-3 '>
                            <h1 className=' my-text text-black text-lg'>valanchery</h1>
                            <h1 className=' text-[12px] font-semibold'>Hello Guys, This is Travel Mobile App Design Hope you like it and feel free to leave comments and feedback. .Raed more..</h1>
                        </div>
                        <div className='  w-60 bg-[#EAEAEA] min-h-10 py-1 flex justify-between'>
                            <div>
                                <h1 className='mx-2 text-xs font-semibold'>4 Days/3 Nights</h1>
                                <h1 className='mx-2 text-lg font-bold'>Rs 3400</h1>
                            </div>
                            <div className=' mx-2 mt-2'>
                                <h1 className=' px-2 py-1 rounded-full text-white font-semibold bg-[#4D5BDA]'>View Deal</h1>
                            </div>
                        </div>
                    </div>
                    <div className=' flex-shrik-0 flex-col w-60 h-auto bg-white'>
                        <div className=' w-full h-40 bg-yellow-300'>
                            <img className=' w-full h-full object-cover' src={popularImage} alt="" />
                        </div>
                        <div className=' mt-3 mx-3 my-3 '>
                            <h1 className=' my-text text-black text-lg'>valanchery</h1>
                            <h1 className=' text-[12px] font-semibold'>Hello Guys, This is Travel Mobile App Design Hope you like it and feel free to leave comments and feedback. .Raed more..</h1>
                        </div>
                        <div className='  w-60 bg-[#EAEAEA] min-h-10 py-1 flex justify-between'>
                            <div>
                                <h1 className='mx-2 text-xs font-semibold'>4 Days/3 Nights</h1>
                                <h1 className='mx-2 text-lg font-bold'>Rs 3400</h1>
                            </div>
                            <div className=' mx-2 mt-2'>
                                <h1 className=' px-2 py-1 rounded-full text-white font-semibold bg-[#4D5BDA]'>View Deal</h1>
                            </div>
                        </div>
                    </div>
                    <div className=' flex-shrik-0 flex-col w-60 h-auto bg-white'>
                        <div className=' w-full h-40 bg-yellow-300'>
                            <img className=' w-full h-full object-cover' src={popularImage} alt="" />
                        </div>
                        <div className=' mt-3 mx-3 my-3 '>
                            <h1 className=' my-text text-black text-lg'>valanchery</h1>
                            <h1 className=' text-[12px] font-semibold'>Hello Guys, This is Travel Mobile App Design Hope you like it and feel free to leave comments and feedback. .Raed more..</h1>
                        </div>
                        <div className='  w-60 bg-[#EAEAEA] min-h-10 py-1 flex justify-between'>
                            <div>
                                <h1 className='mx-2 text-xs font-semibold'>4 Days/3 Nights</h1>
                                <h1 className='mx-2 text-lg font-bold'>Rs 3400</h1>
                            </div>
                            <div className=' mx-2 mt-2'>
                                <h1 className=' px-2 py-1 rounded-full text-white font-semibold bg-[#4D5BDA]'>View Deal</h1>
                            </div>
                        </div>
                    </div>
                </div>
               
            </div>
            <div className='flex justify-center gap-3 w-32 h-auto pt-5 mx-auto'>
                <h1 onClick={handleNextImage} className=' text-black bg-white px-3 py-3'><AiOutlineLeft/></h1>
                <h1 onClick={handlePrevImage} className=' text-black bg-white px-3 py-3'><AiOutlineRight/></h1>
            </div>
        </div>
        )
    }
    return (
    <div>

    </div>
    )
}

export default Popular