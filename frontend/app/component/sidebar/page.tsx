import { CircleDashed, Images, MessageCircle, MessageSquareLock, MessageSquareText, Phone, Settings, User, Users } from "lucide-react";
import React from 'react'

const sidebar = () => {
  return (
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
  )
}

export default sidebar
 