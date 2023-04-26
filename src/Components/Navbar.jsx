import React from 'react'
import { CgMenuRight } from 'react-icons/cg'
import logo from '../mobile Assets/HOMEPAGE/flygreenz~1.webp'
import { useMediaQuery } from '@react-hook/media-query'
function Navbar() {
    const isMedium = useMediaQuery('(min-width : 1024px)')
    if(isMedium){
        return (
            <div>

            </div>
        )
    }
  return (
    <div className=' w-full px-5 h-24 '>
        <div className='h-full flex justify-between '>
            <div className=' flex items-center h-full'>
                <img src={logo} alt="" width={100} />
            </div>
            <div className=' h-full flex items-center'>
                <h1 className=' text-4xl'><CgMenuRight/></h1>
            </div>

        </div>

    </div>
  )
}

export default Navbar