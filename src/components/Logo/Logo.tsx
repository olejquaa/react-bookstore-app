import { ROUTE } from "../../router";
import { CustomNavLink } from "../../components";
import { StyledLogo } from "./styles";

export const Logo = () => {
  return (
    <CustomNavLink to={ROUTE.HOME}>
      <StyledLogo />
    </CustomNavLink>
  );
};
