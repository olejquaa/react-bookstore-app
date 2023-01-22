// BOOKS
export interface INewBooks {
  total: string;
  books: IBook[];
}

export interface INewBooksResponse {
  error: string | null;
  total: string | null;
  books: INewBooks[];
}

export interface ISearchBook {
  total: string;
  page: string;
  books: IBook[];
  error?: string;
}

export interface IBookDetails {
  error: string;
  title: string;
  subtitle: string;
  authors: string;
  publisher: string;
  isbn10: string;
  isbn13: string;
  pages: string;
  year: string;
  rating: string;
  desc: string;
  price: string;
  image: string;
  url: string;
  pdf: IBookFormat;
}

export interface IBookFormat {
  [format: string]: string;
}

export interface ISearchBooksResponse {
  error: string | null;
  total: string | null;
  page: string | null;
  books: ISearchBook[];
}

export interface IBook {
  title: string;
  subtitle: string;
  isbn13: string;
  price: string;
  image: string;
  url: string;
}

// ACCOUNT
export interface IAccount {
  id: null | string;
  name: null | string;
  email: null | string;
  token: null | string;
  avatar: null | string;
  isAuth: boolean;
  error: null | string;
}
