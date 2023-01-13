import { type AppType } from "next/app";
import { type Session } from "next-auth";
import { SessionProvider } from "next-auth/react";
import { Inter } from "@next/font/google";

import { api } from "../utils/api";

import "../styles/globals.css";
import Head from "next/head";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-inter",
});

const MyApp: AppType<{ session: Session | null }> = ({
  Component,
  pageProps: { session, ...pageProps },
}) => {
  return (
    <SessionProvider session={session}>
      <main className={`${inter.variable} font-sans`}>
        <Head>
        <meta
          name="twitter:image"
          content="https://nicolaslopes.space/static/og.png"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="og:image" content="static/og.png" />
        <meta property="og:url" content="https://nicolaslopes.space" />
        <meta property="og:type" content="website" />
        </Head>
        <Component {...pageProps} />
      </main>
    </SessionProvider>
  );
};

export default api.withTRPC(MyApp);
