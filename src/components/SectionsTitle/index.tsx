import { SectionsTitleProps } from "./types";

export const SectionsTitle = ({ title }: SectionsTitleProps) => {
  return (
    <div className="flex mb-5 uppercase tracking-wide">
      <h2 className="font-bold text-lime-700">{title}</h2>
    </div>
  );
};
