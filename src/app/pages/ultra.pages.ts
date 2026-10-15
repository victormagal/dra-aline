import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { TabBar } from '../shared/tab-bar';

@Component({
  selector: 'app-ultra-ultrassons',
  imports: [RouterLink, RouterLinkActive, TabBar],
  template: `
    <div class="phone-inner">
      <div class="topbar"><div><p class="eyebrow">Ultrassonografias</p><h1 style="margin-top:4px">Linha do tempo</h1></div></div>
      <div class="screen">
        <nav class="seg">
          <a routerLink="/ultra/ultrassons" routerLinkActive="active">Ultrassons</a>
          <a routerLink="/ultra/curva" routerLinkActive="active">Curva de crescimento</a>
        </nav>
        <div class="timeline">
          @for (u of items; track u.date) {
            <div class="item card" style="margin:0 0 12px">
              <div style="display:flex; justify-content:space-between; gap:8px">
                <p style="font-weight:700">{{ u.date }}</p>
                <span class="chip">{{ u.ig }}</span>
              </div>
              <p class="muted" style="margin-top:6px">{{ u.text }}</p>
            </div>
          }
        </div>
      </div>
      <app-tab-bar />
    </div>
  `,
})
export class UltraUltrassons {
  items = [
    { date: '20/02/2026', ig: 'IG 7+1', text: 'VV 3,8 · CCN 9,4 · 126 bpm · CN OK' },
    { date: '31/03/2026', ig: 'IG 12+4', text: 'Morfológico T1 OK. TN 1,9 · NT 2,3. IP art. uterina 1,62. Baixo risco' },
    { date: '28/04/2026', ig: 'IG 17 sem', text: 'Pélvico · 152 bpm · placenta anterior · P 195 g' },
    { date: '27/07/2026', ig: 'IG 30+1', text: 'Ecocardiografia fetal · Cefálico · 163 bpm · P 1.495 g (P33) · LAN' },
    { date: '27/08/2026', ig: 'IG 34+2', text: 'Cefálico · 143 bpm · Doppler normal · P 2.466 g' },
    { date: '10/09/2026', ig: 'IG 36 sem', text: 'Cefálico · 138 bpm · P 2.744 g (P33)' },
  ];
}

@Component({
  selector: 'app-ultra-curva',
  imports: [RouterLink, RouterLinkActive, TabBar],
  template: `
    <div class="phone-inner">
      <div class="topbar"><div><p class="eyebrow">Ultrassonografias</p><h1 style="margin-top:4px">Curva de crescimento</h1></div></div>
      <div class="screen">
        <nav class="seg">
          <a routerLink="/ultra/ultrassons" routerLinkActive="active">Ultrassons</a>
          <a routerLink="/ultra/curva" routerLinkActive="active">Curva de crescimento</a>
        </nav>
        <div class="card">
          <p class="eyebrow">Peso estimado fetal (Hadlock)</p>
          <div style="display:flex; gap:12px; margin:10px 0 4px; flex-wrap:wrap">
            <span class="chip">30+1 · 1.495 g</span>
            <span class="chip">34+2 · 2.466 g</span>
            <span class="chip">36 sem · 2.744 g</span>
          </div>
          <div style="display:flex; gap:14px; font-size:12px; color:var(--muted); margin-top:6px">
            <span>— Mediana</span><span>▮ Faixa P10–P90</span>
          </div>
          <div style="display:flex; justify-content:space-between; font-size:12px; color:var(--muted); margin-top:14px">
            @for (w of weeks; track w) { <span>{{ w }}</span> }
          </div>
          <p class="muted" style="font-size:12px; text-align:center; margin-top:4px">idade gestacional (semanas)</p>
        </div>
      </div>
      <app-tab-bar />
    </div>
  `,
})
export class UltraCurva {
  weeks = [22, 26, 30, 34, 38, 42];
}
