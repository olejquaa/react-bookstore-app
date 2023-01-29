import { memo } from "react";
import { StyledTitle } from "./styles";

interface IProps {
  title: string | null;
}

export const CustomTitle = memo(({ title }: IProps) => {
  return <StyledTitle>{title}</StyledTitle>;
});
