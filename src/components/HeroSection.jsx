import React from 'react'
import bg1 from '../assets/Banner-Eccomerce-1.jpg'
import bg2 from '../assets/Banner-Eccomerce-2.jpg'
import bg3 from '../assets/Banner-Eccomerce-3.jpg'

const HeroSection = () => {
  return (
    <div className='bg-gradient-to-b from-blue-500 to-transparent  w-full '>
        <div className=' w-[1200px] m-auto p-5 grid  grid-cols-3 gap-2'>
            <div className='rounded-lg overflow-hidden col-span-2 row-span-2 bg-blue-500'> 
                <img src={bg1} alt="E-commerce Banner" className='h-full'/>
            </div>
            <div className='rounded-lg overflow-hidden row-span-1'>
                <img src={bg2} alt="img" />
            </div>
            <div className='rounded-lg overflow-hidden'>
                <img src={bg3} alt="img" />
            </div>
        </div>
    </div>
  )
}

export default HeroSection;