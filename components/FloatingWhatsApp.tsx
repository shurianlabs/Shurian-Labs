import { MessageCircle } from "lucide-react";

export default function FloatingWhatsApp() {
  const whatsappUrl = `https://wa.me/5493416055274?text=${encodeURIComponent(
    "¡Hola Shurian Labs! Me gustaría hacer una consulta sobre una página web / sistema para mi negocio."
  )}`;

  return (
    <aside
      aria-label="Contacto directo por WhatsApp"
      className="fixed bottom-5 right-5 z-40"
    >
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Escribinos directo por WhatsApp"
        className="group flex items-center gap-2.5 px-3.5 py-2.5 sm:px-4 sm:py-3 rounded-full bg-[#131B2E]/90 hover:bg-[#131B2E] border border-[#00F5A0]/60 hover:border-[#00F5A0] text-white shadow-[0_4px_25px_rgba(0,245,160,0.3)] hover:shadow-[0_4px_30px_rgba(0,245,160,0.5)] backdrop-blur-md transition-all duration-200 hover:scale-105"
      >
        <span className="relative flex h-2.5 w-2.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00F5A0] opacity-75" />
          <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#00F5A0]" />
        </span>
        <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-gradient-to-r from-[#00D2FF] to-[#00F5A0] flex items-center justify-center text-[#090D16]">
          <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5 fill-current" />
        </div>
        <span className="text-xs sm:text-sm font-bold text-white pr-1 hidden sm:inline-block">
          WhatsApp
        </span>
      </a>
    </aside>
  );
}
