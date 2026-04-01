import React, { useState } from 'react'

const Form_office = () => {
  const [data, setData] = useState({
    name: '',
    age: '',
    address: ''
  })

  const [all, setAll] = useState([])

  const handleInput = (e) => {
    setData({ ...data, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    console.log(data)

    setAll([...all, data])
    setData({
      name: '',
      age: '',
      address: ''
    })
  }

  return (
    <>
      <form onSubmit={handleSubmit} className='flex bg-amber-800 flex-col border max-w-fit p-4 items-center m-2'>

        <label className='p-2 font-bold tracking-widest'>Name :</label>
        <input
          className='border rounded-3xl p-2 m-2'
          name='name'
          value={data.name}
          onChange={handleInput}
          type="text"
          placeholder='Enter Your Name..'
        />

        <label className='p-2 font-bold tracking-widest'>Age :</label>
        <input
          className='border rounded-3xl p-2 m-2'
          type="number"
          name='age'
          value={data.age}
          onChange={handleInput}
          placeholder='Enter Your Age...'
        />

        <label className='p-2 font-bold tracking-widest'>Address</label>
        <input
          className='border rounded-3xl p-2 m-2'
          type="text"
          name='address'
          value={data.address}
          onChange={handleInput}
          placeholder='Enter Your Address..'
        />

        <button className='border p-2 rounded-3xl m-2'>Submit</button>
      </form>

      <div>
        {all.map((item, index) => (
          <div key={index}>
            <h1>Name: {item.name}</h1>
            <h1>Age: {item.age}</h1>
            <h1>Address: {item.address}</h1>
            <hr />
          </div>
        ))}
      </div>
    </>
  )
}

export default Form_office