import { Carousel } from "antd";
import { IBook } from "types";
import {
  Item,
  SlideContainer,
  SliderContainer,
  Title,
  Image,
  SubTitle,
  Container,
  Button,
} from "./styles";

interface IProps {
  books: IBook[];
}

export const CustomSlider = ({ books }: IProps) => {
  return (
    <Container>
      <SliderContainer>
        <Carousel autoplay>
          {books.map(({ isbn13, image, price, subtitle, title, url }) => {
            return (
              <SlideContainer>
                <Item>
                  <Title>{title}</Title>
                  <Image src={image}></Image>
                  <SubTitle>{price}</SubTitle>
                </Item>
              </SlideContainer>
            );
          })}
        </Carousel>
      </SliderContainer>
    </Container>
  );
};
