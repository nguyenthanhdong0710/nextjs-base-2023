import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { getServerSession } from "next-auth";
import StyledEngineProvider from "@/components/StyledEngineProvider";
import SessionProvider from "@/components/SessionProvider";
import NextIntlClientProvider from "@/components/NextIntlClientProvider";
import { AppThemeProvider } from "@/theme";
import { Box } from "@mui/system";
import LOCALES from "@/messages";
import { notFound } from "next/navigation";

import "@/styles/index.scss";
import "./globals.css";

import { getMessages } from "next-intl/server";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default async function RootLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  if (!LOCALES.includes(locale)) notFound();

  const session = await getServerSession();
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body className={inter.className}>
        <SessionProvider session={session}>
          <NextIntlClientProvider
            locale={locale}
            messages={messages}
            timeZone="Asia/Ho_Chi_Minh"
          >
            <StyledEngineProvider injectFirst>
              <AppThemeProvider>
                <Box sx={{ backgroundColor: "background.default" }} id="root">
                  {children}
                </Box>
              </AppThemeProvider>
            </StyledEngineProvider>
          </NextIntlClientProvider>
        </SessionProvider>
      </body>
    </html>
  );
}
