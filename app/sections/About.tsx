import Image from "next/image";
import { GmailIcon } from "../icons/GmailIcon";
import PersonalCard from "../components/about/PersonalCard";
import Experience from "../components/about/Experience";
import EducationCard from "../components/about/EducationCard";
import TwitterIcon from "../icons/TwitterIcon";
import InstagramIcon from "../icons/InstagramIcon";
import { LinkedinIcon } from "../icons/LinkedinIcon";

export const About = () => {
  return (
    <section id="about" className="bg-about font-lora">
      <div className="px-6 py-8 max-w-[1440px] mx-auto lg:px-[52px] lg:py-12">
        <h3 className="font-tektur font-semibold text-2xl lg:text-[40px] text-[#E6E6E6] mb-8 lg:px-3">
          About me
        </h3>
        <div className="lg:flex lg:gap-10 ">
          {/* Mobile */}
          <div className="bg-[#080808] border border-[#1f1f1f] p-6 rounded-[10px] lg:hidden">
            <Image
              src="/images/Profile-pic.png"
              alt="About Me"
              width={500}
              height={500}
              className="object-cover rounded-t-2xl transition-transform duration-300 hover:scale-105"
            />

            <div className="text-[#E6E6E6] font-tektur mt-5">
              <p className="text-[30px]">OMIRINDE</p>
              <p className="text-[40px] font-medium">BOLUWATIFE</p>

              <div className="flex gap-8 items-center my-5">
                <InstagramIcon />
                <TwitterIcon />
                <LinkedinIcon size="30" />
                <GmailIcon />
              </div>

              <p className="text-[#E6E6E6] font-medium text-[30px]">
                DEVELOPER/
                <br />
                EXPLORER/
                <br />
                HARDWORKER
              </p>
            </div>
          </div>
          {/* Desktop */}
          <div className="hidden lg:flex lg:flex-col justify-between bg-[#080808] p-6 border-2 border-[#1F1F1F] rounded-[20px]">
            <div className="text-[#E6E6E6] font-tektur mt-5">
              <p className="text-[50px]">OMIRINDE</p>
              <p className="text-[70px] font-medium">BOLUWATIFE</p>

              <div className="flex gap-8 items-center my-5">
                <InstagramIcon size="50" />
                <TwitterIcon size="50" />
                <LinkedinIcon size="50" />
                <GmailIcon size="50" />
              </div>
            </div>

            <p className="text-[#E6E6E6] font-medium font-lora text-[50px]">
              DEVELOPER/
              <br />
              EXPLORER/
              <br />
              HARDWORKER
            </p>
            <Image
              src="/images/Profile-pic.png"
              alt="About Me"
              width={500}
              height={500}
              className="object-cover rounded-t-2xl transition-transform duration-300 hover:scale-105"
            />
          </div>

          <div className="mt-10 lg:mt-0">
            <PersonalCard />
            <Experience />
            <EducationCard />
          </div>
        </div>
      </div>
    </section>
  );
};
