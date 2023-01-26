import { Logo, Menu, Search } from "components";
import { NewSearch } from "components/NewSearch/NewSearch";
import { StyledHeader } from "./styles";

export const Header = () => {
  return (
    <StyledHeader>
      <Logo />
      <Search />
      <NewSearch />
      <Menu />
    </StyledHeader>
  );
};
