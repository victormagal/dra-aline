import { Component } from '@angular/core';

@Component({
  selector: 'app-mais-saude',
  styleUrl: '../mais.scss',
  template: `
    <header class="head">
      <p class="eyebrow">Ficha da gestação</p>
      <h1>Saúde e contatos</h1>
    </header>

    <main class="content">
      <section class="card">
        <p class="label">Alergias</p>
        <div class="chips">
          <span class="state warn">Dermatites</span>
          <span class="state warn">Alergias respiratórias</span>
        </div>
      </section>

      <section class="card">
        <p class="label">História familiar do casal</p>
        <div class="chips">
          <span class="state primary">HAS / cardiopatia</span>
          <span class="state primary">DM</span>
        </div>
      </section>

      <section class="card">
        <p class="label">Em caso de intercorrência, contatar</p>
        <p class="body muted">A preencher no cadastro</p>
      </section>
    </main>
  `,
})
export class MaisSaude {}
