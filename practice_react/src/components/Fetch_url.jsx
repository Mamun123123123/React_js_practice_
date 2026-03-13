import axios from 'axios'
import React, { useEffect, useState } from 'react'
const Fetch_url = () => {
  const [input,setInput] = useState('')
  const [data,setData] = useState([])
  const LoadData = async()=>{
    const response = await axios.get("https://jsonplaceholder.typicode.com/users")
    console.log(response.data);
    setData(response.data)
  }    
  const handleInput = (e) => {
    setInput(e.target.value);
    
  }
  const filteredData = data.filter((item)=>
  item.name.toLowerCase().includes(input.toLowerCase())
)
  useEffect(()=>{
     LoadData()
  },[])
  return (
    <div>
        <div className='bg-slate-100 text-black'> 
          <button onClick={LoadData} >Get Data</button>
          <input name='search' value={input} onChange={handleInput} type="text" placeholder='search by name ...' />
          <button onClick={filteredData}>Search</button>
        </div>
        <div className='bg-amber-100 p-1  grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 '>
          {filteredData.map((item,index)=>{
           return (
            <div className='flex bg-slate-800 m-2 rounded-xl flex-col items-center w-fit' key={index}>
            <img className='w-70 rounded-3xl p-2' src="https://static.vecteezy.com/system/resources/thumbnails/050/056/176/small/a-baby-with-blue-eyes-is-laying-on-a-white-blanket-photo.jpeg" alt="" />
            <h1 className='font-bold'>{item.name}</h1>
            <h2>Phone : {item.phone}</h2>
            <h3>Email : {item.email}</h3>
            <p>City : {item.address.city}</p>
            <p>Company : {item.company.name}</p>
          </div>
           ) 
          })}
          
        </div>
        
    </div>
  )
}

export default Fetch_url