"use client";

import { useState } from "react";
import Link from "next/link";
import { CATEGORIAS } from "@/lib/blog-data";
import { useBlogStore } from "@/lib/stores/blog-store";
import { Calendar, Clock, ArrowRight, User } from "lucide-react";

export default function BlogPage() {
  const [categoria, setCategoria] = useState("Todos");
  const allPosts = useBlogStore((s) => s.posts);

  const posts =
    categoria === "Todos"
      ? allPosts
      : allPosts.filter((p) => p.categoria === categoria);

  return (
    <>
      <header className="bg-[var(--primary)] pt-24 pb-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-3">
            Blog <span className="text-[var(--accent)]">Insolvencia 360</span>
          </h1>
          <p className="text-white/60 max-w-xl mx-auto">
            Artículos, guías y consejos sobre la Ley de Insolvencia, negociación
            de deudas y tus derechos como deudor en Colombia.
          </p>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-4 sm:px-6 py-10">
        {/* Categorias */}
        <div className="flex flex-wrap gap-2 mb-8">
          {CATEGORIAS.map((cat) => (
            <button
              key={cat}
              onClick={() => setCategoria(cat)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                categoria === cat
                  ? "bg-[var(--primary)] text-white"
                  : "bg-[var(--surface)] text-[var(--primary)] hover:bg-[var(--primary)]/10"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid de posts */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group bg-white rounded-2xl border border-gray-100 overflow-hidden hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
            >
              <div className="h-44 bg-gradient-to-br from-[var(--primary)] to-[var(--primary-light)] overflow-hidden">
                {post.imagen ? (
                  <img src={post.imagen} alt={post.titulo} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                ) : (
                  <div className="w-full h-full flex items-center justify-center">
                    <span className="text-white/20 text-6xl font-black">360</span>
                  </div>
                )}
              </div>
              <div className="p-5">
                <span className="inline-block px-3 py-1 bg-[var(--accent)]/10 text-[var(--accent)] text-xs font-medium rounded-full mb-3">
                  {post.categoria}
                </span>
                <h2 className="text-[var(--primary)] font-bold text-base mb-2 group-hover:text-[var(--primary-light)] transition-colors line-clamp-2">
                  {post.titulo}
                </h2>
                <p className="text-gray-500 text-sm line-clamp-3 mb-4">
                  {post.extracto}
                </p>
                <div className="flex items-center justify-between text-xs text-gray-400">
                  <div className="flex items-center gap-3">
                    <span className="flex items-center gap-1">
                      <User className="w-3 h-3" />
                      {post.autor}
                    </span>
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      {new Date(post.fecha).toLocaleDateString("es-CO", {
                        day: "numeric",
                        month: "short",
                      })}
                    </span>
                  </div>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    {post.lectura}
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {posts.length === 0 && (
          <p className="text-center text-gray-400 py-12">
            No hay artículos en esta categoría.
          </p>
        )}
      </main>
    </>
  );
}
