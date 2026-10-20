import React from "react";
import { Img, useCurrentFrame, interpolate } from "remotion";

interface LogoProps {
  size?: number;
  className?: string;
  withPulsingGlow?: boolean;
}

export const Logo: React.FC<LogoProps> = ({
  size = 280,
  className = "",
  withPulsingGlow = true,
}) => {
  const frame = useCurrentFrame();

  const pulse = withPulsingGlow
    ? interpolate(Math.sin(frame * 0.12), [-1, 1], [0.85, 1.25])
    : 1;

  const glowBlur = interpolate(pulse, [0.85, 1.25], [30, 60]);

  return (
    <div
      className={`relative flex items-center justify-center ${className}`}
      style={{
        width: size,
        height: size,
      }}
    >
      {/* Outer Neon Glow Aura */}
      <div
        className="absolute inset-0 rounded-[28%] pointer-events-none"
        style={{
          background: "linear-gradient(135deg, rgba(0, 210, 255, 0.4), rgba(0, 245, 160, 0.3))",
          filter: `blur(${glowBlur}px)`,
          transform: `scale(${pulse})`,
        }}
      />

      {/* Squircle Badge Container */}
      <div
        className="relative z-10 w-full h-full rounded-[28%] bg-[#090D16] border-[3px] border-[#00D2FF]/60 flex items-center justify-center p-6 shadow-[0_0_35px_rgba(0,210,255,0.3)]"
        style={{
          boxShadow: `0 0 ${glowBlur}px rgba(0, 210, 255, 0.4), inset 0 0 20px rgba(0, 245, 160, 0.15)`,
        }}
      >
        <Img
          src="/logo-icon.png"
          alt="Shurian Labs Logo"
          className="w-full h-full object-contain drop-shadow-[0_0_20px_rgba(0,210,255,0.6)]"
        />
      </div>
    </div>
  );
};
