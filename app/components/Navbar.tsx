import React from "react";
import MoonIcon from "../icons/MoonIcon";
import SunIcon from "../icons/SunIcon";

export const Navbar = () => {
  return (
    <div className="relative max-w-[1440px] flex items-center mx-auto pt-[13px] pb-[19px]">
      <div className="font-medium text-3xl text-[#E6E6E6] py-2.5 px-6">
        Omirinde
      </div>

      <ul className="flex px-6 gap-6 text-[20px] text-[#999999] ml-[394px] mr-[364px]">
        <li className="p-2.5">
          <a href="#projects">Projects</a>
        </li>
        <li className="p-2.5">
          <a href="#about">About</a>
        </li>
        <li className="p-2.5">
          <a href="#contact">Contacts</a>
        </li>
      </ul>

      <div className="flex gap-2 items-center">
        <div className="p-2.5 rounded-[20px] border border-white">
          <MoonIcon />
        </div>
        <div className="p-2.5">
          <SunIcon />
        </div>
      </div>
      <div></div>
    </div>
  );
};
