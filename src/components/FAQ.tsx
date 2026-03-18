"use client";
import { useState } from "react";

const faqs = [
  {
    question: "¿Qué es la Ley de Insolvencia 1564?",
    answer:
      "Es una ley colombiana que permite a personas naturales no comerciantes reestructurar sus deudas o liquidar activos cuando no pueden cumplir con sus obligaciones financieras. Es un mecanismo legal de protección.",
  },
  {
    question: "¿Quién puede acceder al proceso de insolvencia?",
    answer:
      "Cualquier persona natural no comerciante que esté en cesación de pagos: es decir, que tenga 2 o más deudas vencidas por más de 90 días, o 2 o más procesos ejecutivos (demandas de cobro) en su contra.",
  },
  {
    question: "¿Se suspenden los embargos?",
    answer:
      "Sí. Una vez admitida la solicitud, se suspenden todos los procesos ejecutivos, embargos y cobros jurídicos en tu contra. Esto es inmediato y obligatorio para todos los acreedores.",
  },
  {
    question: "¿Cuánto tiempo dura el proceso?",
    answer:
      "Depende de la complejidad del caso y la modalidad elegida. En promedio, un proceso de negociación puede durar entre 60 y 120 días. La liquidación puede ser más rápida si no hay bienes significativos.",
  },
  {
    question: "¿Puedo perder mi casa o mi carro?",
    answer:
      "En la negociación, no necesariamente. Si llegas a un acuerdo de pago, puedes conservar tus bienes. En la liquidación, los bienes pueden venderse para pagar deudas, pero hay bienes inembargables protegidos por ley.",
  },
  {
    question: "¿Las deudas se borran completamente?",
    answer:
      "No es automático. En una negociación se pueden reducir intereses y obtener mejores plazos. En una liquidación, lo que no se alcance a pagar con los bienes puede extinguirse legalmente.",
  },
  {
    question: "¿Cuánto cuesta el proceso?",
    answer:
      "Los costos varían según dónde tramites. En consultorios jurídicos puede ser gratuito pero más lento. En Cámaras de Comercio o notarías tiene un costo. Te asesoramos gratis sobre la mejor opción para tu caso.",
  },
  {
    question: "¿Qué pasa con mi reporte en DataCrédito?",
    answer:
      "Durante el proceso tu historial crediticio se verá afectado. Sin embargo, al cumplir con el acuerdo de pago o completar la liquidación, se eliminan los reportes negativos en centrales de riesgo.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-20 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 bg-[var(--primary)]/10 text-[var(--primary)] rounded-full text-sm font-bold mb-4">
            FAQ
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-[var(--primary)] mb-4">
            Preguntas Frecuentes
          </h2>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-xl overflow-hidden"
            >
              <button
                className="w-full flex items-center justify-between p-5 text-left hover:bg-gray-50 transition-colors"
                onClick={() =>
                  setOpenIndex(openIndex === index ? null : index)
                }
              >
                <span className="font-bold text-[var(--primary)] pr-4">
                  {faq.question}
                </span>
                <svg
                  className={`w-5 h-5 text-[var(--primary)] flex-shrink-0 transition-transform ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              {openIndex === index && (
                <div className="px-5 pb-5">
                  <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
