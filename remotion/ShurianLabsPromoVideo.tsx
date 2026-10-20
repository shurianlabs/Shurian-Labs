import React from "react";
import { AbsoluteFill, Sequence } from "remotion";
import { CyberBackground } from "./components/CyberBackground";
import { HookScene } from "./scenes/HookScene";
import { PortfolioCarouselScene } from "./scenes/PortfolioCarouselScene";
import { BentoServicesScene } from "./scenes/BentoServicesScene";
import { CtaScene } from "./scenes/CtaScene";

export const ShurianLabsPromoVideo: React.FC = () => {
  return (
    <AbsoluteFill className="bg-[#090D16] text-white font-sans overflow-hidden">
      {/* Background cyber grid & glow persistent throughout all 450 frames */}
      <CyberBackground />

      {/* Frame 0 a 90 (0s - 3s): Entrada cinemática del titular */}
      <Sequence from={0} durationInFrames={90} name="Hook: Titular de Impacto">
        <HookScene />
      </Sequence>

      {/* Frame 90 a 240 (3s - 8s): Carrusel vertical animado mostrando mockups reales */}
      <Sequence from={90} durationInFrames={150} name="Portfolio: Carrusel de Mockups">
        <PortfolioCarouselScene />
      </Sequence>

      {/* Frame 240 a 330 (8s - 11s): Bento cards con iconos de servicios */}
      <Sequence from={240} durationInFrames={90} name="Servicios: Bento Grid">
        <BentoServicesScene />
      </Sequence>

      {/* Frame 330 a 450 (11s - 15s): Cierre con Logo centrado, glow y tipeo de URL */}
      <Sequence from={330} durationInFrames={120} name="CTA: Logo & URL Typing">
        <CtaScene />
      </Sequence>
    </AbsoluteFill>
  );
};
