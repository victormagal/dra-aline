import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { TabBar } from '../shared/tab-bar';

@Component({
  selector: 'app-consultas-calendario',
  imports: [RouterLink, RouterLinkActive, TabBar],
  template: `
    <div class="phone-inner">
      <div class="topbar"><div><p class="eyebrow">Consultas</p><h1 style="margin-top:4px">Calendário da gestação</h1></div></div>
      <div class="screen">
        <nav class="seg">
          <a routerLink="/consultas/calendario" routerLinkActive="active">Calendário</a>
          <a routerLink="/consultas/acompanhamento" routerLinkActive="active">Acompanhamento</a>
        </nav>
        <p class="section-title">Regra de acompanhamento</p>
        <div class="list">
          <div class="row"><span>Até 30 semanas</span><span class="chip">Consultas mensais</span></div>
          <div class="row"><span>32 a 36 semanas</span><span class="chip">Consultas quinzenais</span></div>
          <div class="row"><span>A partir de 37 semanas</span><span class="chip">Semanais até o parto</span></div>
        </div>
        <p class="section-title">Próximas consultas</p>
        <div class="card"><p class="muted">Nenhuma consulta agendada no momento.</p></div>
        <div class="card" style="background:var(--soft)">
          <p class="eyebrow">Atenção</p>
          <p style="margin-top:6px">Ao final da consulta, deixe a próxima agendada para não ter problemas com indisponibilidade de agenda.</p>
        </div>
      </div>
      <app-tab-bar />
    </div>
  `,
})
export class ConsultasCalendario {}

@Component({
  selector: 'app-consultas-acompanhamento',
  imports: [RouterLink, RouterLinkActive, TabBar],
  template: `
    <div class="phone-inner">
      <div class="topbar"><div><p class="eyebrow">Consultas</p><h1 style="margin-top:4px">Acompanhamento</h1></div></div>
      <div class="screen">
        <nav class="seg">
          <a routerLink="/consultas/calendario" routerLinkActive="active">Calendário</a>
          <a routerLink="/consultas/acompanhamento" routerLinkActive="active">Acompanhamento</a>
        </nav>

        @for (c of consultas; track c.date) {
          <div class="card">
            <div class="grid4" style="padding:0">
              <div class="span-3"><p style="font-weight:700">{{ c.date }}</p></div>
              <div class="span-1" style="text-align:right"><span class="chip">{{ c.ig }}</span></div>
              <div><p class="eyebrow">Peso</p><p>{{ c.peso }}</p></div>
              <div><p class="eyebrow">P.A.</p><p>{{ c.pa }}</p></div>
              <div><p class="eyebrow">BCF</p><p>{{ c.bcf }}</p></div>
              <div><p class="eyebrow">AFU</p><p>{{ c.afu }}</p></div>
              <div class="span-2"><p class="eyebrow">Edema</p><p>{{ c.edema }}</p></div>
              <div class="span-4"><p class="eyebrow">Conduta</p><p>{{ c.conduta }}</p></div>
            </div>
          </div>
        }

        <p class="section-title">Próxima consulta</p>
        <div class="card"><p class="muted">A agendar</p></div>
      </div>
      <app-tab-bar />
    </div>
  `,
})
export class ConsultasAcompanhamento {
  consultas = [
    { date: '27/08/2026', ig: '34 sem', peso: '79 kg', pa: '—', bcf: '143', afu: '29 cm', edema: '+1/4+', conduta: 'Rotina lab T3; Fe EV; ajuste de suplementação' },
    { date: '13/08/2026', ig: '32 sem', peso: '79,9 kg', pa: '133×72', bcf: '142', afu: '28 cm', edema: '+1/4+', conduta: 'Curva glicêmica; nutrição (SOS)' },
    { date: '16/07/2026', ig: '28 sem', peso: '81,8 kg', pa: '106×68', bcf: '148', afu: '26 cm', edema: '+1/4+', conduta: 'Ajuste suplementação; USG; glicemia; dieta; AF; curva glicêmica' },
  ];
}
