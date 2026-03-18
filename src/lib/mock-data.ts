import type { CaseArea, Prioridad } from "./pipelines";

export interface Cliente {
  id: string;
  nombre: string;
  telefono: string;
  email: string;
  cedula: string;
  ocupacion: string;
  ciudad: string;
  monto_deuda: string;
  estado_proceso: "Activo" | "Pendiente" | "Finalizado";
  fecha_inicio: string;
  notas: string;
  created_at: string;
  updated_at: string;
}

export interface Caso {
  id: string;
  cliente_id: string;
  cliente_nombre?: string;
  area: CaseArea;
  titulo: string;
  etapa: string;
  etapa_index: number;
  prioridad: Prioridad;
  abogado: string;
  descripcion: string;
  fecha_limite: string | null;
  fecha_ingreso_etapa: string;
  fecha_audiencia: string | null;
  fecha_cierre: string | null;
  checklist: Record<string, boolean>;
  notas_etapa: string;
  created_at: string;
  updated_at: string;
}

export interface Lead {
  id: string;
  nombre: string;
  telefono: string;
  email: string;
  area_interes: string;
  fuente: "chatbot" | "web" | "referido" | "whatsapp";
  estado: "Nuevo" | "Contactado" | "Interesado" | "Convertido" | "Perdido";
  notas: string;
  created_at: string;
  updated_at: string;
}

export interface Seguimiento {
  id: string;
  cliente_id: string | null;
  caso_id: string | null;
  lead_id: string | null;
  tipo: "llamada" | "reunion" | "whatsapp" | "nota";
  descripcion: string;
  fecha: string;
  cliente_nombre?: string;
  caso_area?: string;
  lead_nombre?: string;
  created_at: string;
}

// ── Clientes ────────────────────────────────────────────────────
export const MOCK_CLIENTES: Cliente[] = [
  {
    id: "cl1", nombre: "Carlos Alberto Mendez", telefono: "3176689001", email: "cmendez@mail.com", cedula: "79123456",
    ocupacion: "Comerciante independiente", ciudad: "Bogota", monto_deuda: "$85.000.000",
    estado_proceso: "Activo", fecha_inicio: "2026-01-15",
    notas: "Deudas con 3 bancos y DIAN. Embargo sobre vehiculo.",
    created_at: "2026-01-15T10:00:00Z", updated_at: "2026-03-01T10:00:00Z",
  },
  {
    id: "cl2", nombre: "Maria Fernanda Torres", telefono: "3176689002", email: "mftorres@mail.com", cedula: "52876543",
    ocupacion: "Empleada", ciudad: "Medellin", monto_deuda: "$42.000.000",
    estado_proceso: "Activo", fecha_inicio: "2026-02-01",
    notas: "Perdio empleo. Deudas en tarjetas de credito y libre inversion.",
    created_at: "2026-02-01T10:00:00Z", updated_at: "2026-03-10T10:00:00Z",
  },
  {
    id: "cl3", nombre: "Andres Felipe Ruiz", telefono: "3176689003", email: "aruiz@mail.com", cedula: "79654321",
    ocupacion: "Taxista", ciudad: "Cali", monto_deuda: "$120.000.000",
    estado_proceso: "Pendiente", fecha_inicio: "2026-03-01",
    notas: "Deuda por credito hipotecario y vehicular. Riesgo de perder vivienda.",
    created_at: "2026-03-01T10:00:00Z", updated_at: "2026-03-15T10:00:00Z",
  },
  {
    id: "cl4", nombre: "Laura Patricia Gomez", telefono: "3176689004", email: "lgomez@mail.com", cedula: "1019876543",
    ocupacion: "Ama de casa", ciudad: "Barranquilla", monto_deuda: "$28.000.000",
    estado_proceso: "Activo", fecha_inicio: "2025-11-20",
    notas: "Deudas de tarjetas y prestamos gota a gota. Recibe llamadas de cobro diarias.",
    created_at: "2025-11-20T10:00:00Z", updated_at: "2026-02-15T10:00:00Z",
  },
  {
    id: "cl5", nombre: "Pedro Jose Vargas", telefono: "3176689005", email: "pvargas@mail.com", cedula: "80543219",
    ocupacion: "Pensionado", ciudad: "Bucaramanga", monto_deuda: "$55.000.000",
    estado_proceso: "Finalizado", fecha_inicio: "2025-06-05",
    notas: "Proceso finalizado con exito. Limpieza en DataCredito pendiente.",
    created_at: "2025-06-05T10:00:00Z", updated_at: "2026-03-05T10:00:00Z",
  },
];

