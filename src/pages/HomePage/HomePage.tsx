import { BooksList } from "components/BooksList/BooksList";
import { CustomTitle } from "components/CustomTitle/CustomTitle";
import { useScroll } from "hooks/useScroll";
import { useEffect } from "react";
import { fetchNewBooks, newBookSelector, useAppDispatch, useAppSelector } from "store";

import { HomePageContainer } from "./styles";

export const HomePage = () => {
  const dispatch = useAppDispatch();
  const books = useAppSelector(newBookSelector);

  useEffect(() => {
    dispatch(fetchNewBooks());
  }, []);

  useScroll();

  return (
    <HomePageContainer>
      <CustomTitle title="New Releases" />
      <BooksList books={books} />
    </HomePageContainer>
  );
};
