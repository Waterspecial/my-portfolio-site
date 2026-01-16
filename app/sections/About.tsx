import Image from 'next/image';
import { GmailIcon } from '../icons/GmailIcon';
import { BigLinkedin } from '../icons/BigLinkedin';
import PersonalCard from '../components/about/PersonalCard';
import Experience from '../components/about/Experience';
import EducationCard from '../components/about/EducationCard';
import TwitterIcon from '../icons/TwitterIcon';
import InstagramIcon from '../icons/InstagramIcon';

export const About = () => {

  return (
    <section id="about" className="bg-about">
      <div className="px-6 py-8">
        <h3 className="font-tektur font-semibold text-2xl text-[#E6E6E6] bg-[#000000] mb-8">
          About me
        </h3>

        <div className="bg-[#080808] border border-[#1f1f1f] p-6 rounded-[10px]">
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
            <InstagramIcon/>
            <TwitterIcon />
            <BigLinkedin />
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


        <div className='mt-10'>
          <PersonalCard/>
          <Experience />
          <EducationCard />
        </div>
      </div>
    </section>
  );
};
