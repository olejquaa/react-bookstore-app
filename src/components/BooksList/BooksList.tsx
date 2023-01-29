import { BookCard } from "components/BookCard/BookCard";
import { Loader } from "components/Loader/Loader";
import { IBook } from "types";
import { StyledBooksList } from "./styles";

interface IProps {
  isLoading: boolean;
  error: string | null;
  books: IBook[];
}

export const BooksList = ({ books, isLoading, error }: IProps) => {
  return (
    <>
      {isLoading ? (
        <>
          <Loader />
        </>
      ) : (
        <StyledBooksList>
          {error && <span>{error}</span>}
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
      )}
    </>
  );
};
