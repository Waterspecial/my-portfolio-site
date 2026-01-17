import React from "react";
import { ReactIcon } from "../icons/ReactIcon";
import { JsIcon } from "../icons/JsIcon";
import { CssIcon } from "../icons/CssIcon";
import { TsIcon } from "../icons/TsIocn";
import { ResumeIcon } from "../icons/ResumeIcon";
import { GithubIcon } from "../icons/GithubIcon";
import { LinkedinIcon } from "../icons/LinkedinIcon";

export const Hero = () => {
  return (
    <div className="font-satoshi mx-auto px-6 lg:px-10 pb-9 mt-8 lg:max-w-[1440px] lg:mt-[66px] lg:pb-[157px] lg:flex">
      
      <div className="lg:pl-12">
        <h3 className="text-[64px] lg:text-[190px] leading-[120%] font-oswald text-[#FAFAFA]">
          FRONTEND <br /> DEVELOPER
        </h3>

        <div className="flex gap-4 lg:hidden">
          <ReactIcon  />
          <JsIcon  />
          <CssIcon  />
          <TsIcon  />
        </div>
        <div className="hidden lg:flex gap-4 lg:gap-6 py-3">
          <ReactIcon size="40" />
          <JsIcon size="40" />
          <CssIcon size="40" />
          <TsIcon size="40" />
        </div>
      </div>

      <div className="flex justify-end w-full">
        <div className="py-2.5 lg:py-10 lg:pr-6">
          <p className="font-caveat text-[24px] leading-[140%] font-bold text-[#B3B3B3] lg:hidden">
            CRAFTING <span className="text-[#FAFAFA]">EXPERIENCES</span> <br />{" "}
            THAT CONVERT <span className="text-[#FAFAFA]">BUSINESSES</span>
          </p>
          <p className="hidden lg:block font-caveat text-[40px] leading-[140%] font-bold text-[#B3B3B3] ">
            CRAFTING <br /> <span className="text-[#FAFAFA]">EXPERIENCES </span>
            THAT <br /> CONVERT <span className="text-[#FAFAFA]">BUSINESSES</span>
          </p>
          <div className="flex gap-4 items-center mt-2.5 lg:hidden">
            <ResumeIcon />
            <LinkedinIcon />
            <GithubIcon />
          </div>
          <div className="hidden lg:flex gap-4 items-center mt-2.5">
            <ResumeIcon size="40" />
            <LinkedinIcon size="35" />
            <GithubIcon size="35" />
          </div>
        </div>
      </div>

    </div>
  );
};
