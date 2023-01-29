import { ROUTE } from "router";
import { CustomNavLink, Search } from "components";
import { Container, SignInButton, SignUpButton, StyledNavigation } from "./styles";
import { accountSelector, useAppSelector } from "store";
import { favoritesImage, cartImage, userImage } from "assets";

export const Menu = () => {
  const { isAuth } = useAppSelector(accountSelector);

  return (
    <StyledNavigation>
      <Search />
      {isAuth ? (
        <Container>
          <CustomNavLink to={ROUTE.FAVORITES}>
            <img src={favoritesImage} alt="favorites" />
          </CustomNavLink>
          <CustomNavLink to={ROUTE.CART}>
            <img src={cartImage} alt="cart" />
          </CustomNavLink>
          <CustomNavLink to={ROUTE.ACCOUNT}>
            <img src={userImage} alt="account" />
          </CustomNavLink>
        </Container>
      ) : (
        <Container>
          <CustomNavLink to={ROUTE.SIGN_IN}>
            <SignInButton>Sign In</SignInButton>
          </CustomNavLink>

          <CustomNavLink to={ROUTE.SIGN_UP}>
            <SignUpButton>Sign Up</SignUpButton>
          </CustomNavLink>
        </Container>
      )}
    </StyledNavigation>
  );
};
