import ProjectCard from "../components/project/ProjectCard";

export const Project = () => {
  const projectImages = [
    {
      id: 1,
      src: "/images/Project1.webp",
      title: "MYNOOX.COM",
      alt: "Project 1",
    },
    {
      id: 2,
      src: "/images/Project2.webp",
      title: "WWW.ESEMIE.COM",
      alt: "Project 2",
    },
    {
      id: 3,
      src: "/images/Project3.webp",
      title: "WWW.ALLVIUM.NET",
      alt: "Project 3",
    },
    {
      id: 4,
      src: "/images/Project4.webp",
      title: "CUBACLE.VERCEL.APP",
      alt: "Project 4",
    },
  ];

  return (
    <section id="project" className="bg-project">
      <div className="max-w-[1440px] mx-auto pb-8 lg:py-[100px] lg:px-[7.5%] ">
        <h3 className="text-2xl md:text-[30px] font-tektur font-light py-8 px-6">
          Selected projects
        </h3>

        <div className="px-6 space-y-5">
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
