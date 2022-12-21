import { Logo } from "..";
import { Menu, StyledHeader } from "./styles";

export const Header = () => {
  return (
    <StyledHeader>
      <Logo />
      <div>Search component</div>
      <Menu>Menu icons</Menu>
    </StyledHeader>
  );
};
