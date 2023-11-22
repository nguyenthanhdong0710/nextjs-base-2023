"use client";

import { ReactNode } from "react";
import { StyledEngineProvider } from "@mui/material";

export default function ClientImportGlobal({
  children,
}: {
  children: ReactNode;
}) {
  return <StyledEngineProvider injectFirst>{children}</StyledEngineProvider>;
}
