import { IBook, IBookDetails } from "types";

export type NewBooks = {
  books: IBook[];
  error: null | string;
  isLoading: boolean;
};

export type BookDetails = {
  book: IBookDetails;
  error: null | string;
  isLoading: boolean;
  amount: number | null;
};

export type SearchParams = {
  searchValue: string | null;
  page?: null | number;
};

export type FavoritesState = {
  item: IBookDetails[];
};

export type CartState = {
  isLoading: boolean;
  amount: {
    [isbn: string]: number;
  };
  cart: IBookDetails[];
};
