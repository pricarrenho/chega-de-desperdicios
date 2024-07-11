import { TitleProps } from "./types";

export const Title = ({ titleName }: TitleProps) => {
  return <h1 className="font-bold text-4xl text-white">{titleName}</h1>;
};
