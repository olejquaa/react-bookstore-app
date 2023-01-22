import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

interface ISearchBookState {
  books: IBook[] | undefined;
  isLoading: boolean;
  inputValue: null | undefined;
}
interface IBook {
  image: string;
  isbn13: string;
  price: string;
  subtitle: string;
  title: string;
  url: string;
}

interface ISearchBooksResponse {
  searchBooks: IBook[];
  error: string;
  count: number;
}

const initialState: ISearchBookState = {
  books: [],
  isLoading: false,
  inputValue: null,
};

export const getSearchBook = createAsyncThunk<IBook[] | undefined, { inputValue: string }>(
  "search/getSearchBook",
  async (inputValue, { rejectWithValue }) => {
    try {
      const response = await fetch(`https://api.itbook.store/1.0/search/${inputValue}`);
      const { searchBooks }: ISearchBooksResponse = await response.json();
      return searchBooks;
    } catch (error) {
      rejectWithValue(error);
    }
  },
);

const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    searchBooks: (state, action) => {
      state.inputValue = action.payload;
    },
  },
  extraReducers(builder) {
    builder.addCase(getSearchBook.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getSearchBook.fulfilled, (state, action) => {
      state.isLoading = false;
      state.books = action.payload;
    });
    builder.addCase(getSearchBook.rejected, (state, action) => {});
  },
});

export default searchSlice.reducer;
