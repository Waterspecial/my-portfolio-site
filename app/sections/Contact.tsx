import React from "react";

export const Contact = () => {
  return (
    <section id="contact" className="bg-hero-custom font-satoshi">
      <div className="px-6 py-7.5 text-[#E6E6E6]">

        <div className="bg-hero-text-custom space-y-6 py-15 flex flex-col text-center items-center border border-[#1A1A1A] rounded-[15px] shadow-[0px_4px_20px_0px_#333333]
">
          <p className="text-xl font-bricolage">
            Reach out and let’s work
          </p>
          <div className="flex gap-6 items-center text-sm">
            <p className="px-1 py-2.5">RESUME</p>
            <p className="px-1 py-2.5">TWITTER</p>
            <p className="px-1 py-2.5">INSTAGRAM</p>
            <p className="px-1 py-2.5">LINKEDIN</p>
          </div>
          <h2 className="underline font-bricolage text-[28px]">omirinde@gmail.com</h2>
          <p className="text-[#F2F2F2]">Copyright 2025, Omirinde</p>
        </div>
      </div>
    </section>
  );
};
