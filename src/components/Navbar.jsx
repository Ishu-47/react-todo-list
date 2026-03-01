import React from 'react'

const Navbar = () => {
  return (
    <div>
      <nav className='flex justify-between bg-violet-600 text-white py-2'>
        <div className="logo">
            <span className='fond-bold text-xl mx-9'>iTask</span>
        </div>
        <ul className="flex gap-8 mx-9">
        <li className='cursor-pointer hover:font-bold transition-all '>Home</li> 
        <li className='cursor-pointer hover:font-bold transition-all'>Your Tasks</li>
        </ul>
      </nav>
    </div>
  )
}

export default Navbar
