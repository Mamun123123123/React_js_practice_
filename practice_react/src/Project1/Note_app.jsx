import React, { useState } from 'react'

const Note_app = () => {

    const [text, setText] = useState({
        title:'',
        details:''
    })

    const [data,setData] = useState([])

    const formHandler = (e) => {
        e.preventDefault()

        setData([...data,text])

        setText({
            title:'',
            details:''
        })
    }

  return (
    <div className='m-10 flex gap-10'>

      <form onSubmit={formHandler} className='border bg-blue-50 w-fit p-4 flex flex-col items-center'>
        <h1 className='underline text-2xl m-2'>Add Notes</h1>

        <input
        name='title'
        value={text.title}
        onChange={(e)=>setText({...text,[e.target.name]:e.target.value})}
        className='border p-2 m-2 rounded-2xl'
        type="text"
        placeholder='Enter Note Title ...'
        />

        <textarea
        name='details'
        value={text.details}
        onChange={(e)=>setText({...text,[e.target.name]:e.target.value})}
        className='p-2 border m-2 rounded'
        placeholder='Enter Note Details ......'
        >
        </textarea>

        <button className='border rounded-3xl bg-amber-950 text-white w-fit p-3 font-semibold'>
        Submit
        </button>

      </form>


      <div className='bg-blue-200 border-l-8 p-4'>

        {data.map((item,index)=>(
          <div key={index} className='bg-amber-100 flex flex-col items-center w-fit p-4 m-4 rounded'>

            <h1 className='underline font-bold m-2'>
              Title : {item.title}
            </h1>

            <p className='m-2'>
              Details : {item.details}
            </p>

          </div>
        ))}

      </div>

    </div>
  )
}

export default Note_app