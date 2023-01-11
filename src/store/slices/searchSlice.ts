import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

interface IBooksState {
  books: any;
  isLoading: boolean;
  inputValue: any;
}

const initialState: IBooksState = {
  books: [],
  isLoading: false,
  inputValue: "",
};

export const fetchSearch = createAsyncThunk<any[], { inputValue: string }>(
  "search/fetchSearch",
  async (inputValue) => {
    return await fetch(`https://api.itbook.store/1.0/search/${inputValue}`).then((response) => {
      return response.json();
    });
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
    builder.addCase(fetchSearch.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchSearch.fulfilled, (state, action) => {
      state.isLoading = false;
      state.books = action.payload;
    });
    builder.addCase(fetchSearch.rejected, (state, action) => {});
  },
});

export default searchSlice.reducer;

export const { searchBooks } = searchSlice.actions;
function creteAsyncThunk() {
  throw new Error("Function not implemented.");
}
