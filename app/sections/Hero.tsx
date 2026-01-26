"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ReactIcon } from "../icons/ReactIcon";
import { JsIcon } from "../icons/JsIcon";
import { CssIcon } from "../icons/CssIcon";
import { TsIcon } from "../icons/TsIocn";
import { ResumeIcon } from "../icons/ResumeIcon";
import { GithubIcon } from "../icons/GithubIcon";
import { LinkedinIcon } from "../icons/LinkedinIcon";
import Typewriter from "../components/hero/Typewriter";

export const Hero = () => {
  const [isHoveringHero, setIsHoveringHero] = useState(false);
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0,
  });
  const [cursorVariant, setCursorVariant] = useState("default");

  useEffect(() => {
    const mouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener("mousemove", mouseMove);

    return () => {
      window.removeEventListener("mousemove", mouseMove);
    };
  }, []);

  const variants = {
    default: {
      x: mousePosition.x - 16,
      y: mousePosition.y - 16,
      backgroundColor: "#fafafa",
    },
    text: {
      height: 150,
      width: 150,
      x: mousePosition.x - 75,
      y: mousePosition.y - 75,
      backgroundColor: "#ffffff",
      mixBlendMode: "difference",
    },
  };

  const textEnter = () => setCursorVariant("text");
  const textLeave = () => setCursorVariant("default");

  return (
    <div
      id="header"
      className="font-lora mx-auto px-6 lg:px-10 pb-9 pt-8 lg:max-w-360 lg:pt-16.5 lg:pb-39.25 "
      onMouseEnter={() => setIsHoveringHero(true)}
      onMouseLeave={() => setIsHoveringHero(false)}
    >
      <div className="lg:flex">
        <div className="lg:pl-12">
          <h3
            onMouseEnter={textEnter}
            onMouseLeave={textLeave}
            className="text-[64px] lg:text-[190px] leading-[120%] font-oswald text-[#ffffff]"
          >
            FRONTEND <br /> DEVELOPER
          </h3>

          <div className="flex gap-4 lg:hidden">
            <ReactIcon />
            <JsIcon />
            <CssIcon />
            <TsIcon />
          </div>
          <div className="hidden lg:flex gap-4 lg:gap-6 py-3">
            <ReactIcon size="40" />
            <JsIcon size="40" />
            <CssIcon size="40" />
            <TsIcon size="40" />
          </div>
        </div>

        <div className="flex justify-end w-full">
          <div
           onMouseEnter={textEnter}
           onMouseLeave={textLeave}
          className="py-2.5 lg:py-10 lg:pr-6">
            <p className="font-caveat text-[24px] leading-[140%] font-bold text-[#B3B3B3] lg:hidden">
              CRAFTING <span className="text-[#FAFAFA]">EXPERIENCES</span>{" "}
              <br /> THAT CONVERT{" "}
              <span className="text-[#FAFAFA]">BUSINESSES</span>
            </p>
            <p className="hidden lg:block font-caveat text-[40px] leading-[140%] font-bold text-[#B3B3B3] ">
              CRAFTING <br />{" "}
              <span className="text-[#FAFAFA]">EXPERIENCES </span>
              THAT <br /> CONVERT{" "}
              <span className="text-[#FAFAFA]">BUSINESSES</span>
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
      <Typewriter/>

      {/* {isHoveringHero && ( */}
      <motion.div
        className="cursor"
        variants={variants}
        animate={cursorVariant}
      />
      {/* )} */}
    </div>
  );
};
