import React from 'react'

const Card_multiple = (props) => {
  return (
    <div>
      <h1>Title:{props.title}</h1>
      <p>Description: {props.description}</p>
      <button>{props.button}</button>
    </div>
  )
}

export default Card_multiple
