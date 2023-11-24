"use client";

import { ReactNode, useMemo } from "react";
import { ThemeProvider } from "@mui/material/styles";
import createAppTheme from "./createAppTheme";
import { CssBaseline } from "@mui/material";
import { useAppSelector } from "@/redux";

type AppThemeProviderProps = {
  children: ReactNode;
};

function AppThemeProvider({ children }: AppThemeProviderProps) {
  const { themeMode } = useAppSelector((s) => s.theme);
  const theme = useMemo(() => createAppTheme(themeMode), [themeMode]);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
}

export default AppThemeProvider;
