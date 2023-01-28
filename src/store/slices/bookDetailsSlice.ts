import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { bookStoreAPI } from "services/bookStoreAPI";
import { BookDetails } from "store/types";
import { IBookDetails } from "types";
import { isPendingAction, isRejectedAction } from "../utils";

const initialState: BookDetails = {
  book: {
    authors: "",
    desc: "",
    error: "",
    image: "",
    isbn10: "",
    isbn13: "",
    pages: "",
    pdf: {},
    price: "",
    publisher: "",
    rating: "",
    subtitle: "",
    title: "",
    url: "",
    year: "",
    isFavorites: false,
  },
  error: null,
  isLoading: false,
  amount: 0,
};

export const fetchBookDetails = createAsyncThunk<IBookDetails, string, { rejectValue: string }>(
  "bookDetails/fetchDetailsBook",
  async (isbn: string, { rejectWithValue }) => {
    try {
      const response = await bookStoreAPI.getBookDetails(isbn);
      return response;
    } catch {
      return rejectWithValue("error");
    }
  },
);

export const bookDetailsSlice = createSlice({
  name: "bookDetails",
  initialState,
  reducers: {
    setFavorite: (state) => {
      state.book.isFavorites = !state.book.isFavorites;
    },
  },
  extraReducers(builder) {
    builder.addCase(
      fetchBookDetails.fulfilled,
      (state, { payload }: PayloadAction<IBookDetails>) => {
        state.isLoading = false;
        state.book = payload;
      },
    );

    builder.addMatcher(isPendingAction, (state) => {
      state.error = null;
      state.isLoading = true;
    });
    builder.addMatcher(isRejectedAction, (state, { payload }: PayloadAction<string>) => {
      state.isLoading = false;
      state.error = payload;
    });
  },
});

export default bookDetailsSlice.reducer;
export const { setFavorite } = bookDetailsSlice.actions;
