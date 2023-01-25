import { StyledTitle } from "./styles";

interface IProps {
  title: string | null;
}

export const CustomTitle = ({ title }: IProps) => {
  return <StyledTitle>{title}</StyledTitle>;
};
