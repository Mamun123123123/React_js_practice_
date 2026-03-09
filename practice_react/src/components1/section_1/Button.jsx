import React from 'react'

const Button = () => {
  return (
    <div className='bg-slate-100 p-3 flex justify-center'>
     <div className='flex justify-center border rounded-2xl h-8 w-fit p-4 gap-1 items-center'>
      <button>EXPLORE OUR COURSES</button>
      <img src="https://img.icons8.com/ios7/1200/long-arrow-right.jpg" alt="" className='w-5 p-1 shadow h-5 rounded-full border'/>
     </div>
    </div>
  )
}

export default Button
