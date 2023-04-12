import React from 'react'
import packageBg from '../../DESKTOP/packages/bg.webp'
import imgOne from '../../DESKTOP/packages/1.webp'
import imgTwo from '../../DESKTOP/packages/2.webp'
import imgThree from '../../DESKTOP/packages/3.webp'
import imgFour from '../../DESKTOP/packages/4.webp'
import imgFive from '../../DESKTOP/packages/5.webp'
import imgSix from '../../DESKTOP/packages/6.webp'
import imgSeven from '../../DESKTOP/packages/7.webp'
import imgEight from '../../DESKTOP/packages/8.webp'
import Footer from '../HomepageComponets/Footer'
import { useMediaQuery } from '@react-hook/media-query'
function Packages() {
    const isMedium = useMediaQuery('(min-width : 1024px)')
    if(isMedium){
        return(
            <div className=' w-full min-h-screen h-auto'>
            <div className=' w-full h-60 bg-black bg-cover pb-2 flex justify-center items-end' style={{ backgroundImage: `url(${packageBg})` }}>
                <div className=' w-[1250px] min-h-32 h-auto '>
                    <h1 className=' my-text text-5xl tracking-widest text-white'>packages</h1>
                    <h1 className=' uppercase text-white text-xs font-semibold w-[400px]'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley</h1>
                </div>
            </div>
            <div className=' w-[1250px] h-auto mx-auto my-10'>
                <div className=' flex flex-wrap gap-10 justify-center'>
                <div className=' flex-col w-60 h-auto bg-white shadow-xl'>
                        <div className=' w-full h-40 bg-white'>
                            <img className=' w-full h-full object-cover' src={imgOne} alt="" />
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
                <div className=' flex-col w-60 h-auto bg-white shadow-xl'>
                        <div className=' w-full h-40 '>
                            <img className=' w-full h-full object-cover' src={imgTwo} alt="" />
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
                <div className=' flex-col w-60 h-auto bg-white shadow-xl'>
                        <div className=' w-full h-40'>
                            <img className=' w-full h-full object-cover' src={imgThree} alt="" />
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
                <div className=' flex-col w-60 h-auto bg-white shadow-xl'>
                        <div className=' w-full h-40 '>
                            <img className=' w-full h-full object-cover' src={imgFour} alt="" />
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
                <div className=' flex-col w-60 h-auto bg-white shadow-xl'>
                        <div className=' w-full h-40 '>
                            <img className=' w-full h-full object-cover' src={imgFive} alt="" />
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
                <div className=' flex-col w-60 h-auto bg-white shadow-xl'>
                        <div className=' w-full h-40 '>
                            <img className=' w-full h-full object-cover' src={imgSix} alt="" />
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
                <div className=' flex-col w-60 h-auto bg-white shadow-xl'>
                        <div className=' w-full h-40 '>
                            <img className=' w-full h-full object-cover' src={imgSeven} alt="" />
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
                <div className=' flex-col w-60 h-auto bg-white shadow-xl'>
                        <div className=' w-full h-40 '>
                            <img className=' w-full h-full object-cover' src={imgEight} alt="" />
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
            <Footer/>
        </div>
        )
    }
    return (
        <div>
            
        </div>
    )
}

export default Packages