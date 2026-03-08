import React from 'react'

const Props_with_Button_Function = (props) => {
  return (
    <button onClick={props.handleClick}>{props.text}
    </button>
  )
}

export default Props_with_Button_Function
