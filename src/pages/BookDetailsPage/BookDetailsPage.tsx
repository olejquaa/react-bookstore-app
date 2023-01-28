import { ConfigProvider, Rate } from "antd";
import { CustomTitle } from "components/CustomTitle/CustomTitle";
import { CustomNavLink, PreviousPage } from "components";
import { TabsPanel } from "components/TabsPanel/TabsPanel";
import { useEffect } from "react";
import { generatePath, useParams } from "react-router-dom";
import {
  addItem,
  addItemToFavorites,
  fetchBookDetails,
  getBookDetails,
  setFavorite,
  useAppDispatch,
  useAppSelector,
} from "store";
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
import { ROUTE } from "router";

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
    isFavorites,
  } = useAppSelector(getBookDetails);

  useEffect(() => {
    dispatch(fetchBookDetails(isbn));
    dispatch(useScroll);
  }, [isbn, dispatch]);

  const addCart = () => {
    dispatch(
      addItem({
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
      }),
    );
  };

  const addFavorites = () => {
    dispatch(setFavorite());
    dispatch(
      addItemToFavorites({
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
        isFavorites,
      }),
    );
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

            {!isFavorites ? (
              <StyledButton onClick={addFavorites}>add to favorites</StyledButton>
            ) : (
              <CustomNavLink to={generatePath(ROUTE.HOME + ROUTE.FAVORITES)}>
                <StyledButton>show my favorites</StyledButton>
              </CustomNavLink>
            )}

            <StyledButton onClick={addCart}>Add to cart</StyledButton>
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
