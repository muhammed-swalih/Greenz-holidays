import React from 'react'
import logo from '../../mobile Assets/HOMEPAGE/flygreenz~1.webp'
import introbg from '../../greenz webp assets/trainbg.webp'
import popular from '../../greenz webp assets/parachute-bg-img.webp'
import mobileBg from '../../mobile Assets/HOMEPAGE/BG.svg'
import { useMediaQuery } from '@react-hook/media-query'
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai'
import { CgMenuRight } from 'react-icons/cg'
import scrollImage from '../../mobile Assets/HOMEPAGE/German-Culture-and-Traditions.jpg'
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
            <div className=' w-full h-auto bg-black flex  items-center'>

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
                    <div className=' flex items-center w-5/6 min-h-screen h-auto mx-auto'>
                        <div className=' mt-[-180px]'>
                            <div className='text-white  w-[1250px] min-h-60 h-60  mx-auto'>
                                <h1 className=' my-text uppercase  text-5xl tracking-wider w-[800px]'>You can give us a
                                    tour to Remember
                                    forever</h1>
                                <div className=' flex justify-between w-[1250px] mt-4 gap-0 h-60 '>
                                    <div className=' text-white w-[500px]'>
                                        <h1>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not ed in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</h1>
                                    </div>

                                    <div id='popular' className=' flex overflow-scroll scroll-smooth gap-3  w-[500px] h-[300px] rounded-2xl '>
                                        <div className='relative flex-shrink-0 w-[230px] h-[300px] bg-black rounded-2xl'>
                                            <img className='  w-full h-full object-cover rounded-2xl' src={popular} alt="" />
                                            <h1 className=' absolute text-white top-36 left-3 my-text'>Mirssa</h1>
                                            <h1 className=' absolute text-white top-44 text-[12px] left-3'>Lorem Ipsum is simply dummy text of the printing and typesetting isum.</h1>
                                        </div>
                                        <div className='relative flex-shrink-0 w-[230px] h-[300px] bg-black rounded-2xl'>
                                            <img className='  w-full h-full object-cover rounded-2xl' src={popular} alt="" />
                                            <h1 className=' absolute text-white top-36 left-3 my-text'>Mirssa</h1>
                                            <h1 className=' absolute text-white top-44 text-[12px] left-3'>Lorem Ipsum is simply dummy text of the printing and typesetting isum.</h1>
                                        </div>
                                        <div className='relative flex-shrink-0 w-[230px] h-[300px] bg-black rounded-2xl'>
                                            <img className='  w-full h-full object-cover rounded-2xl' src={popular} alt="" />
                                            <h1 className=' absolute text-white top-36 left-3 my-text'>Mirssa</h1>
                                            <h1 className=' absolute text-white top-44 text-[12px] left-3'>Lorem Ipsum is simply dummy text of the printing and typesetting isum.</h1>
                                        </div>
                                        <div className='relative flex-shrink-0 w-[230px] h-[300px]] bg-black rounded-2xl'>
                                            <img className='  w-full h-full object-cover rounded-2xl' src={popular} alt="" />
                                            <h1 className=' absolute text-white top-36 left-3 my-text'>Mirssa</h1>
                                            <h1 className=' absolute text-white top-44 text-[12px] left-3'>Lorem Ipsum is simply dummy text of the printing and typesetting isum.</h1>
                                        </div>
                                    </div>

                                </div>
                                <div className='flex justify-between w-28 ml-[800px] mt-20'>
                                    <h1 onClick={handleNextImage} className=' border border-1 border-white px-3 py-3 rounded-full'><AiOutlineLeft /></h1>
                                    <h1 onClick={handlePrevImage} className=' border border-1 border-white px-3 py-3 rounded-full'><AiOutlineRight /></h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
    return (
        <div className=' w-full min-h-screen h-auto bg-cover pb-10 bg-fixed ' style={{ backgroundImage: `url(${mobileBg})` }}>
            <div className='w-full h-auto flex justify-between px-5 py-5'>
                <div>
                    <img src={logo} alt="logo" width={100} />
                </div>
                <div>
                    <h1 className=' text-5xl'><CgMenuRight /></h1>
                </div>
            </div>
            <div className='  mx-auto h-auto pt-10 '>
                <div className=' mx-auto'>
                    <h1 className=' tracking-widest w-96  mx-auto  my-text text-white text-xl uppercase text-center'>you can give us a tour to remember forever</h1>
                </div>
                <div className=' w-80 mx-auto h-auto pt-5'>
                    <div>
                        <h1 className='text-center text-white text-xs uppercase'> It has survived not ed in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</h1>
                    </div>
                </div>
                <div className='w-full overflow-x-auto  whitespace-nowrap mt-10 h-auto flex justify-center items-center gap-5'>
                    <div className='flex-shrink-0 w-52 h-72 rounded-2xl border border-1 border-white bg-black' style={{ justifyContent: 'flex-start' }}>
                        <img className='w-full h-full object-cover rounded-2xl' src={scrollImage} alt="" />
                    </div>
                    <div className='flex-shrink-0 w-52 h-72 rounded-2xl border border-1 border-white bg-black' style={{ justifyContent: 'center' }}>
                        <img className='w-full h-full object-cover rounded-2xl' src={scrollImage} alt="" />
                    </div>
                    <div className='flex-shrink-0 w-52 h-72 rounded-2xl border border-1 border-white bg-black' style={{ justifyContent: 'flex-end' }}>
                        <img className='w-full h-full object-cover rounded-2xl' src={scrollImage} alt="" />
                    </div>
                </div>

            </div>
        </div>


    )
}

export default Intro