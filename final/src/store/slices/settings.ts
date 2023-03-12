import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

interface SettingsState {
  theme: "light" | "dark";
}

const initialState: SettingsState = {
  theme: "light",
};

export const settingsSlice = createSlice({
  name: "settings",
  initialState,
  reducers: {
    switchTheme: (state) => {
      if (state.theme === "light") {
        state.theme = "dark";
      } else {
        state.theme = "light";
      }
    },
  },
});

export const getIsLightTheme = (state: RootState) => state.settings.theme === "light";

export const { switchTheme } = settingsSlice.actions;

export default settingsSlice.reducer;
