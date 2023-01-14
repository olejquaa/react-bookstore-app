import { useState } from "react";
import { ROUTE } from "router";
import { CustomNavLink } from "components";
import { SignInButton, SignUpButton, StyledNavigation } from "./styles";

export const Menu = () => {
  const [isAuth, setAuth] = useState(true);

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
