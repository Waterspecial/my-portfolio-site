"use client";

import HamburgerIcon from "../icons/HamburgerIcon";
import { useEffect, useState } from "react";
import ThemeToggle from "./ThemeToggle";
import MobileNavigation from "./MobileNavigation";

export const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [atTop, setAtTop] = useState(true);

  const toggleMenu = () => setOpen(!open);
  const closeMenu = () => setOpen(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      setAtTop(currentScrollY === 0);

      if (window.scrollY > lastScrollY) {
        // scrolling down
        setShow(false);
      } else {
        // scrolling up
        setShow(true);
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <section
      className={`lg:sticky top-0 z-50 transform transition-all duration-300
      ${
        atTop
          ? "bg-navbar"
          : show
          ? "bg-black/50 backdrop-blur-md"
          : "-translate-y-full"
      }
    `}
    >
      <div className="px-6 py-1 flex justify-between relative md:max-w-[1440px] items-center lg:mx-auto md:pt-[13px] md:pb-[19px] font-lora">
        {/* Logo */}
        <div className="font-semimedium text-2xl md:text-3xl text-[#828282] hover:text-[#E6E6E6] py-2.5 px-3 md:px-6 cursor-pointer">
          <a href="#header">Omirinde</a>
        </div>

        {/* Desktop Navigation */}
        <ul className="font-medium px-6 gap-6 text-[20px] text-[#999999] ml-[394px] mr-[364px] hidden md:flex">
          <li className="p-2.5 hover:text-[#E6E6E6]">
            <a href="#projects">Projects</a>
          </li>
          <li className="p-2.5 hover:text-[#E6E6E6]">
            <a href="#about">About</a>
          </li>
          <li className="p-2.5 hover:text-[#E6E6E6]">
            <a href="#contact">Contacts</a>
          </li>
        </ul>

        <div className="hidden md:block">
          <ThemeToggle />
        </div>
        <div className="lg:hidden" onClick={toggleMenu}>
          <HamburgerIcon />
        </div>

        {/* Mobile Navigation Overlay */}
        <MobileNavigation open={open} closeMenu={closeMenu} />
      </div>
    </section>
  );
};
