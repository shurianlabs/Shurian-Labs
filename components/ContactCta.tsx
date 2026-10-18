"use client";

import { useState, FormEvent } from "react";
import { MessageCircle } from "lucide-react";

const SOLUTION_TYPES = [
  "Página Web / Catálogo",
  "Tienda Online",
  "Sistema de Gestión",
  "Automatizar WhatsApp",
  "Quiero Asesoramiento",
] as const;

export default function ContactCta() {
  const [name, setName] = useState("");
  const [solutionType, setSolutionType] = useState<string>("Página Web / Catálogo");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const cleanName = name.trim() || "Mi Negocio";
    const cleanMsg =
      message.trim() || "Me gustaría recibir asesoramiento para mi negocio.";

    const whatsappText = [
      "¡Hola *Shurian Labs*! Quiero hacer una consulta:",
      `• *Nombre / Negocio:* ${cleanName}`,
      `• *Me interesa:* ${solutionType}`,
      `• *Consulta:* ${cleanMsg}`,
    ].join("\n");

    const url = `https://wa.me/5493416055274?text=${encodeURIComponent(whatsappText)}`;
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <section
      id="contacto"
      className="py-16 md:py-24 px-4 sm:px-6 max-w-2xl mx-auto border-t border-[#1E293B]/70"
    >
      <div className="rounded-2xl bg-[#131B2E] border border-[#1E293B] p-6 sm:p-10 shadow-xl">
        <div className="text-center mb-8">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
            ¿Hacemos la página o el sistema para tu negocio?
          </h2>
          <p className="text-sm sm:text-base text-[#94A3B8] mt-2">
            Completá estos datos y hablamos directo por WhatsApp sin compromiso.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label
              htmlFor="contact-name"
              className="block text-xs font-semibold text-white mb-2"
            >
              Tu Nombre o el de tu Negocio
            </label>
            <input
              id="contact-name"
              type="text"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Ej. Martín — Bicicletería del Centro"
              className="w-full px-4 py-3 rounded-xl bg-[#090D16] border border-[#1E293B] text-white placeholder:text-[#94A3B8]/50 text-sm focus:outline-none focus:border-[#00D2FF]"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-white mb-2">
              ¿Qué estás buscando?
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
              {SOLUTION_TYPES.map((type, idx) => {
                const active = solutionType === type;
                return (
                  <button
                    key={type}
                    type="button"
                    onClick={() => setSolutionType(type)}
                    className={`px-3 py-2.5 rounded-xl text-xs sm:text-sm font-semibold border transition-all duration-200 ${
                      idx === SOLUTION_TYPES.length - 1 ? "col-span-2 sm:col-span-1" : ""
                    } ${
                      active
                        ? "bg-gradient-to-r from-[#00D2FF]/20 to-[#00F5A0]/20 border-[#00D2FF] text-white"
                        : "bg-[#090D16] border-[#1E293B] text-[#94A3B8] hover:text-white"
                    }`}
                  >
                    {type}
                  </button>
                );
              })}
            </div>
          </div>

          <div>
            <label
              htmlFor="contact-message"
              className="block text-xs font-semibold text-white mb-2"
            >
              Contanos brevemente qué necesitás (opcional)
            </label>
            <textarea
              id="contact-message"
              rows={3}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Ej: Quiero mostrar mi catálogo de productos y que me pidan por WhatsApp..."
              className="w-full px-4 py-3 rounded-xl bg-[#090D16] border border-[#1E293B] text-white placeholder:text-[#94A3B8]/50 text-sm focus:outline-none focus:border-[#00D2FF] resize-y"
            />
          </div>

          <button
            type="submit"
            className="w-full inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-gradient-to-r from-[#00D2FF] to-[#00F5A0] text-[#090D16] font-bold text-base transition-all duration-200 shadow-[0_0_24px_rgba(0,210,255,0.25)] hover:shadow-[0_0_32px_rgba(0,245,160,0.45)]"
          >
            <MessageCircle className="w-5 h-5" />
            <span>Enviar Consulta por WhatsApp</span>
          </button>
        </form>
      </div>
    </section>
  );
}
