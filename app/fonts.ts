import localFont from "next/font/local";
import { Tektur, Oswald, Caveat, } from "next/font/google";

export const tektur = Tektur({
  variable: "--font-tektur",
  subsets: ["latin"],
  display: "swap",
});

export const oswald = Oswald({
  subsets: ["latin"],
  variable: "--font-oswald",
  display: "swap",
});
export const caveat = Caveat({
  subsets: ["latin"],
  variable: "--font-caveat",
  display: "swap",
});



export const satoshi = localFont({
  src: [
    { path: "../public/fonts/Satoshi/Satoshi-Light.woff2", weight: "300", style: "normal" },
    { path: "../public/fonts/Satoshi/Satoshi-Regular.woff2", weight: "400", style: "normal" },
    { path: "../public/fonts/Satoshi/Satoshi-Medium.woff2", weight: "500", style: "normal" },
    { path: "../public/fonts/Satoshi/Satoshi-Bold.woff2", weight: "700", style: "normal" },
    { path: "../public/fonts/Satoshi/Satoshi-Black.woff2", weight: "900", style: "normal" },

    { path: "../public/fonts/Satoshi/Satoshi-LightItalic.woff2", weight: "300", style: "italic" },
    { path: "../public/fonts/Satoshi/Satoshi-Italic.woff2", weight: "400", style: "italic" },
    { path: "../public/fonts/Satoshi/Satoshi-MediumItalic.woff2", weight: "500", style: "italic" },
    { path: "../public/fonts/Satoshi/Satoshi-BoldItalic.woff2", weight: "700", style: "italic" },
    { path: "../public/fonts/Satoshi/Satoshi-BlackItalic.woff2", weight: "900", style: "italic" },
  ],
  variable: "--font-satoshi",
  display: "swap",
});

export const impact = localFont({
  src: [
    { path: "../public/fonts/impact/impact.woff", weight: "400", style: "normal" },
  ],
  variable: "--font-impact",
  display: "swap",
});
