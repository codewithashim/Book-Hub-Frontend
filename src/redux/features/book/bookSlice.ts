import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IBook } from "../../../types/globalTypes";

interface IBookState {
  data: IBook[];
}

const initialState: IBookState = {
  data: [],
};

const bookSlice = createSlice({
  name: "book",
  initialState,
  reducers: {
    deleteBook: (state, action: PayloadAction<string>) => {
      const bookIdToDelete = action.payload;
      state.data = state.data.filter((book) => book._id !== bookIdToDelete);
    },
  },
});

export const { deleteBook } = bookSlice.actions;

export default bookSlice.reducer;
