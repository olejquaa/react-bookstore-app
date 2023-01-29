import { useWindowSize } from "hooks";
import { memo } from "react";
import { Link } from "react-router-dom";
import { getCart, useAppDispatch, useAppSelector } from "store";
import { countPlus, countMinus, removeItem } from "store/slices/cartSlice";
import { IBookDetails } from "types";
import {
  Button,
  ButtonCount,
  Container,
  ContainerTitle,
  Cost,
  CostContainer,
  Count,
  CountContainer,
  Images,
  StyledCart,
  Subtitle,
  Title,
} from "./styles";

interface IProps {
  book: IBookDetails;
}

export const Cart = memo(({ book }: IProps) => {
  const { amount } = useAppSelector(getCart);
  const { width = 0 } = useWindowSize();

  const dispatch = useAppDispatch();

  const handleCountPlus = () => {
    dispatch(countPlus(book));
  };
  const handleCountMinus = () => {
    dispatch(countMinus(book));
  };

  const handleDeleteBook = () => {
    dispatch(removeItem(book));
  };
  return (
    <>
      <StyledCart>
        <Container>
          <Link to={`/book/${book.isbn13}`}>
            <Images src={book.image} alt={book.image} />
          </Link>
          <ContainerTitle>
            <Title>{book.title}</Title>
            <Subtitle>{book.authors}</Subtitle>
          </ContainerTitle>
        </Container>
        <CountContainer>
          <ButtonCount onClick={handleCountMinus}>-</ButtonCount>
          <Count>
            <Subtitle>{amount[book.isbn13]}</Subtitle>
          </Count>
          <ButtonCount onClick={handleCountPlus}>+</ButtonCount>
        </CountContainer>
        <CostContainer>
          <Cost>
            {book.price === "$0.00"
              ? "free"
              : amount[book.isbn13] * Math.round(Number(book.price.slice(1))) + "$"}
          </Cost>
        </CostContainer>
        {width < 801 ? (
          <Button onClick={handleDeleteBook}>Delete from cart</Button>
        ) : (
          <Button onClick={handleDeleteBook}>✖</Button>
        )}
      </StyledCart>
    </>
  );
});
