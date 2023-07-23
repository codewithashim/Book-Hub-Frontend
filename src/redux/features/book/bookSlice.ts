import { createSlice } from "@reduxjs/toolkit";
import { IBook } from "../../../types/globalTypes";

interface IBookState {
  data: IBook[];
  currentPage: number;
  totalPages: number;
  limit: number;
  isLoading: boolean;
  error: string | null;
}

const initialState: IBookState = {
  data: [],
  currentPage: 1,
  totalPages: 1,
  limit: 10,
  isLoading: false,
  error: null,
};

const bookSlice = createSlice({
  name: "book",
  initialState,
  reducers: {
    fetchBooksStart: (state) => {
      state.isLoading = true;
      state.error = null;
    },

    fetchBooksSuccess: (state, action) => {
      state.isLoading = false;
      state.data = action.payload.data;
      state.currentPage = action.payload.meta.page;
      state.totalPages = action.payload.meta.totalPages;
      state.error = null;
    },

    fetchBooksFailure: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    goToPage: (state, action) => {
      state.currentPage = action.payload;
    },
  },
});

export const {
  fetchBooksStart,
  fetchBooksSuccess,
  fetchBooksFailure,
  goToPage,
} = bookSlice.actions;

export default bookSlice.reducer;
