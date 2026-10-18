"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { ExternalLink, Eye, X, CheckCircle2, MessageCircle } from "lucide-react";

interface ProjectItem {
  id: string;
  name: string;
  clientType: string;
  badge: string;
  shortDesc: string;
  image: string;
  liveUrl: string;
  displayUrl: string;
  features: string[];
}

const PROJECTS: ProjectItem[] = [
  {
    id: "shurian",
    name: "Shurian Store & Servicio Técnico",
    clientType: "Tecnología, Accesorios y Laboratorio",
    badge: "Tienda Online + Reparaciones",
    shortDesc:
      "Catálogo de tecnología con carrito de pedidos directo a WhatsApp y cotizador rápido de reparaciones en tiempo real.",
    image: "/portfolio/shurian-home.png",
    liveUrl: "https://shurian.vercel.app/",
    displayUrl: "shurian.vercel.app",
    features: [
      "Catálogo de accesorios, repuestos y tecnología con precios actualizados.",
      "Carrito de compras inteligente con envío de pedido directo al WhatsApp.",
      "Asistente interactivo para presupuestar y consultar el estado de reparaciones.",
    ],
  },
  {
    id: "resetart-barbershop",
    name: "Reset ART Barbershop",
    clientType: "Barbería Premium & Academia",
    badge: "Landing Page + Academia",
    shortDesc:
      "Sitio web moderno con identidad visual de impacto, catálogo de servicios, cursos y contacto directo.",
    image: "/portfolio/resetart-home.png",
    liveUrl: "https://resetart-barbershop.vercel.app/",
    displayUrl: "resetart-barbershop.vercel.app",
    features: [
      "Diseño de alto impacto visual optimizado para celulares y computadoras.",
      "Presentación de cortes, estilos, servicios de barbería y programas de academia.",
      "Acceso directo para consultas y reservas por WhatsApp en un toque.",
    ],
  },
  {
    id: "punto-barba",
    name: "Punto Barba Barbería",
    clientType: "Barbería & Cuidado Masculino",
    badge: "Sistema de Turnos Online",
    shortDesc:
      "Plataforma oficial con reserva de turnos online, elección de barbero, horarios disponibles y beneficios exclusivos.",
    image: "/portfolio/puntobarba-home.png",
    liveUrl: "https://www.puntobarbabarberia.com.ar/",
    displayUrl: "puntobarbabarberia.com.ar",
    features: [
      "Sistema de reservas online donde el cliente elige fecha, horario y profesional.",
      "Recordatorios y confirmaciones automáticas para evitar ausencias.",
      "Gestión de turnos y agenda centralizada para el equipo de trabajo.",
    ],
  },
  {
    id: "orono-bike",
    name: "Oroño Bike",
    clientType: "Tienda de Ciclismo & Taller Especializado",
    badge: "E-commerce + Cuotas MercadoPago",
    shortDesc:
      "Tienda online de alto rendimiento con catálogo de bicicletas, simulador de cuotas de MercadoPago y gestión de taller.",
    image: "/portfolio/orono-home.png",
    liveUrl: "https://orono-bike.vercel.app/",
    displayUrl: "orono-bike.vercel.app",
    features: [
      "Simulador automático de cuotas y promociones con tarjetas de crédito.",
      "Catálogo completo de bicicletas de competición, accesorios e indumentaria.",
      "Panel de administración integrado con facturación y control de stock.",
    ],
  },
];

