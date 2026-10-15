import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { LineChartModule, Color, ScaleType } from '@swimlane/ngx-charts';

// Valores estimados a partir do desenho do Figma (curvas Hadlock).
// Substituir pela tabela oficial de percentis quando disponível.
const WEEKS = [22, 24, 26, 28, 30, 32, 34, 36, 38, 40, 42];
const MEDIANA = [490, 720, 960, 1210, 1510, 1860, 2200, 2550, 2950, 3340, 3740];
const P10 = [450, 650, 880, 1100, 1370, 1680, 1990, 2300, 2660, 3010, 3370];
const P90 = [550, 800, 1080, 1360, 1690, 2080, 2470, 2860, 3300, 3740, 4190];

@Component({
  selector: 'app-ultra-curva',
  imports: [RouterLink, RouterLinkActive, LineChartModule],
  styleUrl: '../ultra.scss',
  template: `
    <header class="head">
      <p class="eyebrow">Ultrassonografias</p>
      <h1>Curva de crescimento</h1>
    </header>

    <main class="content">
      <nav class="seg">
        <a routerLink="/ultra/ultrassons" routerLinkActive="active">Ultrassons</a>
        <a routerLink="/ultra/curva" routerLinkActive="active">Curva de crescimento</a>
      </nav>

      <section class="card">
        <p class="label">Peso estimado fetal (Hadlock)</p>
        <div class="legend">
          <span class="state mediana">Mediana</span>
          <span class="state faixa">Faixa P10–P90</span>
        </div>
        <ngx-charts-line-chart
          [view]="[376, 380]"
          [results]="series"
          [scheme]="scheme"
          [legend]="false"
          [xAxis]="true"
          [yAxis]="false"
          [showGridLines]="true"
          [xAxisTicks]="xTicks"
          [yScaleMin]="0"
          [yScaleMax]="4500"
          [autoScale]="false"
          [timeline]="false"
        />
      </section>

      <section class="card">
        <p class="label">Medições</p>
        <div class="cells">
          @for (m of medicoes; track m.label) {
            <div class="cell"><span class="k">{{ m.label }}</span><span class="v">{{ m.peso }}</span></div>
          }
        </div>
      </section>
    </main>
  `,
  styles: `
    ngx-charts-line-chart { display: block; }
  `,
})
export class UltraCurva {
  readonly xTicks = ['22', '26', '30', '34', '38', '42'];

  readonly scheme: Color = {
    name: 'curva',
    selectable: false,
    group: ScaleType.Ordinal,
    domain: ['#9c3d7a'],
  };

  readonly medicoes = [
    { label: '30+1 sem', peso: '1.495 g' },
    { label: '34+2 sem', peso: '2.466 g' },
    { label: '36 sem', peso: '2.744 g' },
  ];

  readonly series = [
    {
      name: 'Mediana',
      series: WEEKS.map((w, i) => ({ name: String(w), value: MEDIANA[i], min: P10[i], max: P90[i] })),
    },
  ];
}
