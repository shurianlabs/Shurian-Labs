import { Github, Linkedin, Instagram, Wrench, ArrowUpRight } from "lucide-react";
import Logo from "@/logo";

export default function Footer() {
  return (
    <footer className="bg-[#090D16] border-t border-[#1E293B]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-[#1E293B]">
          {/* Brand Column */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <Logo iconOnly className="w-10 h-10" />
              <div>
                <div className="flex items-center gap-1.5">
                  <span className="font-bold tracking-wider text-white text-lg">
                    SHURIAN
                  </span>
                  <span className="font-mono font-bold text-base bg-gradient-to-r from-[#00D2FF] to-[#00F5A0] bg-clip-text text-transparent">
                    [LABS]
                  </span>
                </div>
                <p className="text-xs text-[#94A3B8]">
                  Páginas Web, Sistemas y Automatizaciones para Negocios
                </p>
              </div>
            </div>

            <p className="text-sm text-[#94A3B8] max-w-sm leading-relaxed">
              Ayudamos a comercios, profesionales y empresas a vender más y
              trabajar mejor con tecnología rápida, moderna y hecha a medida.
            </p>

            {/* Social Links */}
            <div className="flex items-center gap-3 pt-1">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram de Shurian Labs"
                className="p-2.5 rounded-lg bg-[#131B2E] border border-[#1E293B] text-[#94A3B8] hover:text-white hover:border-[#00D2FF] transition-all duration-200"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn de Shurian Labs"
                className="p-2.5 rounded-lg bg-[#131B2E] border border-[#1E293B] text-[#94A3B8] hover:text-white hover:border-[#00D2FF] transition-all duration-200"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="https://github.com/shurianlabs/Shurian-Labs"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub de Shurian Labs"
                className="p-2.5 rounded-lg bg-[#131B2E] border border-[#1E293B] text-[#94A3B8] hover:text-white hover:border-[#00D2FF] transition-all duration-200"
              >
                <Github className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="md:col-span-3 space-y-3">
            <h3 className="text-xs font-bold uppercase tracking-wider text-white">
              Secciones
            </h3>
            <ul className="space-y-2 text-sm text-[#94A3B8]">
              <li>
                <a
                  href="#casos"
                  className="hover:text-[#00D2FF] transition-colors duration-200"
                >
                  Páginas que Hicimos
                </a>
              </li>
              <li>
                <a
                  href="#servicios"
                  className="hover:text-[#00D2FF] transition-colors duration-200"
                >
                  Nuestros Servicios
                </a>
              </li>
              <li>
                <a
                  href="#proceso"
                  className="hover:text-[#00D2FF] transition-colors duration-200"
                >
                  Cómo Trabajamos
                </a>
              </li>
              <li>
                <a
                  href="#faq"
                  className="hover:text-[#00D2FF] transition-colors duration-200"
                >
                  Preguntas Frecuentes
                </a>
              </li>
              <li>
                <a
                  href="#contacto"
                  className="hover:text-[#00D2FF] transition-colors duration-200"
                >
                  Pedir Presupuesto
                </a>
              </li>
            </ul>
          </div>

          {/* Institutional Cross-Link Card */}
          <div className="md:col-span-4 space-y-3">
            <h3 className="text-xs font-bold uppercase tracking-wider text-white">
              También en Shurian
            </h3>
            <div className="p-4 rounded-xl bg-[#131B2E] border border-[#1E293B] space-y-3">
              <div className="flex items-center gap-2 text-xs font-semibold text-[#00F5A0]">
                <Wrench className="w-4 h-4 text-[#00D2FF]" />
                <span>Reparación y Soporte de Equipos</span>
              </div>
              <p className="text-xs text-[#94A3B8] leading-relaxed">
                ¿Necesitás reparar tu celular, computadora o consola? Conocé
                nuestro laboratorio y tienda de servicio técnico.
              </p>
              <a
                href="https://shurian.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-between w-full px-3.5 py-2.5 rounded-lg bg-[#090D16] border border-[#1E293B] hover:border-[#00D2FF] text-xs font-semibold text-white hover:text-[#00D2FF] transition-all duration-200"
              >
                <span>Visitar Shurian Servicio Técnico</span>
                <ArrowUpRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#94A3B8]">
          <p>
            © {new Date().getFullYear()} SHURIAN [LABS]. Todos los derechos
            reservados.
          </p>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#00F5A0] pulse-glow" />
            <span>Atención online para comercios y empresas</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
