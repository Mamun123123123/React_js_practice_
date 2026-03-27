import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Available from './Available'

const Players = () => {
  const [data, setData] = useState([])
 const [selecttype,setSelecttype] = useState("available")
  const players_data_fetch = async () => {
    let response = await axios.get("/data.json")
    setData(response.data)
  }

  useEffect(() => {
    players_data_fetch()
  }, [])

  return (
    <div className="bg-gray-100 min-h-screen p-5">
        <div className='flex justify-between text-black m-4'>
            {selecttype === "available" ? <h1>Available player</h1>:<h1>selected player</h1>}
            <div className='flex gap-4'>
                <button onClick={()=> setSelecttype("available")} className={`${selecttype === "available" ? "bg-amber-300" : "bg-black"} text-white rounded p-2`}>available</button>
                <button onClick={()=> setSelecttype("selected")} className={`${selecttype === "selected" ? "bg-amber-300" : "bg-black"} text-white rounded p-2`}>selected</button>
            </div>
                       
        </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        
        {data.map((item, index) => (
            selecttype === "available" ?  <Available key={index} item ={item}/> : "none"
        ))}

      </div>
    </div>
  )
}

export default Players