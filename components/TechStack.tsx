import {
  Zap,
  Smartphone,
  ShieldCheck,
  MessageCircle,
  CreditCard,
  Cloud,
  FileSpreadsheet,
  TrendingUp,
} from "lucide-react";

const QUALITY_PILLARS = [
  {
    name: "Velocidad Inmediata",
    benefit: "Tu página abre en menos de 1 segundo para que nadie se vaya sin comprar.",
    techNote: "Next.js & React",
    icon: Zap,
    accent: "text-[#00D2FF]",
  },
  {
    name: "Adaptado a Celulares",
    benefit: "Se ve y se usa perfecto en cualquier teléfono, tablet o computadora.",
    techNote: "Diseño Responsivo",
    icon: Smartphone,
    accent: "text-[#00F5A0]",
  },
  {
    name: "Conexión Oficial con WhatsApp",
    benefit: "Mensajes automáticos, recordatorios y atención las 24 horas sin bloqueos.",
    techNote: "WhatsApp Business",
    icon: MessageCircle,
    accent: "text-[#00F5A0]",
  },
  {
    name: "Cobros Online Integrados",
    benefit: "Recibí pagos con tarjeta, transferencia o links de pago al instante.",
    techNote: "MercadoPago / Pasarelas",
    icon: CreditCard,
    accent: "text-[#00D2FF]",
  },
  {
    name: "Sincronizado con tus Planillas",
    benefit: "Cambiás un precio en tu lista o Excel y se actualiza en todos lados.",
    techNote: "Automatización",
    icon: FileSpreadsheet,
    accent: "text-[#00D2FF]",
  },
  {
    name: "Información Siempre Segura",
    benefit: "Tus clientes, ventas y comprobantes guardados en la nube sin riesgo de pérdida.",
    techNote: "Bases de Datos Cloud",
    icon: Cloud,
    accent: "text-[#00F5A0]",
  },
  {
    name: "Protección y Privacidad",
    benefit: "Accesos con contraseña para vos y tu equipo según el rol de cada empleado.",
    techNote: "Seguridad Avanzada",
    icon: ShieldCheck,
    accent: "text-[#00D2FF]",
  },
  {
    name: "Preparado para Crecer",
    benefit: "Podés empezar con algo simple hoy y sumar nuevas funciones cuando tu negocio crezca.",
    techNote: "Sistema Modular",
    icon: TrendingUp,
    accent: "text-[#00F5A0]",
  },
];

export default function TechStack() {
  return (
    <section
      id="stack"
      className="py-20 md:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-[#1E293B]"
    >
      <div className="text-center max-w-2xl mx-auto mb-12">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#131B2E] border border-[#1E293B] text-xs font-semibold text-[#00F5A0] mb-3">
          <span>Calidad y Tecnología</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
          Tecnología Moderna, Explicada Fácil
        </h2>
        <p className="text-[#94A3B8] text-sm sm:text-base mt-3">
          Usamos las mismas herramientas que las grandes empresas, pero las
          configuramos para que usarlas en tu día a día sea súper sencillo.
        </p>
      </div>

      {/* Benefits + Tech Mosaic */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {QUALITY_PILLARS.map((item) => {
          const Icon = item.icon;
          return (
            <div
              key={item.name}
              className="group p-5 rounded-2xl bg-[#131B2E] border border-[#1E293B] hover:border-[#00D2FF]/70 transition-all duration-200 hover:shadow-[0_0_20px_rgba(0,210,255,0.12)] flex flex-col justify-between gap-4"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <div className="p-2.5 rounded-xl bg-[#090D16] border border-[#1E293B] group-hover:border-[#00D2FF]/50 transition-colors duration-200">
                    <Icon className={`w-5 h-5 ${item.accent}`} />
                  </div>
                  <span className="text-[11px] font-medium px-2.5 py-0.5 rounded-full bg-[#090D16] border border-[#1E293B] text-[#00F5A0]">
                    {item.techNote}
                  </span>
                </div>
                <h3 className="font-bold text-white text-base group-hover:text-[#00D2FF] transition-colors duration-200">
                  {item.name}
                </h3>
                <p className="text-xs sm:text-sm text-[#94A3B8] mt-1.5 leading-relaxed">
                  {item.benefit}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
