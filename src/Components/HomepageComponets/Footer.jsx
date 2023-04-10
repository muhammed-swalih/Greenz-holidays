import React from 'react'
import { useMediaQuery } from '@react-hook/media-query'
import parachute from '../../greenz webp assets/parachute1.webp'
import phone from '../../greenz webp assets/phone logo.webp'
import mail from '../../greenz webp assets/mail icon.webp'
import {FaFacebook , FaTwitter , FaInstagram , FaLinkedin} from 'react-icons/fa'
function Footer() {
    const isMedium  = useMediaQuery('(min-width : 1024px)')
    if(isMedium){
        return (
            <div className=' bg-[#151515] w-full min-h-80 h-auto  '>
                <div className=' bg-[#151515] w-full min-h-80 h-auto py-20 flex items-center'>

                <div className=' w-[1150px] flex gap-20 mx-auto h-60 '>
                    <div>
                        <img src={parachute} alt="" width={160} />
                    </div>
                    <div className=' flex flex-col gap-5'>
                        <div>
                            <h1 className=' my-text tracking-widest text-white'>about</h1>
                        </div>
                        <div className=' text-white'>
                            <h1>Home</h1>
                            <h1>Packages</h1>
                            <h1>About Us</h1>
                            <h1>Contact Us</h1>
                        </div>
                    </div>
                    <div className=' flex flex-col gap-5'>
                        <div>
                            <h1 className=' my-text tracking-widest text-white'>services</h1>
                        </div>
                        <div className=' text-white'>
                            <h1>Air Ticketing</h1>
                            <h1>Visiting Visa</h1>
                            <h1>Tour Packages</h1>
                            <h1>Hajj & umrah Services</h1>
                            <h1>Passport Services</h1>
                            <h1>Attestation</h1>
                            <h1>Emigration</h1>
                            <h1>Bus and train Tickets</h1>
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
                            <h1 className=' text-white text-xl'><FaFacebook/></h1>
                            <h1 className=' text-white text-xl'><FaTwitter/></h1>
                            <h1 className=' text-white text-xl'><FaInstagram/></h1>
                            <h1 className=' text-white text-xl'><FaLinkedin/></h1>
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
                        <h1 className=' uppercase text-gray-400 font-thin text-xs'>designed by</h1>
                        <h1 className=' uppercase text-xl text-white tracking-widest'>hexen</h1>
                    </div>
                </div>
            </div>
        )
    }
  return (
    <div>Footer</div>
  )
}

export default Footer