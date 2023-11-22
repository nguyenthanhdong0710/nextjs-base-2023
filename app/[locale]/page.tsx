"use client";

import Navigate from "@/components/Navigate";
import routerPath from "@/router-path";

export default function Root({
  params: { locale },
}: {
  params: { locale: string };
}) {
  return <Navigate href={routerPath(locale).dashboard}></Navigate>;
}
