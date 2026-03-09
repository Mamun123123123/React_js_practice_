import React from 'react'
import Images from './Images'

const Section2 = () => {
    const users = [
        {name:"mamun" ,role:"Frontend Developer",
            img:"https://images.pexels.com/photos/35537/child-children-girl-happy.jpg?cs=srgb&dl=pexels-bess-hamiti-83687-35537.jpg&fm=jpg"
        },
        {
            name:"Masum",role:"Backand Developer",
            img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-OTWoBVRlh5WEJanDnnCR7ImlYk_5coQebA&s"
        }
    ]
  return (
    <div className='flex'>
      {
        users.map((user,index)=>(
          <Images key={index} user={user}/>
        ))
      }
    </div>
  )
}

export default Section2
