import { notification, Popover } from "antd";
import { PreviousPage, Cart, CustomNotification } from "components";
import { useState } from "react";
import { clearCart, getCart, useAppDispatch, useAppSelector } from "store";
import { IBookDetails } from "types";
import { Button, ButtonContainer, StyledCartPage, Title } from "./styles";

type NotificationType = "success" | "info" | "warning" | "error";

export const CartPage = () => {
  const [api, contextHolder] = notification.useNotification();

  const openNotificationWithIcon = (type: NotificationType) => {
    api[type]({
      message: "OrderConfirmed!",
      description: "We will call you later",
    });
  };

  const { cart } = useAppSelector(getCart);
  const dispatch = useAppDispatch();

  const handleDeleteAll = () => {
    openNotificationWithIcon("success");
    dispatch(clearCart());
  };

  return (
    <>
      {contextHolder}
      <PreviousPage />
      {cart && (
        <StyledCartPage>
          {cart.map((book: IBookDetails) => (
            <Cart book={book} key={book.isbn13}></Cart>
          ))}
          {cart.length > 0 && (
            <ButtonContainer>
              <Button onClick={handleDeleteAll}>Clear cart</Button>

              <Button onClick={handleDeleteAll}>Confirm the order</Button>
            </ButtonContainer>
          )}
        </StyledCartPage>
      )}
      {cart.length === 0 && (
        <StyledCartPage>
          <Title>Your cart is empty</Title>
        </StyledCartPage>
      )}
    </>
  );
};
