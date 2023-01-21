import { ROUTE } from "router";
import { CustomNavLink } from "components";
import { SignInButton, SignUpButton, StyledNavigation } from "./styles";
import { accountSelector, useAppSelector } from "store";

export const Menu = () => {
  const { isAuth } = useAppSelector(accountSelector);

  return (
    <StyledNavigation>
      {isAuth ? (
        <CustomNavLink to={ROUTE.FAVORITES}>favorites </CustomNavLink>
      ) : (
        <>
          <CustomNavLink to={ROUTE.SIGN_IN}>
            <SignInButton>Sign In</SignInButton>
          </CustomNavLink>

          <CustomNavLink to={ROUTE.SIGN_UP}>
            <SignUpButton>Sign Up</SignUpButton>
          </CustomNavLink>
        </>
      )}
    </StyledNavigation>
  );
};
