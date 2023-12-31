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
import { getMessages } from "next-intl/server";
import StoreProvider from "@/redux/StoreProvider";

import "@/styles/index.scss";
import "./globals.css";
import SWRProvider from "@/components/SWRProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "NextJS - DongNT",
  description: "Sourcebase NextJS 2023 by DongNT",
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
      <body className={inter.className} id="root">
        <SessionProvider session={session}>
          <NextIntlClientProvider locale={locale} messages={messages}>
            <StoreProvider>
              <SWRProvider>
                <StyledEngineProvider injectFirst>
                  <AppThemeProvider>
                    <Box sx={{ backgroundColor: "background.default" }}>
                      {children}
                    </Box>
                  </AppThemeProvider>
                </StyledEngineProvider>
              </SWRProvider>
            </StoreProvider>
          </NextIntlClientProvider>
        </SessionProvider>
      </body>
    </html>
  );
}
