"use client";


import ProjectCard from "../components/project/ProjectCard";
import { projectImages } from "../constant/about";
import { motion } from "framer-motion";

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

export const Project = () => {


  return (
    <section id="projects" className="bg-project">
      <div className="max-w-360 mx-auto pb-8 lg:py-25 lg:px-13">
        <h3 className="text-2xl lg:text-[48px] font-tektur font-light lg:font-medium py-8 px-6">
          Selected projects
        </h3>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="px-6 space-y-5 w-full lg:flex flex-wrap gap-6"
        >
          {projectImages.map((projectImage) => (
            <ProjectCard
              key={projectImage.id}
              imageSrc={projectImage.src}
              title={projectImage.title}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
};
