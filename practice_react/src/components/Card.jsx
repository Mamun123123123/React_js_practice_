import React from 'react'

const Card = (props) => {
    
  return (
    <>
    <div className='main'>
   <div className='card'>
      <h2>{props.user}</h2>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </p>
      <button>view</button>
    </div>
    </div>
    
    </>
  )
}

export default Card
