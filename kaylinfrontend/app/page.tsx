import {  Archive, Bolt } from 'lucide-react'
import UserCard from '@/components/user-card/page'
//JSX---> Javascript XML
const Home = () => {
  return (
    <div>

    <div className=' flex h-screen'>
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



export default Home