"use client";

import { useState } from "react";
import { useTeamStore } from "@/lib/stores/team-store";
import { getCasos } from "@/lib/db";
import { useQuery } from "@tanstack/react-query";
import Link from "next/link";
import Badge from "@/components/ui/badge";
import Button from "@/components/ui/button";
import { Plus, Search, UsersRound } from "lucide-react";

export default function EquipoPage() {
  const { abogados } = useTeamStore();
  const [search, setSearch] = useState("");
  const { data: allCasos } = useQuery({ queryKey: ["casos"], queryFn: () => getCasos() });

  const filtered = abogados.filter((a) =>
    !search || a.nombre.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <UsersRound className="w-5 h-5 text-accent" />
          <span className="text-slate-500 text-sm">{abogados.length} abogados</span>
        </div>
        <Link href="/admin/equipo/nuevo">
          <Button size="sm"><Plus className="w-4 h-4" /> Nuevo</Button>
        </Link>
      </div>

      <div className="relative">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-600" />
        <input type="text" value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Buscar abogado..."
          className="w-full bg-white/5 border border-white/10 text-white text-sm pl-10 pr-4 py-2.5 rounded-lg placeholder-slate-600 focus:outline-none focus:border-accent/40" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
        {filtered.map((a) => {
          const activeCases = allCasos?.filter((c) => c.abogado === a.nombre && c.etapa !== "Cerrado").length || 0;
          const pct = Math.round((activeCases / a.max_casos) * 100);
          return (
            <Link key={a.id} href={`/admin/equipo/${a.id}`}
              className="bg-white/5 border border-white/10 rounded-xl p-4 hover:bg-white/[0.07] transition-colors">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-sm" style={{ backgroundColor: a.color }}>
                  {a.nombre.split(" ").map((n) => n[0]).join("").slice(0, 2)}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-white text-sm font-medium truncate">{a.nombre}</p>
                  <p className="text-slate-500 text-xs truncate">{a.especialidad}</p>
                </div>
                <Badge size="xs">{a.estado}</Badge>
              </div>
              <div className="flex items-center gap-2">
                <div className="flex-1 bg-white/5 rounded-full h-1.5">
                  <div className={`h-1.5 rounded-full ${pct > 90 ? "bg-red-500" : pct > 70 ? "bg-yellow-500" : "bg-green-500"}`}
                    style={{ width: `${Math.min(pct, 100)}%` }} />
                </div>
                <span className="text-slate-500 text-[10px]">{activeCases}/{a.max_casos}</span>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
