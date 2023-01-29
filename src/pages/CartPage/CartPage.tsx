import { notification } from "antd";
import { PreviousPage, Cart } from "components";
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

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  const handleConfirmOrder = () => {
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
            <ButtonContainer
              initial={{ y: 1000 }}
              animate={{ y: 0, opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <Button onClick={handleClearCart}>Clear cart</Button>

              <Button onClick={handleConfirmOrder}>Confirm the order</Button>
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
