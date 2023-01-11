import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

interface IBookState {
  books: any;
  isLoading: boolean;
}

export const fetchMain = createAsyncThunk<any[]>("main/fetchMain", async () => {
  return await fetch("https://api.itbook.store/1.0/new").then((response) => {
    return response.json();
  });
});

const initialState: IBookState = {
  books: [],
  isLoading: false,
};

const mainSlice = createSlice({
  name: "main",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(fetchMain.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchMain.fulfilled, (state, action) => {
      state.books = action.payload;
      state.isLoading = false;
    });
    builder.addCase(fetchMain.rejected, (state, action) => {});
  },
});

export default mainSlice.reducer;
