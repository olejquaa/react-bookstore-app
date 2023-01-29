import { BurgerMenu, Logo, Menu } from "components";
import { StyledHeader } from "./styles";
import { useWindowSize } from "hooks";

export const Header = () => {
  const { width = 0 } = useWindowSize();
  return (
    <StyledHeader>
      <Logo />
      {width > 801 ? <Menu /> : <BurgerMenu />}
    </StyledHeader>
  );
};
