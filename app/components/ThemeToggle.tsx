"use client";

import MoonIcon from "../icons/MoonIcon";
import SunIcon from "../icons/SunIcon";

export default function ThemeToggle() {
  return (
    <div className="flex gap-2 items-center">
      <div className="p-2.5 rounded-[20px] border border-white">
        <MoonIcon />
      </div>
      <div className="p-2.5">
        <SunIcon />
      </div>
    </div>
  );
}
