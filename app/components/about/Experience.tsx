import AboutSubHead from "./AboutSubHead";
import { ExperienceCard } from "./ExperienceCard";
import { experiences } from "@/app/constant/about";

const Experience = () => {
  // const experiences = [
  //   {
  //     companyName: "GOOGLE",
  //     year: "2020 - 2022",
  //     role: "Software Engineer",
  //     summary:
  //       "Led a team of developers in the delivery of different activities relating to the advance in technological systems at Microsoft",
  //   },
  //   {
  //     companyName: "APPLE",
  //     year: "2018 - 2020",
  //     role: "Frontend Developer",
  //     summary:
  //       "Led a team of developers in the delivery of different activities relating to the advance in technological systems at Microsoft",
  //   },
  //   {
  //     companyName: "IBM",
  //     year: "2015 - 2017",
  //     role: "Backend Developer",
  //     summary:
  //       "Led a team of developers in the delivery of different activities relating to the advance in technological systems at Microsoft",
  //   },
  // ];

  return (
    <div className="mt-5">
      <AboutSubHead title="Experience" />
      <div className="border border-[#1F1F1F] rounded-[20px] bg-[#080808]">
        {experiences.map((exp, index) => (
          <div key={index}>
            <ExperienceCard
              companyName={exp.companyName}
              year={exp.year}
              role={exp.role}
                summary={exp.summary}
            />
            {index < experiences.length - 1 && (
              <div className="border-t border-[#1F1F1F]" />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
