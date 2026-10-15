import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { TabBar } from '../shared/tab-bar';

const CONSULTAS_STYLES = `
  :host { display: block; min-height: 100%; }

  .head { padding: 60px 16px 8px; display: flex; flex-direction: column; gap: 4px; }
  .eyebrow {
    font-size: 11px; font-weight: 700; letter-spacing: 0.1em;
    text-transform: uppercase; color: var(--brand-primary);
  }
  h1 {
    font-family: 'Cormorant Garamond', Georgia, serif;
    font-weight: 700; font-size: 32px; line-height: 1; color: var(--text); margin: 0;
  }

  .content {
    display: flex; flex-direction: column; gap: 12px;
    padding: 8px 16px calc(var(--safe-bottom) + 96px);
  }

  .seg {
    display: flex; gap: 4px; background: var(--white);
    border-radius: 14px; padding: 4px; margin: 0;
  }
  .seg a {
    flex: 1; text-align: center; padding: 10px 8px; border-radius: 10px;
    font-size: 13px; font-weight: 700; color: var(--muted);
  }
  .seg a.active { background: var(--brand-primary); color: var(--white); }

  .card {
    margin: 0;
    background: var(--white); border-radius: 20px; padding: 18px;
    display: flex; flex-direction: column; gap: 10px;
  }
  .label {
    font-size: 11px; font-weight: 700; letter-spacing: 0.1em;
    text-transform: uppercase; color: var(--brand-primary);
  }
  .body { font-size: 14px; color: var(--text); }
  .body.medium { font-weight: 500; }
  .muted { color: var(--muted); }

  /* Calendário */
  .rule { display: flex; gap: 12px; align-items: flex-start; }
  .rule .dot { width: 12px; height: 12px; border-radius: 50%; margin-top: 4px; flex: none; }
  .rule .t { font-size: 14px; font-weight: 700; color: var(--text); }
  .rule .s { font-size: 13px; color: var(--muted); margin-top: 2px; }

  /* Acompanhamento */
  .top { display: flex; align-items: center; justify-content: space-between; gap: 8px; }
  .date {
    font-family: 'Cormorant Garamond', Georgia, serif;
    font-weight: 700; font-size: 22px; line-height: 1.2; color: var(--text);
  }
  .chip {
    padding: 5px 10px; border-radius: 999px;
    background: rgba(138, 47, 92, 0.16); color: var(--brand-primary);
    font-size: 11px; font-weight: 700; white-space: nowrap;
  }
  .cells { display: flex; gap: 8px; }
  .cell {
    flex: 1; background: var(--soft); border-radius: 12px; padding: 8px;
    display: flex; flex-direction: column; gap: 2px; min-width: 0;
  }
  .cell .k {
    font-size: 9px; font-weight: 700; letter-spacing: 0.06em;
    text-transform: uppercase; color: var(--muted);
  }
  .cell .v { font-size: 14px; font-weight: 500; color: var(--text); }
`;

@Component({
  selector: 'app-consultas-calendario',
  imports: [RouterLink, RouterLinkActive, TabBar],
  styles: CONSULTAS_STYLES,
  template: `
    <header class="head">
      <p class="eyebrow">Consultas</p>
      <h1>Calendário da gestação</h1>
    </header>

    <main class="content">
      <nav class="seg">
        <a routerLink="/consultas/calendario" routerLinkActive="active">Calendário</a>
        <a routerLink="/consultas/acompanhamento" routerLinkActive="active">Acompanhamento</a>
      </nav>

      <section class="card">
        <p class="label">Regra de acompanhamento</p>
        <div class="rule">
          <span class="dot" style="background: var(--brand-primary)"></span>
          <div><p class="t">Até 30 semanas</p><p class="s">Consultas mensais</p></div>
        </div>
        <div class="rule">
          <span class="dot" style="background: var(--magenta)"></span>
          <div><p class="t">32 a 36 semanas</p><p class="s">Consultas quinzenais</p></div>
        </div>
        <div class="rule">
          <span class="dot" style="background: var(--ok)"></span>
          <div><p class="t">A partir de 37 semanas</p><p class="s">Consultas semanais até o parto</p></div>
        </div>
      </section>

      <section class="card">
        <p class="label">Próximas consultas</p>
        <p class="body medium">Nenhuma consulta agendada no momento.</p>
      </section>

      <section class="card">
        <p class="label">Atenção</p>
        <p class="body">Ao final da consulta, deixe a próxima agendada para não ter problemas com indisponibilidade de agenda.</p>
      </section>
    </main>

    <app-tab-bar />
  `,
})
export class ConsultasCalendario {}

@Component({
  selector: 'app-consultas-acompanhamento',
  imports: [RouterLink, RouterLinkActive, TabBar],
  styles: CONSULTAS_STYLES,
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

    <app-tab-bar />
  `,
})
export class ConsultasAcompanhamento {
  consultas = [
    { date: '27/08/2026', ig: '34 sem', peso: '79 kg', pa: '—', bcf: '143', afu: '29 cm', edema: '+1/4+', conduta: 'Rotina lab T3; Fe EV; ajuste de suplementação' },
    { date: '13/08/2026', ig: '32 sem', peso: '79,9 kg', pa: '133×72', bcf: '142', afu: '28 cm', edema: '+1/4+', conduta: 'Curva glicêmica; nutrição (SOS)' },
    { date: '16/07/2026', ig: '28 sem', peso: '81,8 kg', pa: '106×68', bcf: '148', afu: '26 cm', edema: '+1/4+', conduta: 'Ajuste suplementação; USG; glicemia; dieta; AF; curva glicêmica' },
  ];
}
