import React, { useState } from 'react'

const UseState = () => {
    const [num, setNum] = useState(0)
    const Change_Num = () => {
        setNum(num + 1)

    }
  return (
    <div>
      <h1>Number is : {num}</h1>
      <button onClick={Change_Num} >Change</button>
    </div>
  )
}

export default UseState
