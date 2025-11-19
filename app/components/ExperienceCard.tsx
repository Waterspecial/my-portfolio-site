interface ExperienceCardProps {
  companyName: string;
  year: string;
  role: string;
}

export const ExperienceCard = ({companyName,year, role }: ExperienceCardProps) => {

  return (
    <div className="bg-[#191919] py-6 px-5 border-[1.5px] border-[#333333] rounded-[20px]">
      <div className="flex justify-between items-center mb-10 font-medium">
        <p>{companyName}</p>
        <p>{year}</p>
      </div>
      <div className="text-sm">{role}</div>
    </div>
  );
};
