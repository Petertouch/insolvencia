"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useQueryClient } from "@tanstack/react-query";
import Link from "next/link";
import Button from "@/components/ui/button";
import Input from "@/components/ui/input";
import Select from "@/components/ui/select";
import { createCliente } from "@/lib/db";
import { ArrowLeft } from "lucide-react";
import { toast } from "sonner";

export default function NuevoClientePage() {
  const router = useRouter();
  const queryClient = useQueryClient();
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    const form = new FormData(e.currentTarget);
    await createCliente({
      nombre: form.get("nombre") as string,
      telefono: form.get("telefono") as string,
      email: form.get("email") as string,
      cedula: form.get("cedula") as string,
      ocupacion: form.get("ocupacion") as string,
      ciudad: form.get("ciudad") as string,
      monto_deuda: form.get("monto_deuda") as string,
      estado_proceso: form.get("estado_proceso") as "Activo" | "Pendiente" | "Finalizado",
      notas: form.get("notas") as string,
    });
    queryClient.invalidateQueries({ queryKey: ["clientes"] });
    queryClient.invalidateQueries({ queryKey: ["dashboard-stats"] });
    toast.success("Cliente creado exitosamente");
    router.push("/admin/clientes");
  };

  return (
    <div className="max-w-2xl space-y-6">
      <div className="flex items-center gap-4">
        <Link href="/admin/clientes" className="text-slate-500 hover:text-white transition-colors"><ArrowLeft className="w-5 h-5" /></Link>
        <h2 className="text-white text-xl font-bold">Nuevo Cliente</h2>
      </div>

      <form onSubmit={handleSubmit} className="bg-white/5 border border-white/10 rounded-xl p-6 space-y-5">
        <Input label="Nombre completo" name="nombre" placeholder="Carlos Alberto Mendez" required />
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Input label="Telefono" name="telefono" type="tel" placeholder="3176689580" />
          <Input label="Email" name="email" type="email" placeholder="correo@mail.com" />
        </div>
        <Input label="Numero de cedula" name="cedula" type="text" inputMode="numeric" placeholder="79123456" required />
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Input label="Ocupacion" name="ocupacion" placeholder="Comerciante, Empleado, Pensionado..." />
          <Input label="Ciudad" name="ciudad" placeholder="Bogota, Medellin, Cali..." />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Input label="Monto total de deuda" name="monto_deuda" placeholder="$50.000.000" />
          <Select label="Estado del proceso" name="estado_proceso" options={[
            { value: "Activo", label: "Activo" },
            { value: "Pendiente", label: "Pendiente" },
            { value: "Finalizado", label: "Finalizado" },
          ]} />
        </div>
        <Input label="Notas" name="notas" placeholder="Notas adicionales sobre el cliente y sus deudas..." />
        <div className="flex justify-end gap-3 pt-2">
          <Link href="/admin/clientes"><Button type="button" variant="ghost">Cancelar</Button></Link>
          <Button type="submit" disabled={loading}>{loading ? "Guardando..." : "Crear Cliente"}</Button>
        </div>
      </form>
    </div>
  );
}
