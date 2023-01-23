// IMPORT SELECTORS
import {
  accountSelector,
  newBookSelector,
  isAuthSelector,
  getBookDetails,
} from "./selectors/selectors";

// IMPORT HOOKS
import { useAppSelector, useAppDispatch } from "./hooks/hooks";

// IMPORT SLICES
import { getUserInfo, signInUser, signUpUser, removeUser, logOutUser } from "./slices/accountSlice";
import { fetchNewBooks } from "./slices/bookSlice";
import { fetchBooksBySearch } from "./slices/searchSlice";
import { fetchBookDetails } from "./slices/bookDetailsSlice";

// IMPORT TYPES
import { RootState, AppDispatch } from "./store";

// EXPORT SELECTORS
export { accountSelector, newBookSelector, isAuthSelector, getBookDetails };

// EXPORT HOOKS
export { useAppSelector, useAppDispatch };

// EXPORT SLICES
export {
  fetchNewBooks,
  getUserInfo,
  fetchBooksBySearch,
  signInUser,
  signUpUser,
  removeUser,
  logOutUser,
  fetchBookDetails,
};

// EXPORT SLICES
export type { RootState, AppDispatch };
