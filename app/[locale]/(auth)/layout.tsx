"use client";

import { Box } from "@mui/material";
import { useSession } from "next-auth/react";
import { redirect } from "@/navigation";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = useSession();

  if (session && session.data?.user) {
    redirect("/dashboard");
  }

  return <Box>{children}</Box>;
}
