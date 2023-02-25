import { createSlice } from "@reduxjs/toolkit";

const showSlice = createSlice({
  name: "show",
  initialState: {
    show: null,
  },
  reducers: {
    set: (state, action) => {
      state.show = action.payload;
    },
    remove: (state) => {
      state.show = null;
    },
  },
});

export const { set, remove } = showSlice.actions;
export const showSelector = (state) => state.show.show;
export const showReducer = showSlice.reducer;
export default showSlice;
