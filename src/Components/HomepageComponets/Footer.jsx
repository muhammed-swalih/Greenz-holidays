import React from 'react'
import { useMediaQuery } from '@react-hook/media-query'
import parachute from '../../greenz webp assets/parachute1.webp'
import phone from '../../greenz webp assets/phone logo.webp'
import mail from '../../greenz webp assets/mail icon.webp'
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa'
import { HiOfficeBuilding, HiLocationMarker, HiMail } from 'react-icons/hi'
import { BsFillBuildingsFill } from 'react-icons/bs'
import { TbPhoneCall } from 'react-icons/tb'
import 'typeface-poppins'
import { useNavigate } from 'react-router-dom'
import logo from '../../mobile Assets/HOMEPAGE/flygreenz~1.webp'
function Footer() {
    const navigate = useNavigate()

    const navigateHome = () => {
        navigate('/')
    }
    const aboutus = () => {
        navigate('/aboutus')
    }
    const contact = () => {
        navigate('/contact')
    }
    const AirTicketing = () => {
        navigate('/airticketing')
    }
    const visitingVisa = () => {
        navigate('/visitingvisa')
    }
    const packages = () => {
        navigate('/packages')
    }
    const visaStamping = () => {
        navigate('/visastamping')
    }
    const hajjumrah = () => {
        navigate('/hajjandumrah')
    }
    const passport = () => {
        navigate('/passport')
    }
    const attestation = () => {
        navigate('/attestation')
    }
    const emigration = () => {
        navigate('/emigration')
    }
    const tickets = () => {
        navigate('/tickets')
    }
    const isMedium = useMediaQuery('(min-width : 1024px)')
    if (isMedium) {
        return (
            <div className=' bg-[#151515] w-full min-h-80 h-auto my-font '>
                <div className=' bg-[#151515] w-full min-h-80 h-auto py-20 flex items-center'>

                    <div className=' w-[1150px] flex gap-20 mx-auto h-60 '>
                        <div>
                            <img src={logo} alt="" width={200} />
                        </div>
                        <div className=' flex flex-col gap-5'>
                            <div>
                                <h1 className=' my-text tracking-widest text-white'>about</h1>
                            </div>
                            <div className=' text-white'>
                                <h1 onClick={navigateHome}>Home</h1>
                                <h1 onClick={packages}>Packages</h1>
                                <h1 onClick={aboutus}>About Us</h1>
                                <h1 onClick={contact}>Contact Us</h1>
                            </div>
                        </div>
                        <div className=' flex flex-col gap-5'>
                            <div>
                                <h1 className=' my-text tracking-widest text-white'>services</h1>
                            </div>
                            <div className=' text-white'>
                                <h1 onClick={AirTicketing}>Air Ticketing</h1>
                                <h1 onClick={visitingVisa}>Visiting Visa</h1>
                                <h1 onClick={packages}>Tour Packages</h1>
                                <h1 onClick={hajjumrah}>Hajj & umrah Services</h1>
                                <h1 onClick={passport}>Passport Services</h1>
                                <h1 onClick={attestation}>Attestation</h1>
                                <h1 onClick={emigration}>Emigration</h1>
                                <h1 onClick={tickets}>Bus and train Tickets</h1>
                                <h1 onClick={visaStamping}>Visa stamping</h1>
                            </div>
                        </div>
                        <div className=' flex flex-col gap-5'>
                            <div>
                                <h1 className=' my-text tracking-widest text-white'>Headquarters</h1>
                            </div>
                            <div className=' text-white'>
                                <h1 className=' w-[300px]'>FLY GREENZ HOLIDAYS NMS Tower, Firs Floor,Kozhikode Road,Near Icici Bank,Valanchery,Kearala,India-676552</h1>
                            </div>
                            <div className=' flex gap-3'>
                                <img src={phone} alt="" width={50} />
                                <div className='  text-white'>
                                    <h1>9846075785</h1>
                                    <h1>9846075786</h1>
                                </div>
                            </div>
                            <div className=' flex gap-3'>
                                <img src={mail} alt="" width={30} />
                                <h1 className=' text-white'>flygreenzholidays@gmail.com</h1>
                            </div>
                            <div className=' flex gap-4'>
                                <h1 className=' text-white text-xl'><FaFacebook /></h1>
                                <h1 className=' text-white text-xl'><FaTwitter /></h1>
                                <h1 className=' text-white text-xl'><FaInstagram /></h1>
                                <h1 className=' text-white text-xl'><FaLinkedin /></h1>
                            </div>
                        </div>
                    </div>
                </div>
                <div className=' pt-16'>

                    <hr className='border border-1 border-slate-800 w-[1300px] mx-auto' />
                </div>
                <div className=' w-[1300px] mx-auto flex justify-between mt-1 pb-10'>
                    <h1 className=' text-sm text-gray-400'>Privacy Policy</h1>
                    <div className=' flex flex-col gap-1'>
                        <h1 className=' uppercase text-gray-400 font-thin text-xs'>developed by</h1>
                        <h1 className=' uppercase text-2xl text-white tracking-widest'>hexen</h1>
                    </div>
                </div>
            </div>
        )
    }
    return (
        <div className=' w-full h-auto bg-black px-5 py-2 my-font'>

            <div className=' mb-5'>
                <div className='flex justify-center mt-10 mb-1'>
                    <img src={logo} alt="" width={150} />
                </div>
                <div className=' flex gap-4 items-center mt-10'>
                    <h1 className=' text-gray-800 text-5xl'><BsFillBuildingsFill /></h1>
                    <h1 className='my-text text-white text-xl tracking-wider'>headquarters</h1>
                </div>

                <div className=' flex flex-col gap-5 my-5'>
                    <div className=' flex gap-5'>
                        <h1 className=' text-white text-3xl'><HiLocationMarker /></h1>
                        <h1 className=' text-white'>FLY GREENZ HOLIDAYS NMS Tower, Firs Floor,Kozhikode Road,Near Icici Bank,Valanchery,Kearala,India-676552</h1>
                    </div>
                    <div className=' flex gap-5'>
                        <h1 className=' text-white text-3xl'><HiLocationMarker /></h1>
                        <h1 className=' text-white'>Palara Building, 1st Floor,Perinthalmanna Road, Valanchery, Malappuram 676 552</h1>
                    </div>
                    <div className=' flex gap-5'>
                        <h1 className=' text-white text-3xl'><TbPhoneCall /></h1>
                        <div>
                            <h1 className=' text-white'>9846075785 </h1>
                            <h1 className=' text-white'>9846075786 </h1>
                        </div>
                    </div>
                    <div className=' flex gap-5'>
                        <h1 className=' text-white text-3xl'><HiMail /></h1>
                        <div>
                            <h1 className=' text-white'>flygreenzholidays@gmail.com</h1>
                        </div>
                    </div>


                </div>
            </div>
            <div className='flex flex-col gap-4 justify-center items-center mt-14'>

                <div className=''>
                    <h1 className=' my-text text-white text-3xl tracking-wider'>services</h1>
                    <hr className=' border border-1 border-gray-400 w-36 mx-auto' />
                </div>
                <div className='flex flex-wrap justify-center items-center  text-gray-400 '>
                    <h1 onClick={AirTicketing} className=' border-l mt-2   px-2 border-gray-500'>Air Ticketing</h1>
                    <h1 onClick={visaStamping} className=' border-l mt-2   px-2 border-gray-500'>Visiting Visa</h1>
                    <h1 onClick={packages} className=' border-l mt-2   px-2 border-gray-500'>Tour Packages</h1>
                    <h1 onClick={visaStamping} className=' border-l mt-2   px-2 border-gray-500'>Visa Stamping</h1>
                    <h1 onClick={hajjumrah} className=' border-l mt-2   px-2 border-gray-500'>Hajj & Umrah serivce</h1>
                    <h1 onClick={passport} className=' border-l mt-2   px-2 border-gray-500'>Passport Service</h1>
                    <h1 onClick={attestation} className=' border-l mt-2   px-2 border-gray-500'>Attestation</h1>
                    <h1 onClick={emigration} className=' border-l mt-2   px-2 border-gray-500'>Emigration</h1>
                    <h1 onClick={tickets} className=' border-l mt-2   px-2 border-gray-500'>Bus & train Tickets</h1>
                </div>
                <div className=' flex gap-5 mt-5'>
                    <h1 className=' text-white text-3xl'><FaFacebook /></h1>
                    <h1 className=' text-white text-3xl'><FaTwitter /></h1>
                    <h1 className=' text-white text-3xl'><FaInstagram /></h1>
                    <h1 className=' text-white text-3xl'><FaLinkedin /></h1>
                </div>
                <div className=' flex gap-5'>
                    <h1 className=' text-white'>Privacy policy</h1>
                </div>
                <hr className=' border border-1 border-gray-500 w-80 mb-1' />
                <h1 className=' uppercase text-gray-400 tracking-widest text-center mb-2'>hexen</h1>

            </div>

        </div>
    )
}

export default Footer