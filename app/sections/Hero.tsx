import React from "react";
import { WavingEmoji } from "../icons/WavingEmoji";

export const Hero = () => {
  const skills = ["CSS", "JavaScript", "Next.js", "TypeScript"];

  return (
    <div className="lg:max-w-[1440px] mx-auto px-6 mt-[55px] pb-[50px] md:mt-28 font-satoshi">
      <div className="bg-hero-text-custom lg:max-w-[716px] mx-auto space-y-6 text-center py-10 px-4 md:py-[60px] flex flex-col items-center">
        <p className="flex items-center">
          <WavingEmoji />
          <span className="text-[28px] md:text-[40px] text-[#e6e6e6] font-medium ml-3 font-bricolage">
            <span className="font-light">hello,</span> I`m Omirinde
          </span>
        </p>
        <p className="md:text-xl">
          I bring pixels to life through thoughtful <br className="hidden md:block" /> code and intentional
          design.
        </p>
        <div className="flex gap-6 items-center">
          <p className="p-2.5 text-sm md:text-xl text-[#E6E6E6] font-normal">EMAIL</p>
          <p className="p-2.5 text-sm md:text-xl text-[#E6E6E6] font-normal">LINKEDIN</p>
          <p className="p-2.5 text-sm md:text-xl text-[#E6E6E6] font-normal">GITHUB</p>
        </div>
      </div>
      <div className="flex items-center gap-6 mt-6 flex-wrap font-bricolage">
        {skills.map((skill, i) => {
          return (
            <div
              key={i}
              className="border-[1.5px] border-[#575757] rounded-[20px] py-1.5 px-6 md:py-3 md:px-9 w-fit text-sm font-medium"
            >
              {skill}
            </div>
          );
        })}
      </div>
    </div>
  );
};
