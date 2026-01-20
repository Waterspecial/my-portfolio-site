"use client";

import { ResumeIcon } from "../icons/ResumeIcon";
import { GithubIcon } from "../icons/GithubIcon";
import TwitterIcon from "../icons/TwitterIcon";
import InstagramIcon from "../icons/InstagramIcon";
import { LinkedinIcon } from "../icons/LinkedinIcon";
import gsap from "gsap";
import { Observer } from "gsap/all";

import { useEffect, useRef } from "react";
import { horizontalLoop } from "../helper/horizontalLoop";

gsap.registerPlugin(Observer);

export const Contact = () => {
  const railRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!railRef.current) return;

    const items = gsap.utils.toArray<HTMLElement>(
      railRef.current.querySelectorAll("h4")
    );

    const tl = horizontalLoop(items, {
      repeat: -1,
      speed: 1,
      paddingRight: 30,
    });

    const observer = Observer.create({
      target: window,
      type: "wheel,touch",
      onChangeY(self) {
        const factor = self.deltaY < 0 ? -1 : 1;
        gsap
          .timeline({ defaults: { ease: "none" } })
          .to(tl, {
            timeScale: factor * 2.5,
            duration: 0.2,
            overwrite: true,
          })
          .to(
            tl,
            {
              timeScale: factor,
              duration: 1,
            },
            "+=0.3"
          );
      },
    });

    return () => {
      observer.kill();
      tl.kill();
    };
  }, []);

  return (
    <section id="contact" className="bg-project font-lora">
      <div className="max-w-360 mx-auto pt-13">
        <h1 className="text-[100px] lg:text-[200px] text-[#F3F3F3] font-impact lg:hidden">
          reach out!
        </h1>

        <div className="scrolling-text">
          <div ref={railRef} className="rail font-impact">
            <h4>reach out!</h4>
            <h4>Let&apos;s connect and work together...</h4>
            <h4>reach out!</h4>
            <h4>Let&apos;s connect and work together...</h4>
          </div>
        </div>
        <div className="flex gap-8 py-6 items-center justify-center my-5 lg:hidden">
          <ResumeIcon size="30" />
          <LinkedinIcon size="30" />
          <GithubIcon size="30" />
          <TwitterIcon />
          <InstagramIcon />
        </div>
        <div className="lg:flex gap-8 py-6 items-center justify-center my-8 hidden">
          <ResumeIcon size="50" />
          <LinkedinIcon size="50" />
          <GithubIcon size="50" />
          <TwitterIcon size="50" />
          <InstagramIcon size="50" />
        </div>
        <h2 className="underline text-[24px] lg:text-[40px] text-center">
          omirindeboluwatife@gmail.com
        </h2>
        <p className="text-[#E6E6E6] mt-[142px] lg:text-[28px] p-6 lg:p-12 text-end">
          Copyright 2025, Omirinde
        </p>
      </div>
    </section>
  );
};
