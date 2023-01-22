// IMPORT SELECTORS
import { accountSelector, bookSelector, isAuthSelector } from "./selectors/selectors";

// IMPORT HOOKS
import { useAppSelector, useAppDispatch } from "./hooks/hooks";

// IMPORT SLICES
import { getUserInfo, signInUser, signUpUser, removeUser, logOutUser } from "./slices/accountSlice";
import { fetchNewBooks } from "./slices/bookSlice";
import { fetchBooksBySearch } from "./slices/searchSlice";

// IMPORT TYPES
import { RootState, AppDispatch } from "./store";

// EXPORT SELECTORS
export { accountSelector, bookSelector, isAuthSelector };

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
};

// EXPORT SLICES
export type { RootState, AppDispatch };
