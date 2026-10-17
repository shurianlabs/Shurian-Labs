"use client";

import { useState } from "react";
import { ExternalLink, Eye, X, CheckCircle2, MessageCircle } from "lucide-react";

interface ProjectItem {
  id: string;
  name: string;
  clientType: string;
  badge: string;
  shortDesc: string;
  image?: string;
  liveUrl?: string;
  customVisual?: "mp" | "autocentro" | "orono";
  features: string[];
}

const PROJECTS: ProjectItem[] = [
  {
    id: "shurian-store",
    name: "Shurian Store & Servicio Técnico",
    clientType: "Tienda de Tecnología y Laboratorio en Rosario",
    badge: "Tienda Online + Reparaciones",
    shortDesc:
      "Catálogo de productos con carrito de compras directo a WhatsApp y cotizador rápido de reparaciones.",
    image: "/portfolio/shurian-store.png",
    liveUrl: "https://shurian.com.ar",
    features: [
      "Catálogo de accesorios y repuestos con precios actualizados.",
      "Carrito de compras que envía el pedido listo al WhatsApp del local.",
      "Sección para cotizar arreglos de celulares, consolas y notebooks.",
    ],
  },
  {
    id: "danti-bikes",
    name: "Danti Bikes",
    clientType: "Bicicletería y Taller Oficial",
    badge: "Catálogo Web Interactivo",
    shortDesc:
      "Página web con catálogo de bicicletas filtrable por rodado, marca y color, con botón de consulta rápida.",
    image: "/portfolio/danti-bikes.png",
    features: [
      "Filtros simples por rodado (26, 27.5, 29), marca y color.",
      "Ficha de cada bicicleta con fotos en grande y características.",
      "Panel privado para que el dueño agregue bicis o cambie precios en segundos.",
    ],
  },
  {
    id: "mundo-automocion",
    name: "Mundo Automoción",
    clientType: "Taller y Estética Vehicular",
    badge: "Sistema de Gestión de Taller",
    shortDesc:
      "Panel de control para organizar los autos en el taller, ver entregas del día y avisar al cliente por WhatsApp.",
    image: "/portfolio/mundo-automocion.png",
    features: [
      "Vista rápida de vehículos en taller, entregas de hoy y próximos turnos.",
      "Búsqueda instantánea por patente o nombre del cliente.",
      "Botón para notificar por WhatsApp cuando el vehículo está listo para retirar.",
    ],
  },
  {
    id: "mp-distribuciones",
    name: "MP Distribuciones",
    clientType: "Distribuidora Mayorista de Informática",
    badge: "Portal Mayorista B2B",
    shortDesc:
      "Catálogo mayorista para comercios donde se actualizan miles de precios desde una planilla de Excel.",
    customVisual: "mp",
    features: [
      "Carga masiva de listas de precios desde Excel en un solo clic.",
      "Buscador rápido de insumos, conectores y periféricos para clientes del gremio.",
      "Armado de pedido mayorista con envío directo por WhatsApp.",
    ],
  },
  {
    id: "accesorios-autocentro",
    name: "Accesorios Autocentro (Carlitos Autopartes)",
    clientType: "Casa de Repuestos y Autopartes en Rosario",
    badge: "Catálogo + Control de Stock",
    shortDesc:
      "Tienda online de ópticas, espejos y repuestos conectada con el control de stock y clientes del negocio.",
    customVisual: "autocentro",
    features: [
      "Búsqueda fácil de repuestos por marca, modelo y rubro.",
      "Sincronización con las planillas de stock, clientes y proveedores del local.",
      "Atención directa por WhatsApp desde cada repuesto.",
    ],
  },
  {
    id: "orono-bike",
    name: "Oroño Bike",
    clientType: "Tienda de Ciclismo y Taller Especializado",
    badge: "E-commerce + Calculadora de Cuotas",
    shortDesc:
      "Tienda online con cálculo automático de cuotas de MercadoPago, gestión de taller y facturación.",
    customVisual: "orono",
    features: [
      "Calculadora automática de cuotas y promociones bancarias.",
      "Catálogo completo de bicicletas, indumentaria y accesorios.",
      "Panel de administración con control de ventas y stock.",
    ],
  },
];

