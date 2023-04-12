import React from 'react'
import { useMediaQuery } from '@react-hook/media-query'
import bg from '../../DESKTOP/packages/1.webp'
import { AiOutlineClockCircle } from 'react-icons/ai'
import { BsPencilFill } from 'react-icons/bs'
import { CgNotes } from 'react-icons/cg'
import {FaWhatsapp} from 'react-icons/fa'
import {BiPhoneCall} from 'react-icons/bi'
import { HiMail} from 'react-icons/hi'
import '../styles/shade.css'
import Footer from '../HomepageComponets/Footer'
function SinglePackage() {
    const isMedium = useMediaQuery('(min-width : 1024px)')
    if (isMedium) {
        return (
            <div className=' w-full min-h-screen h-auto'>
                <div className=' w-full min-h-80 h-96 bg-center bg-black  bg-cover ' style={{ backgroundImage: `url(${bg})` }}>
                    <div className=' w-full h-96 bg-gradient-to-t from-gray-900  '>
                        <div className=' w-[1150px] h-96 mx-auto flex items-end pb-5 '>
                            <div className=' flex flex-col '>
                                <h1 className=' my-text tracking-widest text-white text-5xl'>iceland</h1>
                                <div className='flex gap-2'>
                                    <h1 className='text-4xl text-white'><AiOutlineClockCircle /></h1>
                                    <h1 className=' uppercase text-white mt-1 '>8 days 7 nights </h1>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
                <div className=' w-[1150px] min-h-80 h-auto mt-10 mx-auto flex justify-between pb-10'>
                    <div className=' flex flex-col gap-5'>
                        <div className=' flex gap-2'>
                            <h1 className=' text-blue-800 text-2xl'><CgNotes /></h1>
                            <h1 className=' text-blue-800 font-semibold uppercase'>overview</h1>
                        </div>
                        <hr className=' border border-1 border-gray-300 '/>
                        <div>
                            <h1 className=' w-[600px] text-black text-sm font-semibold'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unc five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</h1>
                        </div>
                    </div>
                    <div className=' flex flex-col gap-3'>
                        <div className=' px-5 pt-5  w-[350px] h-[300px] bg-[#4D5BDA] flex flex-col gap-4 mt-[-80px] relative shadow-md'>
                            <div>
                                <h1 className=' text-white font-bold text-xl uppercase'>highlights</h1>
                            </div>
                            <div className=' ml-5 text-white font-semibold'>
                                <ul className=' list-disc text-sm'>
                                    <li>Krabi Isand Stay</li>
                                    <li>stay Home Stay Safe</li>
                                    <li>Surfing</li>
                                    <li>Riding</li>
                                    <li>Krabi Isand Stay</li>
                                </ul>
                            </div> 
                            <div className=' w-[400px] top-48 left-[-23px] h-20 bg-green-500 absolute '>
                                <div className=' flex gap-2 justify-center items-center h-full'>
                                    <h1 className=' text-white text-3xl'><FaWhatsapp/></h1>
                                    <h1 className='text-white text-xl font-semibold'>Contact on WhatsApp</h1>
                                </div>
                            </div>                           
                        </div>
                        <div className=' w-[350px] h-[200px] bg-[#4D5BDA] px-5 pt-5'>
                            <div>
                                <h1 className='text-white text-xl font-semibold'>Get a Question ?</h1>
                                <h1 className=' w-[250px] text-sm text-white'>Do not hesitage to give us a call. We are an expert team and we are happy to talk to you.</h1>
                            </div>
                            <div className=' mt-5'>
                                <div className=' flex gap-3'>
                                    <h1 className=' text-white text-3xl'><BiPhoneCall/></h1>
                                    <h1 className=' text-white font-semibold'>91 12365667890</h1>
                                </div>
                                <div className=' flex gap-3'>
                                    <h1 className=' text-white text-3xl'><HiMail/></h1>
                                    <h1 className=' text-white font-semibold'>darkweb@gmail.com</h1>
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

export default SinglePackage