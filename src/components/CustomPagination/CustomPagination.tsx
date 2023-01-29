import { arrowImage } from "assets";
import { useScroll } from "hooks";
import { memo } from "react";
import { getBooksBySearch, useAppDispatch, useAppSelector } from "store";
import { setPage } from "store/slices/searchSlice";
import {
  NextArrowImage,
  NextPageButton,
  Page,
  Pages,
  PaginationContainer,
  PrevArrowImage,
  PreviousPageButton,
} from "./styles";

interface IProps {
  booksPerPage: number;
  totalBooks: number;
}

export const CustomPagination = memo(({ booksPerPage, totalBooks }: IProps) => {
  const { searchParams } = useAppSelector(getBooksBySearch);
  const dispatch = useAppDispatch();
  const pageNumbers: number[] = [];
  const currentPage = searchParams.page;

  const handleClick = (number: number) => {
    dispatch(setPage(String(number)));
  };

  const handlePrev = () => {
    if (currentPage && currentPage > 1) {
      handleClick(currentPage - 1);
    }
  };
  const handleNext = () => {
    if (currentPage && currentPage < pageNumbers.length) {
      handleClick(Number(currentPage) + 1);
    }
  };

  for (let index = 1; index <= Math.ceil(totalBooks / booksPerPage); index++) {
    pageNumbers.push(index);
  }

  useScroll();
  return (
    <PaginationContainer>
      Current page {currentPage}
      <PreviousPageButton onClick={handlePrev}>
        <PrevArrowImage src={arrowImage}></PrevArrowImage>
        Prev
      </PreviousPageButton>
      <Pages>
        {pageNumbers.map((number) => (
          <Page
            key={number}
            id={String(number)}
            onClick={(e) => handleClick(Number(e.currentTarget.id))}
          >
            {number}
          </Page>
        ))}
      </Pages>
      <NextPageButton onClick={handleNext}>
        next
        <NextArrowImage src={arrowImage}></NextArrowImage>
      </NextPageButton>
    </PaginationContainer>
  );
});
