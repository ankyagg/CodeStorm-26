import type { Metadata } from "next";
import localFont from "next/font/local";
import "./codeissance-globals.css";
import SmoothScrollProvider from "@/components/codeissance/SmoothScrollProvider";

/**
 * Display font: Spotify Mix Ultra
 * Used for big Wrapped-style numerals, headlines, and stat callouts.
 */
const spotifyMixUltra = localFont({
  src: "./font/SpotifyMix-Ultra.woff2",
  weight: "900",
  style: "normal",
  variable: "--font-display",
  display: "swap",
});

/**
 * Extrabold font: Spotify Mix Extrabold
 */
const spotifyMixExtrabold = localFont({
  src: "./font/SpotifyMix-Extrabold.woff2",
  weight: "800",
  style: "normal",
  variable: "--font-extrabold",
  display: "swap",
});

/**
 * Black font: Spotify Mix Black
 */
const spotifyMixBlack = localFont({
  src: "./font/SpotifyMix-Black.woff2",
  weight: "900",
  style: "normal",
  variable: "--font-black",
  display: "swap",
});

/**
 * Body font: Spotify Mix
 * Clean, readable body text and UI elements.
 */
const spotifyMix = localFont({
  src: [
    { path: "./font/SpotifyMix-Light.woff2", weight: "300", style: "normal" },
    { path: "./font/SpotifyMix-Regular.woff2", weight: "400", style: "normal" },
    { path: "./font/SpotifyMix-Medium.woff2", weight: "500", style: "normal" },
    { path: "./font/SpotifyMix-Bold.woff2", weight: "700", style: "normal" },
    { path: "./font/SpotifyMix-Extrabold.woff2", weight: "800", style: "normal" },
    { path: "./font/SpotifyMix-Black.woff2", weight: "900", style: "normal" },
  ],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Codeissance '26 | TSEC CodeStorm",
  description:
    "Codeissance — TSEC CodeStorm's flagship 24-hour offline hackathon. Your code. Your story. Wrapped.",
  openGraph: {
    title: "Codeissance '26 | TSEC CodeStorm",
    description:
      "24 hours. 1 campus. Your story — wrapped. TSEC CodeStorm's flagship hackathon.",
    type: "website",
  },
};

export default function CodeissanceLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${spotifyMixUltra.variable} ${spotifyMixExtrabold.variable} ${spotifyMix.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6.5.2/css/all.min.css"
        />
      </head>
      <body
        className="min-h-full flex flex-col"
        style={{
          backgroundColor: "var(--wrapped-dark)",
          color: "var(--wrapped-cream)",
          fontFamily: "var(--font-body)",
        }}
        suppressHydrationWarning
      >
        <SmoothScrollProvider>{children}</SmoothScrollProvider>
      </body>
    </html>
  );
}
