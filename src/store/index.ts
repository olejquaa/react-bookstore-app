// IMPORT SELECTORS
import {
  accountSelector,
  newBookSelector,
  isAuthSelector,
  getBookDetails,
  getBooksBySearch,
  getFavorites,
  getCart,
} from "./selectors/selectors";

// IMPORT HOOKS
import { useAppSelector, useAppDispatch } from "./hooks/hooks";

// IMPORT SLICES
import { getUserInfo, signInUser, signUpUser, removeUser, logOutUser } from "./slices/accountSlice";
import { fetchNewBooks } from "./slices/bookSlice";
import { fetchBooksBySearch } from "./slices/searchSlice";
import { fetchBookDetails } from "./slices/bookDetailsSlice";
import { setFavorite } from "./slices/bookDetailsSlice";
import { addItemToFavorites } from "./slices/favoritesSlice";
import { addItem, removeItem, countPlus, countMinus, clearCart } from "./slices/cartSlice";

// IMPORT TYPES
import { RootState, AppDispatch } from "./store";

// EXPORT SELECTORS
export {
  accountSelector,
  newBookSelector,
  isAuthSelector,
  getBookDetails,
  getBooksBySearch,
  getFavorites,
  getCart,
};

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
  addItemToFavorites,
  addItem,
  removeItem,
  countPlus,
  countMinus,
  clearCart,
  setFavorite,
};

// EXPORT SLICES
export type { RootState, AppDispatch };
