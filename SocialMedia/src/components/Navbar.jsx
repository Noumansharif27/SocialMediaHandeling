import React, { Component } from "react";
import Button from "./Button";
import { Settings, UserRound, Info, Search } from "lucide-react";
import profileImage from "../assets/profileImage.jpg";

function Navbar() {
  return (
    <>
      <div className="col-span-10 row-span-1 bg-blue-400 flex justify-between items-center p-4">
        <div className="left flex-1">logo</div>
        <div className="flex flex-2 bg-purple-200 gap-4 items-center py-2 px-4 rounded-full w-100 bg-gray-200">
          <Search size={20} className="text-left" />
          <input type="text" placeholder="Search items" />
        </div>
        <div className="right ml-20 flex-1 flex justify-center items-center gap-3">
          <Info size={20} />
          <Settings size={20} />
          <Button
            content={
              <img src={profileImage} className="object-contain max-h-full" />
            }
          />
        </div>
      </div>
    </>
  );
}

export default Navbar;
