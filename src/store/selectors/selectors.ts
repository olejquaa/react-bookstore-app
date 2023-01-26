import { RootState } from "store/store";

const accountSelector = (state: RootState) => state.account;
const newBookSelector = (state: RootState) => state.book;
const isAuthSelector = (state: RootState) => state.account.isAuth;
const getBookDetails = (state: RootState) => state.bookDetails.book;
const getBooksBySearch = (state: RootState) => state.search;
const getFavorites = (state: RootState) => state.favorites;
const getCart = (state: RootState) => state.cart;

export {
  accountSelector,
  isAuthSelector,
  newBookSelector,
  getBookDetails,
  getBooksBySearch,
  getFavorites,
  getCart,
};
