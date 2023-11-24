"use client";

import { Box } from "@mui/material";
import { useTranslations } from "next-intl";

export default function Dashboard() {
  const t = useTranslations();

  return (
    <Box>
      <Box className="py-20 text-center">{t("dashboard.title")}</Box>
    </Box>
  );
}
