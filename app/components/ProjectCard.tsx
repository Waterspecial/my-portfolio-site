"use client";
import Image from "next/image";

interface ProjectCardProps {
    imageSrc: string;
    title: string;
  }

export default function ProjectCard({ imageSrc, title }: ProjectCardProps) {
  return (
    <div className="bg-[#000000] rounded-[20px] w-full max-w-[500px] pt-[138px]">
      {/* Image */}
      <div className="w-full mx-[70px]">
        <Image
          src={imageSrc}
          alt={title}
          width={460}
          height={500}
          className="object-cover rounded-t-2xl transition-transform duration-300 hover:scale-105"
        />
      </div>

      {/* Footer */}
      <div className="bg-black px-6 py-4">
        <h3 className="text-[#E6E6E6] text-lg font-light tracking-wide">
          {title}
        </h3>
      </div>
    </div>
  );
}
