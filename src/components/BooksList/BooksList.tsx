import { BookCard } from "components/BookCard/BookCard";
import { IBook } from "types";
import { StyledBooksList } from "./styles";

interface IProps {
  books: IBook[];
}

export const BooksList = ({ books }: IProps) => {
  return (
    <StyledBooksList>
      {/* {error && <ErrorMessage text={error} />} */}
      {books.map((book) => {
        return (
          <BookCard
            isbn13={book.isbn13}
            image={book.image}
            price={book.price}
            subtitle={book.subtitle}
            title={book.title}
            url={book.url}
          />
        );
      })}
    </StyledBooksList>
  );
};
