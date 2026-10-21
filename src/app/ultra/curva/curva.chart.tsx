'use client';

import {
  Area,
  CartesianGrid,
  ComposedChart,
  Line,
  ResponsiveContainer,
  Scatter,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';
import { MEDICOES_PACIENTE, REFERENCIA_INTERGROWTH } from './curva.data';

const COR_REFERENCIA = '#9c3d7a';
const COR_PACIENTE = '#8a2f5c';
const SEMANA_MIN = 22;
const SEMANA_MAX = 40;
const DIAS_POR_SEMANA = 7;
const Y_MAX = 4000;

const formatarGramas = (valor: number) => `${Math.round(valor).toLocaleString('pt-BR')} g`;

const formatarIG = (semanas: number) => {
  const inteiras = Math.floor(semanas);
  const dias = Math.round((semanas - inteiras) * DIAS_POR_SEMANA);
  return `${inteiras}+${dias} sem`;
};

// Valores da tabela numa semana decimal, por interpolação linear entre as semanas inteiras vizinhas.
const referenciaEm = (semanas: number) => {
  const inferior = REFERENCIA_INTERGROWTH.findLast((r) => r.semana <= semanas) ?? REFERENCIA_INTERGROWTH[0];
  const superior = REFERENCIA_INTERGROWTH.find((r) => r.semana >= semanas) ?? inferior;
  const t = superior.semana === inferior.semana ? 0 : (semanas - inferior.semana) / (superior.semana - inferior.semana);
  const lerp = (a: number, b: number) => a + (b - a) * t;
  return {
    p10: lerp(inferior.p10, superior.p10),
    p50: lerp(inferior.p50, superior.p50),
    p90: lerp(inferior.p90, superior.p90),
  };
};

// Uma linha por dia (1/7 de semana) entre 22 e 40 semanas. Todas as séries e o tooltip usam esta mesma lista;
// a medição da paciente entra apenas no dia exato dela, e os demais dias ficam vazios para ela.
type Ponto = {
  semana: number;
  base: number; // P10, camada invisível da faixa empilhada
  faixa: number; // P90 − P10
  p50: number;
  paciente?: number;
};

const pontos: Ponto[] = Array.from({ length: (SEMANA_MAX - SEMANA_MIN) * DIAS_POR_SEMANA + 1 }, (_, i) => {
  const semana = SEMANA_MIN + i / DIAS_POR_SEMANA;
  const ref = referenciaEm(semana);
  const medicao = MEDICOES_PACIENTE.find((m) => Math.abs(m.semanas - semana) < 1 / (2 * DIAS_POR_SEMANA));
  return {
    semana,
    base: ref.p10,
    faixa: ref.p90 - ref.p10,
    p50: ref.p50,
    paciente: medicao?.pesoG,
  };
});

type ItemTooltip = { payload?: Ponto };

// Tooltip próprio: lê a linha do dia sob o cursor e mostra a faixa, a mediana e, se houver, a paciente.
function TooltipCurva({ active, payload }: { active?: boolean; payload?: ItemTooltip[] }) {
  const linha = payload?.[0]?.payload;
  if (!active || !linha) return null;

  const ref = referenciaEm(linha.semana);
  return (
    <div style={{ background: '#fff', border: '1px solid #e4d5dd', borderRadius: 12, padding: '10px 12px', fontSize: 13 }}>
      <p style={{ margin: '0 0 6px', fontWeight: 700, color: '#3b1a2e' }}>{formatarIG(linha.semana)}</p>
      <p style={{ margin: '2px 0', color: '#7a6471' }}>
        Faixa P10–P90: {formatarGramas(ref.p10)} – {formatarGramas(ref.p90)}
      </p>
      <p style={{ margin: '2px 0', color: COR_REFERENCIA }}>Mediana: {formatarGramas(ref.p50)}</p>
      {linha.paciente !== undefined && (
        <p style={{ margin: '2px 0', color: COR_PACIENTE, fontWeight: 700 }}>
          Paciente: {formatarGramas(linha.paciente)}
        </p>
      )}
    </div>
  );
}

export default function CurvaChart() {
  return (
    <ResponsiveContainer width="100%" height={380}>
      <ComposedChart data={pontos} margin={{ top: 8, right: 8, bottom: 0, left: 0 }}>
        <CartesianGrid vertical horizontal stroke="#f0e4ea" />
        <XAxis
          dataKey="semana"
          type="number"
          domain={[SEMANA_MIN, SEMANA_MAX]}
          ticks={[22, 26, 30, 34, 38]}
          tickFormatter={(v: number) => String(Math.round(v))}
          tickLine={false}
          axisLine={false}
          stroke="#7a6471"
          fontSize={12}
        />
        <YAxis domain={[0, Y_MAX]} hide />
        <Tooltip content={<TooltipCurva />} cursor={{ stroke: '#c9b3bf' }} />
        <Area
          dataKey="base"
          stackId="faixa"
          stroke="none"
          fill="transparent"
          tooltipType="none"
          legendType="none"
          isAnimationActive={false}
        />
        <Area
          dataKey="faixa"
          stackId="faixa"
          stroke="none"
          fill={COR_REFERENCIA}
          fillOpacity={0.18}
          tooltipType="none"
          isAnimationActive={false}
          name="Faixa P10–P90"
        />
        <Line
          dataKey="p50"
          stroke={COR_REFERENCIA}
          strokeWidth={2.5}
          dot={false}
          isAnimationActive={false}
          name="Mediana"
        />
        <Scatter dataKey="paciente" fill={COR_PACIENTE} name="Paciente" isAnimationActive={false} />
      </ComposedChart>
    </ResponsiveContainer>
  );
}
