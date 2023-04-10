import React from 'react'
import { useMediaQuery } from '@react-hook/media-query'
function Experience() {
    const isMedium = useMediaQuery('(min-width : 1024px)')
    if (isMedium) {
        return (
            <div className=' w-full h-60 bg-white gap-16 flex items-center justify-center '>
                <div className=' w-80 h-36 bg-[#4D5BDA]'>

                </div>
                <div className=' w-80 h-36 bg-[#4D5BDA]'>

                </div>
                <div className=' w-80 h-36 bg-[#4D5BDA]'>

                </div>
            </div>
        )
    }
    return (
        <div>
            
        </div>
  )
}

export default Experience