import { useWindowSize } from "hooks";
import { ROUTE } from "router";
import { accountSelector, logOutUser, useAppDispatch, useAppSelector } from "store";

import { Background, Button, Form, Hr, StyledList, Title } from "./styles";
import { CustomNavLink } from "components/CustomNavLink/CustomNavLink";

interface IProps {
  open?: boolean;
  close?: () => void;
}

export const BurgerPanel = ({ open, close }: IProps) => {
  const { width = 0 } = useWindowSize();
  const dispatch = useAppDispatch();
  const hadleLogOut = () => {
    dispatch(logOutUser());
  };

  const { isAuth } = useAppSelector(accountSelector);

  if (isAuth) {
    return (
      <>
        {width < 801 && (
          <>
            <Background open={open} onClick={close} />
            <StyledList open={open} onClick={close}>
              <Hr />
              <Form>
                <CustomNavLink to={ROUTE.HOME} onClick={close}>
                  <Title>Home</Title>
                </CustomNavLink>
                <CustomNavLink to={ROUTE.ACCOUNT} onClick={close}>
                  <Title>Account</Title>
                </CustomNavLink>
                <CustomNavLink to={ROUTE.FAVORITES} onClick={close}>
                  <Title>FAVORITES</Title>
                </CustomNavLink>
                <CustomNavLink to={ROUTE.CART} onClick={close}>
                  <Title>Cart</Title>
                </CustomNavLink>
                <CustomNavLink to={ROUTE.SEARCH} onClick={close}>
                  <Title>Search</Title>
                </CustomNavLink>
              </Form>
              <CustomNavLink to={ROUTE.HOME} onClick={close}>
                <Button onClick={hadleLogOut}>Log Out</Button>
              </CustomNavLink>
            </StyledList>
          </>
        )}
      </>
    );
  } else {
    return (
      <>
        {width < 801 && (
          <>
            <Background open={open} onClick={close} />
            <StyledList open={open}>
              <Hr />
              <Form onClick={close}>
                <CustomNavLink to={ROUTE.HOME} onClick={close}>
                  <Title>Home</Title>
                </CustomNavLink>
                <CustomNavLink to={ROUTE.SIGN_IN} onClick={close}>
                  <Button>Sign In</Button>
                </CustomNavLink>
                <CustomNavLink to={ROUTE.SIGN_UP} onClick={close}>
                  <Button>Sign up</Button>
                </CustomNavLink>
              </Form>
            </StyledList>
          </>
        )}
      </>
    );
  }
};
