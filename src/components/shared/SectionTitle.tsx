import { SectionTitleProps } from "@/types";

function SectionTitle({ subtitle, title, description }: SectionTitleProps) {
  return (
    <div className="text-center space-y-1 md:w-6/12 mx-auto px-4">
      <h3 className="text-secondary text-sm lg:text-xl bg-[#749B3F1A] px-2 py-1 rounded-md inline-block font-semibold">
        {subtitle}
      </h3>
      <h1 className="text-xl md:text-3xl lg:text-5xl">{title}</h1>
      <p className="text-xs lg:text-sm text-[#4A4A52]">{description}</p>
    </div>
  );
}

export default SectionTitle;
