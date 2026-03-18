import { create } from "zustand";
import { persist } from "zustand/middleware";

export type UserRole = "admin" | "abogado";

export interface AuthUser {
  id: string;
  nombre: string;
  email: string;
  role: UserRole;
}

export const MOCK_USERS: AuthUser[] = [
  { id: "u1", nombre: "Admin Insolvencia", email: "admin@insolvencia360.com", role: "admin" },
  { id: "u2", nombre: "Dr. Ramirez", email: "ramirez@insolvencia360.com", role: "abogado" },
  { id: "u3", nombre: "Dra. Lopez", email: "lopez@insolvencia360.com", role: "abogado" },
];

interface AuthStore {
  user: AuthUser | null;
  login: (user: AuthUser) => void;
  logout: () => void;
}

export const useAuthStore = create<AuthStore>()(
  persist(
    (set) => ({
      user: null,
      login: (user) => set({ user }),
      logout: () => set({ user: null }),
    }),
    { name: "insolvencia-auth" }
  )
);
