import React from 'react'

const Profile = (props) => {
  return (
    <div>
      <h1>Name : {props.name}</h1>
      <h2>Age : {props.age}</h2>
      <h3>City : {props.city}</h3>
    </div>
  )
}

export default Profile
