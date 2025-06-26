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
  openGraph: {
    title: "Fallon QSR",
    description: "Your next team",
    url: "https://www.fallonqsr.com",
    siteName: "Fallon QSR",
    images: [
      {
        url: "https://www.fallonqsr.com/share-image.webp",
        width: 1200,
        height: 630,
        alt: "Fallon QSR",
      },
    ],
    locale: "en_US",
    type: "website",
  },
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
          antialiased`}
      >
        {children}
        <script src="https://player.vimeo.com/api/player.js"></script>
      </body>
    </html>
  );
}
