import React from "react";
import {
  AbsoluteFill,
  useCurrentFrame,
  useVideoConfig,
  spring,
  interpolate,
} from "remotion";
import { Logo } from "../components/Logo";
import { MessageCircle, ArrowRight, ShieldCheck } from "lucide-react";

export const CtaScene: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Entrance spring for Logo and Title
  const logoSpring = spring({
    frame,
    fps,
    config: { damping: 12, stiffness: 85, mass: 0.9 },
  });

  const buttonSpring = spring({
    frame: frame - 18,
    fps,
    config: { damping: 14, stiffness: 100 },
  });

  // Typing animation for "www.shurianlabs.com.ar"
  const fullDomain = "www.shurianlabs.com.ar";
  // Starts typing at frame 20, completes by frame 60
  const typingProgress = interpolate(frame, [20, 65], [0, fullDomain.length], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const typedCharactersCount = Math.floor(typingProgress);
  const displayedDomain = fullDomain.substring(0, typedCharactersCount);

  // Blinking cursor
  const showCursor = Math.floor(frame / 6) % 2 === 0;

  // Pulsing scale for the main button
  const pulse = interpolate(Math.sin(frame * 0.15), [-1, 1], [0.98, 1.03]);

  return (
    <AbsoluteFill className="flex flex-col items-center justify-between px-12 pt-28 pb-24 text-center">
      {/* Top Pre-title */}
      <div
        className="inline-flex items-center gap-2.5 px-6 py-2.5 rounded-full bg-[#131B2E] border border-[#00D2FF]/40 shadow-[0_0_20px_rgba(0,210,255,0.25)]"
        style={{
          transform: `translateY(${interpolate(logoSpring, [0, 1], [-30, 0])}px)`,
          opacity: logoSpring,
        }}
      >
        <span className="w-2.5 h-2.5 rounded-full bg-[#00F5A0] shadow-[0_0_8px_#00F5A0]" />
        <span className="font-mono text-xs font-extrabold uppercase tracking-widest text-[#00D2FF]">
          LLEVÁ TU NEGOCIO AL SIGUIENTE NIVEL
        </span>
      </div>

      {/* Centered Logo & Brand Identity */}
      <div
        className="flex flex-col items-center gap-8 my-auto"
        style={{
          transform: `scale(${logoSpring})`,
          opacity: logoSpring,
        }}
      >
        {/* Pulsing Glowing Squircle Logo Component */}
        <Logo size={310} withPulsingGlow={true} />

        {/* Brand Text */}
        <div className="flex flex-col items-center">
          <div className="flex items-center gap-3">
            <span className="text-[64px] font-black tracking-wider text-white">
              SHURIAN
            </span>
            <span className="font-mono text-[56px] font-black bg-gradient-to-r from-[#00D2FF] to-[#00F5A0] bg-clip-text text-transparent drop-shadow-[0_0_30px_rgba(0,245,160,0.5)]">
              [LABS]
            </span>
          </div>
          <p className="text-2xl font-semibold text-[#94A3B8] tracking-wide mt-2">
            Desarrollo de Software & Automatizaciones
          </p>
        </div>

        {/* Monospace URL with Typing Animation */}
        <div className="mt-4 px-8 py-4 rounded-2xl bg-[#131B2E]/90 border-2 border-[#00D2FF]/50 shadow-[0_0_35px_rgba(0,210,255,0.25)] flex items-center gap-3">
          <span className="text-2xl">🌐</span>
          <span className="font-mono text-3xl font-extrabold tracking-wider bg-gradient-to-r from-[#00D2FF] to-[#00F5A0] bg-clip-text text-transparent">
            {displayedDomain}
          </span>
          <span
            className={`w-3 h-7 bg-[#00F5A0] shadow-[0_0_8px_#00F5A0] transition-opacity ${
              showCursor ? "opacity-100" : "opacity-0"
            }`}
          />
        </div>
      </div>

      {/* Call To Action Buttons & Footnote */}
      <div
        className="flex flex-col items-center gap-6 w-full max-w-[820px]"
        style={{
          transform: `translateY(${interpolate(
            buttonSpring,
            [0, 1],
            [50, 0]
          )}px) scale(${buttonSpring * pulse})`,
          opacity: buttonSpring,
        }}
      >
        {/* Gradient Main Action Button */}
        <div className="w-full h-24 rounded-3xl bg-gradient-to-r from-[#00D2FF] to-[#00F5A0] p-1 shadow-[0_0_50px_rgba(0,210,255,0.45)]">
          <div className="w-full h-full rounded-[22px] bg-[#090D16]/20 flex items-center justify-center gap-4 text-black font-black text-3xl tracking-wide">
            <MessageCircle className="w-9 h-9 text-[#090D16]" fill="#090D16" />
            <span className="text-[#090D16]">PEDIR PRESUPUESTO</span>
            <ArrowRight className="w-8 h-8 text-[#090D16]" strokeWidth={3} />
          </div>
        </div>

        <div className="flex items-center gap-2 text-lg font-medium text-[#94A3B8]">
          <ShieldCheck className="w-5 h-5 text-[#00F5A0]" />
          <span>Cotizá sin costo ni compromiso • Respuesta en el día</span>
        </div>
      </div>
    </AbsoluteFill>
  );
};
