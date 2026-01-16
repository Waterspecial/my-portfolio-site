"use client";
import Image from "next/image";

interface ProjectCardProps {
    imageSrc: string;
    title: string;
  }

export default function ProjectCard({ imageSrc, title }: ProjectCardProps) {
  return (
    <div className=" w-full max-w-[500px]">
      {/* Image */}
      <div className="bg-[#000000] w-full border-t-[1.5px] border-[#1A1A1A] rounded-t-[20px] pt-[92px] lg:pt-[138px] px-8 ">
        <div className="relative w-full h-40">
        <Image
          src={imageSrc}
          alt={title}
          // height={500}
          fill
          className="object-cover rounded-t-2xl transition-transform duration-300 hover:scale-105"
        />
        </div>
      </div>

      {/* Footer */}
      <div className="bg-black px-6 py-4 border-[1.5px] border-[#1a1a1a] rounded-b-[20px] w-full">
        <h3 className="text-[#E6E6E6] text-sm font-medium bg-[#1F1F1F] border-[1.5px] border-[#666666] rounded-[20px] font-satoshi py-2 px-4 w-fit">
          {title}
        </h3>
      </div>
    </div>
  );
}
