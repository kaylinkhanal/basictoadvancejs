import { Archive, Bolt, Megaphone, Search } from 'lucide-react'
import React from 'react'

const ThinBar = () => {
  return (

    <div className='flex flex-col m-4 space-y-6 
    bg-gradient-to-b from-pink-200 via-green-100 to-amber-300
    p-4 rounded-3xl w-50 h-150 
    border shadow-2xl shadow-pink-500/50 '>
      <div className='flex  justify-between'>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRR4n4ZZfsB7E7PV1NSmfLg3Rvcg4OOF5ukpg&s"
          className=' h-9 w-8 rounded-full' />
        <div className="relative flex items-center">
          <input type="button" value="Notification" className="pl-8" />
          <Megaphone className="absolute left-2" size={16} />
        </div>

      </div>
      <div className="relative group">
        <Search className="absolute top-1/2 left-2 -translate-y-1/2 text-gray-400 group-focus-within:text-blue-500" />
        <input
          className="w-full pl-10 py-2 border rounded-lg focus:outline-none"
          placeholder="Search here"
        />
      </div>

      <div className='border border-dashed mt-9'>

      </div>

      <div>
        <a href='/settings'>
          <Bolt />
        </a>
      </div>
      <div>
        <a href='/archive'>
          <Archive />
        </a>
      </div>
    </div>

  )
}

export default ThinBar