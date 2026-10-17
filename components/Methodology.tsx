const STEPS = [
  {
    number: "1",
    title: "Nos contás tu idea",
    description:
      "Charlamos por WhatsApp sobre tu negocio y qué querés mejorar o vender.",
  },
  {
    number: "2",
    title: "Te mostramos el diseño",
    description:
      "Ves cómo va a quedar tu página o sistema antes de que lo terminemos.",
  },
  {
    number: "3",
    title: "Lo dejamos funcionando",
    description:
      "Te entregamos todo listo para usar y te enseñamos a manejarlo paso a paso.",
  },
];

export default function Methodology() {
  return (
    <section
      id="proceso"
      className="py-16 md:py-24 px-4 sm:px-6 max-w-6xl mx-auto border-t border-[#1E293B]/70"
    >
      <div className="text-center max-w-2xl mx-auto mb-12">
        <span className="inline-block px-3.5 py-1 rounded-full bg-[#131B2E] border border-[#1E293B] text-xs font-semibold text-[#00F5A0] mb-3">
          Cómo Trabajamos
        </span>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
          Así de Fácil Empezamos
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {STEPS.map((step) => (
          <div
            key={step.number}
            className="rounded-2xl bg-[#131B2E] border border-[#1E293B] p-7 text-center"
          >
            <div className="w-11 h-11 rounded-full bg-gradient-to-r from-[#00D2FF] to-[#00F5A0] text-[#090D16] font-extrabold text-lg flex items-center justify-center mx-auto mb-4">
              {step.number}
            </div>
            <h3 className="text-lg font-bold text-white mb-2">{step.title}</h3>
            <p className="text-sm text-[#94A3B8] leading-relaxed">
              {step.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
