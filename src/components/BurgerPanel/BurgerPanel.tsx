import { Link } from "react-router-dom";
import { useWindowSize } from "hooks";
import { ROUTE } from "router";
import { accountSelector, logOutUser, removeUser, useAppDispatch, useAppSelector } from "store";

import { Background, Button, Form, Hr, StyledList, Title } from "./styles";

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
            <StyledList open={open}>
              <Hr />
              <Form>
                <Link to={ROUTE.FAVORITES} onClick={close}>
                  <Title>FAVORITES</Title>
                </Link>
                <Link to={ROUTE.ACCOUNT} onClick={close}>
                  <Title>Account</Title>
                </Link>
                <Link to={ROUTE.SEARCH} onClick={close}>
                  <Title>Search</Title>
                </Link>
                <Link to={ROUTE.HOME} onClick={close}>
                  <Title>Home</Title>
                </Link>
                <Link to={ROUTE.CART} onClick={close}>
                  <Title>Cart</Title>
                </Link>
              </Form>
              <Link to={ROUTE.HOME} onClick={close}>
                <Button onClick={hadleLogOut}>Log Out</Button>
              </Link>
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
            <Background open={open} />
            <StyledList open={open}>
              <Hr />
              <Form>
                <Link to={ROUTE.HOME} onClick={close}>
                  <Title>Home</Title>
                </Link>
                <Link to={ROUTE.SIGN_IN} onClick={close}>
                  <Button>Sign In</Button>
                </Link>
                <Link to={ROUTE.SIGN_UP} onClick={close}>
                  <Button>Sign up</Button>
                </Link>
              </Form>
            </StyledList>
          </>
        )}
      </>
    );
  }
};
