import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [RouterLink],
  styleUrl: './home.scss',
  template: `
    <header class="hero">
      <p class="brand">Dra. Aline Magalhães</p>
      <p class="hello">Olá, Patrícia</p>
      <h1 class="status">Pós-parto</h1>
      <p class="meta">Bebê nasceu em 01/10/2026 · 12 dias</p>
      <p class="meta">Próxima consulta: pós-parto, 19/10/2026</p>
    </header>

    <main class="content">
      <section class="hcard">
        <p class="label">Próxima consulta</p>
        <p class="title">Consulta pós-parto</p>
        <p class="sub">Segunda-feira, 19/10/2026</p>
        <a class="btn" routerLink="/consultas/calendario">Ver detalhes</a>
      </section>

      <section class="hcard">
        <p class="label">Pendências</p>
        <div class="line">
          <span>Consulta pós-parto</span>
          <span class="state ok">Agendada</span>
        </div>
        <div class="line">
          <span>Vacina hepatite B</span>
          <span class="state warn">Pendente</span>
        </div>
      </section>

      <section class="hcard">
        <p class="label">Bebê</p>
        <div class="pair">
          <div class="field"><span class="k">Nascimento</span><span class="v">01/10/2026</span></div>
          <div class="field"><span class="k">Idade</span><span class="v">12 dias</span></div>
        </div>
      </section>
    </main>
  `,
})
export class Home {}
