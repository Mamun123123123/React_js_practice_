import  axios  from 'axios'
import React, { useEffect } from 'react'
import { useState } from 'react'

const Food = () => {
    const [data,setData] = useState([])
    const Foods = async()=>{
        let response = await axios.get("https://www.themealdb.com/api/json/v1/1/search.php?s=") 
        console.log(response.data.meals);
        setData(response.data.meals)
    }
useEffect(()=>{
    Foods()
},[])

  return (
    <>
    <nav className='bg-amber-950 m-4 p-4 rounded-2xl'>
        <div className='flex items-center flex-col'>
            <h1 className='font-bold tracking-wider'>Food</h1>
            <p>This is our website. you can buy various type of food.</p>
        </div>
    </nav>
    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 p-4 overflow-hidden'>
        {data.map((item,idx)=>{
            return (
                <div key={idx} className='p-4 flex flex-col items-center' >
                        <p>{item.strCategory}</p>
                    
                    <div >
                        <img className='w-60' src={item.strMealThumb} alt="" />
                    </div>
                </div>
            )
        })}
    </div> 
    
    </>
  )
}

export default Food