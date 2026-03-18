"use client";

import { useState, useEffect } from "react";
import { useParams, useRouter } from "next/navigation";
import Link from "next/link";
import Button from "@/components/ui/button";
import Input from "@/components/ui/input";
import Select from "@/components/ui/select";
import { useBlogStore } from "@/lib/stores/blog-store";
import { CATEGORIAS } from "@/lib/blog-data";
import { ArrowLeft } from "lucide-react";
import { toast } from "sonner";

const categoriaOptions = CATEGORIAS.filter((c) => c !== "Todos").map((c) => ({ value: c, label: c }));

export default function EditarArticuloPage() {
  const { slug } = useParams<{ slug: string }>();
  const router = useRouter();
  const { getPost, updatePost } = useBlogStore();
  const post = getPost(slug);
  const [loading, setLoading] = useState(false);
  const [contenido, setContenido] = useState("");
  const [titulo, setTitulo] = useState("");
  const [extracto, setExtracto] = useState("");
  const [categoria, setCategoria] = useState("");
  const [autor, setAutor] = useState("");

  useEffect(() => {
    if (post) {
      setTitulo(post.titulo);
      setExtracto(post.extracto);
      setContenido(post.contenido);
      setCategoria(post.categoria);
      setAutor(post.autor);
    }
  }, [post]);

  if (!post) return <p className="text-slate-500">Artículo no encontrado</p>;

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    updatePost(slug, {
      titulo,
      extracto,
      contenido,
      categoria,
      autor,
      lectura: `${Math.max(1, Math.round(contenido.split(/\s+/).length / 200))} min`,
    });
    toast.success("Artículo actualizado");
    router.push("/admin/blog");
  };

  return (
    <div className="max-w-3xl space-y-6">
      <div className="flex items-center gap-4">
        <Link href="/admin/blog" className="text-slate-500 hover:text-white transition-colors">
          <ArrowLeft className="w-5 h-5" />
        </Link>
        <h2 className="text-white text-xl font-bold">Editar Artículo</h2>
      </div>

      <form onSubmit={handleSubmit} className="bg-white/5 border border-white/10 rounded-xl p-6 space-y-5">
        <Input label="Título" name="titulo" value={titulo} onChange={(e) => setTitulo(e.target.value)} required />
        <Input label="Extracto" name="extracto" value={extracto} onChange={(e) => setExtracto(e.target.value)} required />

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Select label="Categoría" name="categoria" value={categoria} onChange={(e) => setCategoria(e.target.value)} options={categoriaOptions} />
          <Input label="Autor" name="autor" value={autor} onChange={(e) => setAutor(e.target.value)} required />
        </div>

        <div className="space-y-1.5">
          <label className="block text-sm font-medium text-slate-300">Contenido</label>
          <p className="text-slate-600 text-xs mb-2">Usa ## para títulos, ### para subtítulos, **texto** para negrilla, - para listas</p>
          <textarea
            value={contenido}
            onChange={(e) => setContenido(e.target.value)}
            rows={16}
            required
            className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm placeholder-slate-600 focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent/50 resize-y font-mono"
          />
        </div>

        <div className="flex justify-end gap-3 pt-2">
          <Link href="/admin/blog"><Button type="button" variant="ghost">Cancelar</Button></Link>
          <Button type="submit" disabled={loading}>{loading ? "Guardando..." : "Guardar Cambios"}</Button>
        </div>
      </form>
    </div>
  );
}
