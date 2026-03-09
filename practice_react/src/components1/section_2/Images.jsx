import React from 'react'

const Images = ({user}) => {

  return (
    <div className='m-10 w-fit'>
      
      <div className='relative rounded-4xl border shadow-2xl overflow-hidden'>
        <img
          className='w-100 h-80 object-cover'
          src={user.img}
          alt=""
        />

        <div className='absolute top-2 left-2 flex flex-col  gap-4'>
          <div className='w-fit p-2 h-8 flex items-center justify-center m-2 border rounded-full bg-white shadow-lg font-bold'>
            {user.name}
          </div>

          <h1 className='font-semibold text-lg text-amber-200'>
            {user.role}
          </h1>
        </div>

      </div>

    </div>
  )
}

export default Images