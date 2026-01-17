import { ResumeIcon } from "../icons/ResumeIcon";
import { GithubIcon } from "../icons/GithubIcon";
import TwitterIcon from "../icons/TwitterIcon";
import InstagramIcon from "../icons/InstagramIcon";
import { LinkedinIcon } from "../icons/LinkedinIcon";

export const Contact = () => {
  return (
    <section id="contact" className="bg-footer pt-[52px] font-satoshi">

      <h1 className="text-[100px] text-[#F3F3F3] font-impact">reach out!</h1>

      <div className="flex gap-8 py-6 items-center justify-center my-5">
        <ResumeIcon size="30" />
        <LinkedinIcon size="30" />
        <GithubIcon size="30" />
        <TwitterIcon />
        <InstagramIcon />
      </div>
      <h2 className="underline font-tektur text-[24px] text-center">
        omirindeboluwatife@gmail.com
      </h2>
      <p className="text-[#E6E6E6] mt-[142px] p-6 text-end">Copyright 2025, Omirinde</p>
    </section>
  );
};
