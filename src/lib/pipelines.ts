// ── Types ───────────────────────────────────────────────────────
export type CaseArea = "Negociacion de Deudas" | "Liquidacion Patrimonial" | "Validacion Judicial" | "Documentos" | "Consulta";
export type Prioridad = "urgente" | "alta" | "normal" | "baja";

export interface ChecklistItem {
  key: string;
  label: string;
  required: boolean;
}

export interface PipelineStage {
  name: string;
  checklist: ChecklistItem[];
  expectedDays: number;
  color: string;
}

export interface Pipeline {
  area: CaseArea;
  icon: string;
  stages: PipelineStage[];
}

// ── Helpers ─────────────────────────────────────────────────────
export function getStaleLevel(
  fechaIngreso: string,
  expectedDays: number
): "fresh" | "warning" | "danger" {
  const days = Math.floor(
    (Date.now() - new Date(fechaIngreso).getTime()) / (1000 * 60 * 60 * 24)
  );
  if (days > expectedDays * 2) return "danger";
  if (days > expectedDays) return "warning";
  return "fresh";
}

export function getDaysInStage(fechaIngreso: string): number {
  return Math.floor(
    (Date.now() - new Date(fechaIngreso).getTime()) / (1000 * 60 * 60 * 24)
  );
}

export function getDaysUntilDeadline(fechaLimite: string | null): number | null {
  if (!fechaLimite) return null;
  return Math.ceil(
    (new Date(fechaLimite).getTime() - Date.now()) / (1000 * 60 * 60 * 24)
  );
}

export const AREAS: CaseArea[] = [
  "Negociacion de Deudas",
  "Liquidacion Patrimonial",
  "Validacion Judicial",
  "Documentos",
  "Consulta",
];

