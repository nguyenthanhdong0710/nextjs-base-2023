"use client";

import { Box } from "@mui/material";
import { useTranslations } from "next-intl";
import { useEffect } from "react";

export default function Dashboard() {
  const t = useTranslations();

  useEffect(() => {
    //   let lastScrollTop = 0;
    //   let viewHeight = window.innerHeight;
    //   let scrolling = false;
    //   console.log("viewHeight", viewHeight);

    //   const handleResize = () => {
    //     viewHeight = window.innerHeight;
    //     console.log("viewHeight", viewHeight);
    //     console.log("handleResize");
    //   };

    //   const handleScroll = () => {
    //     let st = document.documentElement.scrollTop;
    //     if (st > lastScrollTop) {
    //       // downscroll code
    //       console.log("downscroll", document.documentElement.scrollTop);
    //       scrolling = false;
    //     } else if (st < lastScrollTop) {
    //       // upscroll code
    //       const target = document.getElementById("target");

    //       if (
    //         target &&
    //         target.getBoundingClientRect().bottom > 100 &&
    //         !scrolling
    //       ) {
    //         // 100 is header and offset
    //         console.log(
    //           "target----------",
    //           target.getBoundingClientRect().bottom
    //         );
    //         scrolling = true;
    //         window.document.documentElement.scrollTo({
    //           top: 0,
    //           // behavior: "smooth",
    //         });
    //       }
    //       console.log("upscroll", document.documentElement.scrollTop);
    //     }
    //     // else was horizontal scroll

    //     lastScrollTop = st <= 0 ? 0 : st; // For Mobile or negative scrolling
    //   };

    //   // element should be replaced with the actual target element on which you have applied scroll, use window in case of no target element.
    //   window.document.addEventListener("scroll", handleScroll, false);
    //   window.addEventListener("resize", handleResize, false);

    //   return () => {
    //     scrolling = false;
    //     window.document.removeEventListener("scroll", handleScroll, false);
    //     window.removeEventListener("resize", handleResize, false);
    //   };

    document.documentElement.style.scrollSnapType = "y mandatory";

    return () => {};
  }, []);

  return (
    <Box sx={{ scrollSnapType: "y mandatory" }}>
      <Box
        className="py-20 text-center h-[80vh]"
        sx={{ backgroundColor: "green", scrollSnapAlign: "start" }}
      >
        {t("dashboard.title")}
      </Box>
      <Box sx={{ backgroundColor: "red", scrollSnapAlign: "start" }}>
        {Array.from({ length: 100 }).map((_, index) => (
          <div key={index}>ádasd</div>
        ))}
      </Box>
    </Box>
  );
}
