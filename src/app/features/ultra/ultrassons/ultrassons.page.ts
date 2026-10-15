import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-ultra-ultrassons',
  imports: [RouterLink, RouterLinkActive],
  styleUrl: '../ultra.scss',
  template: `
    <header class="head">
      <p class="eyebrow">Ultrassonografias</p>
      <h1>Linha do tempo</h1>
    </header>

    <main class="content">
      <nav class="seg">
        <a routerLink="/ultra/ultrassons" routerLinkActive="active">Ultrassons</a>
        <a routerLink="/ultra/curva" routerLinkActive="active">Curva de crescimento</a>
      </nav>

      @for (u of items; track u.date) {
        <section class="card">
          <div class="top">
            <span class="date">{{ u.date }}</span>
            <span class="chip">{{ u.ig }}</span>
          </div>
          <p class="body">{{ u.text }}</p>
        </section>
      }
    </main>
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
