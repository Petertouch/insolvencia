"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Button from "@/components/ui/button";
import Input from "@/components/ui/input";
import Select from "@/components/ui/select";
import { AREAS, type CaseArea } from "@/lib/pipelines";
import { useTeamStore } from "@/lib/stores/team-store";
import { ArrowLeft } from "lucide-react";
import { toast } from "sonner";

const COLORS = ["#6366f1", "#a855f7", "#22c55e", "#3b82f6", "#f59e0b", "#ef4444", "#06b6d4", "#ec4899"];

export default function NuevoAbogadoPage() {
  const router = useRouter();
  const { addAbogado } = useTeamStore();
  const [loading, setLoading] = useState(false);
  const [areas, setAreas] = useState<CaseArea[]>([]);
  const [color, setColor] = useState(COLORS[0]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    const form = new FormData(e.currentTarget);
    addAbogado({
      nombre: form.get("nombre") as string,
      email: form.get("email") as string,
      telefono: form.get("telefono") as string,
      cedula: form.get("cedula") as string,
      areas_habilitadas: areas,
      especialidad: (form.get("especialidad") as CaseArea) || areas[0],
      estado: "activo",
      fecha_ingreso: new Date().toISOString().split("T")[0],
      password: "insolvencia2026",
      color,
      notas: form.get("notas") as string,
      max_casos: parseInt(form.get("max_casos") as string) || 10,
    });
    toast.success("Abogado creado");
    router.push("/admin/equipo");
  };

  return (
    <div className="max-w-2xl space-y-6">
      <div className="flex items-center gap-4">
        <Link href="/admin/equipo" className="text-slate-500 hover:text-white transition-colors"><ArrowLeft className="w-5 h-5" /></Link>
        <h2 className="text-white text-xl font-bold">Nuevo Abogado</h2>
      </div>

      <form onSubmit={handleSubmit} className="bg-white/5 border border-white/10 rounded-xl p-6 space-y-5">
        <Input label="Nombre" name="nombre" placeholder="Dr. Perez" required />
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Input label="Email" name="email" type="email" placeholder="perez@insolvencia360.com" required />
          <Input label="Telefono" name="telefono" type="tel" placeholder="3176689580" />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Input label="Cedula" name="cedula" placeholder="79123456" required />
          <Input label="Max. casos activos" name="max_casos" type="number" placeholder="10" />
        </div>

        <div className="space-y-1.5">
          <label className="block text-sm font-medium text-slate-300">Areas habilitadas</label>
          <div className="flex flex-wrap gap-2">
            {AREAS.map((area) => (
              <button key={area} type="button"
                onClick={() => setAreas((prev) => prev.includes(area) ? prev.filter((a) => a !== area) : [...prev, area])}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors ${
                  areas.includes(area) ? "bg-accent/15 text-accent border border-accent/30" : "bg-white/5 text-slate-500 border border-transparent"
                }`}>
                {area}
              </button>
            ))}
          </div>
        </div>

        {areas.length > 0 && (
          <Select label="Especialidad" name="especialidad" options={areas.map((a) => ({ value: a, label: a }))} />
        )}

        <div className="space-y-1.5">
          <label className="block text-sm font-medium text-slate-300">Color de avatar</label>
          <div className="flex gap-2">
            {COLORS.map((c) => (
              <button key={c} type="button" onClick={() => setColor(c)}
                className={`w-8 h-8 rounded-full border-2 transition-all ${color === c ? "border-white scale-110" : "border-transparent"}`}
                style={{ backgroundColor: c }} />
            ))}
          </div>
        </div>

        <Input label="Notas" name="notas" placeholder="Notas sobre el abogado..." />

        <div className="flex justify-end gap-3 pt-2">
          <Link href="/admin/equipo"><Button type="button" variant="ghost">Cancelar</Button></Link>
          <Button type="submit" disabled={loading || areas.length === 0}>{loading ? "Guardando..." : "Crear Abogado"}</Button>
        </div>
      </form>
    </div>
  );
}
