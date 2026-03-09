import React from 'react'
import Hired from './Hired';

const Hiring = () => {
    const companies = [
  {
    id: 1,
    name: "Google",
    role: "Frontend Developer",
    location: "USA",
    salary: "$120k"
  },
  {
    id: 2,
    name: "Microsoft",
    role: "Backend Developer",
    location: "USA",
    salary: "$115k"
  },
  {
    id: 3,
    name: "Amazon",
    role: "Full Stack Developer",
    location: "USA",
    salary: "$110k"
  },
  {
    id: 4,
    name: "Meta",
    role: "React Developer",
    location: "USA",
    salary: "$125k"
  },
  {
    id: 5,
    name: "Netflix",
    role: "Software Engineer",
    location: "USA",
    salary: "$130k"
  }
];
  return (
    <div className='grid sm:grid-cols-2 md:grid-cols-3'>
      {companies.map((item)=>
        <Hired key={item.id} company = {item}/>)}
    </div>
  )
}

export default Hiring
