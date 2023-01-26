import { configureStore } from "@reduxjs/toolkit";
import bookReducer from "./slices/bookSlice";
import searchReducer from "./slices/searchSlice";
import accountReducer from "./slices/accountSlice";
import bookDetailsReducer from "./slices/bookDetailsSlice";
import favoritesReducer from "./slices/favoritesSlice";
import cartReducer from "./slices/cartSlice";

export const store = configureStore({
  reducer: {
    book: bookReducer,
    bookDetails: bookDetailsReducer,
    search: searchReducer,
    account: accountReducer,
    favorites: favoritesReducer,
    cart: cartReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
