import React from "react";
import {
  AbsoluteFill,
  useCurrentFrame,
  useVideoConfig,
  spring,
  interpolate,
  Img,
  staticFile,
} from "remotion";

export const HookScene: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Remotion spring animations for cinematic acceleration
  const entranceSpring = spring({
    frame,
    fps,
    config: {
      damping: 14,
      stiffness: 90,
      mass: 0.8,
    },
  });

  const badgeSpring = spring({
    frame: frame - 6,
    fps,
    config: { damping: 12, stiffness: 100 },
  });

  const deviceSpring = spring({
    frame: frame - 16,
    fps,
    config: { damping: 15, stiffness: 85 },
  });

  // Staggered words or subtext
  const subtitleOpacity = interpolate(frame, [25, 45], [0, 1], {
    extrapolateRight: "clamp",
    extrapolateLeft: "clamp",
  });

  // Camera scale effect
  const cameraZoom = interpolate(frame, [0, 90], [1.08, 1.0], {
    extrapolateRight: "clamp",
  });

  // Floating oscillation for mockup
  const floatY = Math.sin(frame * 0.08) * 10;

  return (
    <AbsoluteFill className="flex flex-col items-center justify-between px-12 pt-28 pb-20">
      {/* Top Header & Pill Badge */}
      <div
        className="flex flex-col items-center text-center"
        style={{
          opacity: badgeSpring,
          transform: `translateY(${interpolate(badgeSpring, [0, 1], [-40, 0])}px)`,
        }}
      >
        <div className="inline-flex items-center gap-3 px-6 py-2.5 rounded-full bg-[#131B2E]/90 border border-[#00D2FF]/40 shadow-[0_0_20px_rgba(0,210,255,0.25)] backdrop-blur-md mb-8">
          <span className="w-2.5 h-2.5 rounded-full bg-[#00F5A0] animate-pulse shadow-[0_0_8px_#00F5A0]" />
          <span className="font-mono text-xs font-extrabold uppercase tracking-widest text-[#00D2FF]">
            DESARROLLO A MEDIDA • SHURIAN LABS
          </span>
        </div>

        {/* Main Headline */}
        <div
          style={{
            transform: `scale(${cameraZoom}) translateY(${interpolate(
              entranceSpring,
              [0, 1],
              [50, 0]
            )}px)`,
            opacity: entranceSpring,
          }}
          className="max-w-[940px]"
        >
          <h1 className="text-[64px] font-black leading-[1.1] tracking-tight text-white mb-6">
            Hacemos la web o el sistema que{" "}
            <span className="bg-gradient-to-r from-[#00D2FF] to-[#00F5A0] bg-clip-text text-transparent drop-shadow-[0_0_35px_rgba(0,210,255,0.4)]">
              tu negocio necesita
            </span>
          </h1>

          <p
            className="text-2xl font-medium text-[#94A3B8] leading-relaxed"
            style={{ opacity: subtitleOpacity }}
          >
            Tiendas online, turnos y sistemas de gestión para vender más y trabajar mejor.
          </p>
        </div>
      </div>

      {/* Cinematic 3D Floating Devices Mockup */}
      <div
        className="relative w-full max-w-[880px] h-[780px] flex items-center justify-center"
        style={{
          transform: `translateY(${interpolate(
            deviceSpring,
            [0, 1],
            [120, 0]
          ) + floatY}px) scale(${deviceSpring})`,
          opacity: deviceSpring,
        }}
      >
        {/* Laptop Screen Mockup */}
        <div className="relative w-[780px] h-[480px] rounded-3xl bg-[#131B2E] border-2 border-[#00D2FF]/50 shadow-[0_30px_70px_rgba(0,0,0,0.8),0_0_50px_rgba(0,210,255,0.2)] p-3 overflow-hidden">
          {/* Top window bar */}
          <div className="flex items-center gap-2 mb-2 px-2">
            <div className="w-3 h-3 rounded-full bg-red-500/80" />
            <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
            <div className="w-3 h-3 rounded-full bg-green-500/80" />
            <div className="mx-auto text-xs font-mono text-[#64748B]">shurianlabs.com.ar</div>
          </div>
          {/* Screenshot inside laptop */}
          <div className="w-full h-[420px] rounded-2xl overflow-hidden relative">
            <Img
              src={staticFile("portfolio/shurian-home.png")}
              alt="Shurian Web Preview"
              className="w-full h-full object-cover object-top"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#090D16] via-transparent to-transparent opacity-60" />
          </div>
        </div>

        {/* Floating Mobile Smartphone (overlapping on right) */}
        <div
          className="absolute right-[-10px] bottom-[-20px] w-[260px] h-[520px] rounded-[44px] bg-[#090D16] border-[3px] border-[#00F5A0] shadow-[0_20px_50px_rgba(0,0,0,0.9),0_0_35px_rgba(0,245,160,0.35)] p-2.5 rotate-[-4deg] overflow-hidden"
          style={{
            transform: `rotate(-4deg) translateY(${floatY * -0.5}px)`,
          }}
        >
          {/* Island */}
          <div className="absolute top-4 left-1/2 -translate-x-1/2 w-20 h-5 bg-black rounded-full z-20" />
          <div className="w-full h-full rounded-[34px] overflow-hidden">
            <Img
              src={staticFile("portfolio/puntobarba-home.png")}
              alt="Mobile Turnos Online"
              className="w-full h-full object-cover object-top"
            />
          </div>
        </div>
      </div>

      {/* Micro-metric Pill */}
      <div
        className="font-mono text-xs tracking-wider text-[#00F5A0] bg-[#131B2E]/80 border border-[#00F5A0]/30 px-5 py-2 rounded-full"
        style={{ opacity: subtitleOpacity }}
      >
        ⚡ LISTO EN POCOS DÍAS • CONECTADO A WHATSAPP
      </div>
    </AbsoluteFill>
  );
};
