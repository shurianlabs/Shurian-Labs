import React from "react";
import { AbsoluteFill, useCurrentFrame, interpolate } from "remotion";

export const CyberBackground: React.FC = () => {
  const frame = useCurrentFrame();

  // Subtle pulsing ambient light
  const pulse = interpolate(Math.sin(frame * 0.05), [-1, 1], [0.8, 1.2]);
  const rotateGrid = interpolate(frame, [0, 450], [0, 10]);

  return (
    <AbsoluteFill className="bg-[#090D16] overflow-hidden -z-10">
      {/* Top Ambient Radial Glow */}
      <div
        className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[1100px] h-[750px] rounded-full blur-[140px] pointer-events-none"
        style={{
          background: `radial-gradient(circle, rgba(0, 210, 255, ${0.18 * pulse}) 0%, rgba(0, 245, 160, ${0.1 * pulse}) 50%, transparent 80%)`,
        }}
      />

      {/* Bottom Ambient Glow */}
      <div
        className="absolute bottom-[-10%] right-[-10%] w-[900px] h-[800px] rounded-full blur-[160px] pointer-events-none"
        style={{
          background: `radial-gradient(circle, rgba(0, 245, 160, ${0.14 * pulse}) 0%, rgba(0, 210, 255, ${0.08 * pulse}) 60%, transparent 80%)`,
        }}
      />

      {/* Subtle Perspective Grid */}
      <div
        className="absolute inset-0 opacity-[0.07] pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(0, 210, 255, 0.4) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(0, 210, 255, 0.4) 1px, transparent 1px)
          `,
          backgroundSize: "80px 80px",
          transform: `perspective(600px) rotateX(15deg) translateY(${interpolate(frame, [0, 450], [0, 80])}px)`,
        }}
      />

      {/* Glowing Circuit Lines (SVG) */}
      <svg className="absolute inset-0 w-full h-full opacity-20 pointer-events-none">
        <defs>
          <linearGradient id="cyberLineGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#00D2FF" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#00F5A0" stopOpacity="0.8" />
          </linearGradient>
        </defs>

        <path
          d="M 120 200 L 350 200 L 420 270 L 420 550"
          fill="none"
          stroke="url(#cyberLineGrad)"
          strokeWidth="3"
          strokeDasharray="8 8"
        />
        <circle cx="420" cy="550" r="6" fill="#00D2FF" />

        <path
          d="M 960 400 L 780 400 L 700 480 L 700 800"
          fill="none"
          stroke="url(#cyberLineGrad)"
          strokeWidth="3"
          strokeDasharray="8 8"
        />
        <circle cx="700" cy="800" r="6" fill="#00F5A0" />

        <path
          d="M 150 1450 L 320 1450 L 400 1530 L 400 1750"
          fill="none"
          stroke="url(#cyberLineGrad)"
          strokeWidth="3"
          strokeDasharray="8 8"
        />
        <circle cx="400" cy="1750" r="6" fill="#00D2FF" />
      </svg>
    </AbsoluteFill>
  );
};
