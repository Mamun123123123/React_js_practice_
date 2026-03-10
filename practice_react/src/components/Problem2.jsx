import React from 'react'
import { useState } from 'react'
const Problem2 = () => {
    const [show, setshow] = useState(false)
  return (
    <div>
        <div className='border rounded-2xl shadow-2xl tracking-wider  w-fit p-4 flex items-center flex-col m-4'>
            <h1 className='font-bold'>Abdullah Al Mamun</h1>
            <p>Frontend Developer</p>
            <h4>Location : Dhaka</h4>
            {show && <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam accusantium autem facilis cupiditate dolorum illum quos nihil veniam expedita unde!</h2>}
            <button className='border  p-2 rounded mt-2 bg-amber-950 text-white'  onClick={()=>setshow(!show)}>{show ? "Cross Details" : "More Details"}</button>
                   
        </div>
    </div>
  )
}

export default Problem2
