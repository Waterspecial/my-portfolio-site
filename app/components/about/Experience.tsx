import AboutSubHead from "./AboutSubHead";
import { ExperienceCard } from "./ExperienceCard";
import { experiences } from "@/app/constant/about";

const Experience = () => {
  return (
    <div className="mt-5">
      <AboutSubHead title="Experience" />
      <div className="border border-[#1F1F1F] rounded-[20px] bg-[#080808] px-6 py-4">
        <p className="mt-4 text-sm text-[#828282] lg:text-[24px] lg:leading-[200%] font-medium">
          What ties my work together is a focus on collaboration and results. I
          love working closely with founders, designers, and other developers to
          turn ideas into real, working products. No matter the project size, I
          am committed to delivering clean code, thoughtful design, and an end
          result everyone can be proud of.
        </p>
        <div className="space-y-4">
          {experiences.map((exp, index) => (
            <div key={index}>
              <ExperienceCard summary={exp.summary} year={exp.year} />
            </div>
          ))}
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default Experience;
