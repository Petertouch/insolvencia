import { Scale } from "lucide-react";
import Providers from "@/components/providers";

export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <Providers>
      <div className="min-h-screen bg-surface-dark flex items-center justify-center p-4">
        <div className="w-full max-w-md">
          <div className="flex items-center justify-center gap-3 mb-8">
            <div className="w-10 h-10 rounded-xl bg-accent/20 flex items-center justify-center">
              <Scale className="w-6 h-6 text-accent" />
            </div>
            <div className="flex items-center gap-1">
              <span className="text-white font-black text-xl tracking-wider">INSOLVENCIA</span>
              <span className="text-accent font-black text-xl">360</span>
            </div>
          </div>
          {children}
        </div>
      </div>
    </Providers>
  );
}
