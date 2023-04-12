import React from 'react'
import { useMediaQuery } from '@react-hook/media-query'
import bg from '../../DESKTOP/passport_service_bg.webp'
import { FaWhatsapp } from 'react-icons/fa'
import { BiPhoneCall } from 'react-icons/bi'
import { HiMail } from 'react-icons/hi'
import Footer from '../HomepageComponets/Footer'
function Passport() {
    const isMedium = useMediaQuery('(min-width  : 1024px)')
    if (isMedium) {
        return (
            <div className=' w-full min-h-screen h-auto'>
                <div className=' w-full h-60 bg-cover bg-black ' style={{ backgroundImage: `url(${bg})` }}>
                    <div className=' w-full h-60 bg-gradient-to-t from-gray-900'>
                        <div className=' w-[1150px] h-full mx-auto pb-5 flex items-end'>
                            <h1 className='my-text text-white text-4xl tracking-widest'>Passport service</h1>
                        </div>
                    </div>
                </div>
                <div className=' w-[1150px] h-auto flex mx-auto justify-between my-10'>
                    <div className=''>
                        <h1 className=' uppercase font-bold text-black text-lg'>passport service</h1>
                        <h1 className=' text-black text-sm w-[550px] font-medium mt-5'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                            Why do we use it?
                            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected </h1>
                    </div>
                    <div>
                        <div className='bg-green-500 w-96 h-20 flex justify-center items-center'>
                            <div className=' flex gap-2'>
                                <h1 className=' text-white text-3xl'><FaWhatsapp /></h1>
                                <h1 className=' text-white text-2xl font-semibold'>Contact on Whatsapp</h1>
                            </div>
                        </div>
                        <div className=' mt-5 w-96 h-[250px] bg-[#4D5BDA] px-5 pt-5'>
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
                <Footer/>
            </div>
        )
    }
    return (
        <div>VisitingVisa</div>
    )
}

export default Passport