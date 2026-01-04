import { Archive, Bolt } from 'lucide-react'
import React from 'react'

const ThinBar = () => {
  return (
    <div className=' w-[5%]'>
    <div className=' p-5 flex flex-col items-center mt-4 space-y-6'>
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