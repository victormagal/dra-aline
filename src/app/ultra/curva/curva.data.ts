// Referência: INTERGROWTH-21st, peso fetal estimado (EFW, g) por idade gestacional em semanas inteiras.
// Fonte: tabela "grow_efw_ct_table_values.pdf" (Stirnemann et al., Ultrasound Obstet Gynecol, 2016).
// Usamos P10, P50 e P90 para manter a faixa de referência do desenho.
export type ReferenciaSemana = {
  semana: number;
  p10: number;
  p50: number;
  p90: number;
};

export const REFERENCIA_INTERGROWTH: ReferenciaSemana[] = [
  { semana: 22, p10: 481, p50: 525, p90: 578 },
  { semana: 23, p10: 538, p50: 592, p90: 658 },
  { semana: 24, p10: 602, p50: 669, p90: 751 },
  { semana: 25, p10: 674, p50: 756, p90: 858 },
  { semana: 26, p10: 757, p50: 856, p90: 980 },
  { semana: 27, p10: 849, p50: 969, p90: 1119 },
  { semana: 28, p10: 951, p50: 1097, p90: 1276 },
  { semana: 29, p10: 1065, p50: 1239, p90: 1452 },
  { semana: 30, p10: 1190, p50: 1396, p90: 1647 },
  { semana: 31, p10: 1326, p50: 1568, p90: 1860 },
  { semana: 32, p10: 1473, p50: 1755, p90: 2089 },
  { semana: 33, p10: 1630, p50: 1954, p90: 2332 },
  { semana: 34, p10: 1795, p50: 2162, p90: 2583 },
  { semana: 35, p10: 1967, p50: 2378, p90: 2838 },
  { semana: 36, p10: 2144, p50: 2594, p90: 3089 },
  { semana: 37, p10: 2321, p50: 2806, p90: 3326 },
  { semana: 38, p10: 2495, p50: 3006, p90: 3541 },
  { semana: 39, p10: 2663, p50: 3186, p90: 3722 },
  { semana: 40, p10: 2818, p50: 3338, p90: 3858 },
];

// Medições de peso fetal estimado da paciente (ecografias), em idade gestacional decimal.
export type MedicaoPeso = {
  label: string;
  semanas: number; // ex.: 30+1 = 30 + 1/7
  pesoG: number;
};

export const MEDICOES_PACIENTE: MedicaoPeso[] = [
  { label: '30+1 sem', semanas: 30 + 1 / 7, pesoG: 1495 },
  { label: '34+2 sem', semanas: 34 + 2 / 7, pesoG: 2466 },
  { label: '36 sem', semanas: 36, pesoG: 2744 },
];
