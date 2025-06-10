import HomeClient from "./page.client";
import type { Viewport } from "next";

export const viewport: Viewport = {
  themeColor: 'black',
  width: '1024px',
  // initialScale: 1,
  // maximumScale: 1,
  // minimumScale: 1,
  // userScalable: false,
}

export default function Home() {
  return <HomeClient />;
}
