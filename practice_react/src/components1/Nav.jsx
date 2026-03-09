import React from 'react'

const Nav = () => {
  return (
    <div className='bg-slate-50 shadow-4xl m-4 rounded-3xl'>
      <div className='flex justify-evenly items-center p-4'>
        <img src="https://upload.wikimedia.org/wikipedia/commons/e/ec/Skill.am_Logo.jpg" alt="" className='w-10 rounded-4xl'/>
        <a href="#">HOME</a>
        <a href="#">ABOUT US</a>
        <a href="#">COURSE</a>
        <a href="#">BLOG</a>
        <a href="#">LOG IN</a>
        <div className='flex items-center gap-2'>
           <button>SIGN UP</button> 
           <img src="https://img.icons8.com/ios7/1200/long-arrow-right.jpg" alt="" className='w-5 p-1 shadow h-5 rounded-full border'/>
        </div>
      </div>
    </div>
  )
}

export default Nav
