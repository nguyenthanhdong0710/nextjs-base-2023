"use client";

import { ReactNode, useMemo } from "react";
import { ThemeProvider } from "@mui/material/styles";
import createAppTheme from "./createAppTheme";
import { CssBaseline, useMediaQuery } from "@mui/material";

type AppThemeProviderProps = {
  children: ReactNode;
};

function AppThemeProvider({ children }: AppThemeProviderProps) {
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");

  const theme = useMemo(
    () => createAppTheme(prefersDarkMode ? "dark" : "light"),
    [prefersDarkMode]
  );

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
}

export default AppThemeProvider;