// ── Pipeline Definitions ────────────────────────────────────────
export const PIPELINES: Record<CaseArea, Pipeline> = {
  "Negociacion de Deudas": {
    area: "Negociacion de Deudas",
    icon: "Handshake",
    stages: [
      {
        name: "Recepcion",
        expectedDays: 2,
        color: "bg-blue-500",
        checklist: [
          { key: "nd-rec-1", label: "Recibir documentacion del deudor", required: true },
          { key: "nd-rec-2", label: "Verificar requisitos de insolvencia (Ley 1564)", required: true },
          { key: "nd-rec-3", label: "Asignar abogado responsable", required: true },
        ],
      },
      {
        name: "Analisis Financiero",
        expectedDays: 5,
        color: "bg-indigo-500",
        checklist: [
          { key: "nd-ana-1", label: "Recopilar relacion completa de acreedores", required: true },
          { key: "nd-ana-2", label: "Calcular monto total de deudas", required: true },
          { key: "nd-ana-3", label: "Evaluar capacidad de pago del deudor", required: true },
          { key: "nd-ana-4", label: "Identificar bienes y patrimonio", required: false },
        ],
      },
      {
        name: "Solicitud ante Centro",
        expectedDays: 3,
        color: "bg-yellow-500",
        checklist: [
          { key: "nd-sol-1", label: "Preparar solicitud de negociacion", required: true },
          { key: "nd-sol-2", label: "Adjuntar certificados de deuda y soportes", required: true },
          { key: "nd-sol-3", label: "Radicar ante Centro de Conciliacion", required: true },
        ],
      },
      {
        name: "Notificacion Acreedores",
        expectedDays: 10,
        color: "bg-orange-500",
        checklist: [
          { key: "nd-not-1", label: "Verificar notificacion a todos los acreedores", required: true },
          { key: "nd-not-2", label: "Confirmar suspension de cobros y embargos", required: true },
          { key: "nd-not-3", label: "Recibir objeciones de acreedores si las hay", required: false },
        ],
      },
      {
        name: "Audiencia de Negociacion",
        expectedDays: 15,
        color: "bg-purple-500",
        checklist: [
          { key: "nd-aud-1", label: "Preparar propuesta de pago", required: true },
          { key: "nd-aud-2", label: "Asistir a audiencia de negociacion", required: true },
          { key: "nd-aud-3", label: "Negociar plazos e intereses con acreedores", required: true },
        ],
      },
      {
        name: "Acuerdo de Pago",
        expectedDays: 5,
        color: "bg-green-500",
        checklist: [
          { key: "nd-acu-1", label: "Formalizar acuerdo aprobado", required: true },
          { key: "nd-acu-2", label: "Registrar acuerdo ante el Centro", required: true },
          { key: "nd-acu-3", label: "Informar cronograma de pagos al cliente", required: true },
        ],
      },
      {
        name: "Seguimiento Cumplimiento",
        expectedDays: 30,
        color: "bg-cyan-500",
        checklist: [
          { key: "nd-seg-1", label: "Verificar cumplimiento de pagos periodicos", required: true },
          { key: "nd-seg-2", label: "Reportar avance a acreedores", required: false },
        ],
      },
      {
        name: "Cerrado",
        expectedDays: 0,
        color: "bg-gray-500",
        checklist: [
          { key: "nd-cer-1", label: "Archivar expediente", required: false },
          { key: "nd-cer-2", label: "Solicitar limpieza en centrales de riesgo", required: true },
        ],
      },
    ],
  },

  "Liquidacion Patrimonial": {
    area: "Liquidacion Patrimonial",
    icon: "Building",
    stages: [
      {
        name: "Recepcion",
        expectedDays: 2,
        color: "bg-blue-500",
        checklist: [
          { key: "lp-rec-1", label: "Recibir documentacion completa", required: true },
          { key: "lp-rec-2", label: "Verificar que aplica liquidacion patrimonial", required: true },
          { key: "lp-rec-3", label: "Asignar abogado", required: true },
        ],
      },
      {
        name: "Inventario de Bienes",
        expectedDays: 5,
        color: "bg-indigo-500",
        checklist: [
          { key: "lp-inv-1", label: "Inventariar todos los bienes del deudor", required: true },
          { key: "lp-inv-2", label: "Avaluar bienes inmuebles y muebles", required: true },
          { key: "lp-inv-3", label: "Identificar bienes inembargables", required: true },
        ],
      },
      {
        name: "Solicitud Judicial",
        expectedDays: 5,
        color: "bg-yellow-500",
        checklist: [
          { key: "lp-sol-1", label: "Preparar solicitud de liquidacion", required: true },
          { key: "lp-sol-2", label: "Presentar ante juez civil municipal", required: true },
        ],
      },
      {
        name: "Admision",
        expectedDays: 10,
        color: "bg-orange-500",
        checklist: [
          { key: "lp-adm-1", label: "Verificar auto de admision", required: true },
          { key: "lp-adm-2", label: "Subsanar si es inadmitida", required: false },
        ],
      },
      {
        name: "Liquidacion",
        expectedDays: 20,
        color: "bg-red-500",
        checklist: [
          { key: "lp-liq-1", label: "Designacion del liquidador", required: true },
          { key: "lp-liq-2", label: "Calificacion y graduacion de creditos", required: true },
          { key: "lp-liq-3", label: "Adjudicacion de bienes a acreedores", required: true },
        ],
      },
      {
        name: "Sentencia",
        expectedDays: 10,
        color: "bg-purple-500",
        checklist: [
          { key: "lp-sen-1", label: "Recibir sentencia de liquidacion", required: true },
          { key: "lp-sen-2", label: "Evaluar descargue de deudas restantes", required: true },
        ],
      },
      {
        name: "Cerrado",
        expectedDays: 0,
        color: "bg-gray-500",
        checklist: [
          { key: "lp-cer-1", label: "Archivar expediente", required: false },
          { key: "lp-cer-2", label: "Solicitar limpieza en centrales de riesgo", required: true },
        ],
      },
    ],
  },

  "Validacion Judicial": {
    area: "Validacion Judicial",
    icon: "Gavel",
    stages: [
      {
        name: "Recepcion",
        expectedDays: 2,
        color: "bg-blue-500",
        checklist: [
          { key: "vj-rec-1", label: "Revisar acuerdo previo de negociacion", required: true },
          { key: "vj-rec-2", label: "Verificar que se requiere validacion judicial", required: true },
        ],
      },
      {
        name: "Preparacion Demanda",
        expectedDays: 5,
        color: "bg-indigo-500",
        checklist: [
          { key: "vj-dem-1", label: "Redactar solicitud de validacion", required: true },
          { key: "vj-dem-2", label: "Adjuntar acuerdo y soportes", required: true },
          { key: "vj-dem-3", label: "Presentar ante juzgado competente", required: true },
        ],
      },
      {
        name: "Admision",
        expectedDays: 10,
        color: "bg-yellow-500",
        checklist: [
          { key: "vj-adm-1", label: "Verificar auto admisorio", required: true },
          { key: "vj-adm-2", label: "Subsanar si es inadmitida", required: false },
        ],
      },
      {
        name: "Audiencia",
        expectedDays: 15,
        color: "bg-orange-500",
        checklist: [
          { key: "vj-aud-1", label: "Preparar argumentos de validacion", required: true },
          { key: "vj-aud-2", label: "Asistir a audiencia", required: true },
        ],
      },
      {
        name: "Sentencia",
        expectedDays: 10,
        color: "bg-purple-500",
        checklist: [
          { key: "vj-sen-1", label: "Recibir sentencia de validacion", required: true },
          { key: "vj-sen-2", label: "Evaluar recurso si desfavorable", required: true },
        ],
      },
      {
        name: "Cerrado",
        expectedDays: 0,
        color: "bg-gray-500",
        checklist: [
          { key: "vj-cer-1", label: "Archivar expediente", required: false },
          { key: "vj-cer-2", label: "Informar resultado al cliente", required: true },
        ],
      },
    ],
  },

  Documentos: {
    area: "Documentos",
    icon: "FileText",
    stages: [
      {
        name: "Solicitud",
        expectedDays: 1,
        color: "bg-blue-500",
        checklist: [
          { key: "doc-sol-1", label: "Recibir solicitud del cliente", required: true },
          { key: "doc-sol-2", label: "Identificar tipo de documento", required: true },
        ],
      },
      {
        name: "Redaccion",
        expectedDays: 2,
        color: "bg-indigo-500",
        checklist: [
          { key: "doc-red-1", label: "Redactar documento", required: true },
          { key: "doc-red-2", label: "Incluir fundamentos legales", required: true },
        ],
      },
      {
        name: "Revision",
        expectedDays: 1,
        color: "bg-yellow-500",
        checklist: [
          { key: "doc-rev-1", label: "Revision de calidad interna", required: true },
          { key: "doc-rev-2", label: "Aprobacion del cliente", required: false },
        ],
      },
      {
        name: "Radicacion",
        expectedDays: 1,
        color: "bg-green-500",
        checklist: [
          { key: "doc-rad-1", label: "Radicar documento ante entidad", required: true },
          { key: "doc-rad-2", label: "Guardar comprobante de radicacion", required: true },
        ],
      },
      {
        name: "Seguimiento",
        expectedDays: 10,
        color: "bg-orange-500",
        checklist: [
          { key: "doc-seg-1", label: "Verificar respuesta de la entidad", required: true },
          { key: "doc-seg-2", label: "Interponer insistencia si no responden", required: false },
        ],
      },
      {
        name: "Cerrado",
        expectedDays: 0,
        color: "bg-gray-500",
        checklist: [
          { key: "doc-cer-1", label: "Archivar documento y respuesta", required: false },
        ],
      },
    ],
  },

  Consulta: {
    area: "Consulta",
    icon: "HelpCircle",
    stages: [
      {
        name: "Pendiente",
        expectedDays: 1,
        color: "bg-amber-500",
        checklist: [
          { key: "cq-pen-1", label: "Revisar consulta del ciudadano", required: true },
          { key: "cq-pen-2", label: "Evaluar si aplica insolvencia", required: true },
        ],
      },
      {
        name: "Respondida",
        expectedDays: 0,
        color: "bg-green-500",
        checklist: [
          { key: "cq-res-1", label: "Redactar respuesta orientativa", required: true },
          { key: "cq-res-2", label: "Ofrecer asesoria personalizada", required: false },
        ],
      },
      {
        name: "Cerrado",
        expectedDays: 0,
        color: "bg-gray-500",
        checklist: [
          { key: "cq-cer-1", label: "Archivar consulta", required: false },
        ],
      },
    ],
  },
};
