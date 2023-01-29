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
import { CustomTitle } from "components/CustomTitle/CustomTitle";

interface IProps {
  book: IBookDetails;
}

export const FavoritesItem = ({ book }: IProps) => {
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
          <Button onClick={handleAddToCart}>Add to Cart</Button>
        </RateWithBuy>
      </StyledBookItem>
    </>
  );
};
