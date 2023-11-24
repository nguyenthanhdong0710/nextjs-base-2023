import { createSlice, PayloadAction } from "@reduxjs/toolkit";

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
    openSidebar: (state) => {
      return {
        ...state,
        sidebar: {
          open: true,
        },
      };
    },
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
    updateSidebar: (state, payload: PayloadAction<boolean>) => {
      return {
        ...state,
        sidebar: {
          open: payload.payload,
        },
      };
    },
  },
});

export const { openSidebar, closeSidebar, toggleSidebar, updateSidebar } =
  slice.actions;

export default slice.reducer;
