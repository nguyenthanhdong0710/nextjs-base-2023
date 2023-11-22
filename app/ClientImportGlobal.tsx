"use client";

import { ReactNode } from "react";
import { Box, StyledEngineProvider } from "@mui/material";
import { AppThemeProvider } from "@/theme";

export default function ClientImportGlobal({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <StyledEngineProvider injectFirst>
      <AppThemeProvider>
        <Box sx={{ backgroundColor: "background.default" }}>{children}</Box>
      </AppThemeProvider>
    </StyledEngineProvider>
  );
}
