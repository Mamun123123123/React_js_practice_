
import React, { useState } from 'react';
const UseState_arr = () => {
    const [arr, setArr] = useState([])
    console.log(arr);
    const change =  () => {
         let newarr = [...arr]
         newarr.push(10)
         console.log(newarr);
         setArr(newarr)
    }
    
  return (
    <div>
      <h1>array : {arr}</h1>
      <button onClick={change}>check</button>
    </div>
  )
}

export default UseState_arr
