import { Link } from "react-router-dom";
import { useAppDispatch } from "store";
import { addItem } from "store/slices/cartSlice";
import { addItemToFavorites } from "store";
import { IBookDetails } from "types";
import {
  StyledBookItem,
  ItemBackground,
  Cost,
  SubTitle,
  Title,
  Description,
  RateWithBuy,
  Button,
  TitleContainer,
  ButtonDeleteBook,
  Images,
  StyledDescription,
  StyledSubtitle,
  StyledAuthor,
  StyledYear,
} from "./styles";
import { Rate } from "antd";
import { Popover } from "antd";
import { memo, useState } from "react";

interface IProps {
  book: IBookDetails;
}

export const FavoritesItem = memo(({ book }: IProps) => {
  const [open, setOpen] = useState(false);
  const content = <div>You just added this book to your cart</div>;

  const hide = () => {
    setOpen(false);
  };

  const handleOpenChange = (newOpen: boolean) => {
    setOpen(newOpen);
  };

  const dispatch = useAppDispatch();

  const handleAddToCart = () => {
    return dispatch(addItem(book));
  };
  const handleDeleteBookFromFavorites = () => {
    dispatch(addItemToFavorites(book));
  };

  return (
    <>
      <TitleContainer>
        <Title>{book.title}</Title>
        <ButtonDeleteBook onClick={handleDeleteBookFromFavorites}>✖</ButtonDeleteBook>
      </TitleContainer>
      <StyledBookItem>
        <ItemBackground>
          <Cost>{book.price === "$0.00" ? "free" : book.price}</Cost>
          <Link to={`/book/${book.isbn13}`}>
            <Images src={book.image} alt={book.image} />
          </Link>
        </ItemBackground>
        <SubTitle>
          <Description>
            <StyledSubtitle>{book.subtitle}</StyledSubtitle>
            <StyledDescription>{book.desc}</StyledDescription>
            <StyledAuthor>{book.authors}</StyledAuthor>
            <StyledYear>{book.year}</StyledYear>
          </Description>
        </SubTitle>
        <RateWithBuy>
          <Rate disabled defaultValue={Number(book.rating)} />
          <Popover
            content={<a onClick={hide}>Nice!</a>}
            title="You just added this book to your cart"
            trigger="click"
            open={open}
            onOpenChange={handleOpenChange}
          >
            <Button onClick={handleAddToCart}>Add to Cart</Button>
          </Popover>
        </RateWithBuy>
      </StyledBookItem>
    </>
  );
});
