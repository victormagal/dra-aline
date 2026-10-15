import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-ultra-ultrassons',
  imports: [RouterLink, RouterLinkActive],
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
