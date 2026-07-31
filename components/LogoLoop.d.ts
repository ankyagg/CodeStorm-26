import React from "react";

export interface Logo {
  src: string;
  alt: string;
}

export interface LogoLoopProps {
  logos: Logo[];
  speed?: number;
  direction?: "left" | "right" | "up" | "down";
  width?: string | number;
  logoHeight?: number;
  gap?: number;
  pauseOnHover?: boolean;
  hoverSpeed?: number;
  fadeOut?: boolean;
  fadeOutColor?: string;
  scaleOnHover?: boolean;
  renderItem?: (logo: Logo, index: number) => React.ReactNode;
  ariaLabel?: string;
  className?: string;
  style?: React.CSSProperties;
}

declare const LogoLoop: React.ComponentType<LogoLoopProps>;

export default LogoLoop;
