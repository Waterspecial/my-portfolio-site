import AboutSubHead from "./AboutSubHead";

const EducationCard = () => {
  return (
    <div className="mt-5">
      <AboutSubHead title="EDUCATION" />
      <div className="border border-[#1F1F1F] rounded-[20px] bg-[#080808] p-6">
        <div className="text-[#828282] text-sm lg:text-[24px]">
          <p className="mt-4 lg:leading-[200%]">
            I hold an MSc in Software Engineering from the University of
            Salford, where I deepened my expertise in designing, building, and
            maintaining scalable software systems through both theoretical study
            and practical projects.
          </p>
          <br />
          <p className="mt-4 lg:leading-[200%]">
            I also earned a BSc in Computer Engineering from Obafemi Awolowo
            University, which provided a strong foundation in computing
            principles, problem-solving, and engineering-focused software
            development.
          </p>
        </div>
      </div>
    </div>
  );
};

export default EducationCard;
