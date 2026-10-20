import React from "react";
import {
  AbsoluteFill,
  useCurrentFrame,
  useVideoConfig,
  spring,
  interpolate,
  Img,
} from "remotion";

interface ProjectCard {
  name: string;
  category: string;
  tag: string;
  tagColor: string;
  image: string;
  feature: string;
}

const PROJECTS: ProjectCard[] = [
  {
    name: "Shurian Store & Lab",
    category: "Tecnología & Reparaciones",
    tag: "🛍️ TIENDA ONLINE + WHATSAPP",
    tagColor: "#00D2FF",
    image: "/portfolio/shurian-home.png",
    feature: "Carrito inteligente con pedidos directo al WhatsApp",
  },
  {
    name: "Reset ART Barbershop",
    category: "Barbería & Academia",
    tag: "💈 LANDING PAGE + CURSOS",
    tagColor: "#00F5A0",
    image: "/portfolio/resetart-home.png",
    feature: "Diseño visual de alto impacto con catálogo de cortes",
  },
  {
    name: "Oroño Bike",
    category: "Ciclismo & Competición",
    tag: "🚴 E-COMMERCE + MERCADOPAGO",
    tagColor: "#00D2FF",
    image: "/portfolio/orono-home.png",
    feature: "Catálogo completo y simulador de cuotas en vivo",
  },
  {
    name: "Punto Barba Barbería",
    category: "Estilo & Cuidado Masculino",
    tag: "📅 SISTEMA DE TURNOS 24/7",
    tagColor: "#00F5A0",
    image: "/portfolio/puntobarba-home.png",
    feature: "Reserva de turnos online por profesional y horario",
  },
];

export const PortfolioCarouselScene: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Total frames for this scene is 150 (Frame 90 to 240)
  // 4 projects -> ~37.5 frames per project slide
  const framesPerSlide = 150 / PROJECTS.length;
  const activeIndex = Math.min(
    PROJECTS.length - 1,
    Math.floor(frame / framesPerSlide)
  );

  // Transition spring for vertical sliding
  const slideProgress = (frame % framesPerSlide) / framesPerSlide;
  const slideSpring = spring({
    frame: (frame % framesPerSlide) * 1.5,
    fps,
    config: { damping: 14, stiffness: 100 },
  });

  const headerSpring = spring({
    frame,
    fps,
    config: { damping: 14, stiffness: 90 },
  });

  // Calculate carousel vertical translation
  // Moves cards vertically up in a fluid roll
  const cardHeight = 980;
  const spacing = 40;
  const totalOffset = -(activeIndex * (cardHeight + spacing));
  const currentOffset = totalOffset - (1 - slideSpring) * (cardHeight * 0.4);

  return (
    <AbsoluteFill className="flex flex-col items-center justify-between px-10 pt-24 pb-16 overflow-hidden">
      {/* Top Header */}
      <div
        className="flex flex-col items-center text-center z-20"
        style={{
          transform: `translateY(${interpolate(headerSpring, [0, 1], [-30, 0])}px)`,
          opacity: headerSpring,
        }}
      >
        <div className="inline-flex items-center gap-2.5 px-6 py-2 rounded-full bg-[#131B2E] border border-[#00F5A0]/40 shadow-[0_0_20px_rgba(0,245,160,0.2)] mb-4">
          <span className="w-2.5 h-2.5 rounded-full bg-[#00F5A0] shadow-[0_0_8px_#00F5A0]" />
          <span className="font-mono text-xs font-extrabold uppercase tracking-widest text-[#00F5A0]">
            TRABAJOS REALES • CASOS DE ÉXITO
          </span>
        </div>

        <h2 className="text-[54px] font-black leading-tight text-white mb-2">
          Negocios reales{" "}
          <span className="bg-gradient-to-r from-[#00D2FF] to-[#00F5A0] bg-clip-text text-transparent">
            en automático
          </span>
        </h2>
      </div>

      {/* Vertical Animated Carousel Area */}
      <div className="relative w-full max-w-[940px] h-[1160px] flex items-center justify-center overflow-hidden">
        {/* Soft edge masking gradients */}
        <div className="absolute top-0 inset-x-0 h-24 bg-gradient-to-b from-[#090D16] to-transparent z-10 pointer-events-none" />
        <div className="absolute bottom-0 inset-x-0 h-24 bg-gradient-to-t from-[#090D16] to-transparent z-10 pointer-events-none" />

        {/* Carousel Reel */}
        <div
          className="flex flex-col gap-10 w-full transition-transform"
          style={{
            transform: `translateY(${currentOffset + 80}px)`,
          }}
        >
          {PROJECTS.map((proj, idx) => {
            const isCurrent = idx === activeIndex;
            const cardScale = isCurrent ? 1.0 : 0.92;
            const cardOpacity = isCurrent ? 1.0 : 0.45;

            return (
              <div
                key={proj.name}
                className="w-full h-[980px] rounded-[36px] bg-[#131B2E]/95 border-2 p-6 flex flex-col justify-between shadow-[0_25px_60px_rgba(0,0,0,0.85)] transition-all duration-300"
                style={{
                  borderColor: isCurrent ? proj.tagColor : "rgba(30, 41, 59, 0.7)",
                  boxShadow: isCurrent
                    ? `0 0 50px ${proj.tagColor}40, 0 30px 60px rgba(0,0,0,0.9)`
                    : "none",
                  transform: `scale(${cardScale})`,
                  opacity: cardOpacity,
                }}
              >
                {/* Image Mockup Preview */}
                <div className="relative w-full h-[640px] rounded-[24px] overflow-hidden border border-[#1E293B] bg-[#090D16]">
                  <Img
                    src={proj.image}
                    alt={proj.name}
                    className="w-full h-full object-cover object-top"
                  />
                  {/* Subtle glass reflection */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-[#090D16]/80 via-transparent to-transparent pointer-events-none" />
                </div>

                {/* Card Content Footer */}
                <div className="flex flex-col gap-3 pt-4 px-2">
                  <div className="flex items-center justify-between">
                    <span
                      className="inline-block px-4 py-1.5 rounded-full font-mono text-xs font-bold border tracking-wide"
                      style={{
                        color: proj.tagColor,
                        borderColor: `${proj.tagColor}60`,
                        backgroundColor: `${proj.tagColor}15`,
                        boxShadow: `0 0 15px ${proj.tagColor}30`,
                      }}
                    >
                      {proj.tag}
                    </span>
                    <span className="font-mono text-xs text-[#00F5A0] font-bold flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-[#00F5A0] shadow-[0_0_6px_#00F5A0]" />
                      SITIO ACTIVO
                    </span>
                  </div>

                  <h3 className="text-3xl font-black text-white">{proj.name}</h3>
                  <p className="text-xl font-medium text-[#94A3B8]">{proj.feature}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Carousel Step Indicators */}
      <div className="flex items-center gap-3 z-20">
        {PROJECTS.map((_, i) => (
          <div
            key={i}
            className="h-2.5 rounded-full transition-all duration-300"
            style={{
              width: i === activeIndex ? "36px" : "10px",
              backgroundColor: i === activeIndex ? "#00F5A0" : "#1E293B",
              boxShadow: i === activeIndex ? "0 0 12px #00F5A0" : "none",
            }}
          />
        ))}
      </div>
    </AbsoluteFill>
  );
};
