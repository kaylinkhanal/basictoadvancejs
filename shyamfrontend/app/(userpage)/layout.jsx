import { Contact2, Home, PhoneCall } from "lucide-react";
import React, { Children } from "react";

const layout = ({ Children }) => {
  return (
    <>
    <p className="bg-gray-900 flex item-center">this is page of layout</p>
      <div className="  bg-gray-500 h-screen w-15">
        <div className="p-5">
          <a href="phone">
            <PhoneCall />
          </a>
        </div>
        <div className="p-5"><a href="people"><Contact2/></a></div>
                  <div className="p-5 "><a href="phone"><PhoneCall/></a></div>
        
      </div>

        {Children}
    </>
  );
};

export default layout;
