"use client";

import Link from "next/link";
import { useBlogStore } from "@/lib/stores/blog-store";
import Button from "@/components/ui/button";
import Badge from "@/components/ui/badge";
import Card from "@/components/ui/card";
import { Plus, Pencil, Trash2, Eye, Calendar } from "lucide-react";
import { toast } from "sonner";

export default function AdminBlogPage() {
  const { posts, deletePost } = useBlogStore();

  const handleDelete = (slug: string, titulo: string) => {
    if (!confirm(`¿Eliminar "${titulo}"?`)) return;
    deletePost(slug);
    toast.success("Artículo eliminado");
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-white text-xl font-bold">Artículos del Blog</h2>
          <p className="text-slate-500 text-sm mt-1">{posts.length} artículos publicados</p>
        </div>
        <Link href="/admin/blog/nuevo">
          <Button><Plus className="w-4 h-4 mr-2" />Nuevo Artículo</Button>
        </Link>
      </div>

      <div className="space-y-3">
        {posts.map((post) => (
          <Card key={post.slug} className="flex flex-col sm:flex-row sm:items-center gap-4">
            <div className="flex-1 min-w-0">
              <h3 className="text-white font-semibold text-sm truncate">{post.titulo}</h3>
              <p className="text-slate-500 text-xs mt-1 line-clamp-1">{post.extracto}</p>
              <div className="flex items-center gap-3 mt-2">
                <Badge size="xs">{post.categoria}</Badge>
                <span className="text-slate-600 text-xs flex items-center gap-1">
                  <Calendar className="w-3 h-3" />
                  {new Date(post.fecha).toLocaleDateString("es-CO", { day: "numeric", month: "short", year: "numeric" })}
                </span>
                <span className="text-slate-600 text-xs">{post.autor}</span>
                <span className="text-slate-600 text-xs">{post.lectura}</span>
              </div>
            </div>
            <div className="flex items-center gap-2 flex-shrink-0">
              <a href={`/blog/${post.slug}`} target="_blank" rel="noopener noreferrer"
                className="p-2 rounded-lg text-slate-500 hover:text-accent hover:bg-white/5 transition-colors" title="Ver">
                <Eye className="w-4 h-4" />
              </a>
              <Link href={`/admin/blog/${post.slug}`}
                className="p-2 rounded-lg text-slate-500 hover:text-accent hover:bg-white/5 transition-colors" title="Editar">
                <Pencil className="w-4 h-4" />
              </Link>
              <button onClick={() => handleDelete(post.slug, post.titulo)}
                className="p-2 rounded-lg text-slate-500 hover:text-red-400 hover:bg-red-500/5 transition-colors" title="Eliminar">
                <Trash2 className="w-4 h-4" />
              </button>
            </div>
          </Card>
        ))}

        {posts.length === 0 && (
          <Card className="text-center py-12">
            <p className="text-slate-500">No hay artículos. Crea el primero.</p>
          </Card>
        )}
      </div>
    </div>
  );
}
