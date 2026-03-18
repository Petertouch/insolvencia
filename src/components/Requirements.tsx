export default function Requirements() {
  return (
    <section id="requisitos" className="py-20 hero-gradient text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 bg-white/10 text-[var(--accent)] rounded-full text-sm font-bold mb-4">
            REQUISITOS
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            ¿Cuándo puedes usar la ley?
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto text-lg">
            Puedes acceder si estás en cesación de pagos
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {/* Condition 1 */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
            <div className="w-12 h-12 rounded-xl bg-[var(--accent)] text-[var(--primary)] flex items-center justify-center mb-5 text-xl font-bold">
              1
            </div>
            <h3 className="text-xl font-bold mb-3">
              2 o más deudas vencidas por más de 90 días
            </h3>
            <p className="text-gray-300">
              Si llevas más de 3 meses sin poder pagar al menos dos de tus
              obligaciones financieras, calificas para el proceso.
            </p>
          </div>

          {/* Condition 2 */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
            <div className="w-12 h-12 rounded-xl bg-[var(--accent)] text-[var(--primary)] flex items-center justify-center mb-5 text-xl font-bold">
              2
            </div>
            <h3 className="text-xl font-bold mb-3">
              2 o más procesos ejecutivos en tu contra
            </h3>
            <p className="text-gray-300">
              Si ya tienes demandas de cobro ejecutivo o embargos, puedes
              activar la ley para frenar todo y negociar.
            </p>
          </div>
        </div>

        {/* Checklist */}
        <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 sm:p-10 border border-white/10 max-w-3xl mx-auto">
          <h3 className="text-2xl font-bold text-[var(--accent)] mb-6 text-center">
            Documentos que necesitas
          </h3>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              "Cédula de ciudadanía",
              "Lista de acreedores con contactos",
              "Soportes de todas las deudas",
              "Extractos bancarios recientes",
              "Lista de bienes (si tienes)",
              "Certificados de ingresos",
              "Procesos judiciales en curso",
              "Propuesta inicial de pago",
            ].map((item, i) => (
              <label key={i} className="flex items-center gap-3 text-gray-200">
                <div className="w-6 h-6 rounded-md border-2 border-[var(--accent)] flex items-center justify-center flex-shrink-0">
                  <svg
                    className="w-4 h-4 text-[var(--accent)]"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={3}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                {item}
              </label>
            ))}
          </div>
          <p className="text-center text-gray-400 text-sm mt-6">
            El 80% de los retrasos es por documentación incompleta. Lleva todo
            listo desde el día 1.
          </p>
        </div>
      </div>
    </section>
  );
}
