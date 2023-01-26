import AsyncSelect from "react-select/async";
import { useAppDispatch, useAppSelector } from "store";
import { getBooksBySearch } from "store/selectors/selectors";

export interface BookOption {
  label: string;
}

export const booksOptions: BookOption[] = [{ label: "ocean" }];

const filterBooks = (inputValue: string) => {
  return booksOptions.filter((i) => i.label.toLowerCase().includes(inputValue.toLowerCase()));
};

const loadOptions = (inputValue: string, callback: (options: BookOption[]) => void) => {
  setTimeout(() => {
    callback(filterBooks(inputValue));
  }, 1000);
};

export const NewSearch = () => {
  const { searchParams, searchResponse, isLoading, error } = useAppSelector(getBooksBySearch);
  const newBook = searchResponse.books.map((book) => book.title);
  console.log(newBook);
  return <AsyncSelect cacheOptions loadOptions={loadOptions} defaultOptions />;
};
