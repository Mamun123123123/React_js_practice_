import React from 'react'
import axios from 'axios'
import { useState } from 'react'
const Axios_ = () => {
    const [data, setData] = useState([])
    const getData = async () => {
     const response = await   axios.get('https://jsonplaceholder.typicode.com/comments')
      setData(response.data);
      
    }
  return (
    <div>
      <button onClick={getData}>Get Data</button>
      <div>
        {data.map((item,index)=>{
            return <div key={index}>
                <h1>{index}{item.email}</h1>
            </div>
        })}
      </div>
    </div>
  )
}

export default Axios_