// ── Casos ───────────────────────────────────────────────────────
export const MOCK_CASOS: Caso[] = [
  {
    id: "c1", cliente_id: "cl1", cliente_nombre: "Carlos Alberto Mendez",
    area: "Negociacion de Deudas", titulo: "Negociacion deudas bancarias y DIAN",
    etapa: "Audiencia de Negociacion", etapa_index: 4, prioridad: "urgente", abogado: "Dr. Ramirez",
    descripcion: "Proceso de insolvencia para negociar deudas con Bancolombia, Davivienda y DIAN por $85M. Embargo activo sobre vehiculo.",
    fecha_limite: "2026-03-25", fecha_ingreso_etapa: "2026-03-10T10:00:00Z",
    fecha_audiencia: "2026-03-25", fecha_cierre: null,
    checklist: { "nd-aud-1": true, "nd-aud-2": false, "nd-aud-3": false },
    notas_etapa: "Audiencia programada. Preparar propuesta de pago a 5 anos.",
    created_at: "2026-01-20T10:00:00Z", updated_at: "2026-03-10T10:00:00Z",
  },
  {
    id: "c2", cliente_id: "cl2", cliente_nombre: "Maria Fernanda Torres",
    area: "Negociacion de Deudas", titulo: "Negociacion tarjetas de credito",
    etapa: "Solicitud ante Centro", etapa_index: 2, prioridad: "alta", abogado: "Dra. Lopez",
    descripcion: "Negociacion de deudas en 4 tarjetas de credito y un prestamo de libre inversion. Total $42M.",
    fecha_limite: "2026-03-30", fecha_ingreso_etapa: "2026-03-12T10:00:00Z",
    fecha_audiencia: null, fecha_cierre: null,
    checklist: { "nd-sol-1": true, "nd-sol-2": false, "nd-sol-3": false },
    notas_etapa: "Preparando solicitud ante Centro de Conciliacion de la Camara de Comercio",
    created_at: "2026-02-10T10:00:00Z", updated_at: "2026-03-12T10:00:00Z",
  },
  {
    id: "c3", cliente_id: "cl3", cliente_nombre: "Andres Felipe Ruiz",
    area: "Liquidacion Patrimonial", titulo: "Liquidacion por credito hipotecario",
    etapa: "Inventario de Bienes", etapa_index: 1, prioridad: "urgente", abogado: "Dr. Ramirez",
    descripcion: "Liquidacion patrimonial por imposibilidad de pago de credito hipotecario y vehicular. Riesgo de remate de vivienda.",
    fecha_limite: "2026-03-28", fecha_ingreso_etapa: "2026-03-14T10:00:00Z",
    fecha_audiencia: null, fecha_cierre: null,
    checklist: { "lp-inv-1": true, "lp-inv-2": false, "lp-inv-3": false },
    notas_etapa: "Avaluando inmueble y vehiculo. Consultar bienes inembargables.",
    created_at: "2026-03-05T10:00:00Z", updated_at: "2026-03-14T10:00:00Z",
  },
  {
    id: "c4", cliente_id: "cl4", cliente_nombre: "Laura Patricia Gomez",
    area: "Negociacion de Deudas", titulo: "Negociacion prestamos informales y tarjetas",
    etapa: "Notificacion Acreedores", etapa_index: 3, prioridad: "normal", abogado: "Dra. Lopez",
    descripcion: "Negociacion de deudas con entidades formales y prestamistas informales. Se busca consolidar todo en un solo acuerdo.",
    fecha_limite: null, fecha_ingreso_etapa: "2026-03-08T10:00:00Z",
    fecha_audiencia: null, fecha_cierre: null,
    checklist: { "nd-not-1": true, "nd-not-2": true, "nd-not-3": false },
    notas_etapa: "Acreedores notificados. Cobros suspendidos exitosamente.",
    created_at: "2025-12-01T10:00:00Z", updated_at: "2026-03-08T10:00:00Z",
  },
  {
    id: "c5", cliente_id: "cl1", cliente_nombre: "Carlos Alberto Mendez",
    area: "Documentos", titulo: "Derecho de peticion levantamiento embargo",
    etapa: "Radicacion", etapa_index: 3, prioridad: "alta", abogado: "Dr. Martinez",
    descripcion: "Derecho de peticion para levantamiento de embargo sobre vehiculo una vez iniciado proceso de insolvencia.",
    fecha_limite: null, fecha_ingreso_etapa: "2026-03-15T10:00:00Z",
    fecha_audiencia: null, fecha_cierre: null,
    checklist: { "doc-rad-1": false, "doc-rad-2": false },
    notas_etapa: "Listo para radicar ante juzgado",
    created_at: "2026-03-12T10:00:00Z", updated_at: "2026-03-15T10:00:00Z",
  },
  {
    id: "c6", cliente_id: "cl5", cliente_nombre: "Pedro Jose Vargas",
    area: "Negociacion de Deudas", titulo: "Negociacion deudas pension",
    etapa: "Cerrado", etapa_index: 7, prioridad: "normal", abogado: "Dr. Martinez",
    descripcion: "Proceso de insolvencia finalizado exitosamente. Acuerdo de pago a 3 anos con reduccion de intereses.",
    fecha_limite: null, fecha_ingreso_etapa: "2026-02-28T10:00:00Z",
    fecha_audiencia: null, fecha_cierre: "2026-02-28",
    checklist: { "nd-cer-1": true, "nd-cer-2": true },
    notas_etapa: "Caso cerrado. Cliente satisfecho.",
    created_at: "2025-06-10T10:00:00Z", updated_at: "2026-02-28T10:00:00Z",
  },
  {
    id: "c7", cliente_id: "cl2", cliente_nombre: "Maria Fernanda Torres",
    area: "Validacion Judicial", titulo: "Validacion acuerdo extrajudicial",
    etapa: "Preparacion Demanda", etapa_index: 1, prioridad: "normal", abogado: "Dr. Ramirez",
    descripcion: "Validacion judicial de acuerdo parcial logrado con 2 de 4 acreedores.",
    fecha_limite: "2026-04-10", fecha_ingreso_etapa: "2026-03-16T10:00:00Z",
    fecha_audiencia: null, fecha_cierre: null,
    checklist: { "vj-dem-1": true, "vj-dem-2": false, "vj-dem-3": false },
    notas_etapa: "Redactando solicitud de validacion",
    created_at: "2026-03-10T10:00:00Z", updated_at: "2026-03-16T10:00:00Z",
  },
];

