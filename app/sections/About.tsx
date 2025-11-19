import Accordion from "../components/Accordion";
import { ExperienceCard } from "../components/ExperienceCard";
import { educations, experinces } from "../constant/about";

export const About = () => {

  return (
    <section id="about" className="bg-about-section-custom">
      <div className="px-6 py-8">
        <h3 className="font-bricolage font-medium text-xl text-[#E6E6E6]">
          About me
        </h3>

        {/* Personal Information */}

        <Accordion title="Personal Information">
          <div className="space-y-4 bg-[#1A1A1A] border-[1.5px] border-[#333333] rounded-[15px] px-4 py-4">
            <p>
              I’m a frontend developer with a deep passion for turning ideas
              into interactive, user-friendly experiences on the web. I love
              working at the intersection of design and technology, bringing
              visual concepts to life through clean, efficient, and maintainable
              code. My approach centers on creating digital experiences that
              feel natural, responsive, and accessible to everyone
            </p>
            <p>
              I specialize in crafting interfaces using modern web technologies
              like HTML, CSS, and JavaScript, along with frameworks such as
              React and Next.js. Beyond writing code, I pay close attention to
              design details — spacing, typography, and motion — to ensure that
              every project not only functions well but also looks and feels
              polished.
            </p>
            <p>
              When I’m not coding, you’ll find me exploring new tools, learning
              about emerging design systems, or refining personal projects to
              test fresh ideas. I’m always eager to collaborate with teams that
              share my enthusiasm for innovation, creativity, and meaningful
              user experiences.
            </p>
          </div>
        </Accordion>

        {/* Experience */}

        <Accordion title="Experience">
          <div className="space-y-4">
            {experinces.map((experince, i) => (
              <ExperienceCard
                key={i}
                companyName={experince.companyName}
                year={experince.year}
                role={experince.role}
              />
            ))}
          </div>
        </Accordion>

        {/* Education */}

        <Accordion title="Education">
        <div className="space-y-4">
           {educations.map((education, i) => (
              <ExperienceCard
                key={i}
                companyName={education.course}
                year={education.year}
                role={education.institution}
              />
            ))}
          </div>
        </Accordion>
      </div>
    </section>
  );
};