export default function Portfolio() {
  const [selected, setSelected] = useState<ProjectItem | null>(null);

  // Close modal on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setSelected(null);
      }
    };
    if (selected) {
      window.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [selected]);

  return (
    <section
      id="casos"
      className="py-12 md:py-20 px-4 sm:px-6 max-w-6xl mx-auto"
    >
      {/* Clean Section Header */}
      <div className="text-center max-w-2xl mx-auto mb-12">
        <span className="inline-block px-3.5 py-1 rounded-full bg-[#131B2E] border border-[#1E293B] text-xs font-semibold text-[#00F5A0] mb-3">
          Trabajos Realizados
        </span>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
          Páginas y Sistemas que Hicimos
        </h2>
        <p className="text-[#94A3B8] text-sm sm:text-base mt-2">
          Hacé clic en cualquier proyecto para ver lo que desarrollamos o
          visitar el sitio web publicado en vivo.
        </p>
      </div>

      {/* Clean 2-Column Visual Showcase Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {PROJECTS.map((project) => (
          <article
            key={project.id}
            onClick={() => setSelected(project)}
            className="group cursor-pointer rounded-2xl bg-[#131B2E] border border-[#1E293B] hover:border-[#00D2FF]/70 overflow-hidden transition-all duration-200 hover:shadow-[0_0_30px_rgba(0,210,255,0.15)] flex flex-col justify-between"
          >
            {/* Browser Mockup Frame + Visual Preview */}
            <div>
              <div className="px-4 py-2.5 bg-[#090D16] border-b border-[#1E293B] flex items-center justify-between">
                <div className="flex items-center gap-1.5 min-w-0">
                  <span className="w-2.5 h-2.5 rounded-full bg-rose-500/70 shrink-0" />
                  <span className="w-2.5 h-2.5 rounded-full bg-amber-400/70 shrink-0" />
                  <span className="w-2.5 h-2.5 rounded-full bg-[#00F5A0]/70 shrink-0" />
                  <span className="ml-2 font-mono text-[11px] text-[#94A3B8] truncate">
                    {project.displayUrl}
                  </span>
                </div>
                <span className="text-[11px] font-medium px-2.5 py-0.5 rounded-full bg-[#131B2E] text-[#00D2FF] border border-[#1E293B] shrink-0 ml-2">
                  {project.badge}
                </span>
              </div>

              {/* Project Screenshot Frame */}
              <div className="relative h-56 sm:h-64 bg-[#090D16] overflow-hidden border-b border-[#1E293B]">
                <Image
                  src={project.image}
                  alt={`Captura de pantalla de ${project.name}`}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover object-top group-hover:scale-105 transition-transform duration-300"
                />

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-[#090D16]/60 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center">
                  <span className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-[#00D2FF] to-[#00F5A0] text-[#090D16] font-bold text-xs shadow-lg">
                    <Eye className="w-4 h-4" />
                    Ver qué incluye
                  </span>
                </div>
              </div>
            </div>

            {/* Clean Card Info */}
            <div className="p-6 flex flex-col justify-between flex-1">
              <div>
                <p className="text-xs text-[#00D2FF] font-medium">
                  {project.clientType}
                </p>
                <h3 className="text-xl font-bold text-white mt-1 group-hover:text-[#00D2FF] transition-colors">
                  {project.name}
                </h3>
                <p className="text-sm text-[#94A3B8] mt-2 leading-relaxed">
                  {project.shortDesc}
                </p>
              </div>

              <div className="mt-5 pt-4 border-t border-[#1E293B] flex items-center justify-between text-xs font-semibold text-white">
                <span className="group-hover:text-[#00F5A0] transition-colors">
                  Ver detalles del proyecto
                </span>
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="font-mono text-[#00D2FF] hover:underline flex items-center gap-1.5 py-1 px-2 -mr-2 rounded-lg hover:bg-[#090D16]/80 transition-colors"
                  aria-label={`Visitar web de ${project.name}`}
                >
                  <span>Visitar web</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>

      {/* Clean Modal when clicking a project */}
      {selected && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-project-title"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#090D16]/85 backdrop-blur-md"
          onClick={() => setSelected(null)}
        >
          <div
            className="w-full max-w-xl rounded-2xl bg-[#131B2E] border border-[#00D2FF]/50 shadow-2xl overflow-hidden max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {selected.image && (
              <div className="relative h-56 sm:h-64 bg-[#090D16] border-b border-[#1E293B] overflow-hidden">
                <Image
                  src={selected.image}
                  alt={`Captura completa de ${selected.name}`}
                  fill
                  sizes="(max-width: 768px) 100vw, 600px"
                  className="object-cover object-top"
                />
              </div>
            )}

            <div className="p-6 space-y-4">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <span className="text-xs font-semibold text-[#00F5A0]">
                    {selected.clientType}
                  </span>
                  <h3
                    id="modal-project-title"
                    className="text-2xl font-bold text-white mt-0.5"
                  >
                    {selected.name}
                  </h3>
                </div>
                <button
                  type="button"
                  onClick={() => setSelected(null)}
                  className="p-1.5 rounded-lg bg-[#090D16] text-[#94A3B8] hover:text-white transition-colors"
                  aria-label="Cerrar modal"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <p className="text-sm text-[#94A3B8] leading-relaxed">
                {selected.shortDesc}
              </p>

              <div className="space-y-2 pt-2">
                <p className="text-xs font-bold uppercase text-white">
                  Lo que hicimos en este proyecto:
                </p>
                {selected.features.map((feat) => (
                  <div
                    key={feat}
                    className="flex items-start gap-2.5 p-3 rounded-xl bg-[#090D16] border border-[#1E293B]"
                  >
                    <CheckCircle2 className="w-4 h-4 text-[#00F5A0] shrink-0 mt-0.5" />
                    <span className="text-sm text-white">{feat}</span>
                  </div>
                ))}
              </div>

              <div className="pt-4 flex flex-col sm:flex-row items-center justify-end gap-3">
                <a
                  href={selected.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-[#090D16] border border-[#00D2FF]/50 hover:border-[#00D2FF] text-xs font-semibold text-[#00D2FF] transition-colors"
                >
                  <span>Abrir {selected.displayUrl}</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
                <a
                  href="#contacto"
                  onClick={() => setSelected(null)}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#00D2FF] to-[#00F5A0] text-[#090D16] font-bold text-xs sm:text-sm hover:shadow-[0_0_20px_rgba(0,245,160,0.35)] transition-all"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Quiero algo así para mi negocio</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
