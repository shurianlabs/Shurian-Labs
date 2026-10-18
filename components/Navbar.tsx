"use client";

import { useState } from "react";
import { ArrowRight, Menu, X, MessageCircle } from "lucide-react";
import Logo from "@/logo";

const NAV_LINKS = [
  { label: "Páginas que Hicimos", href: "#casos" },
  { label: "Qué Hacemos", href: "#servicios" },
  { label: "Cómo Trabajamos", href: "#proceso" },
  { label: "Preguntas", href: "#faq" },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#090D16]/90 backdrop-blur-md border-b border-[#1E293B]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-20 flex items-center justify-between">
        {/* Left: Logo + Brand */}
        <a
          href="#"
          className="flex items-center gap-3 group"
          aria-label="Shurian Labs Inicio"
        >
          <div className="flex items-center justify-center transition-transform duration-200 group-hover:scale-105">
            <Logo iconOnly className="w-9 h-9" priority />
          </div>
          <div className="flex items-center gap-1.5">
            <span className="font-bold tracking-wider text-white text-base sm:text-lg">
              SHURIAN
            </span>
            <span className="font-mono font-bold text-sm sm:text-base bg-gradient-to-r from-[#00D2FF] to-[#00F5A0] bg-clip-text text-transparent">
              [LABS]
            </span>
          </div>
        </a>

        {/* Center: Desktop Nav Links */}
        <nav className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-[#94A3B8] hover:text-white transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Right: CTA Button */}
        <div className="hidden md:flex items-center">
          <a
            href="#contacto"
            className="group inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#00D2FF] to-[#00F5A0] text-[#090D16] font-bold text-sm transition-all duration-200 hover:shadow-[0_0_20px_rgba(0,245,160,0.35)]"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Consultar</span>
            <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5" />
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen((prev) => !prev)}
          className="md:hidden p-2.5 rounded-lg bg-[#131B2E] border border-[#1E293B] text-[#94A3B8] hover:text-white"
          aria-label="Abrir menú"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#131B2E] border-b border-[#1E293B] px-4 py-4 space-y-3">
          <nav className="flex flex-col space-y-2">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 rounded-lg text-sm font-medium text-[#94A3B8] hover:text-white"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <a
            href="#contacto"
            onClick={() => setMobileMenuOpen(false)}
            className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-gradient-to-r from-[#00D2FF] to-[#00F5A0] text-[#090D16] font-bold text-sm"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Consultar por WhatsApp</span>
          </a>
        </div>
      )}
    </header>
  );
}
