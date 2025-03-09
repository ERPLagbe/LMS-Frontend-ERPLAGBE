import BootstrapClient from "@/components/Client/BootstrapClient";
import "bootstrap/dist/css/bootstrap.min.css";
import "swiper/swiper-bundle.css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./fonts/phosphor/style.css";
import "./custom.css";

import {
  Urbanist,
  DM_Serif_Display,
  Sora,
  Passion_One,
  Epilogue,
  Imbue,
  Platypi,
  Hind_Siliguri,
  Baloo_Da_2,
  Noto_Sans_Bengali,
} from "next/font/google";
import localFont from "next/font/local";
import CursorPointer from "@/components/Client/CursorPointer";
import { ThemeProvider } from "@/context/ThemeContext";
import Loader from "@/components/Loader/Loader";
import { GoogleTagManager } from '@next/third-parties/google'
import Analytics from "@/components/analytics/Analytics";

const noto_sans_bangali = Noto_Sans_Bengali({
  subsets: ["latin"],
  variable: "--font-noto-sans-bangali",
  display: "swap",
  adjustFontFallback: false,
});


const phosporFont = localFont({
  src: [
    {
      path: "./fonts/phosphor/Phosphor.woff2",
      weight: "700",
      style: "normal",
      display: "swap",
      adjustFontFallback: false,
    },
    {
      path: "./fonts/phosphor/Phosphor.woff",
      weight: "700",
      style: "normal",
      display: "swap",
      adjustFontFallback: false,
    },
    {
      path: "./fonts/phosphor/Phosphor.ttf",
      weight: "400",
      style: "normal",
      display: "swap",
      adjustFontFallback: false,
    },
  ],
  variable: "--font-phosphor",
});

const bluuFont = localFont({
  src: [
    {
      path: "./fonts/BluuNext-Bold.otf",
      weight: "700",
      style: "normal",
      display: "swap",
      adjustFontFallback: false,
    },
  ],
  variable: "--font-bluu-next",
});

const urbanistFont = Urbanist({
  subsets: ["latin"],
  variable: "--font-urbanist",
  display: "swap",
  adjustFontFallback: false,
});

const dmFont = DM_Serif_Display({
  weight: ["400"],
  subsets: ["latin"],
  variable: "--font-dm",
  display: "swap",
  adjustFontFallback: false,
});

const soraFont = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
  display: "swap",
  adjustFontFallback: false,
});

const passionFont = Passion_One({
  weight: ["400", "700", "900"],
  subsets: ["latin"],
  variable: "--font-passion",
  display: "swap",
  adjustFontFallback: false,
});

const epilogueFont = Epilogue({
  subsets: ["latin"],
  variable: "--font-epilogue",
  display: "swap",
  adjustFontFallback: false,
});

const imbueFont = Imbue({
  subsets: ["latin"],
  variable: "--font-imbue",
  display: "swap",
  adjustFontFallback: false,
});

const platypiFont = Platypi({
  subsets: ["latin"],
  variable: "--font-platypi",
  display: "swap",
  adjustFontFallback: false,
});

export const metadata = {
  title: "Jobayer Academy",
  description: "Jobayer Academy Is the Skill Development Training Center in Bangladesh. We provide skin care product training, handmade soap art, resin art, product sourcing",
  icons: {
    icon: "favicon.ico",
  },
  openGraph:{
  title: "Jobayer Academy",
  description: "Jobayer Academy Is the Skill Development Training Center in Bangladesh. We provide skin care product training, handmade soap art, resin art, product sourcing",
  images: [
    {
      // url: '/assets/imgs/logo/logo.png',
      // secureUrl: '/assets/imgs/logo/logo.png',
      url: 'https://jobayeracademy.com/assets/imgs/logo/logo.png',
      secure_url: 'https://jobayeracademy.com/assets/imgs/logo/logo.png',
      width: 1200,
      height: 630,
      alt: "Jobayer Academy",
    },
  ],
  }
};

export default function RootLayout({ children }) {
  return (
    <ThemeProvider>
      <html lang="en">
        <meta charSet="UTF-8" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta name="robots" content="noindex, follow" />

        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        {/* <link rel="icon" href="/assets/imgs/favicon.ico" type="image/x-icon" /> */}
        <GoogleTagManager gtmId="GTM-MGRQP6FN" />
        <body
          className={`${noto_sans_bangali.variable} ${phosporFont.variable} ${bluuFont.variable} ${urbanistFont.variable} ${dmFont.variable} ${soraFont.variable} ${passionFont.variable} ${epilogueFont.variable} ${imbueFont.variable} ${platypiFont.variable}`}
        >
        <Analytics />
          {children}
          <Loader />
          <BootstrapClient />
          {/* <CursorPointer /> */}
        </body>
      </html>
    </ThemeProvider>
  );
}
