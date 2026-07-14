import React, { Component } from "react";
import Button from "./Button";
import { Settings, UserRound, Info, Search } from "lucide-react";
import profileImage from "../assets/profileImage.jpg";
import logo from "../assets/logo.png";

function Navbar() {
  return (
    <>
      <div className="col-span-10 row-span-1 flex justify-between items-center p-4">
        <div className="left flex-1 h-22 max-w-22 mr-60 ml-30 rounded-full bg-black">
          <img src={logo} alt="logo" className="object-contain max-h-full" />
        </div>
        <div className="flex flex-2 gap-4 items-center py-2 px-4 rounded-full w-100 bg-gray-200">
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
