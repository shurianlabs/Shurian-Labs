import { ChevronDown, HelpCircle } from "lucide-react";

const FAQS = [
  {
    id: "faq-conocimiento",
    question:
      "¿Necesito saber de computación para manejar mi página o sistema?",
    answer:
      "¡Para nada! Diseñamos todo para que sea tan simple e intuitivo como usar WhatsApp. Vas a poder cambiar precios, cargar productos, ver tus ventas o agendar turnos desde el celular o la computadora en pocos clics. Además, cuando te lo entregamos te enseñamos paso a paso cómo usarlo.",
  },
  {
    id: "faq-tiempos",
    question: "¿Cuánto tiempo tardan en tenerlo listo?",
    answer:
      "Una página web comercial o una automatización de WhatsApp suele estar lista para usar en 1 a 2 semanas. Si necesitás un sistema de gestión más completo hecho a medida, demora entre 3 y 5 semanas, y te vamos mostrando avances todas las semanas para que veas cómo toma forma.",
  },
  {
    id: "faq-whatsapp",
    question: "¿Cómo funciona la automatización con mi número de WhatsApp?",
    answer:
      "Conectamos un asistente automático a tu WhatsApp comercial para que responda al instante las preguntas repetitivas (precios, horarios, stock, estado de un pedido o turnos disponibles). Vos seguís teniendo el control total y podés intervenir en la conversación cuando quieras.",
  },
  {
    id: "faq-modalidades-pago",
    question: "¿Cuáles son las modalidades de pago?",
    answer:
      "Nos adaptamos a lo que mejor le sirva a tu negocio con dos modalidades: podés elegir un desarrollo 'llave en mano' (un único pago por el proyecto terminado y listo para usar) o bien un costo inicial menor acompañado de una suscripción mensual accesible que incluye mantenimiento, soporte técnico continuo y mejoras.",
  },
];

export default function Faq() {
  return (
    <section
      id="faq"
      className="py-20 md:py-28 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto border-t border-[#1E293B]"
    >
      {/* Header */}
      <div className="text-center mb-12">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#131B2E] border border-[#1E293B] text-xs font-semibold text-[#00D2FF] mb-3">
          <HelpCircle className="w-3.5 h-3.5 text-[#00F5A0]" />
          <span>Preguntas Frecuentes</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
          Sacate todas las dudas
        </h2>
        <p className="text-[#94A3B8] text-sm sm:text-base mt-3">
          Respuestas claras y sin palabras técnicas sobre cómo trabajamos.
        </p>
      </div>

      {/* Native mutually-exclusive <details> accordion */}
      <div className="space-y-4">
        {FAQS.map((item, idx) => (
          <details
            key={item.id}
            id={item.id}
            name="shurian-faq-accordion"
            open={idx === 0}
            className="group rounded-2xl bg-[#131B2E] border border-[#1E293B] open:border-[#00D2FF]/60 transition-all duration-200 overflow-hidden"
          >
            <summary className="cursor-pointer select-none p-5 sm:p-6 flex items-center justify-between gap-4 text-left hover:bg-[#090D16]/40 transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#00D2FF]">
              <span className="font-bold text-white text-base sm:text-lg group-open:text-[#00D2FF] transition-colors duration-200">
                {item.question}
              </span>
              <ChevronDown className="w-5 h-5 text-[#94A3B8] group-open:text-[#00D2FF] group-open:rotate-180 transition-transform duration-200 shrink-0" />
            </summary>

            <div className="px-5 sm:px-6 pb-6 pt-3 border-t border-[#1E293B]/80 text-[#94A3B8] text-sm sm:text-base leading-relaxed">
              {item.answer}
            </div>
          </details>
        ))}
      </div>
    </section>
  );
}
