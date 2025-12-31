import { Menu } from 'lucide-react'
import React from 'react'

const Navbar = () => {
  return (
    <div className='border rounded-3xl  w-full h-30  flex font-mono items-center
    gap-4 bg-gradient-to-r from-green-200 via-blue-100 to-amber-200 p-4'>
      <div className='font-bold  text-xl  '>
        <a href="/">HOME </a>
      </div>
      <div className=' '>
        <select name="Menu" id="menu" className='bg-blue p-2  rounded-xl hover:bg-green-200    '>
          <option value="">Food</option>
          <option value="">Electronic</option>
          <option value="">Patho</option>
        </select>
        
      </div>
      <div className='hover:text-blue-500'>
        <button className='text-uppercase focus:text-blue-800 '>contact</button>
      </div>
      <div>
        about us
      </div>
      <div>
        services
      </div>
      <div>
        blog
      </div>
      <div className='ml-auto'>
         <a href="/menu"><Menu/></a>
        </div>

    </div>
  )
}

export default Navbar