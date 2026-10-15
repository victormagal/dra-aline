import { Component } from '@angular/core';

@Component({
  selector: 'app-mais-casal',
  styleUrl: '../mais.scss',
  template: `
    <header class="head">
      <p class="eyebrow">Ficha da gestação</p>
      <h1>Dados do casal</h1>
    </header>

    <main class="content">
      <section class="card">
        <p class="label">Gestante</p>
        <div class="pair">
          <div class="fld"><span class="k">Nome</span><span class="v">Patrícia Regina B. Moura</span></div>
          <div class="fld"><span class="k">Idade</span><span class="v">36 anos</span></div>
        </div>
        <div class="pair">
          <div class="fld"><span class="k">Profissão</span><span class="v">PMDF</span></div>
          <div class="fld"><span class="k">Religião</span><span class="v">Católica</span></div>
        </div>
        <div class="pair">
          <div class="fld"><span class="k">Estado civil</span><span class="v">Casada</span></div>
          <div class="fld"><span class="k">Tipo sanguíneo</span><span class="v">A+</span></div>
        </div>
      </section>

      <section class="card">
        <p class="label">Histórico obstétrico</p>
        <div class="tiles">
          <div class="tile"><span class="k">G</span><span class="v">6</span></div>
          <div class="tile"><span class="k">PN</span><span class="v">3</span></div>
          <div class="tile"><span class="k">PC</span><span class="v">2</span></div>
          <div class="tile"><span class="k">A</span><span class="v">0</span></div>
        </div>
        <p class="muted" style="font-size:13px">G4 foi gemelar</p>
      </section>

      <section class="card">
        <p class="label">Dados da gestação</p>
        <div class="pair">
          <div class="fld"><span class="k">DUM</span><span class="v">01/01/2026</span></div>
          <div class="fld"><span class="k">1ª USG</span><span class="v">20/02/2026 · 7+1</span></div>
        </div>
        <div class="pair full">
          <div class="fld"><span class="k">DPP</span><span class="v">08/10/2026</span></div>
        </div>
      </section>

      <section class="card">
        <p class="label">Parceiro(a)</p>
        <div class="pair">
          <div class="fld"><span class="k">Nome</span><span class="v">Victor Magalhães</span></div>
          <div class="fld"><span class="k">Idade</span><span class="v">38 anos</span></div>
        </div>
        <div class="pair">
          <div class="fld"><span class="k">Religião</span><span class="v">Católico</span></div>
          <div class="fld"><span class="k">Tipo sanguíneo</span><span class="v">A+</span></div>
        </div>
      </section>

      <section class="card">
        <p class="label">História prévia / gestações anteriores</p>
        <div class="lines">
          <p>G4: gemelar mono/di</p>
          <p>Hipotireoidismo</p>
          <p>G1 e G2: cesarianas</p>
          <p>G3 e G4: parto normal, sem intercorrências</p>
        </div>
      </section>
    </main>
  `,
})
export class MaisCasal {}
