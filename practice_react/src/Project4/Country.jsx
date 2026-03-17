import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Country = () => {
     const [data,setData] = useState([])
     const [currentPage, setCurrentPage] = useState(1);
     const itemsPerPage = 12;
     const change = (e) =>{
        e.target.textContent = "Visited"
     }
     const allCountry = async()=>{
      let response = await axios.get("https://openapi.programming-hero.com/api/all")
      setData(response.data.countries)
     }
     useEffect(()=>{
        allCountry()
     },[])
      const lastIndex = currentPage * itemsPerPage;
      const firstIndex = lastIndex - itemsPerPage;
      const currentCountries = data.slice(firstIndex, lastIndex);
  return (
    <div>
        <div className='bg-amber-50 items-center p-2 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 sm:grid-cols-2 text-black'>
            {currentCountries.map((item,index)=>(
                <div key={index} className='bg-blue-300 p-2 m-4 flex flex-col items-center rounded-2xl'>
                <img className='w-60 rounded-full object-cover p-4' src={item.flags.flags.png} alt="img" />
                <h1 className='text-2xl tracking-widest'>{item.name.common}</h1>
                <h2 className='font-extralight'>{item.region.region}</h2>
                <div className='flex sm:gap-6 m-3'>
                <button onClick={change} className='border p-1 m-1 rounded-xl tracking-wider w-28 bg-amber-100 '>not visit</button>
                <button  className='border p-1 m-1 rounded-xl tracking-wider w-29 bg-amber-100 '>flag visit</button>
                </div>
            </div>
                
            ))}
        </div>
        <div className="flex justify-center bg-slate-50 gap-4 p-6">
        <button
          className="bg-blue-500 text-white p-2 rounded"
          onClick={() => setCurrentPage(currentPage - 1)}
          disabled={currentPage === 1}
        >
          Prev
        </button>

        <button
          className="bg-blue-500 text-white p-2 rounded"
          onClick={() => setCurrentPage(currentPage + 1)}
        >
          Next
        </button>
      </div>
    </div>
  )
}

export default Country