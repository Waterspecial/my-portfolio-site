import React from "react";
import ProjectCard from "../components/ProjectCard";

export const Project = () => {
  return (
    <section id="project" className="bg-project-section-custom">
      <div className="max-w-[1440px] mx-auto py-[100px] px-[7.5%]">
        <h3 className="text-[30px] font-light">Selected projects</h3>

        <div>
          <ProjectCard
          imageSrc="/images/project-Images.webp"
          title="Project name"
          />
        </div>

      </div>
    </section>
  );
};
