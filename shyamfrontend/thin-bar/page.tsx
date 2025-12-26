import React from 'react'

const page = () => {
  return (
  
    <div className=" flex h-screen">
      <div className="bg-gray-700  rouned-200 w-[5%]">
        <div className="flex flex-col items-center mt-4 space-y-6">
          <div>
            <a href="message">
              <MessageCircleCode />
            </a>
          </div>
          <div><a href="people"><Contact/></a></div>
          <div><a href="phone"><PhoneCall/></a></div>
      <div className=""><a href="image"><Images/></a></div>

          <div className="m-70">
            <a className="m-5"  href="setting">
              <Settings />
            </a>
      
         <a className="m-5"  href="profile"><Users2Icon/></a>
      
      </div>
      </div>
      </div>
  )
}

export default page