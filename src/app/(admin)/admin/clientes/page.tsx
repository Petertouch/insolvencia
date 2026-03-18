"use client";

import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { getClientes } from "@/lib/db";
import Link from "next/link";
import Badge from "@/components/ui/badge";
import Button from "@/components/ui/button";
import { Plus, Search, Users } from "lucide-react";

export default function ClientesPage() {
  const [search, setSearch] = useState("");
  const [estadoFilter, setEstadoFilter] = useState("");

  const { data: clientes } = useQuery({
    queryKey: ["clientes", search, estadoFilter],
    queryFn: () => getClientes({ search, estado_proceso: estadoFilter || undefined }),
  });

  return (
    <div className="space-y-3 md:space-y-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2 md:gap-3">
          <Users className="w-5 h-5 text-accent" />
          <span className="text-slate-500 text-xs md:text-sm">{clientes?.length || 0} clientes</span>
        </div>
        <Link href="/admin/clientes/nuevo">
          <Button size="sm"><Plus className="w-4 h-4" /> Nuevo</Button>
        </Link>
      </div>

      <div className="flex flex-col sm:flex-row gap-2 md:gap-3">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-600" />
          <input type="text" value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Buscar..."
            className="w-full bg-white/5 border border-white/10 text-white text-sm pl-10 pr-4 py-2.5 rounded-lg placeholder-slate-600 focus:outline-none focus:border-accent/40" />
        </div>
        <select value={estadoFilter} onChange={(e) => setEstadoFilter(e.target.value)}
          className="bg-white/5 border border-white/10 text-white text-sm px-3 py-2.5 rounded-lg focus:outline-none focus:border-accent/40 appearance-none">
          <option value="" className="bg-surface-dark">Estado</option>
          <option value="Activo" className="bg-surface-dark">Activo</option>
          <option value="Pendiente" className="bg-surface-dark">Pendiente</option>
          <option value="Finalizado" className="bg-surface-dark">Finalizado</option>
        </select>
      </div>

      <div className="md:hidden space-y-2">
        {clientes?.map((s) => (
          <Link key={s.id} href={`/admin/clientes/${s.id}`}
            className="block bg-white/5 border border-white/10 rounded-xl p-3.5 hover:bg-white/[0.07] transition-colors active:bg-white/10">
            <div className="flex items-center justify-between mb-1.5">
              <p className="text-white text-sm font-medium truncate flex-1">{s.nombre}</p>
              <Badge size="xs">{s.estado_proceso}</Badge>
            </div>
            <div className="flex items-center gap-3 text-slate-500 text-xs">
              <span>{s.ciudad}</span>
              <span>-</span>
              <span className="text-accent">{s.monto_deuda}</span>
            </div>
          </Link>
        ))}
        {clientes?.length === 0 && <p className="text-center text-slate-500 text-sm py-8">Sin resultados</p>}
      </div>

      <div className="hidden md:block bg-white/5 border border-white/10 rounded-xl overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-white/10 text-slate-500 text-xs uppercase tracking-wider">
                <th className="text-left px-4 py-3 font-medium">Nombre</th>
                <th className="text-left px-4 py-3 font-medium">Telefono</th>
                <th className="text-left px-4 py-3 font-medium hidden lg:table-cell">Ciudad</th>
                <th className="text-left px-4 py-3 font-medium">Deuda</th>
                <th className="text-left px-4 py-3 font-medium">Estado</th>
                <th className="text-left px-4 py-3 font-medium hidden lg:table-cell">Desde</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              {clientes?.map((s) => (
                <tr key={s.id} className="hover:bg-white/5 transition-colors">
                  <td className="px-4 py-3">
                    <Link href={`/admin/clientes/${s.id}`} className="text-white hover:text-accent transition-colors font-medium">{s.nombre}</Link>
                  </td>
                  <td className="px-4 py-3 text-slate-400">{s.telefono}</td>
                  <td className="px-4 py-3 text-slate-400 hidden lg:table-cell">{s.ciudad}</td>
                  <td className="px-4 py-3 text-accent font-medium">{s.monto_deuda}</td>
                  <td className="px-4 py-3"><Badge>{s.estado_proceso}</Badge></td>
                  <td className="px-4 py-3 text-slate-500 hidden lg:table-cell">
                    {new Date(s.fecha_inicio).toLocaleDateString("es-CO", { day: "numeric", month: "short", year: "numeric" })}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
