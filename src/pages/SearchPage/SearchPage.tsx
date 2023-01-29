import {
  BooksList,
  CustomPagination,
  CustomSlider,
  CustomTitle,
  PreviousPage,
  Search,
  Subscribe,
} from "components";
import { useWindowSize } from "hooks";
import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector, fetchBooksBySearch } from "store";
import { getBooksBySearch } from "store/selectors/selectors";
import { Container, SearchPageContainer } from "./styles";

export const SearchPage = () => {
  const { searchParams, searchResponse, isLoading, error } = useAppSelector(getBooksBySearch);
  const dispatch = useAppDispatch();
  const [booksPerPage] = useState(10);
  const totalBooks = searchResponse.total;
  const { width = 0 } = useWindowSize();

  useEffect(() => {
    dispatch(
      fetchBooksBySearch({
        searchValue: searchParams.searchValue,
        page: searchParams.page,
      }),
    );
  }, [dispatch, searchParams]);

  return (
    <>
      {width < 801 && (
        <Container>
          <Search />
        </Container>
      )}
      {searchResponse.books && searchResponse.books.length > 1 ? (
        <>
          <SearchPageContainer>
            <PreviousPage />
            <CustomTitle
              title={
                searchParams.searchValue &&
                // eslint-disable-next-line no-useless-concat
                " ' " + searchParams.searchValue + " ' " + "search result"
              }
            />
            {searchParams.searchValue && (
              <BooksList books={searchResponse.books} isLoading={isLoading} error={error} />
            )}
            <CustomPagination booksPerPage={booksPerPage} totalBooks={Number(totalBooks)} />
            <Subscribe />
          </SearchPageContainer>
          <CustomSlider books={searchResponse.books} />
        </>
      ) : (
        <>
          <span>No books to show</span>
          <Subscribe />
        </>
      )}
    </>
  );
};
