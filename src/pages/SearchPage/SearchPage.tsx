import { Pagination } from "antd";
import { BooksList, CustomPagination, CustomTitle, PreviousPage } from "components";
import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector, fetchBooksBySearch } from "store";
import { getBooksBySearch } from "store/selectors/selectors";
import { SearchPageContainer } from "./styles";

export const SearchPage = () => {
  const { searchParams, searchResponse, isLoading, error } = useAppSelector(getBooksBySearch);
  const dispatch = useAppDispatch();
  const [booksPerPage] = useState(10);
  const totalBooks = searchResponse.total;

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
      <CustomPagination booksPerPage={booksPerPage} totalBooks={Number(totalBooks)} />
    </SearchPageContainer>
  );
};
