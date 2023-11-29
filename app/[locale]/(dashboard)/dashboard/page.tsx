"use client";

import { Box, Button } from "@mui/material";
import { useTranslations } from "next-intl";
import UserPage from "./_component/UserPage";
import { useState } from "react";
import { useUserList } from "@/hooks/services/user";

export default function Dashboard() {
  const t = useTranslations();
  const [countPage, setCountPage] = useState(1);
  const { totalPages, error, isLoading } = useUserList({
    page: 1,
    perPage: 2,
  });

  if (isLoading) return <div>loading...</div>;

  if (error) return <div>failed to load</div>;

  const pages = [];
  for (let i = 1; i <= countPage; i++) {
    pages.push(<UserPage page={i} perPage={2} key={i} />);
  }

  return (
    <Box>
      <Box className="py-20 text-center">{t("dashboard.title")}</Box>
      <Box className="grid grid-cols-1 gap-10 mb-10">{pages}</Box>
      {pages.length < totalPages && (
        <Box className="flex justify-center my-10">
          <Button
            variant="primary"
            onClick={() => {
              setCountPage(countPage + 1);
            }}
          >
            {t("dashboard.loadMore")}
          </Button>
        </Box>
      )}
    </Box>
  );
}
