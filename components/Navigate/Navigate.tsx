"use client";

import { useRouter, redirect } from "next/navigation";
import { useEffect } from "react";

type NavigateProps = {
  href: string;
  type?: "redirect" | "replace" | "to";
};

export default function Navigate({ type = "to", href }: NavigateProps): null {
  const router = useRouter();

  useEffect(() => {
    if (type === "redirect") {
      redirect(href);
    } else if (type === "replace") {
      router.replace(href);
    } else if (type === "to") {
      router.push(href);
    }
  }, [type, href]);

  return null;
}
