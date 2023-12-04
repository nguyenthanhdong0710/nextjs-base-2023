import { createSlice } from "@reduxjs/toolkit";

type CommonStateType = {
  sidebar: { open: boolean };
};

const initialState: CommonStateType = {
  sidebar: { open: false },
};

const slice = createSlice({
  name: "common",
  initialState,
  reducers: {
    closeSidebar: (state) => {
      return {
        ...state,
        sidebar: {
          open: false,
        },
      };
    },
    toggleSidebar: (state) => {
      return {
        ...state,
        sidebar: {
          open: !state.sidebar.open,
        },
      };
    },
  },
});

export const { closeSidebar, toggleSidebar } =
  slice.actions;

export default slice.reducer;
