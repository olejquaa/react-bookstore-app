import { Logo, Menu, Search } from "components";
import { StyledHeader } from "./styles";

export const Header = () => {
  return (
    <StyledHeader>
      <Logo />
      <Search />
      <Menu />
    </StyledHeader>
  );
};
