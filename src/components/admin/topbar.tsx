"use client";

import { usePathname } from "next/navigation";
import { useSidebarStore } from "@/lib/stores/sidebar-store";
import { useAuth } from "@/components/providers/auth-provider";
import { Shield, Scale, Menu } from "lucide-react";

const TITLES: Record<string, string> = {
  "/admin/dashboard": "Dashboard",
  "/admin/clientes": "Clientes",
  "/admin/casos": "Casos de Insolvencia",
  "/admin/leads": "Leads",
  "/admin/seguimiento": "Seguimiento",
  "/admin/equipo": "Equipo",
  "/admin/blog": "Blog",
};

export default function Topbar() {
  const pathname = usePathname();
  const { collapsed, setMobileOpen } = useSidebarStore();
  const { user } = useAuth();

  const title = Object.entries(TITLES).find(([path]) => pathname.startsWith(path))?.[1] || "Admin";
  const RoleIcon = user?.role === "admin" ? Shield : Scale;

  return (
    <header
      className={`sticky top-0 z-30 h-14 md:h-16 bg-surface-dark/80 backdrop-blur-md border-b border-white/10 flex items-center px-4 md:px-6 transition-all duration-300 ml-0 ${
        collapsed ? "md:ml-16" : "md:ml-60"
      }`}
    >
      <button
        onClick={() => setMobileOpen(true)}
        className="md:hidden p-2 -ml-2 mr-2 text-slate-500 hover:text-white transition-colors"
      >
        <Menu className="w-5 h-5" />
      </button>

      <h1 className="text-white font-bold text-base md:text-lg">{title}</h1>

      <div className="ml-auto flex items-center gap-3 md:gap-4">
        <div className="hidden sm:flex items-center gap-2">
          <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
          <span className="text-slate-500 text-xs">Sistema activo</span>
        </div>
        {user && (
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-accent/20 rounded-full flex items-center justify-center">
              <RoleIcon className="w-4 h-4 text-accent" />
            </div>
            <div className="hidden sm:block">
              <p className="text-white text-xs font-medium leading-tight">{user.nombre}</p>
              <p className="text-accent/50 text-[10px] capitalize leading-tight">{user.role}</p>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
