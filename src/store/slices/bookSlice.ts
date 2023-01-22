import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { bookStoreAPI } from "services/bookStoreAPI";
import { NewBooks } from "store/types";
import { IBook } from "types";
import { isPendingAction, isRejectedAction } from "store/utils";

const initialState: NewBooks = {
  books: [],
  error: null,
  isLoading: false,
};

export const fetchNewBooks = createAsyncThunk<IBook[], undefined, { rejectValue: string }>(
  "newBooks/fetchNewBooks",
  async (_, { rejectWithValue }) => {
    try {
      const response = await bookStoreAPI.getNewBooks();
      return response;
    } catch (error) {
      return rejectWithValue("error");
    }
  },
);

const newBooksSlice = createSlice({
  name: "newBooks",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(fetchNewBooks.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.books = payload;
    });
    builder.addMatcher(isPendingAction, (state) => {
      state.error = null;
      state.isLoading = true;
    });
    builder.addMatcher(isRejectedAction, (state) => {
      state.isLoading = false;
      state.error = "payload";
    });
  },
});

export default newBooksSlice.reducer;
