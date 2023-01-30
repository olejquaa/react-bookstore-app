import { ROUTE } from "router";
import { CustomNavLink, Search } from "components";
import { Container, SignInButton, SignUpButton, StyledNavigation } from "./styles";
import { accountSelector, getCart, getFavorites, useAppSelector } from "store";
import { favoritesImage, cartImage, userImage, fullCartImage, fullFavorites } from "assets";

export const Menu = () => {
  const { isAuth } = useAppSelector(accountSelector);
  const { cart } = useAppSelector(getCart);
  const { item } = useAppSelector(getFavorites);

  return (
    <StyledNavigation>
      <Search />
      {isAuth ? (
        <Container>
          <CustomNavLink to={ROUTE.FAVORITES}>
            {item.length > 0 ? (
              <img src={fullFavorites} alt="favorites" />
            ) : (
              <img src={favoritesImage} alt="favorites" />
            )}
          </CustomNavLink>
          <CustomNavLink to={ROUTE.CART}>
            {cart.length > 0 ? (
              <img src={fullCartImage} alt="cart" />
            ) : (
              <img src={cartImage} alt="cart" />
            )}
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
