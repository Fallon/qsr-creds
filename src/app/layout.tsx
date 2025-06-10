/* eslint-disable @next/next/no-sync-scripts */
import type { Metadata } from "next";
// import { Geist, Geist_Mono } from "next/font/google";
import { AntonRegular, ITCGaramondBookNarrow, PPMigraExtrabold } from "./styles/fonts";
import "./globals.css";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

export const metadata: Metadata = {
  title: "Fallon QSR",
  description: "Your next team",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`
          ${AntonRegular.variable}
          ${ITCGaramondBookNarrow.variable}
          ${PPMigraExtrabold.variable}
          antialiased max-w-[1440px] mx-auto`}
      >
        {children}
        <script src="https://player.vimeo.com/api/player.js"></script>
      </body>
    </html>
  );
}
