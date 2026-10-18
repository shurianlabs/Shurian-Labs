import { ArrowDown, MessageCircle, CheckCircle2 } from "lucide-react";
import Logo from "@/logo";

export default function Hero() {
  return (
    <section className="pt-32 pb-16 md:pt-40 md:pb-20 px-4 sm:px-6 max-w-5xl mx-auto text-center">
      {/* Simple Top Pill with Logo */}
      <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#131B2E] border border-[#1E293B] mb-6">
        <Logo iconOnly className="w-4 h-4" />
        <span className="text-xs sm:text-sm font-medium text-[#00F5A0]">
          Páginas Web, Tiendas Online y Sistemas a Medida
        </span>
      </div>

      {/* Clean, Big Headline */}
      <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight leading-[1.15] max-w-4xl mx-auto">
        Hacemos la página web o el sistema que tu negocio necesita para{" "}
        <span className="bg-gradient-to-r from-[#00D2FF] to-[#00F5A0] bg-clip-text text-transparent">
          vender más y trabajar mejor
        </span>
      </h1>

      {/* Short, Clear Subtitle */}
      <p className="text-base sm:text-xl text-[#94A3B8] max-w-2xl mx-auto mt-6 leading-relaxed">
        Diseños modernos y optimizados para celulares y PC, con integraciones
        ágiles para potenciar la presencia y gestión de tu negocio.
      </p>

      {/* Primary Actions */}
      <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-9">
        <a
          href="#casos"
          className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-[#00D2FF] to-[#00F5A0] text-[#090D16] font-bold text-base transition-all duration-200 shadow-[0_0_24px_rgba(0,210,255,0.25)] hover:shadow-[0_0_32px_rgba(0,245,160,0.45)]"
        >
          <span>Ver Páginas que Hicimos</span>
          <ArrowDown className="w-4 h-4" />
        </a>

        <a
          href="#contacto"
          className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-[#131B2E] border border-[#1E293B] hover:border-[#00D2FF] text-white font-semibold text-base transition-all duration-200"
        >
          <MessageCircle className="w-4 h-4 text-[#00F5A0]" />
          <span>Pedir Presupuesto</span>
        </a>
      </div>

      {/* 3 Simple Reassurance Points */}
      <div className="mt-10 pt-8 border-t border-[#1E293B]/60 flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-xs sm:text-sm text-[#94A3B8]">
        <span className="flex items-center gap-2">
          <CheckCircle2 className="w-4 h-4 text-[#00F5A0]" />
          Fácil de manejar desde tu celular
        </span>
        <span className="flex items-center gap-2">
          <CheckCircle2 className="w-4 h-4 text-[#00D2FF]" />
          Pedidos y avisos directos al WhatsApp
        </span>
        <span className="flex items-center gap-2">
          <CheckCircle2 className="w-4 h-4 text-[#00F5A0]" />
          Te acompañamos paso a paso
        </span>
      </div>
    </section>
  );
}
