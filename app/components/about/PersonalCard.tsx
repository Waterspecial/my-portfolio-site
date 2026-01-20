"use client";
import AboutSubHead from "./AboutSubHead";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { SplitText } from "gsap/SplitText";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(SplitText, ScrollTrigger);

const PersonalCard = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const splitsRef = useRef<SplitText[]>([]);

  useEffect(() => {
    if (!containerRef.current) return;

    gsap.set(".split", { opacity: 1 });

    const setupSplits = () => {
      const paragraphs = containerRef.current!.querySelectorAll(".split");

 
      paragraphs.forEach((text) => {
        const split = SplitText.create(text as HTMLElement, {
          type: "words,lines",
          linesClass: "line",
          autoSplit: true,
          onSplit: (instance) => {
            gsap.from(instance.lines, {
              yPercent: 120,
              stagger: 0.1,
              scrollTrigger: {
                trigger: text,
                // markers: true,
                scrub: true,
                start: "clamp(top center)",
                end: "clamp(bottom center)",
              },
            });
          },
        });

        // Store the split instance for cleanup
        splitsRef.current.push(split);
      });
    };

    document.fonts.ready.then(() => {
      setupSplits();
    });

    // Cleanup
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      splitsRef.current.forEach((split) => split.revert());
      splitsRef.current = [];
    };
  }, []);


  return (
    <div>
      <AboutSubHead title="PERSONAL" />
      <div 
      ref={containerRef}
      className="bg-[#080808] border border-[#1f1f1f] rounded-xl px-4 py-2.5 font-medium lg:text-[24px] lg:px-5.5 lg:py-3.5 lg:rounded-[20px] lg:border-2 text-[#828282]">
        <p 
        className="lg:leading-[200%] split">
          I specialize in crafting interfaces using modern web technologies like
          HTML, CSS, and JavaScript, along with frameworks such as React and
          Next.js. Beyond writing code, I pay close attention to design details
          — spacing, typography, and motion — to ensure that every project not
          only functions well but also looks and feels polished.
        </p>
        <br />
        <p 
        
        className="lg:leading-[200%] split">
          When I’m not coding, you’ll find me exploring new tools, learning
          about emerging design systems, or refining personal projects. I’m
          always eager to collaborate with teams that share my enthusiasm for
          innovation, creativity, and meaningful user experiences
        </p>
        <br />
        <p className="lg:leading-[200%] split">
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
