import { ROUTE } from "router";
import { CustomNavLink } from "components";
import { SignInButton, SignUpButton, StyledNavigation } from "./styles";
import { useAppSelector } from "store/hooks/hooks";

export const Menu = () => {
  const { isAuth } = useAppSelector((state: any) => state.account);

  return (
    <StyledNavigation>
      {isAuth ? (
        <>
          <CustomNavLink to={ROUTE.SIGN_IN}>
            <SignInButton>Sign In</SignInButton>
          </CustomNavLink>

          <CustomNavLink to={ROUTE.SIGN_UP}>
            <SignUpButton>Sign Up</SignUpButton>
          </CustomNavLink>
        </>
      ) : (
        <CustomNavLink to={ROUTE.FAVORITES}>favorites </CustomNavLink>
      )}
    </StyledNavigation>
  );
};
