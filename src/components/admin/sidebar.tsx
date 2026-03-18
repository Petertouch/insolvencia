"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useSidebarStore } from "@/lib/stores/sidebar-store";
import { useAuth } from "@/components/providers/auth-provider";
import {
  LayoutDashboard,
  Users,
  Scale,
  Inbox,
  ClipboardList,
  PanelLeftClose,
  PanelLeftOpen,
  LogOut,
  X,
  UsersRound,
  FileText,
} from "lucide-react";

const NAV_ITEMS = [
  { href: "/admin/dashboard", label: "Dashboard", icon: LayoutDashboard, roles: ["admin", "abogado"] },
  { href: "/admin/clientes", label: "Clientes", icon: Users, roles: ["admin"] },
  { href: "/admin/casos", label: "Casos", icon: Scale, roles: ["admin", "abogado"] },
  { href: "/admin/leads", label: "Leads", icon: Inbox, roles: ["admin"] },
  { href: "/admin/seguimiento", label: "Seguimiento", icon: ClipboardList, roles: ["admin", "abogado"] },
  { href: "/admin/equipo", label: "Equipo", icon: UsersRound, roles: ["admin"] },
  { href: "/admin/blog", label: "Blog", icon: FileText, roles: ["admin"] },
];

export { NAV_ITEMS };

export default function Sidebar() {
  const pathname = usePathname();
  const router = useRouter();
  const { collapsed, toggle, mobileOpen, setMobileOpen } = useSidebarStore();
  const { user, role, logout } = useAuth();

  const visibleItems = NAV_ITEMS.filter((item) => !role || item.roles.includes(role));

  const handleLogout = () => {
    logout();
    router.push("/login");
  };

  const handleNavClick = () => {
    if (mobileOpen) setMobileOpen(false);
  };

  return (
    <>
      {mobileOpen && (
        <div
          className="fixed inset-0 bg-black/60 z-40 md:hidden"
          onClick={() => setMobileOpen(false)}
        />
      )}

      <aside
        className={`
          fixed left-0 top-0 h-screen bg-surface-dark border-r border-white/10 flex flex-col z-50 transition-all duration-300
          ${collapsed ? "w-16" : "w-60"}
          ${mobileOpen ? "translate-x-0" : "-translate-x-full"}
          md:translate-x-0
        `}
      >
        <div className="flex items-center justify-between px-4 h-14 md:h-16 border-b border-white/10 flex-shrink-0">
          <div className="flex items-center gap-2.5">
            <div className="w-7 h-7 rounded-lg bg-accent/20 flex items-center justify-center flex-shrink-0">
              <Scale className="w-4 h-4 text-accent" />
            </div>
            {!collapsed && (
              <div className="flex items-center gap-1 overflow-hidden">
                <span className="text-white font-black text-sm tracking-wider">INSOLVENCIA</span>
                <span className="text-accent font-black text-sm">360</span>
              </div>
            )}
          </div>
          <button
            onClick={() => setMobileOpen(false)}
            className="md:hidden p-1.5 text-slate-500 hover:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <nav className="flex-1 py-3 px-2 space-y-1 overflow-y-auto">
          {visibleItems.map(({ href, label, icon: Icon }) => {
            const active = pathname.startsWith(href);
            return (
              <Link
                key={href}
                href={href}
                onClick={handleNavClick}
                title={collapsed ? label : undefined}
                className={`flex items-center gap-3 px-3 py-3 md:py-2.5 rounded-lg text-sm font-medium transition-all duration-200 ${
                  active
                    ? "bg-accent/15 text-accent"
                    : "text-slate-500 hover:text-white hover:bg-white/5"
                }`}
              >
                <Icon className="w-5 h-5 flex-shrink-0" />
                {!collapsed && <span>{label}</span>}
              </Link>
            );
          })}
        </nav>

        <div className="border-t border-white/10 p-2 space-y-1">
          {user && !collapsed && (
            <div className="px-3 py-2 mb-1">
              <p className="text-white text-xs font-medium truncate">{user.nombre}</p>
              <p className="text-accent/60 text-[10px] capitalize">{user.role}</p>
            </div>
          )}
          <button
            onClick={toggle}
            className="hidden md:flex items-center gap-3 w-full px-3 py-2.5 rounded-lg text-sm text-slate-500 hover:text-white hover:bg-white/5 transition-colors"
          >
            {collapsed ? <PanelLeftOpen className="w-5 h-5" /> : <PanelLeftClose className="w-5 h-5" />}
            {!collapsed && <span>Colapsar</span>}
          </button>
          <button
            onClick={handleLogout}
            className="flex items-center gap-3 w-full px-3 py-3 md:py-2.5 rounded-lg text-sm text-slate-500 hover:text-red-400 hover:bg-red-500/5 transition-colors"
          >
            <LogOut className="w-5 h-5" />
            {!collapsed && <span>Salir</span>}
          </button>
        </div>
      </aside>
    </>
  );
}
