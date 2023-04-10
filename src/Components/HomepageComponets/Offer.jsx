import React from 'react'
import { useMediaQuery } from '@react-hook/media-query'
import parachute from '../../greenz webp assets/parachute-bg-img.webp'
import parachuteOne from '../../greenz webp assets/parachute1.webp'
import parachuteTwo from '../../greenz webp assets/parachute3.webp'
import adventure from '../../greenz webp assets/adventure.webp'
import saveMoney from '../../greenz webp assets/coins icons.webp'
import mermmories from '../../greenz webp assets/camera icon.webp'
import earth from '../../greenz webp assets/earth.webp'
function Offer() {
    const isMedium = useMediaQuery('(min-width : 1024px)')
    if(isMedium){
        return (
            <div className=' pt-20 pb-10 flex gap-20 w-[1250px] min-h-60 h-auto  mx-auto '>
                <div className=' w-[400px] h-[650px] rounded-2xl relative'>
                    <img className=' w-full h-full object-cover rounded-2xl' src={parachute} alt="" />
                    <img className='absolute top-[-30px] left-10' src={parachuteOne} alt="" width={180} />
                    <img className=' absolute top-60 left-[350px]' src={parachuteTwo} alt="" width={80} />
                </div>  
                <div className=' flex flex-col gap-5 '>
                    <div>
                        <h1 className=' my-text text-4xl'>what we offer</h1>
                        <h1 className=' mt-2 w-[500px] font-semibold uppercase'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </h1>
                    </div>
                    <div className=' flex flex-col ml-5 mt-5 gap-10'>
                        <div className=' flex gap-10'>
                            <div className=' flex flex-col gap-3'>
                                <img className=' mx-auto' src={earth} alt="" width={100} />
                                <h1 className=' text-center font-bold'>500 Destinations</h1>
                                <h1 className=' w-[300px] text-center'>Lorem Ipsum is simply typesetting industry. Lorem Ipsum</h1>
                            </div>
                            <div className=' flex flex-col gap-3'>
                                <img className=' mx-auto' src={adventure} alt="" width={100} />
                                <h1 className=' text-center font-bold'>Adventure</h1>
                                <h1 className=' w-[300px] text-center'>Lorem Ipsum is simply typesetting industry. Lorem Ipsum</h1>
                            </div>
                        </div>
                        <div className=' flex gap-10'>
                            <div className=' flex flex-col gap-3'>
                                <img className=' mx-auto' src={saveMoney} alt="" width={100} />
                                <h1 className=' text-center font-bold'>Save money</h1>
                                <h1 className=' w-[300px] text-center'>Lorem Ipsum is simply typesetting industry. Lorem Ipsum</h1>
                            </div>
                            <div className=' flex flex-col gap-3'>
                                <img className=' mx-auto' src={mermmories} alt="" width={100} />
                                <h1 className=' text-center font-bold'>Memories</h1>
                                <h1 className=' w-[300px] text-center'>Lorem Ipsum is simply typesetting industry. Lorem Ipsum</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
  return (
    <div>Offer</div>
  )
}

export default Offer