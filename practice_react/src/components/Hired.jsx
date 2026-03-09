import React from 'react'

const Hired = ({company}) => { 
  return (
    <div>
      <div className='bg-sky-100 flex flex-col items-center gap-4 p-4 m-2 rounded-2xl'>
        <h1 className='font-bold text-4xl'>{company.name}</h1>
        <h2 className='text-xl'>{company.location}</h2>
        <h3 className='animate-pulse text-xl'>{company.role}</h3>
        <h4 className='bg-blue-950 text-white p-2 rounded-2xl'>{company.salary}</h4>
      </div>
    </div>
  )
}

export default Hired
