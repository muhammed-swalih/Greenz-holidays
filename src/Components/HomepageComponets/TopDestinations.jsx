import React from 'react'
import { useMediaQuery } from '@react-hook/media-query'
import parachute from '../../greenz webp assets/parachute1.webp'
import galleryImage from '../../greenz webp assets/popular.webp'
import imgOne from '../../DESKTOP/HOMEPAGE/TOP DESITINATION_1.webp'
import imgTwo from '../../DESKTOP/HOMEPAGE/TOP DESITINATION_2.webp'
import imgThree from '../../DESKTOP/HOMEPAGE/TOP DESITINATION_3.webp'
import imgFour from '../../DESKTOP/HOMEPAGE/TOP DESITINATION_4.webp'

function TopDestinations() {
    const isMedium = useMediaQuery('(min-width : 1024px)');
    if (isMedium) {
        return (
            <div className=' w-[1350px] px-20 mx-auto  min-h-60 h-auto py-20'>
                <div className=' flex flex-col '>
                    <div className=' flex justify-between'>
                        <div>
                            <h1 className=' my-text tracking-wider text-4xl'>top destination</h1>
                            <h1 className=' font-semibold mt-5 w-[800px] uppercase'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</h1>
                        </div>
                        <div>
                            <img src={parachute} alt="" width={300} />
                        </div>
                    </div>
                    <div className=' flex  gap-5 justify-center '>
                        <div className=' h-[525px]  rounded-2xl relative'>
                            <img className=' w-full h-full object-cover rounded-2xl' src={galleryImage} alt="" />
                            <h1 className=' absolute my-text top-[465px] left-3 text-3xl text-white tracking-widest'>Fary</h1>
                            <h1 className=' absolute my-text top-[495px] left-3 text-xs text-white tracking-widest'>waterfall</h1>
                        </div>
                        <div className=' flex flex-col gap-5'>
                            <div className=' flex justify-between gap-5'>
                                <div className=' w-[500px] h-[250px]  rounded-2xl relative '>
                                    <img className=' w-full h-full object-cover rounded-2xl' src={imgOne} alt="" />

                                    <h1 className=' absolute my-text top-[200px] left-3 text-3xl text-white tracking-widest'>maldives</h1>
                                    <h1 className=' absolute my-text top-[230px] left-3 text-xs text-white tracking-widest'>beach</h1>

                                </div>
                                <div className=' w-[250px] h-[250px] rounded-2xl  relative'>
                                    <img className=' w-full h-full object-cover rounded-2xl' src={imgTwo} alt="" />
                                    <h1 className=' absolute my-text top-[200px] left-3 text-3xl text-white tracking-widest'>Rio</h1>
                                    <h1 className=' absolute my-text top-[230px] left-3 text-xs text-white tracking-widest'>beach</h1>
                                </div>
                            </div>
                            <div className=' flex justify-between gap-5'>
                                <div className=' w-[400px] h-[250px]  rounded-2xl relative'>
                                    <img className=' w-full h-full object-cover rounded-2xl' src={imgThree} alt="" />
                                    <h1 className=' absolute my-text top-[200px] left-3 text-3xl text-white tracking-widest'>kashmir</h1>
                                    <h1 className=' absolute my-text top-[230px] left-3 text-xs text-white tracking-widest'>beach</h1>
                                </div>
                                <div className=' w-[350px] h-[250px] rounded-2xl  relative'>
                                    <img className=' w-full h-full object-cover rounded-2xl' src={imgFour} alt="" />
                                    <h1 className=' absolute my-text top-[200px] left-3 text-3xl text-white tracking-widest'>russia</h1>
                                    <h1 className=' absolute my-text top-[230px] left-3 text-xs text-white tracking-widest'>beach</h1>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        )
    }
    return (
        <div className=' w-full h-auto  my-10 px-5'>
            
            <div className=' flex flex-col gap-4 '>
                <div className=' flex justify-center gap-28  items-center'>
                    <h1 className=' my-text text-2xl w-32 '>top destination</h1>
                    <img src={parachute} alt="" width={100}/>
                </div>    
                <div className=' flex justify-center gap-4 '>
                    <div className=' w-36 h-auto rounded-2xl relative'>
                        <img className=' w-full h-full object-cover rounded-2xl' src={galleryImage} alt="" />
                        <h1 className=' absolute top-[245px] my-text text-white left-2 tracking-wider text-xl'>fary</h1>
                        <h1 className=' absolute top-[270px] my-text text-white text-xs tracking-wider left-2 '>waterfall</h1>
                    </div>
                    <div className=' flex flex-col gap-4 '>
                        <div className=' w-44 h-36  rounded-2xl relative'>
                            <img className=' w-full h-full object-cover rounded-2xl' src={imgOne} alt="" />
                            <h1 className=' absolute  text-white my-text left-2 text-xl top-[90px]'>maldives</h1>
                            <h1 className=' absolute text-white my-text left-2 text-xs top-[115px]'>beach</h1>

                        </div>
                        <div className=' w-44 h-36  rounded-2xl  relative'>
                            <img className=' w-full h-full object-cover rounded-2xl' src={imgTwo} alt="" />
                            <h1 className=' absolute  text-white my-text left-2 text-xl top-[90px]'>kashmir</h1>
                            <h1 className=' absolute text-white my-text left-2 text-xs top-[115px]'>beach</h1>
                        </div>
                    </div>
                </div>

                <div className=' flex justify-center gap-4 relative'>
                    <div className=' w-52 h-36  rounded-2xl relative'>
                        <img className=' w-full h-full object-cover rounded-2xl' src={imgThree} alt="" />
                        <h1 className=' absolute  text-white my-text left-2 text-xl top-[90px]'>russia</h1>
                        <h1 className=' absolute text-white my-text left-2 text-xs top-[115px]'>beach</h1>
                    </div>
                    <div className=' w-28 h-36  rounded-2xl relative'>
                        <img className=' w-full h-full rounded-2xl object-cover' src={imgFour} alt="" />
                        <h1 className=' absolute  text-white my-text left-2 text-xl top-[90px]'>Rio</h1>
                        <h1 className=' absolute text-white my-text left-2 text-xs top-[115px]'>beach</h1>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TopDestinations