import { CustomTitle, BooksList } from "components";
import { Subscribe } from "components/Subscribe/Subscribe";
import { useScroll } from "hooks";
import { useEffect } from "react";
import { fetchNewBooks, newBookSelector, useAppDispatch, useAppSelector } from "store";

import { HomePageContainer } from "./styles";

export const HomePage = () => {
  const dispatch = useAppDispatch();
  const { books, isLoading, error } = useAppSelector(newBookSelector);

  useEffect(() => {
    dispatch(fetchNewBooks());
  }, [dispatch]);
  useScroll();

  return (
    <HomePageContainer>
      <CustomTitle title="New Releases" />
      <BooksList books={books} isLoading={isLoading} error={error} />
      <Subscribe />
    </HomePageContainer>
  );
};
