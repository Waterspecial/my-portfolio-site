import { educations } from "@/app/constant/about"
import AboutSubHead from "./AboutSubHead"
import { ExperienceCard } from "./ExperienceCard"


const EducationCard = () => {
  return (
    <div className="mt-5">
        <AboutSubHead title="EDUCATION" />
        <div className="border border-[#1F1F1F] rounded-[20px] bg-[#080808]">
                {educations.map((edu, index) => (
                  <div key={index}>
                    <ExperienceCard
                      companyName={edu.course}
                      year={edu.year}
                      role={edu.institution}
                    />
                    {index < educations.length - 1 && (
                      <div className="border-t border-[#1F1F1F]" />
                    )}
                  </div>
                ))}
              </div>
    </div>
  )
}

export default EducationCard