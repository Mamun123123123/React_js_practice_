import React from 'react'

const Function = () => {
    const handleChange = (e) => {
        console.log(e.target.value);
    }
  return (
    <div>
      <input onChange={handleChange} type="text" placeholder='Enter your name' />
    </div>
  )
}

export default Function
