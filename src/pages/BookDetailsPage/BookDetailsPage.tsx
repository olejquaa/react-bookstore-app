import { ConfigProvider, Rate } from "antd";
import { CustomTitle } from "components/CustomTitle/CustomTitle";
import { PreviousPage } from "components";
import { TabsPanel } from "components/TabsPanel/TabsPanel";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchBookDetails, getBookDetails, useAppDispatch, useAppSelector } from "store";
import { Color } from "ui";
import {
  BookDetailsPageContainer,
  CardBackground,
  CardImage,
  Image,
  DescriptionContainer,
  Title,
  Container,
  GridContainer,
  Cost,
  StyledText,
  Link,
  StyledButton,
} from "./styles";
import { useScroll } from "hooks/useScroll";

export const BookDetailsPage = () => {
  const { isbn = "" } = useParams();
  const dispatch = useAppDispatch();
  const {
    error,
    title,
    subtitle,
    authors,
    publisher,
    isbn10,
    isbn13,
    pages,
    year,
    rating,
    desc,
    price,
    image,
    url,
    pdf,
  } = useAppSelector(getBookDetails);
  const [details, setDetails] = useState<boolean>(false);

  useScroll();
  useEffect(() => {
    dispatch(fetchBookDetails(isbn));
  }, [isbn, dispatch]);

  const handleDetails = () => {
    setDetails((details) => !details);
  };

  return (
    <BookDetailsPageContainer>
      <PreviousPage />
      <CustomTitle title={title} />
      <GridContainer>
        <Container>
          <CardImage>
            <CardBackground>
              <Image src={image} alt={image} />
            </CardBackground>
          </CardImage>
        </Container>

        <Container>
          <Cost>
            {price === "$0.00" ? "free" : price} <Rate disabled defaultValue={Number(rating)} />
          </Cost>

          <Container>
            <StyledText>
              Authors: <Title>{authors}</Title>
            </StyledText>

            <StyledText>
              Publisher: <Title>{publisher}</Title>
            </StyledText>

            <StyledText>
              Pages: <Title>{pages}</Title>
            </StyledText>

            <StyledText>
              Year: <Title>{year}</Title>
            </StyledText>

            <StyledText>
              Format: <Title> Paper book / ebook (PDF)</Title>
            </StyledText>

            <StyledText>
              Link: <Link href={url}>more details</Link>
            </StyledText>
            <StyledButton>Add to cart</StyledButton>
          </Container>
        </Container>
      </GridContainer>
      <ConfigProvider
        theme={{
          token: {
            colorPrimary: Color.PRYMARY,
          },
        }}
      >
        <TabsPanel
          defaultActiveKey="Description"
          items={[
            {
              key: "Description",
              label: <Title>Description</Title>,
              children: <DescriptionContainer>{desc}</DescriptionContainer>,
            },
            {
              key: "Authors",
              label: <Title>Authors</Title>,
              children: <DescriptionContainer>{authors}</DescriptionContainer>,
            },
          ]}
        />
      </ConfigProvider>
    </BookDetailsPageContainer>
  );
};
