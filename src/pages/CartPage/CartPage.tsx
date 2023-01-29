import { PreviousPage, Cart } from "components";
import { clearCart, getCart, useAppDispatch, useAppSelector } from "store";
import { IBookDetails } from "types";
import { Button, ButtonContainer, StyledCartPage, Title } from "./styles";

export const CartPage = () => {
  const { cart } = useAppSelector(getCart);
  const dispatch = useAppDispatch();

  const handleDeleteAll = () => {
    dispatch(clearCart());
  };

  return (
    <>
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
