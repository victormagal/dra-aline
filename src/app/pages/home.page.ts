import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TabBar } from '../shared/tab-bar';

@Component({
  selector: 'app-home',
  imports: [RouterLink, TabBar],
  styles: `
    :host { display: block; min-height: 100%; }

    .hero {
      position: relative;
      height: 230px;
      padding: 60px 24px 28px;
      background: linear-gradient(90deg, var(--coral) 0%, var(--magenta) 100%);
      color: var(--white);
      display: flex;
      flex-direction: column;
      gap: 6px;
      overflow: hidden;
    }
    .brand {
      font-family: 'Cormorant Garamond', Georgia, serif;
      font-weight: 600;
      font-size: 16px;
      letter-spacing: 0.12em;
      text-transform: uppercase;
    }
    .hello { font-size: 14px; font-weight: 500; }
    .status {
      font-family: 'Cormorant Garamond', Georgia, serif;
      font-weight: 700;
      font-size: 52px;
      line-height: 0.95;
      color: var(--white);
      margin-top: 4px;
    }
    .meta { font-size: 13px; line-height: 1.25; }

    .content {
      display: flex;
      flex-direction: column;
      gap: 12px;
      padding: 16px 16px calc(var(--safe-bottom) + 96px);
    }
    .hcard {
      background: var(--white);
      border-radius: 20px;
      padding: 18px;
      display: flex;
      flex-direction: column;
      gap: 10px;
    }
    .label {
      font-size: 11px;
      font-weight: 700;
      letter-spacing: 0.1em;
      text-transform: uppercase;
      color: var(--brand-primary);
    }
    .title {
      font-family: 'Cormorant Garamond', Georgia, serif;
      font-weight: 700;
      font-size: 26px;
      line-height: 1;
      color: var(--text);
    }
    .sub { font-size: 14px; font-weight: 500; color: var(--text); }

    .btn {
      display: block;
      padding: 14px 16px;
      border-radius: 14px;
      background: var(--brand-primary);
      color: var(--white);
      font-weight: 700;
      font-size: 15px;
      text-align: center;
      margin-top: 4px;
    }

    .line {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 10px;
    }
    .line > span:first-child { font-size: 14px; font-weight: 500; color: var(--text); }
    .state {
      display: inline-flex;
      padding: 5px 10px;
      border-radius: 999px;
      font-size: 11px;
      font-weight: 700;
      white-space: nowrap;
    }
    .state.ok { background: rgba(79, 138, 103, 0.16); color: var(--ok); }
    .state.warn { background: rgba(138, 47, 92, 0.16); color: var(--brand-primary); }

    .pair { display: grid; grid-template-columns: 1fr 1fr; gap: 12px; }
    .field span { display: block; }
    .field .k { font-size: 11px; color: var(--muted); }
    .field .v { font-size: 15px; font-weight: 500; color: var(--text); margin-top: 2px; }
  `,
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

    <app-tab-bar />
  `,
})
export class Home {}
