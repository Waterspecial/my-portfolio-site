interface AboutSubHeadProps {
  title: string;
}

export default function AboutSubHead({ title }: AboutSubHeadProps) {
  return (
    <div className="bg-[#080808] border border-[#1F1F1F] text-[#E6E6E6] font-medium text-[40px] text-center py-5 rounded-xl mb-2.5 font-tektur lg:rounded-[20px] lg:border-2 lg:text-[50px] lg:py-[29px] lg:mb-4">
      {title}
    </div>
  );
}
