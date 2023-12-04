import { createSlice } from "@reduxjs/toolkit";

type ThemeStateType = {
  themeMode: "dark" | "light";
};

const initialState: ThemeStateType = {
  themeMode: "light",
};

const slice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    toggleThemeMode: (state) => {
      return {
        ...state,
        themeMode: state.themeMode === "dark" ? "light" : "dark",
      };
    },
  },
});

export const { toggleThemeMode } = slice.actions;

export default slice.reducer;
