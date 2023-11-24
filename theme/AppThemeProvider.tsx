"use client";

import { ReactNode, useMemo } from "react";
import { ThemeProvider } from "@mui/material/styles";
import createAppTheme from "./createAppTheme";
import { CssBaseline } from "@mui/material";

type AppThemeProviderProps = {
  children: ReactNode;
};

function AppThemeProvider({ children }: AppThemeProviderProps) {
  const theme = useMemo(() => createAppTheme("dark"), []);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
}

export default AppThemeProvider;
