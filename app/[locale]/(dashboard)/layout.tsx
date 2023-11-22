"use client";

import AppBarComponent from "@/components/AppBar/AppBar";
import AppDrawer from "@/components/AppDrawer/AppDrawer";
import NavigateLogin from "@/components/NavigateLogin";
import { APP_BAR_HEIGHT, DRAWER_WIDTH } from "@/utils/constant";
import { Box, Container } from "@mui/material";
import { useSession } from "next-auth/react";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = useSession();

  if (!session || !session.data?.user) {
    return <NavigateLogin />;
  }

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
      }}
    >
      <AppBarComponent />
      <Box
        component="main"
        sx={{
          display: "flex",
          flexGrow: 1,
          height: `calc(100% - ${APP_BAR_HEIGHT}px)`,
          minWidth: 960,
        }}
      >
        <AppDrawer
          width={DRAWER_WIDTH}
          height={`calc(100% - ${APP_BAR_HEIGHT}px)`}
        />
        <Container
          maxWidth="xl"
          sx={{
            flexGrow: 1,
            width: `calc(100% - ${DRAWER_WIDTH}px)`,
            p: 3,
          }}
        >
          {children}
        </Container>
      </Box>
    </Box>
  );
}
