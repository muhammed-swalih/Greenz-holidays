import React from 'react'
import Adventure from '../HomepageComponets/Adventure'
import Footer from '../HomepageComponets/Footer'
import { useMediaQuery } from '@react-hook/media-query'
function About() {
    const isMedium = useMediaQuery('(min-width : 1024px)')
    if (isMedium) {
        return (

            <div>
                <div className=' w-full min-h-screen h-auto'>
                    <div className=' w-full h-60 bg-black'>
                        <div className='w-[1150px] h-full flex justify-center items-center  mx-auto'>
                            <h1 className=' my-text text-white text-4xl tracking-widest'>about us</h1>
                        </div>
                    </div>
                    <div className=' my-20 rounded-2xl w-[1150px] min-h-60 h-auto mx-auto  flex justify-evenly'>
                        <div className=' w-[350px] h-[400px] bg-yellow-500 rounded-2xl'>

                        </div>
                        <div className=''>
                            <h1 className=' uppercase text-black w-[470px] text-lg font-semibold'>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular </h1>
                        </div>
                    </div>
                    <Adventure />
                    <Footer />

                </div>
            </div>
        )
    }
    return (
        <div>
            
        </div>
  )
}

export default About