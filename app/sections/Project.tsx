import ProjectCard from "../components/project/ProjectCard";
import { projectImages } from "../constant/about";

export const Project = () => {


  return (
    <section id="projects" className="bg-project">
      <div className="max-w-[1440px] mx-auto pb-8 lg:py-[100px] lg:px-[52px]">
        <h3 className="text-2xl lg:text-[40px] font-tektur font-light lg:font-medium py-8 px-6">
          Selected projects
        </h3>

        <div className="px-6 space-y-5 w-full lg:flex flex-wrap gap-6">
          {projectImages.map((projectImage) => (
            <ProjectCard
              key={projectImage.id}
              imageSrc={projectImage.src}
              title={projectImage.title}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
