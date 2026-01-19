import { ResumeIcon } from "../icons/ResumeIcon";
import { GithubIcon } from "../icons/GithubIcon";
import TwitterIcon from "../icons/TwitterIcon";
import InstagramIcon from "../icons/InstagramIcon";
import { LinkedinIcon } from "../icons/LinkedinIcon";

export const Contact = () => {
  return (
    <section id="contact" className="bg-project font-lora">
      <div className="max-w-[1440px] mx-auto pt-[52px]">
        <h1 className="text-[100px] lg:text-[200px] text-[#F3F3F3] font-impact">reach out!</h1>
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
