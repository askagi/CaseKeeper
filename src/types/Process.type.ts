import { z } from "zod";
import { RequiredString } from "./Global.types";

const DEFAULT_MESSAGE = "O campo é obrigatório";

export const STATUS_OPTIONS = ["Em andamento", "Arquivado", "Acordo"] as const;
export const JUDICIAL_DISTRICT_OPTIONS = [
  "Vara civil",
  "Vara do trabalhado",
  "Juizado especial",
  "Procon",
  "Criminal",
] as const;

export const PROCESSES_TYPE_OPTIONS = [
  "Negativação indevida",
  "Danos morais",
  "Acumulo de função",
  "FGTS",
  "Acidente de trabalho",
  "Reintegração",
  "Gravidez",
  "Cobrança indevida",
] as const;

export const AUDIENCE_TYPE_OPTIONS = [
  "Conciliação",
  "Una",
  "Inicial",
  "Instrução",
] as const;

const ProcessAudienceSchema = z.object({
  type: z.enum(AUDIENCE_TYPE_OPTIONS),
  date: z.string(), //data e hora
});

export const ProcessSchema = z.object({
  id: z.string(),
  number: z.number(),
  author: RequiredString(DEFAULT_MESSAGE),
  defendant: RequiredString(DEFAULT_MESSAGE), //réu
  store: RequiredString(DEFAULT_MESSAGE),
  status: z.enum(STATUS_OPTIONS),
  judicialDistrict: z.enum(JUDICIAL_DISTRICT_OPTIONS),
  city: RequiredString(DEFAULT_MESSAGE),
  country: RequiredString(DEFAULT_MESSAGE),
  amountPaid: RequiredString(DEFAULT_MESSAGE), // valor da causa
  processesType: z.enum(PROCESSES_TYPE_OPTIONS).array(), // Objeto da ação
  receivingDate: RequiredString(DEFAULT_MESSAGE), // data de recebimento
  audience: ProcessAudienceSchema,
  observations: z.string().optional(),
  link: z.string().optional(),
  citedBy: z.string().optional(),
  updateBy: z.string().optional(),
});

export type Process = z.infer<typeof ProcessSchema>;
