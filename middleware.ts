import createMiddleware from "next-intl/middleware";
import LOCALES from "./messages";
import { pathnames } from "./navigation";

export default createMiddleware({
  locales: LOCALES,
  defaultLocale: LOCALES[0],
  pathnames,
});

export const config = {
  // Match only internationalized pathnames
  matcher: ["/", `/(en|vi)/:path*`],
};
