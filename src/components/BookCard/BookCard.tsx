import { IBook } from "types";
import { Cost, ItemBackground, StyledBookItem, Title, Image, StyledLink } from "./styles";

export const BookCard = ({ isbn13, price, image, title }: IBook) => {
  return (
    <StyledBookItem>
      <StyledLink to={`/book/${isbn13}`}>
        <ItemBackground>
          <Cost>{price === "$0.00" ? "free" : price}</Cost>
          <Image src={image} alt={image} />
        </ItemBackground>
      </StyledLink>
      <Title>{title}</Title>
    </StyledBookItem>
  );
};
