import React, { useEffect, useState } from 'react'
import { useMediaQuery } from '@react-hook/media-query'
import bg from '../../DESKTOP/packages/1.webp'
import { AiOutlineClockCircle } from 'react-icons/ai'
import { BsPencilFill } from 'react-icons/bs'
import { CgNotes } from 'react-icons/cg'
import { FaWhatsapp } from 'react-icons/fa'
import { BiPhoneCall } from 'react-icons/bi'
import { HiMail } from 'react-icons/hi'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import '../styles/shade.css'
import Footer from '../HomepageComponets/Footer'
import Navbar from '../Navbar'
function SinglePackage() {
    const { id } = useParams()
    const [details, setDetails] = useState([])
    const [base, setBase] = useState()

    const getDetails = () => {
        axios(`https://greenz-api.onrender.com/packages/getpackages/${id}`)
            .then(response => {
                setDetails(response.data)
                const base64String = btoa(
                    String.fromCharCode(...new Uint32Array((response.data.image.data.data)))
                )
                setBase(base64String)
            })
            .catch(error => console.error(error));
    }
    useEffect(() => {
        getDetails();
        console.log(base);
        window.scrollTo(0, 0)
    }, [])
    const isMedium = useMediaQuery('(min-width : 1024px)')
    if (isMedium) {
        return (
            <div className=' w-full min-h-screen h-auto'>
                <div className=' w-full min-h-80 h-96 bg-center bg-black  bg-cover ' style={{ backgroundImage: `url(${`data:image/jpeg;base64,${base}`})` }}>
                    <div className=' w-full h-96 bg-gradient-to-t from-gray-900  '>
                        <div className=' w-[1150px] h-96 mx-auto flex items-end pb-5 '>
                            <div className=' flex flex-col '>
                                <h1 className=' my-text tracking-widest text-white text-5xl'>{details ? details.place : ""}</h1>
                                <div className='flex gap-2'>
                                    <h1 className='text-4xl text-white'><AiOutlineClockCircle /></h1>
                                    <h1 className=' uppercase text-white mt-1 '>{details ? details.days : ""}</h1>
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
                        <hr className=' border border-1 border-gray-300 ' />
                        <div>
                            <h1 className=' w-[600px] text-black text-sm font-semibold'>{details ? details.description : ""}</h1>
                        </div>
                    </div>
                    <div className=' flex flex-col gap-3'>
                        <div className=' px-5 pt-5  w-[350px] h-[300px] bg-[#4D5BDA] flex flex-col gap-4 mt-[-80px] relative shadow-md'>
                            <div>
                                <h1 className=' text-white font-bold text-xl uppercase'>highlights</h1>
                            </div>
                            <div className=' ml-5 text-white font-semibold'>
                                <ul className=' list-disc text-sm'>
                                    {details && details.highlight1 && <li>{details ? details.highlight1 : "nothing"}</li>}
                                    {details && details.highlight2 && <li>{details ? details.highlight2 : "nothing"}</li>}
                                    {details && details.highlight3 && <li>{details ? details.highlight3 : "nothing"}</li>}
                                    {details && details.highlight4 && <li>{details ? details.highlight4 : "nothing"}</li>}
                                    {details && details.highlight5 && <li>{details ? details.highlight5 : "nothing"}</li>}
                                    {details && details.highlight6 && <li>{details ? details.highlight6 : "nothing"}</li>}
                                </ul>
                            </div>
                            <div className=' w-[400px] top-48 left-[-23px] h-20 bg-green-500 absolute '>
                                <div className=' flex gap-2 justify-center items-center h-full'>
                                    <h1 className=' text-white text-3xl'><FaWhatsapp /></h1>
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
                                    <h1 className=' text-white text-3xl'><BiPhoneCall /></h1>
                                    <h1 className=' text-white font-semibold'>91 12365667890</h1>
                                </div>
                                <div className=' flex gap-3'>
                                    <h1 className=' text-white text-3xl'><HiMail /></h1>
                                    <h1 className=' text-white font-semibold'>darkweb@gmail.com</h1>
                                </div>
                            </div>

                        </div>

                    </div>
                </div>
                <Footer />

            </div>
        )
    }
    return (
        <div className=' w-full '>
            <Navbar />
            <div className=' relative w-full h-60 bg-cover ' style={{ backgroundImage: `url(${`data:image/jpeg;base64,${base}`})` }}>
                <div className='w-full h-60 bg-gradient-to-t from-gray-900'>

                    <div className=' w-80 h-20 mx-auto absolute top-[160px] left-7 '>
                        <h1 className=' my-text text-white text-2xl tracking-widest'>{details ? details.place : ""}</h1>
                        <div className=' flex gap-2 '>
                            <h1 className=' text-white text-3xl '><AiOutlineClockCircle /></h1>
                            <h1 className=' uppercase text-xl text-white tracking-wider'>{details ? details.days : ""}</h1>
                        </div>
                    </div>
                </div>
            </div>

            <div className=' w-full px-5'>
                <div className=' bg-blue-500 rounded-lg mt-5 w-full min-h-32 h-auto px-5 py-3 flex justify-between gap-5'>
                    <div>
                        <div className=' flex gap-2 items-center'>
                            <h1 className=' text-white text-2xl'><BsPencilFill /></h1>
                            <h1 className=' uppercase text-white text-2xl'>highlights</h1>
                        </div>
                        <div className=' text-white mt-5 px-5'>
                            <ul className=' list-disc text-sm'>
                                {details && details.highlight1 && <li>{details ? details.highlight1 : "nothing"}</li>}
                                {details && details.highlight2 && <li>{details ? details.highlight2 : "nothing"}</li>}
                                {details && details.highlight3 && <li>{details ? details.highlight3 : "nothing"}</li>}
                                {details && details.highlight4 && <li>{details ? details.highlight4 : "nothing"}</li>}
                                {details && details.highlight5 && <li>{details ? details.highlight5 : "nothing"}</li>}
                                {details && details.highlight6 && <li>{details ? details.highlight6 : "nothing"}</li>}
                            </ul>
                        </div>
                    </div>
                    <div className=' w-36 h-auto bg-green-500 py-5 px-5 rounded-lg shadow-lg '>
                        <div className=' flex gap-2 flex-col items-center justify-center w-full h-full '>
                            <h1 className='text-white text-3xl'><FaWhatsapp/></h1>
                            <h1 className='font-semibold text-center text-sm text-white'>Contact on Whatsapp </h1>
                        </div>
                    </div>
                </div>
            </div>
            <div className=' mt-7 px-5'>
                <div className=' flex gap-2 items-center'>
                    <h1 className=' text-blue-500 text-4xl'><CgNotes /></h1>
                    <h1 className=' uppercase text-3xl text font-semibold text-blue-500'>overview</h1>
                </div>
                <hr className=' border border-1 border-gray-700 w-full mt-5' />
                <div className=' mt-5'>
                    <h1 className='text-black text-sm'>{details ? details.description : ""}</h1>
                </div>

            </div>
            <div className='px-5 my-5'>
                <div className=' rounded-lg w-full min-h-60 h-auto px-4 bg-blue-500 py-3 '>
                    <div className=' text-white flex flex-col gap-2'>
                        <h1 className=' font-semibold text-2xl'>Get a Question?</h1>
                        <h1 className=' text-sm w-60'>Do not hesitate to give us a call. We are an expert team and we are happy to talk to you.</h1>
                    </div>
                    <div className='items-center flex gap-3 mt-5'>
                        <h1 className=' text-white text-3xl'><BiPhoneCall/></h1>
                        <h1 className=' text-white font-semibold'>91 1234567890</h1>
                    </div>
                    <div className='items-center flex gap-3 mt-5'>
                        <h1 className=' text-white text-3xl'><HiMail/></h1>
                        <h1 className=' text-white font-semibold'>darkweb@gmail.com</h1>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default SinglePackage