export default function Portfolio() {
  const [selected, setSelected] = useState<ProjectItem | null>(null);

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
          Conocé algunos de los negocios reales que ya trabajan y venden todos
          los días con nuestras páginas y sistemas.
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
                <div className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-rose-500/70" />
                  <span className="w-2.5 h-2.5 rounded-full bg-amber-400/70" />
                  <span className="w-2.5 h-2.5 rounded-full bg-[#00F5A0]/70" />
                  <span className="ml-2 text-xs text-[#94A3B8] truncate">
                    {project.name}
                  </span>
                </div>
                <span className="text-[11px] font-medium px-2.5 py-0.5 rounded-full bg-[#131B2E] text-[#00D2FF] border border-[#1E293B]">
                  {project.badge}
                </span>
              </div>

              {/* Project Screenshot or Visual Mockup */}
              <div className="relative h-56 sm:h-64 bg-[#090D16] overflow-hidden border-b border-[#1E293B]">
                {project.image && (
                  <img
                    src={project.image}
                    alt={project.name}
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-300"
                  />
                )}

                {project.customVisual === "mp" && (
                  <div className="w-full h-full p-6 flex flex-col justify-between bg-gradient-to-br from-[#090D16] via-[#101C35] to-[#090D16]">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <img
                          src="/portfolio/mp-distribuciones-logo.png"
                          alt="MP Distribuciones"
                          className="w-12 h-12 rounded-full object-contain bg-black p-0.5 border border-[#00D2FF]/40"
                        />
                        <div>
                          <span className="text-xs text-[#00D2FF] font-semibold block">
                            PORTAL MAYORISTA
                          </span>
                          <span className="text-lg font-extrabold text-white">
                            MP Distribuciones
                          </span>
                        </div>
                      </div>
                      <span className="px-2.5 py-1 rounded-lg bg-[#00F5A0]/15 text-[#00F5A0] text-xs font-semibold">
                        Lista Gremio Activa
                      </span>
                    </div>

                    <div className="grid grid-cols-2 gap-3 my-auto pt-3">
                      <div className="p-3 rounded-xl bg-[#131B2E]/90 border border-[#1E293B]">
                        <span className="text-[11px] text-[#94A3B8] block">
                          Catálogo Informático
                        </span>
                        <span className="text-sm font-bold text-white mt-0.5 block">
                          +1.500 Productos
                        </span>
                      </div>
                      <div className="p-3 rounded-xl bg-[#131B2E]/90 border border-[#1E293B]">
                        <span className="text-[11px] text-[#94A3B8] block">
                          Actualización
                        </span>
                        <span className="text-sm font-bold text-[#00F5A0] mt-0.5 block">
                          Directo desde Excel
                        </span>
                      </div>
                    </div>
                  </div>
                )}

                {project.customVisual === "autocentro" && (
                  <div className="w-full h-full p-6 flex flex-col justify-between bg-gradient-to-br from-[#090D16] via-[#131B2E] to-[#090D16]">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 rounded-xl bg-white p-1.5 flex items-center justify-center">
                          <img
                            src="/portfolio/autocentro.png"
                            alt="Accesorios Autocentro"
                            className="w-full h-full object-contain"
                          />
                        </div>
                        <div>
                          <span className="text-xs text-amber-400 font-semibold block">
                            CORRIENTES 579 • ROSARIO
                          </span>
                          <span className="text-lg font-extrabold text-white">
                            Accesorios Autocentro
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="grid grid-cols-3 gap-2.5 my-auto pt-3">
                      <div className="p-3 rounded-xl bg-[#090D16]/90 border border-[#1E293B]">
                        <span className="text-[11px] text-[#94A3B8] block">
                          Rubros
                        </span>
                        <span className="text-xs font-bold text-white mt-0.5 block">
                          Ópticas y Espejos
                        </span>
                      </div>
                      <div className="p-3 rounded-xl bg-[#090D16]/90 border border-[#1E293B]">
                        <span className="text-[11px] text-[#94A3B8] block">
                          Gestión
                        </span>
                        <span className="text-xs font-bold text-[#00D2FF] mt-0.5 block">
                          Stock + Clientes
                        </span>
                      </div>
                      <div className="p-3 rounded-xl bg-[#090D16]/90 border border-[#1E293B]">
                        <span className="text-[11px] text-[#94A3B8] block">
                          Ventas
                        </span>
                        <span className="text-xs font-bold text-[#00F5A0] mt-0.5 block">
                          Tienda + WhatsApp
                        </span>
                      </div>
                    </div>
                  </div>
                )}

                {project.customVisual === "orono" && (
                  <div className="w-full h-full p-6 flex flex-col justify-between bg-gradient-to-br from-[#090D16] via-[#0F2429] to-[#090D16]">
                    <div className="flex items-center justify-between">
                      <div>
                        <span className="text-xs text-[#00F5A0] font-semibold block">
                          TIENDA &amp; TALLER DE CICLISMO
                        </span>
                        <span className="text-2xl font-black tracking-tight text-white">
                          OROÑO <span className="text-[#00D2FF]">BIKE</span>
                        </span>
                      </div>
                      <span className="px-2.5 py-1 rounded-lg bg-[#00D2FF]/15 text-[#00D2FF] text-xs font-semibold">
                        MercadoPago + AFIP
                      </span>
                    </div>

                    <div className="grid grid-cols-2 gap-3 my-auto pt-3">
                      <div className="p-3 rounded-xl bg-[#131B2E]/90 border border-[#1E293B]">
                        <span className="text-[11px] text-[#94A3B8] block">
                          Financiación
                        </span>
                        <span className="text-sm font-bold text-white mt-0.5 block">
                          Simulador de Cuotas
                        </span>
                      </div>
                      <div className="p-3 rounded-xl bg-[#131B2E]/90 border border-[#1E293B]">
                        <span className="text-[11px] text-[#94A3B8] block">
                          Administración
                        </span>
                        <span className="text-sm font-bold text-[#00F5A0] mt-0.5 block">
                          Ventas y Facturación
                        </span>
                      </div>
                    </div>
                  </div>
                )}

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
                  Tocá para ver más detalles
                </span>
                <ExternalLink className="w-4 h-4 text-[#94A3B8] group-hover:text-[#00D2FF]" />
              </div>
            </div>
          </article>
        ))}
      </div>

      {/* Clean Modal when clicking a project */}
      {selected && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#090D16]/85 backdrop-blur-md"
          onClick={() => setSelected(null)}
        >
          <div
            className="w-full max-w-xl rounded-2xl bg-[#131B2E] border border-[#00D2FF]/50 shadow-2xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {selected.image && (
              <div className="h-56 bg-[#090D16] border-b border-[#1E293B] overflow-hidden">
                <img
                  src={selected.image}
                  alt={selected.name}
                  className="w-full h-full object-cover object-top"
                />
              </div>
            )}

            <div className="p-6 space-y-4">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <span className="text-xs font-semibold text-[#00F5A0]">
                    {selected.clientType}
                  </span>
                  <h3 className="text-2xl font-bold text-white mt-0.5">
                    {selected.name}
                  </h3>
                </div>
                <button
                  type="button"
                  onClick={() => setSelected(null)}
                  className="p-1.5 rounded-lg bg-[#090D16] text-[#94A3B8] hover:text-white"
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
                {selected.liveUrl && (
                  <a
                    href={selected.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-[#090D16] border border-[#1E293B] hover:border-[#00D2FF] text-xs font-semibold text-white"
                  >
                    <span>Visitar Sitio Web</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                )}
                <a
                  href="#contacto"
                  onClick={() => setSelected(null)}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#00D2FF] to-[#00F5A0] text-[#090D16] font-bold text-xs sm:text-sm"
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
