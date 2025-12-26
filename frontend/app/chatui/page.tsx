import React from 'react'
  import { Phone,MessageSquareText,MessageCircle,CircleDashed,Users,MessageSquarePlus ,EllipsisVertical,Search ,User , CheckCheck,Video,ChevronDown,MessageSquareLock ,Images,Settings, Contact,Plus,Mic,Sticker} from 'lucide-react'

const Home = () => {
  return (
    <div>
        <div className=' h-20 w-100% bg-gray-200 p-2 px flex items-center gap-5  '><img src="https://cdn.iconscout.com/icon/free/png-512/free-whatsapp-logo-icon-svg-download-png-3201503.png?f=webp&w=512"  className="w-10 h-10" alt="whatsapp logo" /> 
        <div className="flex-col">WhatsApp</div>
        </div>
   <div className="bg-gray-200 h-100vh w-full ">
        <div className=' flex h-screen '>
       <div className='bg-gray-200 w-[5%]  '>
          <div className='flex flex-col items-center mt-4 space-y-6  '>
            <div className='gap-4 flex flex-col border-b-2 pb-4  gap-y-7'>
              <MessageSquareText></MessageSquareText>
           
           <Phone></Phone>
            <CircleDashed></CircleDashed>
           
           <MessageCircle></MessageCircle>
           <Users></Users>
          
           
            </div>
            <div>
            <MessageSquareLock></MessageSquareLock>
            </div>
            <div className="">
              <Images></Images>
            </div>
            <div className="mt-52 p-4 border-t border-gray-200-2  gap-3  flex flex-col items-center">
             
              <Settings></Settings>
          
           
 <div className="h-12 w-12 rounded-full bg-red-200 flex items-center  justify-center">

 <User className="w-8 h-8 text-gray-700" />
 </div>
  </div>
          </div>
         </div>
          

       <div  className='bg-white rounded-lg  h-full w-140 p-5'>
        <div className='p-2 flex '>
              Chats
            <div className=' flex flex-row-reverse  ml-auto  gap-10 pl-20px pr-6 '>
           <EllipsisVertical></EllipsisVertical>
          <MessageSquarePlus></MessageSquarePlus>
          
          </div>
            </div>
<div className="p-2 h-12 w-30% border-gray-200 border-2  rounded-4xl flex items-center  placeholder-gray-600">
        <Search></Search>
        <input placeholder=' Search your friends'/>
        </div>
        <div className=" p-7  gap-4 flex ">
        <div className="p-4 h-9 w-15 border-gray-200 border-2  rounded-2xl flex items-center   text-gray-500 ">
          <button>All</button>
          </div>
           <div className="p-2 h-9 w-20 border-gray-200 border-2  rounded-2xl flex items-center  text-gray-500  ">
      <button>Unread</button>
           </div>
           <div className="p-2 h-9 w-23 border-gray-200 border-2  rounded-2xl flex items-center  text-gray-500  ">
          <button>Favorites</button>
          </div>
         
          <div className="p-2 h-9 w-20 border-gray-200 border-2  rounded-2xl flex items-center  text-gray-500  ">
             <button>Groups</button>
             </div>
        
        </div>
        <div className=" flex  gap-5  h-30  ">
        <div className="h-16 w-16 rounded-full bg-gray-200 flex items-center  justify-center">

 <User className="w-8 h-8 text-gray-700" />
 </div>
   <div className='shadow-sm p-2  m-2  rounded-lg bg-white h-16 w-85  '>
          <div className="flex  justify-between ">
          <h1>Ram shrestha</h1>
        
           <p className=' text-gray-400   flex-row-reverse  '> 3:45 PM</p>
          </div>
          <div className="flex gap-5">
          <CheckCheck className='  text-blue-500 w-4 h-4  mt-2  '/>
          <p className=' text-gray-500 '>Hello, how are you?</p>
          
         </div>
         
        </div>
        </div>
       

       
         <div className=" flex  gap-5  h-30  ">
        <div className="h-16 w-16 rounded-full bg-gray-200 flex items-center  justify-center">

 <User className="w-8 h-8 text-gray-700" />
 </div>
   <div className='shadow-sm p-2  m-2  rounded-lg bg-white h-16 w-85  '>
          <div className="flex  justify-between ">
          <h1>Ram shrestha</h1>
        
           <p className=' text-gray-400   flex-row-reverse  '> 3:45 PM</p>
          </div>
          <div className="flex gap-5">
          <CheckCheck className='  text-blue-500 w-4 h-4  mt-2  '/>
          <p className=' text-gray-500 '>Hello, how are you?</p>
          
         </div>
         
        </div>
        </div>
         <div className=" flex  gap-5  h-30  ">
        <div className="h-16 w-16 rounded-full bg-gray-200 flex items-center  justify-center">

 <User className="w-8 h-8 text-gray-700" />
 </div>
   <div className='shadow-sm p-2  m-2  rounded-lg bg-white h-16 w-85  '>
          <div className="flex  justify-between ">
          <h1>Ram shrestha</h1>
        
           <p className=' text-gray-400   flex-row-reverse  '> 3:45 PM</p>
          </div>
          <div className="flex gap-5">
          <CheckCheck className='  text-gray-500 w-4 h-4  mt-2  '/>
          <p className=' text-gray-500 '>Hello, how are you?</p>
          
         </div>
         
        </div>
        </div>
       
   <div className=" flex  gap-5  h-30  ">
        <div className="h-16 w-16 rounded-full bg-gray-200 flex items-center  justify-center">

 <User className="w-8 h-8 text-gray-700" />
 </div>
   <div className='shadow-sm p-2  m-2  rounded-lg bg-white h-16 w-85  '>
          <div className="flex  justify-between ">
          <h1>Ram shrestha</h1>
        
           <p className=' text-gray-400   flex-row-reverse  '> 3:45 PM</p>
          </div>
          <div className="flex gap-5">
          <CheckCheck className='  text-gray-500 w-4 h-4  mt-2  '/>
          <p className=' text-gray-500 '>Hello, how are you?</p>
          
         </div>
         
        </div>
        </div>
       </div>
       <div className='bg-gray-300  ml-0.15 rounded-lg h-full w-250 '>
        <div className=" bg-gray-100 h-22 flex items-center p-4  align-middle ">
       <div className=" flex items-center gap-4 ">
         <div className="h-16 w-16 rounded-full bg-gray-200 flex items-center  justify-center ml-2 mt-2 ">

 <User className=" w-8 h-8 text-gray-700" />
 
 </div>
 <h1>Dada</h1>
 </div>
 
<div className=" flex    items-center ml-150  gap-4 ">
 <div className=" p-2  h-10 gap-2 border-2 border-black  flex items-center  rounded-2xl bg-white ">
 
 <Video></Video>
 <button>call</button>
  <ChevronDown></ChevronDown>
 </div>
  <div className="gap-4 flex flex-row-reverse  ml-auto  mr-0">
     
      <EllipsisVertical></EllipsisVertical>
      <Search></Search>
    
     </div>
      
       </div>
       </div>
       <div className=" absolute bottom-25 p-2 h-16 w-210 border-white border-2  rounded-4xl flex items-center  placeholder-white gap-4 ml-4 ">
       
         <Plus></Plus>
         <Sticker></Sticker>
       
          
          <input placeholder=' Type a Message'/>
        <div className="absolute right-5">
        <Mic></Mic>
        </div>
        </div>
       </div>
    </div>
    </div>
    </div>
   
  )
}

export default Home