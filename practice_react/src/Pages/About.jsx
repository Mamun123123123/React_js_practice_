import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { UserContext } from '../Context/Context'

const About = () => {
   const {name} = useContext(UserContext)
    let navigate = useNavigate()
  return (
    <div>
       <h1>{name} Page..............</h1>
       <button onClick={()=>{
        navigate('/')
       }}>Back to Home</button>
       <button onClick={()=>{
           navigate(-1)
       }}>Back</button>
    </div>
  )
}

export default About
