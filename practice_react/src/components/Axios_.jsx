import React from 'react'
import axios from 'axios'
const Axios_ = () => {
    const getData = async () => {
     const response = await   axios.get('https://jsonplaceholder.typicode.com/comments')
      console.log(response.data);
      
    }
  return (
    <div>
      <button onClick={getData}>Get Data</button>
    </div>
  )
}

export default Axios_
