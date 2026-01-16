interface AboutSubHeadProps {
  title: string;
}

export default function AboutSubHead({ title }: AboutSubHeadProps) {
  return (
    <div className="bg-[#080808] border border-[#1F1F1F] font-medium text-[40px] text-center py-5 rounded-xl mb-2.5 font-tektur">
      {title}
    </div>
  );
}
