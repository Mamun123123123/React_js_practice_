import React from 'react'
import { useState } from 'react'
const Problem1 = () => {
    const [count, setcount] = useState(0)
  return (
    <div className='border rounded w-fit p-4 m-4 flex flex-col  items-center'>
      <h1 className='mb-4'>Change : {count}</h1>
      <div className='gap-2 flex'>
      <button className='border p-2 rounded-2xl bg-amber-500 text-white' onClick={()=>setcount(count + 1)}>Add</button>
      <button className='border p-2 rounded-2xl bg-amber-500 text-white' onClick={()=>setcount(count==0?0:count-1)}>Remove</button>
      </div>
    </div>
  )
}

export default Problem1
