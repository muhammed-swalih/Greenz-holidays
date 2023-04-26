import React from 'react'
import msg from '../../greenz webp assets/mail icon.webp'
import phone from '../../greenz webp assets/phone logo.webp'
import couples from '../../DESKTOP/Contact us/family_photo.webp'
import bg from '../../DESKTOP/Contact us/bg2.webp'
import cplbg from '../../DESKTOP/Contact us/map_bg.webp'
import Footer from '../HomepageComponets/Footer'
import location from '../../DESKTOP/Contact us/location_icon.webp'
import { useMediaQuery } from '@react-hook/media-query'
import Navbar from '../Navbar'
function Cotnact() {
    const isMedium = useMediaQuery('(min-width : 1024px)')
    if (isMedium) {
        return (
            <div className=' w-full min-h-screen h-auto'>
                <div className=' w-full h-60 bg-black bg-cover' style={{ backgroundImage: `url(${bg})` }}>
                    <div className=' w-[1150px] h-full mx-auto flex justify-center items-center'>
                        <h1 className=' my-text text-white tracking-widest text-4xl'>contact us</h1>
                    </div>
                </div>
                <div className=' w-full flex  h-auto'>
                    <div className=' w-1/2 h-auto bg-[#4D5BDA] flex justify-center  items-center py-10'>
                        <div className=' flex flex-col gap-20 justify-center items-center'>
                            <div className=' text-white'>
                                <h1 className=' text-4xl tracking-widest w-[200px] my-text'>get in touch</h1>
                                <h1 className=' w-[200px] uppercase'>
                                    We  love to hear from you. Our friendly team
                                    is always here to chat.
                                </h1>
                            </div>
                            <div className=''>
                                <div className=' flex gap-3'>
                                    <div>
                                        <img src={msg} alt="" width={50} />
                                    </div>
                                    <div>
                                        <h1 className=' text-white text-2xl font-semibold'>Chat to us</h1>
                                        <h1 className='text-white '>Our friendly team is here to help</h1>
                                        <div className=' mt-5 text-white font-semibold '>
                                            <h1>testone@gmail.com</h1>
                                            <h1>testone@gmail.com</h1>
                                            <h1>testone@gmail.com</h1>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className=''>
                                <div className=' flex gap-3'>
                                    <div>
                                        <img src={location} alt="" width={50} />
                                    </div>
                                    <div>
                                        <h1 className=' text-white text-2xl font-semibold'>Ofiice</h1>
                                        <h1 className='text-white '>Come Say hello at our HQ</h1>
                                        <div className=' mt-5 text-white font-semibold'>
                                            <h1 className=' w-[200px]'>
                                                Greenz Tours & Travels, Palara Building, First Floor, Perinthalmanna Road, Valanchery, Malappuram - 676552
                                            </h1>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className=''>
                                <div className=' flex gap-3'>
                                    <div>
                                        <img src={phone} alt="" width={50} />
                                    </div>
                                    <div>
                                        <h1 className=' text-white text-2xl font-semibold'>Phone</h1>
                                        <h1 className='text-white '>Mon-Fri 8pm to 5pm</h1>
                                        <div className=' mt-5 text-white font-semibold'>
                                            <h1 className=' w-[200px]'>
                                                <h1>+91 1234567890</h1>
                                                <h1>+91 1234567890</h1>
                                            </h1>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className=' w-1/2 h-auto min-h-80 bg-yellow-500 bg-cover' style={{ backgroundImage: `url(${cplbg})` }} >
                        <img className=' ml-[-80px]' src={couples} alt="" />
                    </div>
                </div>
                <Footer />
            </div>
        )
    }
    return (
        <div className=' w-full h-auto'>
            <Navbar />
            <div className=' w-full h-48 bg-cover flex justify-center items-center' style={{ backgroundImage: `url(${bg})` }} >
                <h1 className=' my-text text-4xl text-white tracking-wider'>contact us</h1>
            </div>
            <div className=' w-full h-auto bg-cover ' style={{ backgroundImage: `url(${cplbg})` }}>
                <div className=' mt-[-3px] w-full h-auto py-10 px-5 bg-blue-500 opacity-70'>
                    <div className=' flex flex-col gap-1'>
                        <h1 className=' my-text text-white tracking-widest text-xl'>get in touch</h1>
                        <h1 className=' text-white uppercase text-sm'>We  love to hear from you. Our friendly team
                            is always here to chat.</h1>
                    </div>

                    <div className=' mt-8 flex flex-col gap-5'>
                        <div className=' flex flex-col gap-1'>
                            <div className=' flex gap-2 items-center'>
                                <img src={phone} alt="" />
                                <h1 className=' text-white text-xl font-semibold'>Phone</h1>
                            </div>
                            <div className='ml-10 text-white'>
                                <h1>Mon-Fri 8pm to 5 pm</h1>
                                <h1>91 1234567890</h1>
                                <h1>91 1234567890</h1>
                            </div>
                        </div>
                        <div className=' flex flex-col gap-1'>
                            <div className=' flex gap-2 items-center'>
                                <img src={location} alt="" width={30}/>
                                <h1 className=' text-white text-xl font-semibold'>Office</h1>
                            </div>
                            <div className='ml-10 text-white'>
                                <h1 className=' mt-[-4px]'>Come Say Hello at our HQ</h1>
                                <h1 className=' mt-2'>Greenz Tours & Travels, Palara Building, first Floor, Perinthalmanna Road , Valanchery , Malappuram -676552</h1>
                            </div>
                        </div>
                        <div className=' flex flex-col gap-1'>
                            <div className=' flex gap-2 items-center'>
                                <img src={msg} alt="" width={30}/>
                                <h1 className=' text-white text-xl font-semibold'>chat to us</h1>
                            </div>
                            <div className='ml-10 text-white'>
                                <h1 className=' mt-[-4px]'>Our friendly team is here to help</h1>
                                <h1 className=' mt-2'>testone@gmail.com</h1>
                                <h1 className=' mt-2'>testone@gmail.com</h1>
                                <h1 className=' mt-2'>testone@gmail.com</h1>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default Cotnact