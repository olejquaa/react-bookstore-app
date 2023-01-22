import { IBook } from "types";
import {
  Cost,
  CardBackground,
  Title,
  Image,
  StyledLink,
  CardContainer,
  CardImage,
  RatingContainer,
} from "./styles";

export const BookCard = ({ isbn13, price, image, title }: IBook) => {
  return (
    <CardContainer>
      <StyledLink to={`/book/${isbn13}`}>
        <CardImage>
          <CardBackground>
            <Image src={image} alt={image} />
          </CardBackground>
        </CardImage>
        <Title>{title}</Title>

        <RatingContainer>
          <Cost>{price === "$0.00" ? "free" : price}</Cost>
          {"✩✩✩✩✩"}
        </RatingContainer>
      </StyledLink>
    </CardContainer>
  );
};
