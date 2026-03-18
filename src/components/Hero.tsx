export default function Hero() {
  return (
    <section className="hero-gradient min-h-screen flex items-center pt-16 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-[var(--accent)] rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-[var(--primary-light)] rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="text-white space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full border border-white/20">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              <span className="text-sm">Ley 1564 de Colombia</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
              ¿Ahogado en{" "}
              <span className="text-[var(--accent)]">deudas</span>?
              <br />
              La ley te protege.
            </h1>

            <p className="text-lg sm:text-xl text-gray-300 max-w-xl">
              La Ley de Insolvencia es tu{" "}
              <strong className="text-white">botón de pausa legal</strong> para
              reorganizar tus deudas cuando ya no puedes pagarlas. Negocia con
              todos tus acreedores, frena embargos y recupera tu tranquilidad.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#contacto"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[var(--accent)] text-[var(--primary)] font-bold rounded-full text-lg hover:bg-[var(--accent-light)] transition-all animate-pulse-glow"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                </svg>
                Consulta Gratuita
              </a>
              <a
                href="#proceso"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-white/30 text-white font-bold rounded-full text-lg hover:bg-white/10 transition-all"
              >
                Conoce el Proceso
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
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </a>
            </div>

            {/* Trust badges */}
            <div className="flex flex-wrap items-center gap-6 pt-4 text-gray-400 text-sm">
              <div className="flex items-center gap-2">
                <svg
                  className="w-5 h-5 text-green-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  />
                </svg>
                100% Legal
              </div>
              <div className="flex items-center gap-2">
                <svg
                  className="w-5 h-5 text-green-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                Resultados Rápidos
              </div>
              <div className="flex items-center gap-2">
                <svg
                  className="w-5 h-5 text-green-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                +1,000 Casos Resueltos
              </div>
            </div>
          </div>

          {/* Right side - Stats card */}
          <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20">
            <h3 className="text-white text-xl font-bold mb-6 text-center">
              Cifras de Insolvencia en Colombia
            </h3>
            <div className="grid grid-cols-2 gap-6">
              <div className="text-center">
                <p className="text-3xl sm:text-4xl font-bold text-[var(--accent)]">
                  11,018
                </p>
                <p className="text-gray-300 text-sm mt-1">
                  Solicitudes en 2024
                </p>
              </div>
              <div className="text-center">
                <p className="text-3xl sm:text-4xl font-bold text-[var(--accent)]">
                  $30B
                </p>
                <p className="text-gray-300 text-sm mt-1">
                  En mora +30 días
                </p>
              </div>
              <div className="text-center">
                <p className="text-3xl sm:text-4xl font-bold text-[var(--accent)]">
                  1/2
                </p>
                <p className="text-gray-300 text-sm mt-1">
                  Personas con 5+ créditos en mora
                </p>
              </div>
              <div className="text-center">
                <p className="text-3xl sm:text-4xl font-bold text-[var(--accent)]">
                  90%
                </p>
                <p className="text-gray-300 text-sm mt-1">
                  Éxito en negociaciones
                </p>
              </div>
            </div>
            <div className="mt-6 p-4 bg-white/5 rounded-xl border border-white/10">
              <p className="text-gray-300 text-sm text-center">
                Bogotá y Medellín son las ciudades con más solicitudes de
                insolvencia en el país.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}