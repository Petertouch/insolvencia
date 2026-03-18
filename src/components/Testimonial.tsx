export default function Testimonial() {
  return (
    <section className="py-20 bg-[var(--surface)]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1.5 bg-[var(--primary)]/10 text-[var(--primary)] rounded-full text-sm font-bold mb-4">
            TESTIMONIOS
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-[var(--primary)]">
            Historias reales de recuperación
          </h2>
        </div>

        <div className="bg-white rounded-3xl p-8 sm:p-12 shadow-lg border border-gray-100 relative">
          {/* Quote mark */}
          <div className="absolute top-6 left-8 text-[var(--accent)] opacity-20">
            <svg className="w-16 h-16" fill="currentColor" viewBox="0 0 24 24">
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
            </svg>
          </div>

          <div className="relative z-10">
            <p className="text-lg sm:text-xl text-gray-700 leading-relaxed mb-8 italic">
              &ldquo;Tenía múltiples créditos, un negocio que fracasó y
              embargos que superaban los dos millones de pesos sobre mi salario.
              No podía dormir, las llamadas de cobro eran constantes. Gracias al
              proceso de insolvencia recuperé la tranquilidad de mi familia.
              Hoy puedo planificar mi futuro de nuevo.&rdquo;
            </p>

            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-full bg-[var(--primary)] text-white flex items-center justify-center text-xl font-bold">
                VM
              </div>
              <div>
                <p className="font-bold text-[var(--primary)]">
                  Víctor M.
                </p>
                <p className="text-gray-500 text-sm">
                  Funcionario público, Bogotá
                </p>
              </div>
              <div className="ml-auto flex gap-1">
                {[1, 2, 3, 4, 5].map((star) => (
                  <svg
                    key={star}
                    className="w-5 h-5 text-[var(--accent)]"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
