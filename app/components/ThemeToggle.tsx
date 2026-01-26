"use client";

import { useState } from "react";
import MoonIcon from "../icons/MoonIcon";
import SunIcon from "../icons/SunIcon";

export default function ThemeToggle() {
  const [isDark, setIsDark] = useState(false);

  const toggleTheme = () => setIsDark(!isDark);

  return (
    <div
      className="flex gap-2 items-center p-2.5 text-[18px] font-medium hover:text-[#E6E6E6] text-[#828282] cursor-pointer"
      onClick={toggleTheme}
    >
      {isDark ? <SunIcon /> : <MoonIcon />}
    </div>
  );
}
