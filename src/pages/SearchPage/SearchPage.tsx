import { BooksList, CustomTitle, PreviousPage } from "components";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector, fetchBooksBySearch } from "store";
import { getBooksBySearch } from "store/selectors/selectors";
import { decrementPage } from "store/slices/searchSlice";
import { pageCounter } from "utils";
import { Container, Next, NextText, Previous, PrevText, SearchPageContainer } from "./styles";

export const SearchPage = () => {
  const { searchParams, searchResponse, isLoading, error } = useAppSelector(getBooksBySearch);
  const dispatch = useAppDispatch();

  const handleNext = () => {
    if (
      searchParams.page &&
      searchResponse.total &&
      pageCounter(searchResponse.total) > Number(searchParams.page)
    ) {
      dispatch(decrementPage(Number(searchParams.page) + 1));
    }
  };

  const handlePrev = () => {
    if (searchParams.page && Number(searchParams.page) > 1)
      dispatch(decrementPage(Number(searchParams.page)));
  };

  useEffect(() => {
    dispatch(
      fetchBooksBySearch({
        searchValue: searchParams.searchValue,
        page: searchParams.page,
      }),
    );
  }, [dispatch, searchParams]);

  return (
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
      <Container>
        <Previous onClick={handlePrev}>
          <PrevText>Prev</PrevText>
        </Previous>
        <Next onClick={handleNext}>
          <NextText>Next</NextText>
        </Next>
      </Container>
    </SearchPageContainer>
  );
};
