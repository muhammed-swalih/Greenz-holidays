import React from 'react'
import { useMediaQuery } from '@react-hook/media-query'
import parachute from '../../greenz webp assets/parachute1.webp'
import galleryImage from '../../greenz webp assets/popular.webp'
function TopDestinations() {
    const isMedium = useMediaQuery('(min-width : 1024px)');
    if (isMedium) {
        return (
            <div className=' w-[1250px] mx-auto   min-h-60 h-auto py-20'>
                <div className=' flex flex-col '>
                    <div className=' flex justify-between'>
                        <div>
                            <h1 className=' my-text tracking-wider text-2xl'>top destination</h1>
                            <h1 className=' font-semibold mt-5 w-[800px] uppercase'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</h1>
                        </div>
                        <div>
                            <img src={parachute} alt="" width={300} />
                        </div>
                    </div>
                    <div className=' flex justify-center gap-5 w-[810px] '>
                        <div className=' w-[250px] h-[420px]  rounded-2xl relative'>
                            <img className=' w-full h-full object-cover rounded-2xl' src={galleryImage} alt="" />
                            <h1 className=' absolute my-text top-[355px] left-3 text-3xl text-white tracking-widest'>Fary</h1>
                            <h1 className=' absolute my-text top-[385px] left-3 text-xs text-white tracking-widest'>waterfall</h1>
                        </div>
                        <div className=' flex flex-col gap-5'>
                            <div className=' flex justify-between gap-5'>
                                <div className=' w-[400px] h-[200px] bg-black rounded-2xl relative'>
                                    <img className=' w-full h-full object-cover rounded-2xl' src={galleryImage} alt="" />
                                    <h1 className=' absolute my-text top-32 left-3 text-3xl text-white tracking-widest'>maldives</h1>
                                    <h1 className=' absolute my-text top-40 left-3 text-xs text-white tracking-widest'>beach</h1>
                                </div>
                                <div className=' w-[150px] h-[200px] rounded-2xl bg-black relative'>
                                    <img className=' w-full h-full object-cover rounded-2xl' src={galleryImage} alt="" />
                                    <h1 className=' absolute my-text top-32 left-3 text-3xl text-white tracking-widest'>Rio</h1>
                                    <h1 className=' absolute my-text top-40 left-3 text-xs text-white tracking-widest'>beach</h1>
                                </div>
                            </div>
                            <div className=' flex justify-between gap-5'>
                                <div className=' w-[300px] h-[200px] bg-black rounded-2xl relative'>
                                    <img className=' w-full h-full object-cover rounded-2xl' src={galleryImage} alt="" />
                                    <h1 className=' absolute my-text top-32 left-3 text-3xl text-white tracking-widest'>kashmir</h1>
                                    <h1 className=' absolute my-text top-40 left-3 text-xs text-white tracking-widest'>beach</h1>
                                </div>
                                <div className=' w-[250px] h-[200px] rounded-2xl bg-black relative'>
                                    <img className=' w-full h-full object-cover rounded-2xl' src={galleryImage} alt="" />
                                    <h1 className=' absolute my-text top-32 left-3 text-3xl text-white tracking-widest'>russia</h1>
                                    <h1 className=' absolute my-text top-40 left-3 text-xs text-white tracking-widest'>beach</h1>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        )
    }
    return (
        <div>

        </div>
    )
}

export default TopDestinations