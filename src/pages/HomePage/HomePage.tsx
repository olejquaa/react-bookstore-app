import { Pagination } from "antd";
import { CustomTitle, BooksList } from "components";
import { CustomPagination } from "components/CustomPagination/CustomPagination";
import { Paginate } from "components/Paginate/Paginate";
import { Subscribe } from "components/Subscribe/Subscribe";
import { useScroll } from "hooks";
import { useEffect, useState } from "react";
import { fetchNewBooks, newBookSelector, useAppDispatch, useAppSelector } from "store";

import { HomePageContainer } from "./styles";

export const HomePage = () => {
  const dispatch = useAppDispatch();
  const { books, isLoading, error } = useAppSelector(newBookSelector);
  const [currentPage, setCurrentPage] = useState(1);
  const [booksPerPage] = useState(12);

  const totalBooks = books.length;
  const lastBookIndex = currentPage * booksPerPage;
  const firstBookIndex = lastBookIndex - booksPerPage;
  const currentBook = books.slice(firstBookIndex, lastBookIndex);

  useEffect(() => {
    dispatch(fetchNewBooks());
  }, [dispatch]);

  useScroll();

  return (
    <HomePageContainer>
      <CustomTitle title="New Releases" />
      <BooksList books={currentBook} isLoading={isLoading} error={error} />
      <Subscribe />
      <Paginate booksPerPage={booksPerPage} totalBooks={totalBooks} />;
    </HomePageContainer>
  );
};
