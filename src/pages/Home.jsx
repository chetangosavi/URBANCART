import React, { useEffect, useState } from 'react'
import ProductCard from '../components/ProductCard'
import Loader from '../components/loader/Loader'

const Home = () => {
  const [data,setData] = useState([]);
  const [loading, setLoading] = useState(true);
  // console.log(data);

 async function fetchingData(){
    try {
      setLoading(true);
      const res = await fetch('https://fakestoreapi.com/products?limit=8');
      const resdata = await res.json();
      setData(resdata);
    } catch (error) {
      console.log("something is wrong")
    }
    finally{
      setLoading(false);
    }
  }

  useEffect(()=>{
    fetchingData();
  },[])

  if(loading){
    return <Loader/>;
  }
  // console.log(data)
  return (
    <div className='grid grid-cols-4 '>
      <div className=' h-auto col-span-4 px-18 p-4'>
        <div className='mt-2 text-[28px] font-bold mb-5'>
          <p>TRENDING NOW</p>
          <hr/>
        </div>
        <div className='grid grid-cols-4 gap-8'>
         {
          data && data.map((elm,idx)=><ProductCard key={idx} product={elm} />)
         }
        </div>
        
       </div>
    </div>
  )
}

export default Home