// ── Leads ───────────────────────────────────────────────────────
export const MOCK_LEADS: Lead[] = [
  {
    id: "l1", nombre: "Roberto Diaz", telefono: "3181234567", email: "rdiaz@mail.com",
    area_interes: "Negociacion de Deudas", fuente: "whatsapp", estado: "Nuevo",
    notas: "Tiene deudas por $60M. Le estan embargando la cuenta.", created_at: "2026-03-15T14:00:00Z", updated_at: "2026-03-15T14:00:00Z",
  },
  {
    id: "l2", nombre: "Ana Castillo", telefono: "3187654321", email: "acastillo@mail.com",
    area_interes: "Liquidacion Patrimonial", fuente: "chatbot", estado: "Contactado",
    notas: "Pregunta si puede conservar su vivienda en la liquidacion", created_at: "2026-03-14T09:00:00Z", updated_at: "2026-03-15T10:00:00Z",
  },
  {
    id: "l3", nombre: "Sofia Herrera", telefono: "3001112233", email: "sherrera@mail.com",
    area_interes: "Negociacion de Deudas", fuente: "web", estado: "Interesado",
    notas: "Llego por la landing page. Deuda de $35M con bancos.", created_at: "2026-03-12T11:00:00Z", updated_at: "2026-03-14T15:00:00Z",
  },
  {
    id: "l4", nombre: "Diego Morales", telefono: "3114455667", email: "dmorales@mail.com",
    area_interes: "Documentos", fuente: "referido", estado: "Convertido",
    notas: "Referido por Carlos Mendez. Ya es cliente.", created_at: "2026-03-01T08:00:00Z", updated_at: "2026-03-10T10:00:00Z",
  },
  {
    id: "l5", nombre: "Patricia Rojas", telefono: "3209876543", email: "projas@mail.com",
    area_interes: "Consulta", fuente: "whatsapp", estado: "Perdido",
    notas: "No respondio despues del segundo contacto", created_at: "2026-02-20T10:00:00Z", updated_at: "2026-03-05T10:00:00Z",
  },
];

// ── Seguimientos ────────────────────────────────────────────────
export const MOCK_SEGUIMIENTOS: Seguimiento[] = [
  {
    id: "seg1", cliente_id: "cl1", caso_id: "c1", lead_id: null,
    tipo: "llamada", descripcion: "Llamada para preparar audiencia de negociacion. Se reviso propuesta de pago a 5 anos.",
    fecha: "2026-03-14T15:00:00Z", cliente_nombre: "Carlos Alberto Mendez", caso_area: "Negociacion de Deudas",
    created_at: "2026-03-14T15:00:00Z",
  },
  {
    id: "seg2", cliente_id: null, caso_id: null, lead_id: "l2",
    tipo: "whatsapp", descripcion: "Se envio informacion sobre el proceso de liquidacion patrimonial y proteccion de vivienda.",
    fecha: "2026-03-15T10:00:00Z", lead_nombre: "Ana Castillo",
    created_at: "2026-03-15T10:00:00Z",
  },
  {
    id: "seg3", cliente_id: "cl2", caso_id: "c2", lead_id: null,
    tipo: "reunion", descripcion: "Reunion para recopilar certificados de deuda de las 4 tarjetas de credito.",
    fecha: "2026-03-13T09:00:00Z", cliente_nombre: "Maria Fernanda Torres", caso_area: "Negociacion de Deudas",
    created_at: "2026-03-13T09:00:00Z",
  },
  {
    id: "seg4", cliente_id: null, caso_id: null, lead_id: "l3",
    tipo: "llamada", descripcion: "Primera llamada. Tiene embargo activo. Muy interesada en iniciar proceso.",
    fecha: "2026-03-12T14:00:00Z", lead_nombre: "Sofia Herrera",
    created_at: "2026-03-12T14:00:00Z",
  },
  {
    id: "seg5", cliente_id: "cl4", caso_id: "c4", lead_id: null,
    tipo: "nota", descripcion: "Cobros juridicos suspendidos exitosamente. Acreedores notificados del proceso de insolvencia.",
    fecha: "2026-03-11T11:00:00Z", cliente_nombre: "Laura Patricia Gomez", caso_area: "Negociacion de Deudas",
    created_at: "2026-03-11T11:00:00Z",
  },
];
