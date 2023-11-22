"use client";

import routerPath from "@/app/router-path";
import Navigate from "@/components/Navigate";
import { usePathname } from "next/navigation";

export default function NavigateLogin() {
  const currentPathname = usePathname();

  return (
    <Navigate
      to={
        routerPath.login +
        "?" +
        new URLSearchParams({
          redirect: currentPathname || routerPath.dashboard,
        }).toString()
      }
      replace
    />
  );
}
