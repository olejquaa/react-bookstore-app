import { PreviousPage, FavoritesItem, CustomTitle } from "components";
import { memo } from "react";
import { getFavorites, useAppSelector } from "store";
import { FavoritesPageContainer, StyledFavorites, Title } from "./styles";

export const FavoritesPage = memo(() => {
  const { item } = useAppSelector(getFavorites);

  return (
    <FavoritesPageContainer>
      <CustomTitle title={"Your favorites"} />
      <PreviousPage />
      <StyledFavorites>
        {item.map((book) => (
          <FavoritesItem book={book} key={book.isbn13} />
        ))}
      </StyledFavorites>
      {item.length === 0 && (
        <StyledFavorites>
          <Title>You don't have favorite books, please add from the store</Title>
        </StyledFavorites>
      )}
    </FavoritesPageContainer>
  );
});
