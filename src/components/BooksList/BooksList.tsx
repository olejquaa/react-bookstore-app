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
      {books.map(({ isbn13, image, price, subtitle, title, url }) => {
        return (
          <BookCard
            key={isbn13}
            isbn13={isbn13}
            image={image}
            price={price}
            subtitle={subtitle}
            title={title}
            url={url}
          />
        );
      })}
    </StyledBooksList>
  );
};
