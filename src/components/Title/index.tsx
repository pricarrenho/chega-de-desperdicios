import { TitleProps } from "./types";

export const Title = ({ title }: TitleProps) => {
  return <h1 className="font-bold text-4xl text-white">{title}</h1>;
};
