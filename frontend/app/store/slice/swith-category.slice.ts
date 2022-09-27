import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface SwitchCategoryState {
  selectedCategory: string;
}

const initialState = {
  selectedCategory: "",
};

export const switchCategorySlice = createSlice({
  name: "switchCategory",
  initialState,
  reducers: {
    switchCategory: (state, action: PayloadAction<string>) => {
      state.selectedCategory = action.payload;
    },
  },
});

export const { switchCategory } = switchCategorySlice.actions;
export default switchCategorySlice.reducer;
