interface ExperienceCardProps {
  summary: string;
  year: string;
}

export const ExperienceCard = ({ year, summary }: ExperienceCardProps) => {
  return (
    <div className="px-3 py-1 lg:text-[24px] text-[#E6E6E6] lg:mt-10 lg:space-y-1.5">
      <p className="font-semibold">{summary}</p>
      <div className="text-sm lg:text-[20px] font-medium">{year}</div>
    </div>
  );
};
