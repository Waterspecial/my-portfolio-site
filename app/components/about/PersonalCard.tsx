"use client";
import AboutSubHead from "./AboutSubHead";

const PersonalCard = () => {
  return (
    <div>
      <AboutSubHead title="PERSONAL" />
      <div className="bg-[#080808] border border-[#1f1f1f] rounded-xl px-4 py-2.5 font-medium lg:text-[24px] lg:px-[22px] lg:py-3.5 lg:rounded-[20px] lg:border-2 text-[#828282]">
        <p className="lg:leading-[200%]">
          I specialize in crafting interfaces using modern web technologies like
          HTML, CSS, and JavaScript, along with frameworks such as React and
          Next.js. Beyond writing code, I pay close attention to design details
          — spacing, typography, and motion — to ensure that every project not
          only functions well but also looks and feels polished.
        </p>
        <br />
        <p className="lg:leading-[200%]">
          When I’m not coding, you’ll find me exploring new tools, learning
          about emerging design systems, or refining personal projects. I’m
          always eager to collaborate with teams that share my enthusiasm for
          innovation, creativity, and meaningful user experiences
        </p>
        <br />
        <p className="lg:leading-[200%]">
          When I’m not coding, you’ll find me exploring new tools, learning
          about emerging design systems, or refining personal projects. I’m
          always eager to collaborate with teams that share my enthusiasm for
          innovation, creativity, and meaningful user experiences
        </p>
      </div>
    </div>
  );
};

export default PersonalCard;
