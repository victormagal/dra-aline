import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-exames-janelas',
  imports: [RouterLink, RouterLinkActive],
  styleUrl: '../exames.scss',
  template: `
    <header class="head">
      <p class="eyebrow">Exames laboratoriais</p>
      <h1>Janelas de coleta</h1>
    </header>

    <main class="content">
      <nav class="seg">
        <a routerLink="/exames/janelas" routerLinkActive="active">Janelas de coleta</a>
        <a routerLink="/exames/resultados" routerLinkActive="active">Resultados</a>
      </nav>

      <section class="card">
        <p class="body">Durante a gestação realizamos ao menos 3 avaliações laboratoriais (1º, 2º e 3º trimestre): nutrição, hormônios e sorologias.</p>
      </section>

      <section class="card">
        <p class="label">Calendário de exames</p>
        <div class="marco">
          <span class="dot" style="background: var(--magenta)"></span>
          <div><p class="t">A partir de 8 semanas</p><p class="s">Sexagem fetal (opcional, sangue materno)</p></div>
        </div>
        <div class="marco">
          <span class="dot" style="background: var(--magenta)"></span>
          <div><p class="t">11 semanas</p><p class="s">Perfil bioquímico materno: PAPP-A e fração livre do βhCG</p></div>
        </div>
        <div class="marco">
          <span class="dot" style="background: var(--brand-primary)"></span>
          <div><p class="t">24 a 26 semanas</p><p class="s">TOTG (teste oral de tolerância à glicose). Indispensável</p></div>
        </div>
        <div class="marco">
          <span class="dot" style="background: var(--warn)"></span>
          <div><p class="t">35 a 37 semanas</p><p class="s">Exame do cotonete: pesquisa de Streptococcus agalactiae</p></div>
        </div>
      </section>

      <section class="card">
        <p class="label">Preparo · TOTG</p>
        <p class="body">Chegar ao laboratório pela manhã, em jejum de 8 a 12 horas. Ingerir 300 ml de dextrosol e coletar nova amostra após 60 e 120 minutos.</p>
      </section>
    </main>

  `,
})
export class ExamesJanelas {}
