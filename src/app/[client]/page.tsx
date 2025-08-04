
import { use } from "react";
import HomeClient from "./page.client";
import type { Viewport } from "next";

export const viewport: Viewport = {
  themeColor: 'black',
  width: '1024',
  // initialScale: 1,
  // maximumScale: 1,
  // minimumScale: 1,
  // userScalable: false,
}

export default function Home({ params }: { params: Promise<{ client: string }> }) {
  const { client } = use(params);
  return <HomeClient client={client} />;
}
