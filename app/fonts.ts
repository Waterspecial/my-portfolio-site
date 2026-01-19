import localFont from "next/font/local";
import { Tektur, Oswald, Caveat, Lora } from "next/font/google";

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
export const lora = Lora({
  subsets: ["latin"],
  variable: "--font-lora",
  display: "swap",
});

export const impact = localFont({
  src: [{ path: "./fonts/impact/impact.woff", weight: "400", style: "normal" }],
  variable: "--font-impact",
  display: "swap",
});
