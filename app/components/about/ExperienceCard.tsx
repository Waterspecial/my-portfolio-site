interface ExperienceCardProps {
  companyName: string;
  year: string;
  role: string;
  summary?: string;
}

export const ExperienceCard = ({companyName,year, role, summary }: ExperienceCardProps) => {

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-10 font-medium">
        <p>{companyName}</p>
        <p>{year}</p>
      </div>
      <div className="text-sm">{role}</div>
      {summary && <div className="mt-4 text-sm text-[#FFFFFF]">{summary}</div>}
    </div>
  );
};
