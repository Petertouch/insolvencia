export default function Footer() {
  return (
    <footer className="bg-[var(--surface-dark)] text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-lg bg-[var(--accent)] flex items-center justify-center">
                <svg
                  className="w-6 h-6 text-[var(--primary)]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3"
                  />
                </svg>
              </div>
              <span className="text-xl font-bold">
                Insolvencia<span className="text-[var(--accent)]"> 360</span>
              </span>
            </div>
            <p className="text-gray-400 text-sm">
              Expertos en la Ley de Insolvencia 1564. Ayudamos a personas
              naturales no comerciantes a recuperar su estabilidad financiera.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="font-bold text-[var(--accent)] mb-4">
              Enlaces Rápidos
            </h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>
                <a href="#beneficios" className="hover:text-white transition-colors">
                  Beneficios
                </a>
              </li>
              <li>
                <a href="#proceso" className="hover:text-white transition-colors">
                  Proceso
                </a>
              </li>
              <li>
                <a href="#requisitos" className="hover:text-white transition-colors">
                  Requisitos
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-white transition-colors">
                  Preguntas Frecuentes
                </a>
              </li>
              <li>
                <a href="#contacto" className="hover:text-white transition-colors">
                  Contacto
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-[var(--accent)] mb-4">Contacto</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>Carrera 7 # 80-49, Oficina 301</li>
              <li>Bogotá, Colombia</li>
              <li>WhatsApp: 311 238 3854</li>
              <li>Tel: (314) 284 4039</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} Insolvencia 360. Todos los
            derechos reservados.
          </p>
          <div className="flex items-center gap-4 text-gray-500 text-sm">
            <a href="#" className="hover:text-white transition-colors">
              Política de Privacidad
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Términos y Condiciones
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
