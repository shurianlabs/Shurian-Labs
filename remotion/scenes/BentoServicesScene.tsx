import React from "react";
import {
  AbsoluteFill,
  useCurrentFrame,
  useVideoConfig,
  spring,
  interpolate,
} from "remotion";
import { Globe, MessageSquare, LayoutGrid, CheckCircle, Zap } from "lucide-react";

export const BentoServicesScene: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const titleSpring = spring({
    frame,
    fps,
    config: { damping: 13, stiffness: 95 },
  });

  const card1Spring = spring({
    frame: frame - 6,
    fps,
    config: { damping: 13, stiffness: 90 },
  });

  const card2Spring = spring({
    frame: frame - 14,
    fps,
    config: { damping: 13, stiffness: 90 },
  });

  const card3Spring = spring({
    frame: frame - 22,
    fps,
    config: { damping: 13, stiffness: 90 },
  });

  return (
    <AbsoluteFill className="flex flex-col items-center justify-between px-10 pt-24 pb-20">
      {/* Top Header */}
      <div
        className="flex flex-col items-center text-center"
        style={{
          transform: `translateY(${interpolate(titleSpring, [0, 1], [-40, 0])}px)`,
          opacity: titleSpring,
        }}
      >
        <div className="inline-flex items-center gap-2.5 px-6 py-2 rounded-full bg-[#131B2E] border border-[#00D2FF]/40 shadow-[0_0_20px_rgba(0,210,255,0.2)] mb-4">
          <Zap className="w-4 h-4 text-[#00D2FF]" />
          <span className="font-mono text-xs font-extrabold uppercase tracking-widest text-[#00D2FF]">
            SOLUCIONES PARA TU NEGOCIO
          </span>
        </div>

        <h2 className="text-[56px] font-black leading-tight text-white mb-2">
          Tecnología simple,{" "}
          <span className="bg-gradient-to-r from-[#00D2FF] to-[#00F5A0] bg-clip-text text-transparent">
            resultados reales
          </span>
        </h2>
        <p className="text-2xl font-medium text-[#94A3B8]">
          Sin complicaciones técnicas. Te lo entregamos listo y te enseñamos a usarlo.
        </p>
      </div>

      {/* Bento Grid Layout (3 Cards) */}
      <div className="flex flex-col gap-6 w-full max-w-[940px]">
        {/* Bento Card 1: Desarrollo Web y Tiendas Online */}
        <div
          className="rounded-[32px] bg-[#131B2E]/90 border-2 border-[#00D2FF]/40 p-8 flex items-center justify-between shadow-[0_20px_45px_rgba(0,0,0,0.6)] backdrop-blur-xl"
          style={{
            transform: `translateY(${interpolate(
              card1Spring,
              [0, 1],
              [60, 0]
            )}px) scale(${card1Spring})`,
            opacity: card1Spring,
            boxShadow: "0 0 30px rgba(0,210,255,0.15)",
          }}
        >
          <div className="flex items-start gap-6 max-w-[680px]">
            <div className="w-20 h-20 rounded-2xl bg-[#090D16] border border-[#00D2FF]/50 flex items-center justify-center shadow-[0_0_25px_rgba(0,210,255,0.3)] shrink-0">
              <Globe className="w-10 h-10 text-[#00D2FF]" />
            </div>
            <div>
              <span className="font-mono text-xs font-bold text-[#00D2FF] tracking-wider uppercase mb-1 block">
                VENTAS & CATÁLOGOS
              </span>
              <h3 className="text-3xl font-black text-white mb-2">
                Páginas Web y Tiendas Online
              </h3>
              <p className="text-xl font-medium text-[#94A3B8] leading-relaxed">
                Tus clientes eligen productos desde el celular y el pedido te llega listo a tu WhatsApp o cobran con MercadoPago.
              </p>
            </div>
          </div>
          <div className="hidden sm:flex flex-col items-end gap-2 font-mono text-xs font-bold text-[#00F5A0] shrink-0">
            <span className="px-3.5 py-1.5 rounded-lg bg-[#00F5A0]/10 border border-[#00F5A0]/30">
              +VENTAS
            </span>
            <span className="px-3.5 py-1.5 rounded-lg bg-[#00D2FF]/10 border border-[#00D2FF]/30 text-[#00D2FF]">
              MOBILE FIRST
            </span>
          </div>
        </div>

        {/* Bento Card 2: Bots de WhatsApp */}
        <div
          className="rounded-[32px] bg-[#131B2E]/90 border-2 border-[#00F5A0]/40 p-8 flex items-center justify-between shadow-[0_20px_45px_rgba(0,0,0,0.6)] backdrop-blur-xl"
          style={{
            transform: `translateY(${interpolate(
              card2Spring,
              [0, 1],
              [60, 0]
            )}px) scale(${card2Spring})`,
            opacity: card2Spring,
            boxShadow: "0 0 30px rgba(0,245,160,0.15)",
          }}
        >
          <div className="flex items-start gap-6 max-w-[680px]">
            <div className="w-20 h-20 rounded-2xl bg-[#090D16] border border-[#00F5A0]/50 flex items-center justify-center shadow-[0_0_25px_rgba(0,245,160,0.3)] shrink-0">
              <MessageSquare className="w-10 h-10 text-[#00F5A0]" />
            </div>
            <div>
              <span className="font-mono text-xs font-bold text-[#00F5A0] tracking-wider uppercase mb-1 block">
                ATENCIÓN INMEDIATA 24/7
              </span>
              <h3 className="text-3xl font-black text-white mb-2">
                Respuestas Automáticas por WhatsApp
              </h3>
              <p className="text-xl font-medium text-[#94A3B8] leading-relaxed">
                Un asistente responde precios, stock, horarios y turnos las 24 horas para no perder clientes cuando estás ocupado.
              </p>
            </div>
          </div>
          <div className="hidden sm:flex flex-col items-end gap-2 font-mono text-xs font-bold text-[#00F5A0] shrink-0">
            <span className="px-3.5 py-1.5 rounded-lg bg-[#00F5A0]/10 border border-[#00F5A0]/30">
              24/7 ACTIVO
            </span>
            <span className="px-3.5 py-1.5 rounded-lg bg-[#00D2FF]/10 border border-[#00D2FF]/30 text-[#00D2FF]">
              CERO DEMORAS
            </span>
          </div>
        </div>

        {/* Bento Card 3: Software de Gestión */}
        <div
          className="rounded-[32px] bg-[#131B2E]/90 border-2 border-[#00D2FF]/40 p-8 flex items-center justify-between shadow-[0_20px_45px_rgba(0,0,0,0.6)] backdrop-blur-xl"
          style={{
            transform: `translateY(${interpolate(
              card3Spring,
              [0, 1],
              [60, 0]
            )}px) scale(${card3Spring})`,
            opacity: card3Spring,
            boxShadow: "0 0 30px rgba(0,210,255,0.15)",
          }}
        >
          <div className="flex items-start gap-6 max-w-[680px]">
            <div className="w-20 h-20 rounded-2xl bg-[#090D16] border border-[#00D2FF]/50 flex items-center justify-center shadow-[0_0_25px_rgba(0,210,255,0.3)] shrink-0">
              <LayoutGrid className="w-10 h-10 text-[#00D2FF]" />
            </div>
            <div>
              <span className="font-mono text-xs font-bold text-[#00D2FF] tracking-wider uppercase mb-1 block">
                ORDEN & CONTROL TOTAL
              </span>
              <h3 className="text-3xl font-black text-white mb-2">
                Sistemas de Gestión a Medida
              </h3>
              <p className="text-xl font-medium text-[#94A3B8] leading-relaxed">
                Olvidate de los cuadernos. Ordená tus clientes, turnos, reparaciones y presupuestos en una pantalla clara desde tu celular.
              </p>
            </div>
          </div>
          <div className="hidden sm:flex flex-col items-end gap-2 font-mono text-xs font-bold text-[#00F5A0] shrink-0">
            <span className="px-3.5 py-1.5 rounded-lg bg-[#00F5A0]/10 border border-[#00F5A0]/30">
              SIN ERRORES
            </span>
            <span className="px-3.5 py-1.5 rounded-lg bg-[#00D2FF]/10 border border-[#00D2FF]/30 text-[#00D2FF]">
              EN LA NUBE
            </span>
          </div>
        </div>
      </div>

      {/* Bottom Guarantee Banner */}
      <div
        className="flex items-center gap-3 font-mono text-sm font-bold text-[#00F5A0] bg-[#131B2E] border border-[#00F5A0]/40 px-6 py-3 rounded-full shadow-[0_0_15px_rgba(0,245,160,0.2)]"
        style={{
          opacity: card3Spring,
        }}
      >
        <CheckCircle className="w-5 h-5 text-[#00F5A0]" />
        <span>MODALIDAD LLAVE EN MANO O SUSCRIPCIÓN MENSUAL ACCESIBLE</span>
      </div>
    </AbsoluteFill>
  );
};
