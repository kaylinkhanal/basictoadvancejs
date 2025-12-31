import {  Archive, Bolt } from 'lucide-react'
import UserCard from '@/components/user-card/page'
import ThinBar from '@/components/thin-bar/page'
//JSX---> Javascript XML
const Chat = () => {
  return (
    <div>

    <div className=' flex h-screen'>
       <div  className='bg-pink-400 w-[33%]'>
        <input placeholder='Search your friends'/>
      <UserCard/>
      <UserCard/>
      <UserCard/>
      <UserCard/>
      <UserCard/>
      <UserCard/>  
       </div>
       <div className='bg-green-400 w-[63%]'>a</div>
    </div>

    </div>
  )
}



export default Chat