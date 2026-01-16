import React from "react";
import { ReactIcon } from "../icons/ReactIcon";
import { JsIcon } from "../icons/JsIcon";
import { CssIcon } from "../icons/CssIcon";
import { TsIcon } from "../icons/TsIocn";
import { ResumeIcon } from "../icons/ResumeIcon";
import { LinkedinIcon } from "../icons/LinkedinIcon";
import { GithubIcon } from "../icons/GithubIcon";


export const Hero = () => {

  return (
    <div className="lg:max-w-[1440px] mx-auto px-6 pb-9 mt-8  font-satoshi">
      <div className=" ">
        <h3 className="text-[64px] leading-[120%] font-oswald text-[#FAFAFA]">
          FRONTEND <br /> DEVELOPER
        </h3>

        <div className="flex gap-4 py-3">
          <ReactIcon />
          <JsIcon />
          <CssIcon />
          <TsIcon />
        </div>

        <div className="flex justify-end w-full">
          <div className="py-2.5">
            <p className="font-caveat text-[24px] leading-[140%] font-bold text-[#B3B3B3] ">
              CRAFTING <span className="text-[#FAFAFA]">EXPERIENCES</span>{" "}
              <br /> THAT CONVERT{" "}
              <span className="text-[#FAFAFA]">BUSINESSES</span>
            </p>
            <div className="flex gap-4 items-center mt-2.5">
              <ResumeIcon />
              <LinkedinIcon />
              <GithubIcon />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
