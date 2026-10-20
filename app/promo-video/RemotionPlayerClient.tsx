"use client";

import React, { useState } from "react";
import { Player } from "@remotion/player";
import { ShurianLabsPromoVideo } from "../../remotion/ShurianLabsPromoVideo";
import Link from "next/link";
import { Play, RotateCcw, Video, Download, ArrowLeft, Sparkles, Check } from "lucide-react";

export default function RemotionPlayerClient() {
  const [copied, setCopied] = useState(false);

  const copyCommand = () => {
    navigator.clipboard.writeText("npx remotion render remotion/index.ts ShurianLabsPromo out/promo-9x16.mp4");
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div className="min-h-screen bg-[#05070B] text-white flex flex-col items-center justify-center p-4 sm:p-8">
      {/* Ambient background glow */}
      <div className="fixed inset-0 pointer-events-none -z-10">
        <div className="absolute top-[10%] left-1/2 -translate-x-1/2 w-[900px] h-[500px] bg-gradient-to-b from-[#00D2FF]/10 via-[#00F5A0]/5 to-transparent blur-[120px]" />
      </div>

      {/* Top Bar Header */}
      <div className="w-full max-w-5xl flex items-center justify-between mb-8">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm font-semibold text-[#94A3B8] hover:text-white transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Volver a Shurian Labs
        </Link>

        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#131B2E] border border-[#00D2FF]/30 text-xs font-mono font-bold text-[#00D2FF] shadow-[0_0_15px_rgba(0,210,255,0.2)]">
          <span className="w-2 h-2 rounded-full bg-[#00F5A0] animate-pulse" />
          REMOTION 30 FPS • 1080x1920 (9:16)
        </div>
      </div>

      {/* Main Studio Card */}
      <div className="w-full max-w-5xl bg-[#090D16]/90 border border-[#1E293B] rounded-3xl p-6 sm:p-10 shadow-[0_30px_90px_rgba(0,0,0,0.8)] backdrop-blur-xl flex flex-col lg:flex-row gap-10 items-center">
        {/* Left: 9:16 Vertical Smartphone Player Frame */}
        <div className="relative w-full max-w-[340px] sm:max-w-[380px] aspect-[9/16] rounded-[44px] bg-[#090D16] border-[4px] border-[#1E293B] shadow-[0_20px_60px_rgba(0,0,0,0.9),0_0_40px_rgba(0,210,255,0.2)] p-2.5 overflow-hidden flex flex-col">
          {/* Dynamic Island */}
          <div className="absolute top-4 left-1/2 -translate-x-1/2 w-24 h-6 bg-black rounded-full z-30 shadow-md" />

          {/* Remotion Native Player */}
          <div className="w-full h-full rounded-[34px] overflow-hidden bg-[#090D16]">
            <Player
              component={ShurianLabsPromoVideo}
              durationInFrames={450}
              compositionWidth={1080}
              compositionHeight={1920}
              fps={30}
              style={{
                width: "100%",
                height: "100%",
              }}
              controls
              autoPlay
              loop
            />
          </div>
        </div>

        {/* Right: Video Specifications & CLI Render Command */}
        <div className="flex-1 flex flex-col gap-6">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-mono text-[#00F5A0] font-bold uppercase tracking-wider mb-2">
              <Sparkles className="w-4 h-4 text-[#00F5A0]" />
              Video Programático en React / Remotion
            </div>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Video Promocional B2B (15s)
            </h1>
            <p className="text-[#94A3B8] text-base mt-2 leading-relaxed">
              Componente modular desarrollado con Remotion, Tailwind CSS y curvas spring de aceleración profesional.
            </p>
          </div>

          {/* Timeline Milestones */}
          <div className="flex flex-col gap-3 bg-[#131B2E]/70 border border-[#1E293B] rounded-2xl p-5">
            <h3 className="text-xs font-mono font-bold text-[#00D2FF] uppercase tracking-wider">
              Estructura de Frames (Total: 450 frames @ 30fps)
            </h3>
            <ul className="text-sm space-y-2 text-[#CBD5E1]">
              <li className="flex items-start gap-2.5">
                <span className="font-mono text-xs font-bold px-2 py-0.5 rounded bg-[#00D2FF]/15 text-[#00D2FF] shrink-0 mt-0.5">
                  0 - 90
                </span>
                <span>
                  <strong>Hook Visual:</strong> Entrada cinemática del titular con laptop y smartphone flotantes.
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="font-mono text-xs font-bold px-2 py-0.5 rounded bg-[#00F5A0]/15 text-[#00F5A0] shrink-0 mt-0.5">
                  90 - 240
                </span>
                <span>
                  <strong>Carrusel Vertical:</strong> Mockups reales de Shurian Store, Reset ART, Oroño Bike y Punto Barba.
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="font-mono text-xs font-bold px-2 py-0.5 rounded bg-[#00D2FF]/15 text-[#00D2FF] shrink-0 mt-0.5">
                  240 - 330
                </span>
                <span>
                  <strong>Bento Cards:</strong> Páginas Web, Bots WhatsApp 24/7 y Software de Gestión.
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="font-mono text-xs font-bold px-2 py-0.5 rounded bg-[#00F5A0]/15 text-[#00F5A0] shrink-0 mt-0.5">
                  330 - 450
                </span>
                <span>
                  <strong>Cierre de Marca:</strong> Isotipo neón centrado, tipeo de <code className="font-mono text-[#00D2FF]">www.shurianlabs.com.ar</code> y botón CTA.
                </span>
              </li>
            </ul>
          </div>

          {/* Command to render MP4 via CLI */}
          <div className="flex flex-col gap-2">
            <label className="text-xs font-mono text-[#94A3B8]">
              Comando CLI para renderizar a MP4 (4K / Full HD):
            </label>
            <div className="flex items-center gap-2 p-3 rounded-xl bg-[#05070B] border border-[#1E293B]">
              <code className="text-xs font-mono text-[#00D2FF] truncate flex-1">
                npx remotion render remotion/index.ts ShurianLabsPromo out/promo-9x16.mp4
              </code>
              <button
                onClick={copyCommand}
                className="px-3 py-1.5 rounded-lg bg-[#1E293B] hover:bg-[#334155] text-xs font-medium text-white transition-colors shrink-0 flex items-center gap-1.5"
              >
                {copied ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-[#00F5A0]" />
                    <span>Copiado</span>
                  </>
                ) : (
                  <span>Copiar</span>
                )}
              </button>
            </div>
          </div>

          {/* Action Links */}
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <a
              href="/promo-video.html"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-gradient-to-r from-[#00D2FF] to-[#00F5A0] text-[#090D16] font-bold text-sm shadow-[0_0_20px_rgba(0,210,255,0.3)] hover:shadow-[0_0_30px_rgba(0,245,160,0.5)] transition-all"
            >
              <Video className="w-4 h-4" />
              <span>Abrir Estudio con Grabador Web</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
