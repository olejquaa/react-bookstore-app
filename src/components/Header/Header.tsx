import { Logo, Menu } from "components";
import { StyledHeader } from "./styles";

export const Header = () => {
  return (
    <StyledHeader>
      <Logo />
      <div>Search component</div>
      <Menu />
    </StyledHeader>
  );
};
