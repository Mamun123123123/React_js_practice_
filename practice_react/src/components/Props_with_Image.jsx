import React from 'react'

const Props_with_Image = (props) => {
  return (
    <div>
        <img src={props.image} alt="img" />
      <h1>{props.name}</h1>
      <p>{props.role}</p>
    </div>
  )
}

export default Props_with_Image
