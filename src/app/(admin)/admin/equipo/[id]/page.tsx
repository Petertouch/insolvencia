"use client";

import { useParams, useRouter } from "next/navigation";
import { useTeamStore } from "@/lib/stores/team-store";
import { getCasos } from "@/lib/db";
import { useQuery } from "@tanstack/react-query";
import Link from "next/link";
import Badge from "@/components/ui/badge";
import Card from "@/components/ui/card";
import Button from "@/components/ui/button";
import { ArrowLeft, Phone, Mail } from "lucide-react";
import { toast } from "sonner";

export default function AbogadoDetailPage() {
  const { id } = useParams<{ id: string }>();
  const router = useRouter();
  const { getAbogado, setEstado, deleteAbogado } = useTeamStore();
  const abogado = getAbogado(id);
  const { data: allCasos } = useQuery({ queryKey: ["casos"], queryFn: () => getCasos() });

  if (!abogado) return <p className="text-slate-500">Abogado no encontrado</p>;

  const activeCases = allCasos?.filter((c) => c.abogado === abogado.nombre && c.etapa !== "Cerrado") || [];
  const pct = Math.round((activeCases.length / abogado.max_casos) * 100);

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-4">
        <Link href="/admin/equipo" className="text-slate-500 hover:text-white transition-colors"><ArrowLeft className="w-5 h-5" /></Link>
        <div className="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold" style={{ backgroundColor: abogado.color }}>
          {abogado.nombre.split(" ").map((n) => n[0]).join("").slice(0, 2)}
        </div>
        <div className="flex-1">
          <h2 className="text-white text-xl font-bold">{abogado.nombre}</h2>
          <p className="text-slate-500 text-sm">{abogado.especialidad}</p>
        </div>
        <Badge>{abogado.estado}</Badge>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <Card className="flex items-center gap-3"><Phone className="w-4 h-4 text-accent" /><div><p className="text-slate-500 text-xs">Telefono</p><p className="text-white text-sm">{abogado.telefono}</p></div></Card>
        <Card className="flex items-center gap-3"><Mail className="w-4 h-4 text-accent" /><div><p className="text-slate-500 text-xs">Email</p><p className="text-white text-sm">{abogado.email}</p></div></Card>
        <Card>
          <p className="text-slate-500 text-xs mb-1">Carga ({activeCases.length}/{abogado.max_casos})</p>
          <div className="w-full bg-white/5 rounded-full h-2">
            <div className={`h-2 rounded-full ${pct > 90 ? "bg-red-500" : pct > 70 ? "bg-yellow-500" : "bg-green-500"}`}
              style={{ width: `${Math.min(pct, 100)}%` }} />
          </div>
        </Card>
      </div>

      <Card>
        <h3 className="text-white font-bold text-sm mb-3">Areas habilitadas</h3>
        <div className="flex flex-wrap gap-2">
          {abogado.areas_habilitadas.map((area) => (
            <Badge key={area} variant={area === abogado.especialidad ? "info" : "neutral"}>{area}</Badge>
          ))}
        </div>
      </Card>

      <Card>
        <h3 className="text-white font-bold text-sm mb-3">Casos activos ({activeCases.length})</h3>
        {activeCases.length === 0 ? (
          <p className="text-slate-500 text-sm">Sin casos activos</p>
        ) : (
          <div className="space-y-2">
            {activeCases.map((c) => (
              <Link key={c.id} href={`/admin/casos/${c.id}`}
                className="flex items-center justify-between p-3 rounded-lg bg-white/5 hover:bg-white/10 transition-colors">
                <div><p className="text-white text-sm">{c.titulo}</p><p className="text-slate-500 text-xs">{c.area} — {c.etapa}</p></div>
                <Badge size="xs">{c.prioridad}</Badge>
              </Link>
            ))}
          </div>
        )}
      </Card>

      <div className="flex gap-3">
        {abogado.estado === "activo" ? (
          <Button variant="secondary" onClick={() => { setEstado(id, "vacaciones"); toast.success("Estado actualizado"); }}>Marcar vacaciones</Button>
        ) : (
          <Button variant="secondary" onClick={() => { setEstado(id, "activo"); toast.success("Estado actualizado"); }}>Marcar activo</Button>
        )}
        {activeCases.length === 0 && (
          <Button variant="danger" onClick={() => { deleteAbogado(id); toast.success("Abogado eliminado"); router.push("/admin/equipo"); }}>Eliminar</Button>
        )}
      </div>
    </div>
  );
}
