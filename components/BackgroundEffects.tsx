"use client";

import dynamic from "next/dynamic";

const SplashCursor = dynamic(() => import("./SplashCursor"), { ssr: false });
const Aurora = dynamic(() => import("./Aurora"), { ssr: false });
const EmberParticles = dynamic(() => import("./EmberParticles"), { ssr: false });
const ScanLines = dynamic(() => import("./ScanLines"), { ssr: false });

export default function BackgroundEffects() {
  return (
    <>
      <div style={{ position: "fixed", inset: 0, width: "100vw", height: "100vh", zIndex: -1, pointerEvents: "none", background: "#0a0a0a" }}>
        <Aurora
          colorStops={["#d70025", "#000000", "#b90020"]}
          blend={0.5}
          amplitude={1.0}
          speed={0.5}
        />
      </div>
      <EmberParticles />
      <ScanLines />
      <SplashCursor
        RAINBOW_MODE={false}
        COLOR="#ff0000"
        DENSITY_DISSIPATION={5}
        CURL={2}
        COLOR_UPDATE_SPEED={10}
      />
    </>
  );
}