import { favoritesImage } from "assets";
import { PreviousPage, FavoritesItem } from "components";
import { getFavorites, useAppSelector } from "store";
import { StyledFavorites, StyledTitleFavorites, Title } from "./styles";

export const FavoritesPage = () => {
  const { item } = useAppSelector(getFavorites);

  return (
    <>
      <PreviousPage />
      <StyledFavorites>
        {item.map((book) => (
          <FavoritesItem book={book} key={book.isbn13} />
        ))}
      </StyledFavorites>
      {item.length === 0 && (
        <StyledTitleFavorites>
          <Title>You don't have favorite books, please add from the store</Title>
          <img src={favoritesImage} alt="favorite" />
        </StyledTitleFavorites>
      )}
    </>
  );
};
