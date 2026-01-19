"use client";
import Image from "next/image";

interface ProjectCardProps {
  imageSrc: string;
  title: string;
}

export default function ProjectCard({ imageSrc, title }: ProjectCardProps) {
  return (
    <div className=" w-full max-w-[500px] md:w-[calc(50%-1rem)] lg:max-w-[656px]">
      {/* Image */}
      <div className="bg-[#000000] w-full border-t-[1.5px] border-[#1A1A1A] rounded-t-[20px] pt-[92px] lg:pt-[120px] px-8 lg:px-[38px]">
        <div className="relative w-full h-40 lg:h-[275px]">
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
      <div className="bg-black px-6 py-4 lg:py-6 border-[1.5px] border-[#1a1a1a] rounded-b-[20px] w-full">
        <h3 className="text-[#E6E6E6] text-sm lg:text-[16px] font-medium bg-[#1F1F1F] border-[1.5px] border-[#666666] rounded-[20px] font-lora py-2 lg:py-2.5 px-4 lg:px-5 w-fit">
          {title}
        </h3>
      </div>
    </div>
  );
}
