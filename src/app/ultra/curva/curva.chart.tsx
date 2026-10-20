'use client';

import {
  Area,
  CartesianGrid,
  ComposedChart,
  Line,
  ResponsiveContainer,
  XAxis,
  YAxis,
} from 'recharts';

// Valores estimados a partir do desenho do Figma (curvas Hadlock).
// Substituir pela tabela oficial de percentis quando disponível.
const WEEKS = [22, 24, 26, 28, 30, 32, 34, 36, 38, 40, 42];
const MEDIANA = [490, 720, 960, 1210, 1510, 1860, 2200, 2550, 2950, 3340, 3740];
const P10 = [450, 650, 880, 1100, 1370, 1680, 1990, 2300, 2660, 3010, 3370];
const P90 = [550, 800, 1080, 1360, 1690, 2080, 2470, 2860, 3300, 3740, 4190];

const X_TICKS = ['22', '26', '30', '34', '38', '42'];
const COLOR = '#9c3d7a';

// The P10–P90 band is drawn as a stacked area: an invisible base at P10 plus a filled range of P90 − P10.
const data = WEEKS.map((w, i) => ({
  semana: String(w),
  mediana: MEDIANA[i],
  base: P10[i],
  faixa: P90[i] - P10[i],
}));

export default function CurvaChart() {
  return (
    <ResponsiveContainer width="100%" height={380}>
      <ComposedChart data={data} margin={{ top: 8, right: 8, bottom: 0, left: 0 }}>
        <CartesianGrid vertical horizontal stroke="#f0e4ea" />
        <XAxis dataKey="semana" ticks={X_TICKS} tickLine={false} axisLine={false} stroke="#7a6471" fontSize={12} />
        <YAxis domain={[0, 4500]} hide />
        <Area dataKey="base" stackId="band" stroke="none" fill="transparent" isAnimationActive={false} />
        <Area dataKey="faixa" stackId="band" stroke="none" fill={COLOR} fillOpacity={0.18} isAnimationActive={false} />
        <Line dataKey="mediana" stroke={COLOR} strokeWidth={2.5} dot={{ r: 3, fill: COLOR }} isAnimationActive={false} />
      </ComposedChart>
    </ResponsiveContainer>
  );
}
