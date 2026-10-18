import { ShoppingBag, MessageCircle, LayoutGrid } from "lucide-react";

const SERVICES = [
  {
    title: "Páginas Web y Tiendas Online",
    description:
      "Mostrá tus productos con fotos y precios claros. Tus clientes arman el pedido desde el celular y te llega listo a tu WhatsApp o cobran con MercadoPago.",
    icon: ShoppingBag,
    accent: "text-[#00D2FF]",
  },
  {
    title: "Respuestas Automáticas por WhatsApp",
    description:
      "Un asistente responde precios, stock, horarios o turnos las 24 horas automáticamente para que no pierdas ventas cuando estás ocupado.",
    icon: MessageCircle,
    accent: "text-[#00F5A0]",
  },
  {
    title: "Sistemas de Gestión a Medida",
    description:
      "Olvidate de anotar en cuadernos. Ordená tus clientes, turnos, reparaciones, stock y presupuestos en una pantalla simple desde tu celular o PC.",
    icon: LayoutGrid,
    accent: "text-[#00D2FF]",
  },
];

export default function ServicesBento() {
  return (
    <section
      id="servicios"
      className="py-16 md:py-24 px-4 sm:px-6 max-w-6xl mx-auto border-t border-[#1E293B]/70"
    >
      <div className="text-center max-w-2xl mx-auto mb-12">
        <span className="inline-block px-3.5 py-1 rounded-full bg-[#131B2E] border border-[#1E293B] text-xs font-semibold text-[#00D2FF] mb-3">
          Qué Hacemos
        </span>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
          Soluciones para tu Negocio
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {SERVICES.map((service) => {
          const Icon = service.icon;
          return (
            <div
              key={service.title}
              className="rounded-2xl bg-[#131B2E] border border-[#1E293B] hover:border-[#00D2FF]/60 p-7 transition-all duration-200"
            >
              <div className="w-12 h-12 rounded-xl bg-[#090D16] border border-[#1E293B] flex items-center justify-center mb-5">
                <Icon className={`w-6 h-6 ${service.accent}`} />
              </div>
              <h3 className="text-xl font-bold text-white mb-2.5">
                {service.title}
              </h3>
              <p className="text-sm text-[#94A3B8] leading-relaxed">
                {service.description}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
