import { StyledTitle } from "./styles";

interface IProps {
  title: string;
}

export const CustomTitle = ({ title }: IProps) => {
  return <StyledTitle> {title}</StyledTitle>;
};
