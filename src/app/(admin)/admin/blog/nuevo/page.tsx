"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Button from "@/components/ui/button";
import Input from "@/components/ui/input";
import Select from "@/components/ui/select";
import { useBlogStore } from "@/lib/stores/blog-store";
import { CATEGORIAS } from "@/lib/blog-data";
import { ArrowLeft } from "lucide-react";
import { toast } from "sonner";

const categoriaOptions = CATEGORIAS.filter((c) => c !== "Todos").map((c) => ({ value: c, label: c }));

export default function NuevoArticuloPage() {
  const router = useRouter();
  const { addPost } = useBlogStore();
  const [loading, setLoading] = useState(false);
  const [contenido, setContenido] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    const form = new FormData(e.currentTarget);
    addPost({
      titulo: form.get("titulo") as string,
      extracto: form.get("extracto") as string,
      contenido,
      imagen: "",
      categoria: form.get("categoria") as string,
      autor: form.get("autor") as string,
      fecha: new Date().toISOString().split("T")[0],
      lectura: `${Math.max(1, Math.round(contenido.split(/\s+/).length / 200))} min`,
    });
    toast.success("Artículo creado");
    router.push("/admin/blog");
  };

  return (
    <div className="max-w-3xl space-y-6">
      <div className="flex items-center gap-4">
        <Link href="/admin/blog" className="text-slate-500 hover:text-white transition-colors">
          <ArrowLeft className="w-5 h-5" />
        </Link>
        <h2 className="text-white text-xl font-bold">Nuevo Artículo</h2>
      </div>

      <form onSubmit={handleSubmit} className="bg-white/5 border border-white/10 rounded-xl p-6 space-y-5">
        <Input label="Título" name="titulo" placeholder="¿Qué es la Ley de Insolvencia?" required />
        <Input label="Extracto" name="extracto" placeholder="Breve descripción del artículo..." required />

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Select label="Categoría" name="categoria" options={categoriaOptions} />
          <Input label="Autor" name="autor" placeholder="Dr. Ramirez" required />
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
            placeholder="## Introducción&#10;&#10;Escribe el contenido del artículo aquí..."
          />
        </div>

        <div className="flex justify-end gap-3 pt-2">
          <Link href="/admin/blog"><Button type="button" variant="ghost">Cancelar</Button></Link>
          <Button type="submit" disabled={loading}>{loading ? "Guardando..." : "Publicar Artículo"}</Button>
        </div>
      </form>
    </div>
  );
}
