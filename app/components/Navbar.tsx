"use client";

import HamburgerIcon from "../icons/HamburgerIcon";
import { useState } from "react";
import ThemeToggle from "./ThemeToggle";
import MobileNavigation from "./MobileNavigation";

export const Navbar = () => {
  const [open, setOpen] = useState(false);

  const toggleMenu = () => setOpen(!open);
  const closeMenu = () => setOpen(false);

  return (
    <div className="px-6 py-1 flex justify-between relative md:max-w-[1440px] items-center lg:mx-auto md:pt-[13px] md:pb-[19px]">
      <div className="font-medium font-bricolage text-2xl md:text-3xl text-[#E6E6E6] py-2.5 px-3 md:px-6">
        Omirinde
      </div>

       {/* Desktop Navigation */}
      <ul className="px-6 gap-6 text-[20px] text-[#999999] ml-[394px] mr-[364px] hidden md:flex">
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

      <div className="hidden md:block">
        <ThemeToggle />
      </div>
      <div className="" onClick={toggleMenu}>
        <HamburgerIcon />
      </div>

      {/* Mobile Navigation Overlay */}
      <MobileNavigation open={open} closeMenu={closeMenu} />

    </div>
  );
};
