import React, { useContext } from 'react'
import { SetContext } from './Create_context'

const Use = () => {
    const {password,arr} = useContext(SetContext)
    console.log(arr);
    
  return (
    <div>
        <h1>Password : {password} </h1>
        <ul>
           {
            arr.map((item)=>{
                return <li>{item}</li>
            })
           }
        </ul>
        
    </div>
  )
}

export default Use