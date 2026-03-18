"use client";

import { AREAS, type CaseArea } from "@/lib/pipelines";
import { Handshake, Building2, Gavel, FileText, HelpCircle } from "lucide-react";

const AREA_ICONS: Record<CaseArea, React.ReactNode> = {
  "Negociacion de Deudas": <Handshake className="w-4 h-4" />,
  "Liquidacion Patrimonial": <Building2 className="w-4 h-4" />,
  "Validacion Judicial": <Gavel className="w-4 h-4" />,
  "Documentos": <FileText className="w-4 h-4" />,
  "Consulta": <HelpCircle className="w-4 h-4" />,
};

export default function PipelineTabs({
  selected,
  onSelect,
  counts,
}: {
  selected: CaseArea;
  onSelect: (area: CaseArea) => void;
  counts?: Record<string, number>;
}) {
  return (
    <div className="flex gap-1 overflow-x-auto pb-1 scrollbar-none">
      {AREAS.map((area) => {
        const active = area === selected;
        const count = counts?.[area] ?? 0;
        return (
          <button
            key={area}
            onClick={() => onSelect(area)}
            className={`flex items-center gap-1.5 px-3 py-2 rounded-lg text-xs font-medium whitespace-nowrap transition-all ${
              active
                ? "bg-accent/15 text-accent border border-accent/30"
                : "text-slate-500 hover:text-white hover:bg-white/5 border border-transparent"
            }`}
          >
            {AREA_ICONS[area]}
            <span className="hidden sm:inline">{area}</span>
            {count > 0 && (
              <span className={`px-1.5 py-px rounded-full text-[10px] ${
                active ? "bg-accent/20 text-accent" : "bg-white/10 text-slate-500"
              }`}>
                {count}
              </span>
            )}
          </button>
        );
      })}
    </div>
  );
}
