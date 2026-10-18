import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Portfolio from "@/components/Portfolio";
import ServicesBento from "@/components/ServicesBento";
import Methodology from "@/components/Methodology";
import Faq from "@/components/Faq";
import ContactCta from "@/components/ContactCta";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#090D16] text-white">
      {/* 1. Navbar */}
      <Navbar />

      <main className="flex-1">
        {/* 2. Hero simple y directo */}
        <Hero />

        {/* 3. Páginas y Sistemas que Hicimos (Protagonista principal) */}
        <Portfolio />

        {/* 4. Qué Hacemos (3 tarjetas simples) */}
        <ServicesBento />

        {/* 5. Cómo Trabajamos (3 pasos simples) */}
        <Methodology />

        {/* 6. Preguntas Frecuentes */}
        <Faq />

        {/* 7. Contacto directo por WhatsApp */}
        <ContactCta />
      </main>

      {/* 8. Botón flotante persistente de WhatsApp */}
      <FloatingWhatsApp />

      {/* 9. Footer */}
      <Footer />
    </div>
  );
}
