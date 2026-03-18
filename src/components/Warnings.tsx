const warnings = [
  {
    icon: "⚠️",
    title: "No es borrón automático",
    description:
      "La insolvencia no borra tus deudas mágicamente. Es un proceso legal con reglas y obligaciones que debes cumplir.",
  },
  {
    icon: "📊",
    title: "Afecta tu historial crediticio",
    description:
      "Tu reporte en centrales de riesgo se verá afectado durante el proceso. Al cumplir, se limpia.",
  },
  {
    icon: "🚫",
    title: "No puedes abusar del mecanismo",
    description:
      "La ley está diseñada para personas de buena fe. El fraude o abuso puede tener consecuencias legales graves.",
  },
  {
    icon: "👶",
    title: "Deudas de alimentos tienen reglas especiales",
    description:
      "Las obligaciones alimentarias y ciertas deudas laborales tienen tratamiento preferencial y no se negocian igual.",
  },
];

export default function Warnings() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 bg-red-50 text-red-600 rounded-full text-sm font-bold mb-4">
            IMPORTANTE
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-[var(--primary)] mb-4">
            Lo que casi nadie te dice
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Queremos que tomes decisiones informadas. Aquí va la verdad
            completa.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {warnings.map((w, i) => (
            <div
              key={i}
              className="bg-amber-50 border border-amber-200 rounded-2xl p-6 text-center"
            >
              <span className="text-3xl mb-4 block">{w.icon}</span>
              <h3 className="font-bold text-[var(--primary)] mb-2">
                {w.title}
              </h3>
              <p className="text-gray-600 text-sm">{w.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
