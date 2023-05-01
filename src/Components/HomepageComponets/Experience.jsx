import React from 'react'
import { useMediaQuery } from '@react-hook/media-query'
import booking from '../../FINSLE ASSETS/booking.webp'
import costomers from '../../FINSLE ASSETS/customers.webp'
import price from '../../FINSLE ASSETS/price.webp'
function Experience() {
    const isMedium = useMediaQuery('(min-width : 1024px)')
    if (isMedium) {
        return (
            <div className=' w-full h-auto py-10 bg-white gap-16 flex items-center justify-center my-font '>
                <div className=' w-[450px] h-auto px-5  bg-[#4D5BDA] py-5 opacity-90'>
                    <div className=' w-full h-full flex flex-col gap-2 '>
                        <div className=' flex items-center my-auto'>
                            <img src={booking} alt="" width={100} />
                        </div>
                        <div className=' flex items-center my-auto'>
                            <h1 className=' my-font font-bold text-white tracking-widest text-2xl uppercase'>Fast Booking</h1>
                        </div>
                        <div className=' mt-[-15px]'>
                            <h1 className=' text-white text-md font-extralight tracking-widest'>Lorem ipsum is simply dummy</h1>
                        </div>
                    </div>
                </div>
                <div className=' w-[450px] h-auto px-5  bg-[#4D5BDA] py-5 opacity-90'>
                    <div className=' w-full h-full flex flex-col gap-2 '>
                        <div className=' flex items-center my-auto'>
                            <img src={costomers} alt="" width={100} />
                        </div>
                        <div className=' flex items-center my-auto'>
                            <h1 className=' my-font font-bold text-white tracking-widest text-2xl uppercase'>Greate customers</h1>
                        </div>
                        <div className=' mt-[-15px]'>
                            <h1 className=' text-white text-md font-extralight tracking-widest'>Lorem ipsum is simply dummy</h1>
                        </div>
                    </div>
                </div>
                <div className=' w-[450px] h-auto px-5  bg-[#4D5BDA] py-5 opacity-90'>
                    <div className=' w-full h-full flex flex-col gap-2 '>
                        <div className=' flex items-center my-auto'>
                            <img src={price} alt="" width={100} />
                        </div>
                        <div className=' flex items-center my-auto'>
                            <h1 className=' my-font font-bold text-white tracking-widest text-2xl uppercase'>best price guarantee</h1>
                        </div>
                        <div className=' mt-[-15px]'>
                            <h1 className=' text-white text-md font-extralight tracking-widest'>Lorem ipsum is simply dummy</h1>
                        </div>
                    </div>
                </div>
             
            </div>
        )
    }
    return (
        <div className=' py-10 px-5 my-font'>
            <div className=' flex flex-col gap-5'>
                <div className=' w-full h-auto bg-gray-800 px-5 py-5 '>
                    <div className=' flex flex-col h-full'>
                        <div className=' flex  my-auto'>
                            <img src={price} alt="" width={50} />
                        </div>
                        <div className=' flex my-auto'>
                            <h1 className='text-white tracking-wider w-full text-xl font-bold uppercase'>Best price guarantee</h1>
                        </div>
                        <div className=''>
                            <h1 className=' text-gray-300'>lorem ipsum is simply dummy</h1>
                        </div>

                    </div>
                </div>
                <div className=' w-full h-auto bg-gray-800 px-5 py-5 '>
                    <div className=' flex flex-col h-full'>
                        <div className=' flex  my-auto'>
                            <img src={costomers} alt="" width={50} />
                        </div>
                        <div className=' flex my-auto'>
                            <h1 className='text-white tracking-wider w-full text-xl font-bold uppercase'>great customers</h1>
                        </div>
                        <div className=''>
                            <h1 className=' text-gray-300'>lorem ipsum is simply dummy</h1>
                        </div>

                    </div>
                </div>
                <div className=' w-full h-auto bg-gray-800 px-5 py-5 '>
                    <div className=' flex flex-col h-full'>
                        <div className=' flex  my-auto'>
                            <img src={booking} alt="" width={50} />
                        </div>
                        <div className=' flex my-auto'>
                            <h1 className='text-white tracking-wider w-full text-xl font-bold uppercase'>fast booking</h1>
                        </div>
                        <div className=''>
                            <h1 className=' text-gray-300'>lorem ipsum is simply dummy</h1>
                        </div>

                    </div>
                </div>
               
            </div>
        </div>
  )
}

export default Experience