import { Contact, Ellipsis, Images, MenuIcon, MessageCircleCode, PhoneCall, Settings, Users, Users2Icon } from "lucide-react";
import React from "react";

const LayoutPage = () => {
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
      

      <div className="bg-gray-400 w-[31%]">
        <p className=" h-10 text-3xl p-5">WhatsApp</p>
          <a  className="flix-item-end  item-center bg-gray-400  w-100 flex items-end justify-end " href="menu"><MenuIcon/></a>
       
        <input className="w-100  rounded-l bg-gray-500 m-3 flex item-center" type="search" placeholder="Search " />
         <div>
          <a className="rounded-xl  w-300 h-200 bg-gray-500 m-3 p-1" href="all">All</a>
          <a className="rounded-xl w-300 h-20 bg-gray-500  m-3 p-1"  href="unread">Unread</a>
          <a  className="rounded-xl w-300 h-20 bg-gray-500  m-3 p-1"  href="favourites">Favourites</a>
          <a className="rounded-xl w-300 h-20 bg-gray-500  m-3 p-1"  href="groups">Groups</a>
        </div>

      <div>




      </div>
      </div>
      <div className="bg-green-400 w-[60%]"></div>
    </div>
  );
};


export default LayoutPage;
