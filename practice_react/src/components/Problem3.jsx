import React, { useState } from 'react'

const Problem3 = () => {

  const [text, setText] = useState({
    name: "",
    age: ""
  })

  const formHandler = (e) => {
    e.preventDefault()
  }

  const handleChange = (e) => {
    const { name, value } = e.target

    setText({
      ...text,
      [name]: value
    })
  }

  return (
    <div>
      <form className='flex flex-col items-center' onSubmit={formHandler}>

        <input
          name="name"
          value={text.name}
          className='border p-2 rounded-2xl m-1'
          type="text"
          placeholder='Enter your name'
          onChange={handleChange}
        />

        <input
          name="age"
          value={text.age}
          className='border p-2 rounded-2xl m-1'
          type="number"
          placeholder='Enter your Age'
          onChange={handleChange}
        />

        <button className='border p-1 rounded-3xl'>Submit</button>

      </form>
    </div>
  )
}

export default Problem3