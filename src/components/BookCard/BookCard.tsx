import { Button } from "antd";
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
  Subtitle,
} from "./styles";

export const BookCard = ({ isbn13, price, image, title, subtitle }: IBook) => {
  return (
    <CardContainer key={isbn13}>
      <Title>{title}</Title>
      <StyledLink to={`/book/${isbn13}`}>
        <CardImage>
          <CardBackground>
            <Image src={image} alt={image} />
          </CardBackground>
        </CardImage>

        <Subtitle>{subtitle}</Subtitle>

        <RatingContainer>
          <Cost>{price === "$0.00" ? "free" : price}</Cost>
        </RatingContainer>
      </StyledLink>
    </CardContainer>
  );
};
