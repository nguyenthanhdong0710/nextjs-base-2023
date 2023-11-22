"use client";

import Navigate from "@/components/Navigate";
import { Box } from "@mui/material";
import { useSession } from "next-auth/react";
import routerPath from "@/router-path";
import { useParams } from "next/navigation";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { locale } = useParams();
  const session = useSession();

  if (session && session.data?.user) {
    return (
      <Navigate
        href={routerPath(String(locale) || "en").dashboard}
        type="redirect"
      />
    );
  }

  return <Box>{children}</Box>;
}
