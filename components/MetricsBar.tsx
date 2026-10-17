import { TrendingDown, Zap, Bot, Sparkles } from "lucide-react";

const METRICS = [
  {
    value: "+60%",
    label: "Ahorro de tiempo operativo",
    detail: "Menos horas cargando planillas o respondiendo las mismas preguntas",
    icon: TrendingDown,
    accent: "from-[#00D2FF] to-[#00F5A0]",
  },
  {
    value: "< 1s",
    label: "Páginas web ultra rápidas",
    detail: "Tus clientes ven tu catálogo y compran al instante desde el celular",
    icon: Zap,
    accent: "from-[#00F5A0] to-[#00D2FF]",
  },
  {
    value: "24/7",
    label: "Atención y ventas automáticas",
    detail: "Tu negocio responde consultas y toma pedidos incluso cuando descansás",
    icon: Bot,
    accent: "from-[#00D2FF] to-[#00F5A0]",
  },
  {
    value: "100%",
    label: "Hecho a la medida de tu negocio",
    detail: "Sistemas simples e intuitivos, adaptados a tu forma de trabajar",
    icon: Sparkles,
    accent: "from-[#00F5A0] to-[#00D2FF]",
  },
];

export default function MetricsBar() {
  return (
    <section
      aria-label="Beneficios principales"
      className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto my-4"
    >
      <div className="rounded-2xl bg-[#131B2E]/90 border border-[#1E293B] shadow-[0_0_24px_rgba(0,0,0,0.4)] overflow-hidden">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-[#1E293B]">
          {METRICS.map((metric) => {
            const Icon = metric.icon;
            return (
              <div
                key={metric.value}
                className="p-6 hover:bg-[#090D16]/40 transition-colors duration-200 flex flex-col justify-between group"
              >
                <div className="flex items-center justify-between mb-3">
                  <span
                    className={`font-mono text-3xl sm:text-4xl font-bold bg-gradient-to-r ${metric.accent} bg-clip-text text-transparent`}
                  >
                    {metric.value}
                  </span>
                  <div className="p-2.5 rounded-lg bg-[#090D16] border border-[#1E293B] group-hover:border-[#00D2FF]/50 transition-colors duration-200">
                    <Icon className="w-5 h-5 text-[#00D2FF]" />
                  </div>
                </div>
                <div>
                  <h2 className="text-base font-bold text-white">
                    {metric.label}
                  </h2>
                  <p className="text-xs sm:text-sm text-[#94A3B8] mt-1 leading-relaxed">
                    {metric.detail}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
