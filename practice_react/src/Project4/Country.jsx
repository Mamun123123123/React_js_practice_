import axios from 'axios'
import React, { useState } from 'react'

const Country = () => {
     const [data,setData] = useState([])
     const allCountry = async()=>{
      let response = await axios.get("https://openapi.programming-hero.com/api/all")
      console.log(response.data.countries);
      setData(response.data.countries)
     }
  return (
    <div>
        <button onClick={()=>allCountry()}>Get Data</button>
        <div className='bg-amber-200 p-2 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 sm:grid-cols-2 text-black'>
            {data.map((item,index)=>(
                <div key={index} className='bg-blue-300 p-2 m-4 flex flex-col items-center rounded-2xl'>
                <img className='w-80 rounded-full object-cover p-4' src={item.flags.flags.png} alt="img" />
                <h1 className='text-2xl tracking-widest'>{item.name.common}</h1>
                <h2 className='font-extralight'>{item.region.region}</h2>
                <div className='flex sm:gap-6 m-3'>
                <button className='border p-1 m-1 rounded-xl tracking-wider w-18 bg-amber-50 '>visit</button>
                <button className='border p-1 m-1 rounded-xl tracking-wider w-29 bg-amber-50 '>flag visit</button>
                </div>
            </div>
                
            ))}
        </div>
    </div>
  )
}

export default Country