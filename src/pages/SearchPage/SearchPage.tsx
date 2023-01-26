import { BooksList, CustomTitle, PreviousPage } from "components";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector, fetchBooksBySearch, fetchNewBooks } from "store";
import { getBooksBySearch } from "store/selectors/selectors";
import { decrementPage } from "store/slices/searchSlice";
import { pageCounter } from "utils";
import { Carousel } from "antd";
import { SearchPageContainer } from "./styles";

export const SearchPage = () => {
  const { searchParams, searchResponse, isLoading, error } = useAppSelector(getBooksBySearch);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (searchParams.searchValue) {
      dispatch(
        fetchBooksBySearch({
          searchValue: searchParams.searchValue,
          page: searchParams.page,
        }),
      );
    }
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
    </SearchPageContainer>
  );
};
