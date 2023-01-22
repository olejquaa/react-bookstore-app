import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

interface IBookState {
  books: IBook[] | undefined;
  isLoading: boolean;
  error: null | string;
}

interface IBook {
  image: string;
  isbn13: string;
  price: string;
  subtitle: string;
  title: string;
  url: string;
}

interface IBooksResponse {
  books: IBook[];
  error: string;
  count: number;
}

const initialState: IBookState = {
  books: [],
  isLoading: false,
  error: null,
};

export const getNewBooks = createAsyncThunk<IBook[] | undefined>(
  "book/getNewBooks",
  async (_, { rejectWithValue }) => {
    try {
      const response = await fetch("https://api.itbook.store/1.0/new");
      const { books }: IBooksResponse = await response.json();

      return books;
    } catch (error) {
      rejectWithValue(error);
    }
  },
);

const bookSlice = createSlice({
  name: "book",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(getNewBooks.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getNewBooks.fulfilled, (state, action) => {
      state.books = action.payload;
      state.isLoading = false;
    });
    builder.addCase(getNewBooks.rejected, (state, action) => {});
  },
});

export default bookSlice.reducer;
