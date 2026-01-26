"use client";
import Image from "next/image";
import { motion, useMotionValue, useSpring } from "framer-motion";
import React, { useState } from "react";
import { LInkIcon } from "@/app/icons/LInkIcon";

interface ProjectCardProps {
  imageSrc: string;
  title: string;
}

export default function ProjectCard({ imageSrc, title }: ProjectCardProps) {
  const [hovered, setHovered] = useState(false);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const smoothX = useSpring(mouseX, { stiffness: 300, damping: 35 });
  const smoothY = useSpring(mouseY, { stiffness: 300, damping: 35 });
  
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    mouseX.set(e.clientX - rect.left - 40);
    mouseY.set(e.clientY - rect.top - 40);
  };


  return (
    <motion.div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onMouseMove={handleMouseMove}
      className={`relative w-full max-w-125 md:w-[calc(50%-1rem)] lg:max-w-164 `}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      whileHover={{ y: -6 }}
    >
      {hovered && (
        <motion.div
          className="absolute z-20 flex items-center justify-center rounded-full bg-[#EDEDED] text-black font-semibold text-[16px] cursor-pointer"
          style={{
            left: smoothX,
            top: smoothY,
            width: 80,
            height: 80,
            transform: "translate(-50%, -50%)",
          }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0, opacity: 0 }}
          transition={{ duration: 0.2, ease: "easeOut" }}
        >
        
        </motion.div>
      )}

      {/* Image */}
      <div className="bg-black w-full border-t-[1.5px] border-[#1A1A1A] rounded-t-[12px] pt-23 px-8 lg:px-9.5 overflow-hidden">
        <motion.div
          className="relative w-full h-40 lg:h-68.75"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          style={{
            x: smoothX.get() * -0.003,
            y: smoothY.get() * -0.003,
          }}
        >
          <Image
            src={imageSrc}
            alt={title}
            fill
            className="object-cover rounded-t-2xl"
          />
        </motion.div>
      </div>

      {/* Footer */}
      <div className="bg-black px-6 py-4 lg:py-6 border-[1.5px] border-[#1a1a1a] rounded-b-[20px] w-full">
        <h3 className="text-[#E6E6E6] text-sm lg:text-[16px] font-medium bg-[#1F1F1F] border-[1.5px] border-[#666666] rounded-[20px] font-lora py-2 lg:py-2.5 px-4 lg:px-5 w-fit">
          {title}
        </h3>
      </div>
    </motion.div>
  );
}
