import { Archive, Bolt } from 'lucide-react'
import React from 'react'

const ThinBar = () => {
  return (
    <div className=' w-[5%]'>
    <div className='flex flex-col items-center mt-4 space-y-6'>
      <div>
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRR4n4ZZfsB7E7PV1NSmfLg3Rvcg4OOF5ukpg&s"
        className='w-8 h-8 rounded-full'
        alt='whatsapp'/>
      </div>
      <div>
            <Bolt/>
      </div>
      <div>
        <Archive/>
      </div>
    </div>
   </div>
  )
}

export default ThinBar