import Usercard from '@/components/Usercard/page'
import { User } from 'lucide-react'
import React from 'react'

const Chat = () => {
  return (
    <div className=' flex h-screen'>
       <div className='bg-black w-[5%]'>
          
       </div>
       <div  className='bg-pink-400 w-[33%]'>
        <input placeholder='Search your friends'/>
        <Usercard/>
       </div>
       <div className='bg-green-400 w-[63%]'>a</div>
    </div>
  )
}

export default Chat