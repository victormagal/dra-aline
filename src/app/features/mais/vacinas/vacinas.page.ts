import { Component } from '@angular/core';

@Component({
  selector: 'app-mais-vacinas',
  styleUrl: '../mais.scss',
  template: `
    <header class="head">
      <p class="eyebrow">Vacinas</p>
      <h1>Calendário vacinal</h1>
    </header>

    <main class="content">
      <section class="card">
        <p class="body">DTpa (difteria, tétano e coqueluche): aplicar entre 28 e 36 semanas em todas as gestações. A coqueluche pode ser fatal ao recém-nascido. É desejável que os contactantes do bebê também sejam imunizados.</p>
        <p class="note">Na rede pública, a gratuidade é restrita às gestantes.</p>
      </section>

      @for (v of vacinas; track v.name) {
        <section class="card">
          <div class="vtop">
            <span class="vname">{{ v.name }}</span>
            <span class="state" [class.ok]="v.status === 'ok'" [class.warn]="v.status === 'warn'" [class.muted]="v.status === 'muted'">{{ v.label }}</span>
          </div>
          <p class="muted" style="font-size:13px">{{ v.note }}</p>
        </section>
      }
    </main>
  `,
})
export class MaisVacinas {
  vacinas: { name: string; label: string; status: 'ok' | 'warn' | 'muted'; note: string }[] = [
    { name: 'DTpa', label: 'Aplicada', status: 'ok', note: 'Aplicada em 24/08/2026' },
    { name: 'Hepatite B', label: 'Pendente', status: 'warn', note: 'Anotação: relato de exame de sangue urgente' },
    { name: 'Influenza', label: 'Recusada', status: 'muted', note: 'Recusa registrada' },
    { name: 'COVID-19', label: 'Recusada', status: 'muted', note: 'Recusa registrada' },
    { name: 'Bronquiolite (bebê)', label: 'Aplicada', status: 'ok', note: 'Aplicada em 24/08/2026' },
  ];
}
