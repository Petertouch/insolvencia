export default function Strategy() {
  return (
    <section className="py-20 bg-[var(--surface)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 bg-[var(--primary)]/10 text-[var(--primary)] rounded-full text-sm font-bold mb-4">
            ESTRATEGIA
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-[var(--primary)] mb-4">
            ¿Cuál es tu mejor camino?
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Hay dos estrategias. Mucha gente entra a negociar pero realmente le
            conviene liquidar.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Negotiation path */}
          <div className="bg-white rounded-2xl overflow-hidden card-hover border-2 border-[var(--primary)]">
            <div className="bg-[var(--primary)] text-white p-6">
              <div className="text-3xl mb-3">🤝</div>
              <h3 className="text-2xl font-bold">Negociar</h3>
              <p className="text-gray-300 mt-2">Acuerdo de pago</p>
            </div>
            <div className="p-6 space-y-4">
              <div className="flex items-start gap-3">
                <svg className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <p className="text-gray-700">Mantienes tus bienes</p>
              </div>
              <div className="flex items-start gap-3">
                <svg className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <p className="text-gray-700">Reduces intereses y plazos</p>
              </div>
              <div className="flex items-start gap-3">
                <svg className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <p className="text-gray-700">Pagas en cuotas realistas</p>
              </div>
              <div className="flex items-start gap-3">
                <svg className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <p className="text-gray-700">Acuerdo obligatorio para todos</p>
              </div>
              <div className="pt-3 border-t border-gray-100">
                <p className="text-sm text-gray-500">
                  <strong>Ideal si:</strong> tienes ingresos estables y quieres
                  conservar tu patrimonio.
                </p>
              </div>
            </div>
          </div>

          {/* Liquidation path */}
          <div className="bg-white rounded-2xl overflow-hidden card-hover border-2 border-[var(--accent)]">
            <div className="bg-[var(--accent)] text-[var(--primary)] p-6">
              <div className="text-3xl mb-3">⚡</div>
              <h3 className="text-2xl font-bold">Liquidar</h3>
              <p className="text-[var(--primary)]/70 mt-2">
                Salir rápido de deudas
              </p>
            </div>
            <div className="p-6 space-y-4">
              <div className="flex items-start gap-3">
                <svg className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <p className="text-gray-700">Deudas pueden extinguirse</p>
              </div>
              <div className="flex items-start gap-3">
                <svg className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <p className="text-gray-700">Proceso más rápido</p>
              </div>
              <div className="flex items-start gap-3">
                <svg className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <p className="text-gray-700">Borrón y cuenta nueva</p>
              </div>
              <div className="flex items-start gap-3">
                <svg className="w-5 h-5 text-[var(--accent)] mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
                <p className="text-gray-700">Se liquidan bienes existentes</p>
              </div>
              <div className="pt-3 border-t border-gray-100">
                <p className="text-sm text-gray-500">
                  <strong>Ideal si:</strong> no tienes bienes significativos y
                  quieres salir de deudas lo antes posible.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mt-12">
          <a
            href="#contacto"
            className="inline-flex items-center gap-2 px-8 py-4 bg-[var(--primary)] text-white font-bold rounded-full text-lg hover:bg-[var(--primary-light)] transition-colors"
          >
            Te ayudamos a elegir
            <svg
              className="w-5 h-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
