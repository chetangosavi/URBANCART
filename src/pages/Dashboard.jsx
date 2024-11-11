import React from 'react'
import Home from './Home'
import HeroSection from "../components/HeroSection";
import Promo from "../components/Promo";

const Dashboard = () => {
  return (
    <div className=' w-full'>
          <HeroSection/>
        <div className='max-w-[1200px] mx-auto'>
          <Home />
        </div>
        <Promo/>
    </div>
  )
}

export default Dashboard