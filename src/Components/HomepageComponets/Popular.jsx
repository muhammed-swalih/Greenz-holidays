import React, { useContext, useEffect, useState } from 'react'
import popular from '../../greenz webp assets/popular.webp'
import popularImage from '../../greenz webp assets/trainbg.webp'
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai'
import 'typeface-poppins'
import { useMediaQuery } from '@react-hook/media-query'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import DataContext from '../../DataContext'
import {BiTimeFive} from 'react-icons/bi'
import bg from '../../FINSLE ASSETS/TOURBG.webp'
function Popular() {
    const navigate = useNavigate();
    const navigateDeal = (id) => {
        navigate(`/packagedetails/${id}`)
    }
    // const [packages, setPackages] = useState([]);

    const { packages } = useContext(DataContext)
    // const getPackages = async () => {    //     const response = await axios.get('http://localhost:3001/packages/getpackages')
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
    const MhandleNextImage = () => {
        document.getElementById('mobilePackages').scrollLeft -= 400
    }
    const MhandlePrevImage = () => {
        document.getElementById('mobilePackages').scrollLeft += 400
    }
    const isMedium = useMediaQuery('(min-width : 1024px)')
    if (isMedium) {
        return (
            <div className=' my-font w-full h-auto bg-cover pt-20 pb-10 px-20' style={{ backgroundImage: `url(${popular})` }}>
                <div className=' mb-5  w-[1440px] mx-auto'>
                    <h1 className=' text-4xl tracking-widest my-text text-white'>popular tour packages</h1>
                </div>
                <div className=' flex items-center mx-auto justify-center '>
                    <div id='packages' className=' flex items-center w-[1440px] min-h-60 h-auto gap-4  mx-auto overflow-scroll scroll-smooth'>
                        {packages.map((items) => {
                            const base64String = btoa(
                                String.fromCharCode(...new Uint32Array((items.image.data.data)))
                            )
                            return (

                                <div className=' flex-shrik-0 flex-col w-96 h-auto bg-white'>
                                    <div className=' w-full h-56 bg-yellow-300'>
                                        <img className=' w-full h-full object-cover' src={`data:image/jpeg;base64,${base64String}`} alt="" />
                                    </div>
                                    <div className='  mt-3 mx-3 my-3 py-2 h-28  overflow-hidden 
                                    '>
                                        <h1 className=' my-text text-black text-2xl text-center'>{items ? items.place : ""}</h1>
                                        <h1 className=' text-[15px] text-gray-800 font-semibold w-80 mx-auto text-center '>{items ? items.description : ""}</h1>
                                    </div>
                                    <div className='  w-full bg-[#EAEAEA] min-h-10 h-auto py-2 px-3 flex justify-between'>
                                        <div className=' flex flex-col gap-1'>
                                            <h1 className='mx-2 text-lg font-medium text-gray-800 '>{items ? items.days : ""}</h1>
                                            <h1 className='mx-2 text-xl font-semibold'>Rs {items ? items.price : ""}</h1>
                                        </div>
                                        <div onClick={() => navigateDeal(items._id)} className=' mx-2  flex items-center'>
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
        <div className=' w-full h-auto my-font mt-5 bg-cover py-2 pb-20'>
            <div className=' pb-10'>
                <h1 className=' my-font uppercase font-light text-2xl   text-white pt-10 tracking-widest text-center'> tour packages</h1>
            </div>
            <div id='mobilePackages' className=' overflow-scroll scroll-smooth flex gap-20 w-80 mx-auto '>
                {packages.map((items) => {
                    const base64String = btoa(
                        String.fromCharCode(...new Uint32Array((items.image.data.data)))
                    )
                    return (

                        <div className='flex-shrink-0 flex flex-col w-auto h-auto py-5 bg-fixed'>
                            <div className=' h-72 w-80 bg-black'>
                                <img className='h-full w-full  object-cover' src={`data:image/jpeg;base64,${base64String}`} alt="" />
                            </div>
                            <div className=' w-80 h-auto flex flex-col justify-center bg-[#E7E7E7] shadow-xl '>
                                <div className='flex flex-col gap-3 w-full pt-1 pb-1 h-28 overflow-hidden'>
                                    <h1 className='my-font uppercase font-extrabold mx-auto text-3xl'>{items ? items.place : ""}</h1>
                                    <h1 className=' text-sm w-60 text-center mx-auto font-semibold'>{items ? items.description : ""}</h1>
                                </div>
                                <div className=' flex justify-between items-center px-2 pb-3 mt-10 mb-5'>
                                    <div className=' flex gap-2 items-center'>
                                        <h1 className=' text-4xl text-gray-500'><BiTimeFive/></h1>
                                        <h1 className=' font-medium text-gray-700 w-20'>{items ? items.days : ""}</h1>
                                    </div>
                                    <div className=''>
                                        <h1 className='text-2xl font-medium'>Rs {items ? items.price : ""}</h1>
                                    </div>
                                </div>
                                <div className=' w-full'>
                                    <div onClick={()=> navigateDeal(items._id)} className=' flex justify-center'><h1 className=' py-2 rounded-t-xl w-40 text-center my-text bg-gray-800 text-white tracking-widest'>view Deal</h1></div>
                                </div>
                            </div>

                        </div>
                    )
                })}
             

            </div>
            <div className='flex justify-center gap-3 w-32 h-auto pt-5 mx-auto'>
                    <h1 onClick={MhandleNextImage} className=' text-black bg-white px-3  py-3'><AiOutlineLeft /></h1>
                    <h1 onClick={MhandlePrevImage} className=' text-black bg-white px-3  py-3'><AiOutlineRight /></h1>
                </div>

        </div>
    )
}

export default Popular