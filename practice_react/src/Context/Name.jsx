import React, { useContext } from 'react'
import { UserContext } from './Context'

const Name = () => {
    const {fullName} = useContext(UserContext)
  return (
    <div>
        <h1>My Full Name is : {fullName} </h1>
    </div>
  )
}

export default Name