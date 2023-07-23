import { createSlice } from "@reduxjs/toolkit";
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
  reducers: {},
});

export const {} = bookSlice.actions;

export default bookSlice.reducer;
