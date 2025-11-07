import React from "react";
import { WavingEmoji } from "../icons/WavingEmoji";

export const Hero = () => {
  const skills = ["CSS", "JavaScript", "Next.js", "TypeScript"];

  return (
    <div className="max-w-[1440px] mx-auto mt-28">
      <div className="bg-hero-text-custom max-w-[716px] mx-auto space-y-6  text-center py-[60px] flex flex-col items-center">
        <p className="flex items-center">
          <WavingEmoji />
          <span className="text-[40px] text-[#e6e6e6] font-medium ml-3">
            <span className="font-light">hello,</span> I`m Omirinde
          </span>
        </p>
        <p className="text-xl">
          I bring pixels to life through thoughtful <br /> code and intentional
          design.
        </p>
        <div className="flex gap-6 items-center">
          <p className="p-2.5 text-xl text-[#E6E6E6] font-normal">EMAIL</p>
          <p className="p-2.5 text-xl text-[#E6E6E6] font-normal">LINKEDIN</p>
          <p className="p-2.5 text-xl text-[#E6E6E6] font-normal">GITHUB</p>
        </div>
      </div>
      <div className="flex items-center justify-center gap-6 mt-6 ">
        {skills.map((skill, i) => {
          return (
            <div
              key={i}
              className="border-[1.5px] border-[#575757] rounded-[20px] py-3 px-9 w-fit"
            >
              {skill}
            </div>
          );
        })}
      </div>
    </div>
  );
};
