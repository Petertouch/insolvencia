"use client";

import { useParams } from "next/navigation";
import Link from "next/link";
import { useBlogStore } from "@/lib/stores/blog-store";
import { ArrowLeft, Calendar, Clock, User } from "lucide-react";

function renderMarkdown(text: string) {
  const lines = text.split("\n");
  const elements: React.ReactNode[] = [];
  let i = 0;

  while (i < lines.length) {
    const line = lines[i];

    if (line.startsWith("## ")) {
      elements.push(
        <h2 key={i} className="text-xl font-bold text-[var(--primary)] mt-8 mb-3">
          {line.slice(3)}
        </h2>
      );
    } else if (line.startsWith("### ")) {
      elements.push(
        <h3 key={i} className="text-lg font-bold text-[var(--primary)] mt-6 mb-2">
          {line.slice(4)}
        </h3>
      );
    } else if (line.startsWith("> ")) {
      elements.push(
        <blockquote key={i} className="border-l-4 border-[var(--accent)] bg-[var(--accent)]/5 pl-4 py-3 pr-4 my-4 rounded-r-lg">
          <code className="text-sm text-[var(--primary)]">{line.slice(2)}</code>
        </blockquote>
      );
    } else if (line.startsWith("- ") || line.startsWith("* ")) {
      const items: string[] = [];
      while (i < lines.length && (lines[i].startsWith("- ") || lines[i].startsWith("* "))) {
        items.push(lines[i].slice(2));
        i++;
      }
      elements.push(
        <ul key={`ul-${i}`} className="list-disc list-inside space-y-1.5 my-3 text-gray-600">
          {items.map((item, j) => (
            <li key={j} dangerouslySetInnerHTML={{ __html: inlineFormat(item) }} />
          ))}
        </ul>
      );
      continue;
    } else if (/^\d+\.\s/.test(line)) {
      const items: string[] = [];
      while (i < lines.length && /^\d+\.\s/.test(lines[i])) {
        items.push(lines[i].replace(/^\d+\.\s/, ""));
        i++;
      }
      elements.push(
        <ol key={`ol-${i}`} className="list-decimal list-inside space-y-1.5 my-3 text-gray-600">
          {items.map((item, j) => (
            <li key={j} dangerouslySetInnerHTML={{ __html: inlineFormat(item) }} />
          ))}
        </ol>
      );
      continue;
    } else if (line.trim() === "") {
      // skip empty lines
    } else {
      elements.push(
        <p key={i} className="text-gray-600 leading-relaxed my-3" dangerouslySetInnerHTML={{ __html: inlineFormat(line) }} />
      );
    }
    i++;
  }

  return elements;
}

function inlineFormat(text: string): string {
  return text
    .replace(/\*\*(.+?)\*\*/g, '<strong class="text-gray-800 font-semibold">$1</strong>')
    .replace(/\*(.+?)\*/g, "<em>$1</em>");
}

export default function BlogPostPage() {
  const { slug } = useParams<{ slug: string }>();
  const post = useBlogStore((s) => s.getPost(slug));
  const allPosts = useBlogStore((s) => s.posts);

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <p className="text-gray-500 mb-4">Artículo no encontrado</p>
          <Link href="/blog" className="text-[var(--primary)] font-medium hover:underline">
            Volver al blog
          </Link>
        </div>
      </div>
    );
  }

  const related = allPosts.filter((p) => p.slug !== post.slug && p.categoria === post.categoria).slice(0, 2);

  return (
    <>
      <header className="bg-[var(--primary)] pt-24 pb-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <Link href="/blog" className="inline-flex items-center gap-2 text-white/50 hover:text-white transition-colors mb-6 text-sm">
            <ArrowLeft className="w-4 h-4" /> Volver al blog
          </Link>
          <span className="inline-block px-3 py-1 bg-[var(--accent)]/20 text-[var(--accent)] text-xs font-medium rounded-full mb-4">
            {post.categoria}
          </span>
          <h1 className="text-2xl md:text-3xl font-bold text-white mb-4 leading-tight">
            {post.titulo}
          </h1>
          <div className="flex items-center gap-4 text-white/50 text-sm">
            <span className="flex items-center gap-1.5">
              <User className="w-4 h-4" />
              {post.autor}
            </span>
            <span className="flex items-center gap-1.5">
              <Calendar className="w-4 h-4" />
              {new Date(post.fecha).toLocaleDateString("es-CO", {
                day: "numeric",
                month: "long",
                year: "numeric",
              })}
            </span>
            <span className="flex items-center gap-1.5">
              <Clock className="w-4 h-4" />
              {post.lectura} de lectura
            </span>
          </div>
        </div>
      </header>

      <main className="max-w-3xl mx-auto px-4 sm:px-6 py-10">
        <article className="prose-custom">{renderMarkdown(post.contenido)}</article>

        {/* CTA */}
        <div className="mt-12 p-6 bg-gradient-to-r from-[var(--primary)] to-[var(--primary-light)] rounded-2xl text-center">
          <h3 className="text-white font-bold text-lg mb-2">¿Necesitas asesoría profesional?</h3>
          <p className="text-white/60 text-sm mb-4">Consulta gratuita con nuestros abogados especializados en insolvencia.</p>
          <a
            href="/#contacto"
            className="inline-flex items-center gap-2 px-6 py-3 bg-[var(--accent)] text-[var(--primary)] font-bold rounded-full hover:bg-[var(--accent-light)] transition-colors text-sm"
          >
            Solicitar consulta gratis
          </a>
        </div>

        {/* Relacionados */}
        {related.length > 0 && (
          <div className="mt-12">
            <h3 className="text-[var(--primary)] font-bold text-lg mb-4">Artículos relacionados</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {related.map((r) => (
                <Link
                  key={r.slug}
                  href={`/blog/${r.slug}`}
                  className="p-4 border border-gray-100 rounded-xl hover:shadow-md transition-all group"
                >
                  <span className="text-xs text-[var(--accent)] font-medium">{r.categoria}</span>
                  <h4 className="text-[var(--primary)] font-semibold text-sm mt-1 group-hover:text-[var(--primary-light)] transition-colors line-clamp-2">
                    {r.titulo}
                  </h4>
                  <p className="text-gray-400 text-xs mt-2">{r.lectura} de lectura</p>
                </Link>
              ))}
            </div>
          </div>
        )}
      </main>
    </>
  );
}
