"use client";

import routerPath from "@/router-path";
import Navigate from "@/components/Navigate";
import { useParams, usePathname } from "next/navigation";

export default function NavigateLogin() {
  const { locale } = useParams();
  const currentPathname = usePathname();

  return (
    <Navigate
      type="redirect"
      href={
        routerPath(String(locale)).login +
        "?" +
        new URLSearchParams({
          redirect: currentPathname || routerPath(String(locale)).dashboard,
        }).toString()
      }
    />
  );
}
