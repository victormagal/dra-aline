import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-consultas-acompanhamento',
  imports: [RouterLink, RouterLinkActive],
  styleUrl: '../consultas.scss',
  template: `
    <header class="head">
      <p class="eyebrow">Consultas</p>
      <h1>Acompanhamento</h1>
    </header>

    <main class="content">
      <nav class="seg">
        <a routerLink="/consultas/calendario" routerLinkActive="active">Calendário</a>
        <a routerLink="/consultas/acompanhamento" routerLinkActive="active">Acompanhamento</a>
      </nav>

      @for (c of consultas; track c.date) {
        <section class="card">
          <div class="top">
            <span class="date">{{ c.date }}</span>
            <span class="chip">{{ c.ig }}</span>
          </div>
          <div class="cells">
            <div class="cell"><span class="k">Peso</span><span class="v">{{ c.peso }}</span></div>
            <div class="cell"><span class="k">P.A.</span><span class="v">{{ c.pa }}</span></div>
            <div class="cell"><span class="k">BCF</span><span class="v">{{ c.bcf }}</span></div>
          </div>
          <div class="cells">
            <div class="cell"><span class="k">AFU</span><span class="v">{{ c.afu }}</span></div>
            <div class="cell"><span class="k">Edema</span><span class="v">{{ c.edema }}</span></div>
          </div>
          <p class="label" style="margin-top:4px">Conduta</p>
          <p class="body">{{ c.conduta }}</p>
        </section>
      }

      <section class="card">
        <p class="label">Próxima consulta</p>
        <p class="body medium" style="font-size:15px">A agendar</p>
      </section>
    </main>
  `,
})
export class ConsultasAcompanhamento {
  consultas = [
    { date: '27/08/2026', ig: '34 sem', peso: '79 kg', pa: '—', bcf: '143', afu: '29 cm', edema: '+1/4+', conduta: 'Rotina lab T3; Fe EV; ajuste de suplementação' },
    { date: '13/08/2026', ig: '32 sem', peso: '79,9 kg', pa: '133×72', bcf: '142', afu: '28 cm', edema: '+1/4+', conduta: 'Curva glicêmica; nutrição (SOS)' },
    { date: '16/07/2026', ig: '28 sem', peso: '81,8 kg', pa: '106×68', bcf: '148', afu: '26 cm', edema: '+1/4+', conduta: 'Ajuste suplementação; USG; glicemia; dieta; AF; curva glicêmica' },
  ];
}
