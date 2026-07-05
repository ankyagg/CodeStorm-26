"use client";

import Image from "next/image";

export default function BackgroundWatermark() {
  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: -50,
        pointerEvents: "none",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        paddingTop: "20vh", /* Offsets it downwards to avoid title clash */
      }}
      aria-hidden="true"
    >
      <div 
        style={{ 
          position: "relative", 
          width: "90vw", 
          maxWidth: "1000px", 
          aspectRatio: "1/1",
          opacity: 0.12,
          filter: "grayscale(0.8) brightness(0.8) contrast(1.2) drop-shadow(0 0 60px rgba(220, 20, 60, 0.3))",
        }}
      >
        <Image
          src="/logo.png"
          alt=""
          fill
          style={{ objectFit: "contain" }}
          priority={false}
        />
      </div>
    </div>
  );
}
