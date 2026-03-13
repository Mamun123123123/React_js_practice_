import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Photos = () => {
    const [data,setData] = useState([])
    const LoadData = async() => {
        const response = await axios.get("https://jsonplaceholder.typicode.com/photos")
        setData(response.data)
    }
    useEffect(()=>{
         LoadData()
    },[])
  return (
    <div>
        <div> This is My Photo Album</div>
        <div>
            {data.map((item,index) => {
                return (
                    <div key={index}>
                        {/* <img src={item.thumbnailUrl} alt="" /> */}
                        <h1>{item.title}</h1>
                    </div>
                )
            })}
        </div>

    </div>
  )
}

export default Photos