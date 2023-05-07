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
import deskbg from '../../FINSLE ASSETS/tourdeskbg.webp'
function Popular() {
    const navigate = useNavigate();
    const navigateDeal = (id) => {
        navigate(`/packagedetails/${id}`)
    }
    const navigatePackages = ()=>{
        navigate('/packages')
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
            <div className=' my-font w-full h-auto bg-cover py-10 px-20 bg-fixed' style={{ backgroundImage: `url(${deskbg})` }}>
                <div className=' mb-10  w-[1260px] mx-auto'>
                    <h1 className=' text-4xl tracking-widest font-semibold mt-20 my-font uppercase text-white'>popular tour packages</h1>
                    <h1 onClick={navigatePackages} className=' text-white  '>view all</h1>
                </div>
                <div className=' flex items-center mx-auto justify-center '>
                    <div id='packages' className=' flex items-center w-[1260px] min-h-60 h-auto gap-5  mx-auto overflow-scroll scroll-smooth'>
                        {packages.map((items) => {
                            const base64String = btoa(
                                String.fromCharCode(...new Uint32Array((items.image.data.data)))
                            )
                            return (

                                <div className=' flex-shrik-0 flex-col w-[300px] h-auto bg-white'>
                                    <div className=' w-full h-[210px] bg-yellow-300'>
                                        <img className=' w-full h-full object-cover' src={`data:image/jpeg;base64,${base64String}`} alt="" />
                                    </div>
                                    <div className='  mt-3 mx-3 my-3  py-3 h-28  overflow-hidden 
                                    '>
                                        <h1 className=' my-font uppercase font-bold text-black text-2xl '>{items ? items.place : ""}</h1>
                                        <h1 className=' text-[14px] text-gray-800 font-medium w-80 mx-auto  '>{items ? items.description : ""}</h1>
                                    </div>
                                    <div className='  w-full bg-[#EAEAEA] min-h-10 h-auto py-2 px-3 flex justify-between items-center'>
                                        <div className=' flex flex-col gap-1'>
                                            <h1 className='mx-2 text-md font-medium text-gray-800 '>{items ? items.days : ""}</h1>
                                            <h1 className='mx-2 text-xl font-semibold'>Rs {items ? items.price : ""}</h1>
                                        </div>
                                        <div onClick={() => navigateDeal(items._id)} className=' mx-2  flex justify-center w-24 h-10 rounded-full bg-[#4D5BDA] items-center'>
                                            <h1 className='  rounded-full text-white text-xs  '>View Deal</h1>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>

                </div>
                <div className='flex justify-center gap-7 w-32 h-auto mt-10 mx-auto'>
                    <h1 onClick={handleNextImage} className=' text-black bg-white px-3 py-3 text-xl'><AiOutlineLeft /></h1>
                    <h1 onClick={handlePrevImage} className=' text-black bg-white px-3 py-3 text-xl'><AiOutlineRight /></h1>
                </div>
            </div>
        )
    }
    return (
        <div className=' w-full h-auto my-font mt-5 bg-cover py-2 pb-20 'style={{backgroundImage : `url(${bg})`  , backgroundSize : 'cover'}}>
            <div className=' pb-10 w-80 mx-auto'>
                <h1 className=' my-font uppercase font-medium text-3xl   text-white pt-10 tracking-widest '> tour packages</h1>
                <h1 onClick={navigatePackages} className=' text-white font-extralight mt-1 text-sm'>view all</h1>
            </div>
            <div id='mobilePackages' className=' overflow-scroll scroll-smooth flex gap-20 w-80 mx-auto '>
                {packages.map((items) => {
                    const base64String = btoa(
                        String.fromCharCode(...new Uint32Array((items.image.data.data)))
                    )
                    return (

                        <div className='flex-shrink-0 flex flex-col w-auto h-auto py-5 bg-fixed'>
                            <div className=' h-60 w-80 bg-black'>
                                <img className=' h-full w-full object-cover'  src={`data:image/jpeg;base64,${base64String}`} alt="" />
                            </div>
                            <div className=' w-80 h-auto flex flex-col justify-center bg-[#E7E7E7] shadow-xl '>
                                <div className='flex flex-col gap- pl-5  pt-4 pb-1 h-28 overflow-hidden  w-72'>
                                    <h1 className='my-font uppercase font-extrabold  text-3xl'>{items ? items.place : ""}</h1>
                                    <h1 className=' text-xs font-medium w-72 '>{items ? items.description : ""}</h1>
                                </div>
                                <div className=' flex justify-between items-center px-2 pb-3 mt-7 mb-5'>
                                    <div className=' flex gap-2  mt-4 '>
                                        <h1 className=' text-2xl text-gray-500'><BiTimeFive/></h1>
                                        <h1 className=' font-medium text-gray-700 '>{items ? items.days : ""}</h1>
                                    </div>
                                    <div className=''>
                                        <h1 className=' flex justify-end text-xs'>From</h1>
                                        <h1 className='text-xl font-medium'>Rs {items ? items.price : ""}</h1>
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