import React, { Children } from "react";
import ThinBar from "../components/thinbar/page";

const UserPageLayout = ({ children }) => {
  return (
    <div>
      <div className=" flex h-screen">
        <ThinBar />
        {children}
      </div>
    </div>
  );
};

export default UserPageLayout;
