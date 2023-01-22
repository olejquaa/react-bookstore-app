import { RootState } from "store/store";

const accountSelector = (state: RootState) => state.account;
const newBookSelector = (state: RootState) => state.book.books;
const isAuthSelector = (state: RootState) => state.account.isAuth;

export { accountSelector, isAuthSelector, newBookSelector };
