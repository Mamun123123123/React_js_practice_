import React, { useState, useEffect } from 'react'
import axios from 'axios'

const Image_galary = () => {

  const [index, setIndex] = useState(1)  
  const [data, setData] = useState([])

  const images = async () => {
    const response = await axios.get(`https://picsum.photos/v2/list?page=${index}&limit=10`)
    setData(response.data)
  }

  useEffect(() => {
    images()
  }, [index])

  const nextPage = () => {
    setIndex(index + 1)
  }

  const prevPage = () => {
    if(index > 1){
      setIndex(index - 1)
    }
  }

  return (
    <div className='p-10'>

      <button 
      onClick={images}
      className='bg-blue-500 text-white px-4 py-2 rounded'>
        Get Data
      </button>

      <div className='flex flex-wrap gap-4 mt-5'>

        {data.map((item)=>(
          <div className='flex p-2' key={item.id}>
            <img
              src={item.download_url}
              alt=""
              className="w-40 h-40 object-cover rounded"
            />
          </div>
        ))}

      </div>
      
      <div className='flex items-center justify-center m-4 gap-4'>

         <button 
         onClick={prevPage}
         className='border w-fit p-4 hover:bg-amber-500 bg-blue-600 text-white'>
           Prev
         </button>

         <span className='font-bold'>Page {index}</span>

         <button 
         onClick={nextPage}
         className='border w-fit p-4 hover:bg-amber-500 bg-blue-600 text-white'>
           Next
         </button>

      </div>

    </div>
  )
}

export default Image_galary