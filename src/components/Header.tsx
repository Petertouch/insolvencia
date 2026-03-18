"use client";
import { useState } from "react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-lg bg-[var(--primary)] flex items-center justify-center">
              <svg
                className="w-6 h-6 text-[var(--accent)]"
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
            <span className="text-xl font-bold text-[var(--primary)]">
              Insolvencia<span className="text-[var(--accent)]">Legal</span>
            </span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            <a
              href="#beneficios"
              className="text-sm font-medium text-gray-600 hover:text-[var(--primary)] transition-colors"
            >
              Beneficios
            </a>
            <a
              href="#proceso"
              className="text-sm font-medium text-gray-600 hover:text-[var(--primary)] transition-colors"
            >
              Proceso
            </a>
            <a
              href="#requisitos"
              className="text-sm font-medium text-gray-600 hover:text-[var(--primary)] transition-colors"
            >
              Requisitos
            </a>
            <a
              href="#faq"
              className="text-sm font-medium text-gray-600 hover:text-[var(--primary)] transition-colors"
            >
              Preguntas Frecuentes
            </a>
            <a
              href="#contacto"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-[var(--accent)] text-[var(--primary)] font-bold rounded-full hover:bg-[var(--accent-light)] transition-colors text-sm"
            >
              ASESORÍA GRATIS
            </a>
          </nav>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Menú"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {menuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Nav */}
        {menuOpen && (
          <nav className="md:hidden pb-4 space-y-2">
            <a
              href="#beneficios"
              className="block py-2 text-gray-600 hover:text-[var(--primary)]"
              onClick={() => setMenuOpen(false)}
            >
              Beneficios
            </a>
            <a
              href="#proceso"
              className="block py-2 text-gray-600 hover:text-[var(--primary)]"
              onClick={() => setMenuOpen(false)}
            >
              Proceso
            </a>
            <a
              href="#requisitos"
              className="block py-2 text-gray-600 hover:text-[var(--primary)]"
              onClick={() => setMenuOpen(false)}
            >
              Requisitos
            </a>
            <a
              href="#faq"
              className="block py-2 text-gray-600 hover:text-[var(--primary)]"
              onClick={() => setMenuOpen(false)}
            >
              Preguntas Frecuentes
            </a>
            <a
              href="#contacto"
              className="block py-2 text-[var(--accent)] font-bold"
              onClick={() => setMenuOpen(false)}
            >
              ASESORÍA GRATIS
            </a>
          </nav>
        )}
      </div>
    </header>
  );
}
