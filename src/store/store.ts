import { configureStore } from "@reduxjs/toolkit";
import bookReducer from "./slices/bookSlice";
import searchReducer from "./slices/searchSlice";
import accountReducer from "./slices/accountSlice";
import bookDetailsReducer from "./slices/bookDetailsSlice";

export const store = configureStore({
  reducer: {
    book: bookReducer,
    bookDetails: bookDetailsReducer,
    search: searchReducer,
    account: accountReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
