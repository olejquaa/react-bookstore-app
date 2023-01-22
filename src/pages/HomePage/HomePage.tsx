import { BooksList } from "components/BooksList/BooksList";
import { useEffect } from "react";
import { fetchNewBooks, newBookSelector, useAppDispatch, useAppSelector } from "store";

import {
  HomePageContainer,
  Title,
  Subtitle,
  H3,
  Subline,
  BodyPrimary,
  BodySecondary,
} from "./styles";

export const HomePage = () => {
  const dispatch = useAppDispatch();
  const books = useAppSelector(newBookSelector);

  useEffect(() => {
    dispatch(fetchNewBooks());
  }, []);

  return (
    <HomePageContainer>
      <Title>New realeses books</Title>
      <BooksList books={books} />
    </HomePageContainer>
  );
};
