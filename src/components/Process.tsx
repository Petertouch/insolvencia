const steps = [
  {
    number: "01",
    title: "Diagnóstico Real",
    description:
      "Hacemos un inventario completo: todas tus deudas, ingresos actuales, bienes y procesos judiciales en curso. Sin esto, nada avanza.",
    icon: "📊",
    highlight: "Esto es lo más importante",
  },
  {
    number: "02",
    title: "Elegir Dónde Tramitar",
    description:
      "Cámara de Comercio, notaría o consultorio jurídico. Nosotros te guiamos para elegir la opción más rápida y efectiva según tu caso.",
    icon: "🏛️",
    highlight: "Te asesoramos en la mejor opción",
  },
  {
    number: "03",
    title: "Radicar la Solicitud",
    description:
      "Presentamos tu caso con la relación de deudas, bienes, ingresos y propuesta de pago. Aquí se suspenden embargos y cobros.",
    icon: "📝",
    highlight: "Se frenan los embargos",
  },
  {
    number: "04",
    title: "Aceptación del Trámite",
    description:
      "El conciliador verifica que cumples los requisitos y que la información esté completa. Si todo está bien, se admite el proceso.",
    icon: "✅",
    highlight: "Revisión y admisión",
  },
  {
    number: "05",
    title: "Audiencia de Negociación",
    description:
      "Se cita a todos los acreedores. Aquí negociamos plazos, reducción de intereses y posibles quitas. Necesitas mayoría para aprobar.",
    icon: "🤝",
    highlight: "El momento clave",
  },
  {
    number: "06",
    title: "Acuerdo de Pago",
    description:
      "Si hay acuerdo, se firma y se vuelve obligatorio para todos los acreedores. Cumples según lo pactado y recuperas tu vida financiera.",
    icon: "📄",
    highlight: "Obligatorio para todos",
  },
  {
    number: "07",
    title: "¿No Hay Acuerdo? Liquidación",
    description:
      "Si no se logra acuerdo, se liquidan bienes ordenadamente. Lo que no se alcance a pagar puede extinguirse legalmente.",
    icon: "⚖️",
    highlight: "Las deudas pueden extinguirse",
  },
];

export default function Process() {
  return (
    <section id="proceso" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 bg-[var(--accent)]/10 text-[var(--accent)] rounded-full text-sm font-bold mb-4">
            PASO A PASO
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-[var(--primary)] mb-4">
            ¿Cómo funciona el proceso?
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            7 pasos claros para salir de tus deudas con respaldo legal
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[var(--primary)] to-[var(--accent)] hidden lg:block" />

          <div className="space-y-8">
            {steps.map((step, index) => (
              <div
                key={index}
                className="relative flex flex-col lg:flex-row gap-6 lg:gap-10 items-start"
              >
                {/* Step number circle */}
                <div className="flex-shrink-0 w-16 h-16 rounded-full bg-[var(--primary)] text-white flex items-center justify-center text-xl font-bold z-10 shadow-lg">
                  {step.number}
                </div>

                {/* Content card */}
                <div className="flex-1 bg-[var(--surface)] rounded-2xl p-6 sm:p-8 card-hover border border-gray-100">
                  <div className="flex items-start gap-4">
                    <span className="text-3xl">{step.icon}</span>
                    <div>
                      <h3 className="text-xl font-bold text-[var(--primary)] mb-2">
                        {step.title}
                      </h3>
                      <p className="text-gray-600 mb-3">{step.description}</p>
                      <span className="inline-block px-3 py-1 bg-[var(--accent)]/10 text-[var(--accent)] text-sm font-bold rounded-full">
                        {step.highlight}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
