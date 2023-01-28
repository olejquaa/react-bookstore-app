import { BlobOptions } from "buffer";

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

export interface ISearchBooksResponse {
  total: null | string;
  page: null | string;
  error: null | string;
  books: IBook[];
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
  isFavorites?: boolean;
}

export interface IBookFormat {
  [format: string]: string;
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
  registrationDate: null | string;
  subscribtion: boolean;
}

// AMAZON
export interface IAmazonRewiesAPI {
  responseStatus: string;
  responseMessage: string;
  asin: string;
  currentPage: number;
  sortStrategy: string;
  domainCode: string;
  filters: IAmazonReviewFilter;
  productTitle: string;
  countReviews: number;
  lastPage: number;
  reviews: IAmazonReview[];
}

export interface IAmazonReview {
  reviewId: string;
  parentReviewId: null | string;
  text: string;
  date: string;
  rating: string;
  title: string;
  userName: string;
  numberOfHelpful: number;
  variationId: null | string;
  imageUrlList: null | string;
  variationList: [];
  verified: BlobOptions;
}

export interface IAmazonReviewFilter {
  filterByStar: string;
  reviewerType: string;
}
