import React from "react";
import { GrChannel } from "react-icons/gr";
import { LuUsersRound } from "react-icons/lu";
import { MdOutlineMessage } from "react-icons/md";
import { RiUserCommunityLine } from "react-icons/ri";

const ThinBar = () => {
  return (
    <div className="w-[5%]">
      <div className="flex flex-col items-center mt-4 space-y-6">
        <a href="#">
          <MdOutlineMessage size="24px" />
        </a>
        <a href="#">
          <RiUserCommunityLine size="24px" />
        </a>
        <a href="#">
          <GrChannel size="24px" />
        </a>
        <a href="#">
          <LuUsersRound size="24px" />
        </a>
      </div>
    </div>
  );
};

export default ThinBar;
