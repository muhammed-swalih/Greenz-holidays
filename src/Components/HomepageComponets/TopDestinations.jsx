import React from 'react'
import { useMediaQuery } from '@react-hook/media-query'
import parachute from '../../greenz webp assets/parachute1.webp'
import galleryImage from '../../greenz webp assets/popular.webp'
import imgOne from '../../DESKTOP/HOMEPAGE/TOP DESITINATION_1.webp'
import imgTwo from '../../DESKTOP/HOMEPAGE/TOP DESITINATION_2.webp'
import imgThree from '../../DESKTOP/HOMEPAGE/TOP DESITINATION_3.webp'
import imgFour from '../../DESKTOP/HOMEPAGE/TOP DESITINATION_4.webp'
import newio from '../../NEW ASSETS/MOBILE HOMEPAGE/Group 8.webp'
import newit from '../../NEW ASSETS/MOBILE HOMEPAGE/Maldives.webp'
import newith from '../../NEW ASSETS/MOBILE HOMEPAGE/Group 10.webp'
import newif from '../../NEW ASSETS/MOBILE HOMEPAGE/russia.webp'
import newifi from '../../NEW ASSETS/MOBILE HOMEPAGE/rio.webp'
import bgmap from '../../NEW ASSETS/MOBILE HOMEPAGE/MAPBG.webp'
import newRio from '../../FINSLE ASSETS/rio.webp'
function TopDestinations() {
    const isMedium = useMediaQuery('(min-width : 1024px)');
    if (isMedium) {
        return (
            <div className=' w-[1250px] px-20 mx-auto  min-h-60 h-auto py-20 my-font'>
                <div className=' flex flex-col '>
                    <div className=' flex justify-between'>
                        <div>
                            <h1 className=' my-font uppercase font-bold tracking-wider text-4xl'>top destination</h1>
                            <h1 className=' text-sm font-semibold mt-5 w-[810px] uppercase'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with.</h1>
                        </div>
                        <div className=' bg-cover w-auto h-auto'style={{backgroundImage:`url(${bgmap})`}}>
                            <img src={parachute} alt="" width={200} />
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
        <div className=' w-full h-auto  my-10 mt-20 px-5 my-font bg-cover bg-top' style={{backgroundImage : `url(${bgmap})`}}>
            
            <div className=' flex flex-col gap-4 '>
                <div className=' flex justify-between w-full  items-center'>
                    <h1 className=' my-text text-2xl w-32 '>top destination</h1>
                    <img src={parachute} alt="" width={80}/>
                </div>    
                <div className=' flex justify-center gap-4 '>
                    <div className='  rounded-2xl relative '>
                        <img className=' w-36 h-[310px] object-cover rounded-2xl' src={newio} alt="" />
                    </div>
                    <div className=' flex flex-col gap-4 '>
                        <div className='   rounded-2xl relative'>
                            <img className=' w-52 h-36 object-cover rounded-2xl' src={newit} alt="" />
                        </div>
                        <div className='   rounded-2xl  relative'>
                            <img className=' w-52 h-36 object-cover rounded-2xl' src={newith} alt="" />
                        </div>
                    </div>
                </div>

                <div className=' flex justify-center gap-4 relative'>
                    <div className='   rounded-2xl relative'>
                        <img className=' w-60 h-36 object-cover rounded-2xl' src={newif} alt="" />
                    </div>
                    <div className='  rounded-2xl relative'>
                        <img className=' w-28 h-36  rounded-2xl object-cover' src={newRio} alt="" />

                    </div>
                </div>
            </div>
        </div>
    )
}

export default TopDestinations