import React from 'react'
import introbg from '../../greenz webp assets/trainbg.webp'
import popular from '../../greenz webp assets/parachute-bg-img.webp'
import { useMediaQuery } from '@react-hook/media-query'
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai'
import '../styles/scrollbar.css'
function Intro() {
    const handleNextImage = () => {
        document.getElementById('popular').scrollLeft -= 500
    }
    const handlePrevImage = () => {
        document.getElementById('popular').scrollLeft += 500
    }
    const isMedium = useMediaQuery('(min-width : 1024px)')
    if (isMedium) {
        return (
            <div className=' w-full h-auto bg-black'>

                <div className=' w-full min-h-screen h-auto bg-cover opacity-80 bg-black ' style={{ backgroundImage: `url(${introbg})` }}>
                    <div className=' w-full h-auto flex justify-between text-white px-5 pt-5 '>
                        <div className=' font-semibold'>Greenz Holidays</div>
                        <div>
                            <ul className=' flex '>
                                <li className=' ml-3 text-sm font-light '>Home</li>
                                <li className=' ml-3 text-sm font-light '>services</li>
                                <li className=' ml-3 text-sm font-light '>Tour Packages</li>
                                <li className=' ml-3 text-sm font-light '>About</li>
                            </ul>
                        </div>
                        <div>
                            <h1>hello</h1>
                        </div>
                    </div>
                    <hr className=' border border-1 border-gray-400 mx-4 mt-2' />
                    <div className='text-white  w-[1150px] min-h-60 h-60 mt-32 mx-auto'>
                        <h1 className=' my-text uppercase  text-5xl tracking-wider w-[800px]'>You can give us a
                            tour to Remember
                            forever</h1>
                        <div className=' flex justify-between w-[1250px] mt-4 gap-80 h-60 '>
                            <div className=' text-white w-[500px]'>
                                <h1>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not ed in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</h1>
                            </div>

                            <div id='popular' className=' flex overflow-scroll scroll-smooth gap-3  w-[500px] rounded-2xl '>
                                <div className='relative flex-shrink-0 w-[200px] h-[300px] bg-black rounded-2xl'>
                                    <img className=' opacity-70 w-full h-full object-cover rounded-2xl' src={popular} alt="" />
                                    <h1 className=' absolute text-white top-36 left-3 my-text'>Mirssa</h1>
                                    <h1 className=' absolute text-white top-44 text-[12px] left-3'>Lorem Ipsum is simply dummy text of the printing and typesetting isum.</h1>
                                </div>
                                <div className='relative flex-shrink-0 w-[200px] h-[300px] bg-black rounded-2xl'>
                                    <img className=' opacity-70 w-full h-full object-cover rounded-2xl' src={popular} alt="" />
                                    <h1 className=' absolute text-white top-36 left-3 my-text'>Mirssa</h1>
                                    <h1 className=' absolute text-white top-44 text-[12px] left-3'>Lorem Ipsum is simply dummy text of the printing and typesetting isum.</h1>
                                </div>
                                <div className='relative flex-shrink-0 w-[200px] h-[300px] bg-black rounded-2xl'>
                                    <img className=' opacity-70 w-full h-full object-cover rounded-2xl' src={popular} alt="" />
                                    <h1 className=' absolute text-white top-36 left-3 my-text'>Mirssa</h1>
                                    <h1 className=' absolute text-white top-44 text-[12px] left-3'>Lorem Ipsum is simply dummy text of the printing and typesetting isum.</h1>
                                </div>
                                <div className='relative flex-shrink-0 w-[200px] h-[300px] bg-black rounded-2xl'>
                                    <img className=' opacity-70 w-full h-full object-cover rounded-2xl' src={popular} alt="" />
                                    <h1 className=' absolute text-white top-36 left-3 my-text'>Mirssa</h1>
                                    <h1 className=' absolute text-white top-44 text-[12px] left-3'>Lorem Ipsum is simply dummy text of the printing and typesetting isum.</h1>
                                </div>
                            </div>

                        </div>
                        <div className='flex justify-between w-28 ml-[800px] mt-5'>
                            <h1 onClick={handleNextImage} className=' border border-1 border-white px-3 py-3 rounded-full'><AiOutlineLeft /></h1>
                            <h1 onClick={handlePrevImage} className=' border border-1 border-white px-3 py-3 rounded-full'><AiOutlineRight /></h1>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
    return (
        <div className=''>

        </div>
    )
}

export default Intro