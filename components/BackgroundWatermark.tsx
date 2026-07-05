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
        paddingTop: "20vh",
      }}
      aria-hidden="true"
    >
      <div
        style={{
          position: "relative",
          width: "90vw",
          maxWidth: "700px",
          aspectRatio: "1/1",
          opacity: 0.1,
          mixBlendMode: "screen",
          filter: "saturate(1.8) contrast(1.15)",
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