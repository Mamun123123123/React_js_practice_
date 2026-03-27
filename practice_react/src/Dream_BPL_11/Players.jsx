import axios from 'axios'
import React, { useContext, useEffect } from 'react'

const Players = () => {
    const [data,setData] = useContext([])
    const players_data_fetch = async()=>{
        let response = await axios.get("/data.json")
        console.log(response.data);
        setData(response.data)
    }
    useEffect(()=>{
            players_data_fetch()
    },[])
  return (
    <div>
    </div>
  )
}

export default Players
