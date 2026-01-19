"use client";

import { useState } from "react";
import MoonIcon from "../icons/MoonIcon";
import SunIcon from "../icons/SunIcon";

export default function ThemeToggle() {
  const [isDark, setIsDark] = useState(false);

  const toggleTheme = () => setIsDark(!isDark);

  return (
    <div>
      <div
        className="flex gap-2 items-center p-2.5 cursor-pointer text-[18px] font-medium hover:text-[#E6E6E6] text-[#828282]"
        onClick={toggleTheme}
      >
        {isDark ? <SunIcon /> : <MoonIcon />}
        <p>{isDark ? "Light" : "Dark"}</p>
      </div>
    </div>
  );
}
