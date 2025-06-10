import localFont from "next/font/local";

const AntonRegular = localFont({
  src: './fonts/Anton-Regular.ttf',
  display: 'swap',
  variable: '--font-anton',
});
const ITCGaramondBookNarrow = localFont({
  src: './fonts/ITCGaramondBookNarrow-1488172.otf',
  display: 'swap',
  variable: '--font-garamond',
});
const PPMigraExtrabold = localFont({
  src: './fonts/PPMigra-Extrabold.ttf',
  display: 'swap',
  variable: '--font-migra',
});

export { AntonRegular, ITCGaramondBookNarrow, PPMigraExtrabold };