import React, { useContext, useEffect, useState } from 'react'
import popular from '../../greenz webp assets/popular.webp'
import popularImage from '../../greenz webp assets/trainbg.webp'
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai'
import 'typeface-poppins'
import { useMediaQuery } from '@react-hook/media-query'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import DataContext from '../../DataContext'
function Popular() {
    const navigate = useNavigate();
    const navigateDeal = (id) => {
        navigate(`/packagedetails/${id}`)
    }
    // const [packages, setPackages] = useState([]);

    const { packages } = useContext(DataContext)
    // const getPackages = async () => {
    //     const response = await axios.get('http://localhost:3001/packages/getpackages')
    //     setPackages(response.data)
    //     console.log(response.data);
    // }
    useEffect(() => {
        // getPackages();
    }, [])
    const handleNextImage = () => {
        document.getElementById('packages').scrollLeft -= 500
    }
    const handlePrevImage = () => {
        document.getElementById('packages').scrollLeft += 500
    }
    const isMedium = useMediaQuery('(min-width : 1024px)')
    if (isMedium) {
        return (
            <div className=' w-full h-auto bg-cover pt-20 pb-10 px-20' style={{ backgroundImage: `url(${popular})` }}>
                <div className=' mb-5  w-[1250px] mx-auto'>
                    <h1 className=' text-2xl tracking-widest my-text text-white'>popular tour packages</h1>
                </div>
                <div className=' flex items-center mx-auto justify-center '>
                    <div id='packages' className=' flex items-center w-[1250px] min-h-60 h-auto gap-4  mx-auto overflow-scroll scroll-smooth'>
                        {packages.map((items) => {
                            const base64String = btoa(
                                String.fromCharCode(...new Uint32Array((items.image.data.data)))
                            )
                            return (

                                <div className=' flex-shrik-0 flex-col w-60 h-auto bg-white'>
                                    <div className=' w-full h-40 bg-yellow-300'>
                                        <img className=' w-full h-full object-cover' src={`data:image/jpeg;base64,${base64String}`} alt="" />
                                    </div>
                                    <div className='  mt-3 mx-3 my-3 py-2 h-28  overflow-hidden'>
                                        <h1 className=' my-text text-black text-lg'>{items ? items.place : ""}</h1>
                                        <h1 className=' text-[12px] font-semibold'>{items ? items.description : ""}</h1>
                                    </div>
                                    <div className='  w-60 bg-[#EAEAEA] min-h-10 py-1 flex justify-between'>
                                        <div>
                                            <h1 className='mx-2 text-xs font-semibold'>{items ? items.days : ""}</h1>
                                            <h1 className='mx-2 text-lg font-bold'>Rs {items ? items.price : ""}</h1>
                                        </div>
                                        <div onClick={() => navigateDeal(items._id)} className=' mx-2 mt-2'>
                                            <h1 className=' px-2 py-1 rounded-full text-white font-semibold bg-[#4D5BDA]'>View Deal</h1>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>

                </div>
                <div className='flex justify-center gap-3 w-32 h-auto pt-5 mx-auto'>
                    <h1 onClick={handleNextImage} className=' text-black bg-white px-3 py-3'><AiOutlineLeft /></h1>
                    <h1 onClick={handlePrevImage} className=' text-black bg-white px-3 py-3'><AiOutlineRight /></h1>
                </div>
            </div>
        )
    }
    return (
        <div className=' w-full h-auto  mt-5 bg-fixed'>
            <div className='w-96 mx-auto '>
                <h1 className=' my-text text-xl w-60 mx-5 '>popular tour packages</h1>
            </div>
            <div className='mt-1 overflow-scroll scroll-smooth flex gap-5 px-5'>
                {packages.map((items) => {
                    const base64String = btoa(
                        String.fromCharCode(...new Uint32Array((items.image.data.data)))
                    )
                    return (

                        <div className='flex-shrink-0 flex flex-col w-auto h-auto py-5 bg-fixed'>
                            <div className='w-80 h-44 bg-black'>
                                <img className=' h-full w-full object-cover' src={`data:image/jpeg;base64,${base64String}`} alt="" />
                            </div>
                            <div className=' w-80 h-auto flex flex-col justify-center bg-[#E7E7E7] shadow-xl'>
                                <div className='flex flex-col gap-3 w-full pt-1 pb-1 h-28 overflow-hidden'>
                                    <h1 className='my-text mx-auto text-3xl'>{items ? items.place : ""}</h1>
                                    <h1 className=' text-sm w-60 text-center mx-auto font-semibold'>he industry's standn unknown printer took a galley of nd more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</h1>
                                </div>
                                <div className=' flex justify-between items-center px-2 pb-3'>
                                    <div className=''>
                                        <h1 className=' font-medium'>{items ? items.days : ""}</h1>
                                    </div>
                                    <div className=''>
                                        <h1 className='text-2xl font-medium'>Rs {items ? items.price : ""}</h1>
                                    </div>
                                </div>
                                <div className=' w-full'>
                                    <div onClick={()=> navigateDeal(items._id)} className=' flex justify-center'><h1 className=' py-2 rounded-t-xl w-40 text-center my-text bg-blue-500 text-white tracking-widest'>view Deal</h1></div>
                                </div>
                            </div>

                        </div>
                    )
                })}
             

            </div>

        </div>
    )
}

export default Popular