import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TabBar } from '../shared/tab-bar';

@Component({
  selector: 'app-mais',
  imports: [RouterLink, TabBar],
  template: `
    <div class="phone-inner">
      <div class="topbar"><div><p class="eyebrow">Conta e registros</p><h1 style="margin-top:4px">Mais</h1></div></div>
      <div class="screen">
        <div class="list" style="margin-top:8px">
          <a class="row" routerLink="/mais/casal"><div><p style="font-weight:700">Ficha do casal</p><p class="muted">Dados pessoais e do parceiro</p></div><span class="chev">›</span></a>
          <a class="row" routerLink="/mais/saude"><div><p style="font-weight:700">Saúde e contatos</p><p class="muted">Alergias, história clínica e contatos</p></div><span class="chev">›</span></a>
          <a class="row" routerLink="/mais/vacinas"><div><p style="font-weight:700">Vacinas</p><p class="muted">2 aplicadas · 1 pendente · 2 recusadas</p></div><span class="chev">›</span></a>
        </div>
      </div>
      <app-tab-bar />
    </div>
  `,
})
export class Mais {}

@Component({
  selector: 'app-mais-casal',
  imports: [RouterLink, TabBar],
  template: `
    <div class="phone-inner">
      <div class="topbar"><a class="back" routerLink="/mais">‹ Mais</a></div>
      <div class="screen">
        <div style="padding:0 16px"><p class="eyebrow">Ficha da gestação</p><h1 style="margin-top:4px">Dados do casal</h1></div>
        <p class="section-title">Gestante</p>
        <div class="card kv">
          <div><p class="k">Nome</p><p class="v">Patrícia Regina B. Moura</p></div>
          <div><p class="k">Idade</p><p class="v">36 anos</p></div>
          <div><p class="k">Profissão</p><p class="v">PMDF</p></div>
          <div><p class="k">Religião</p><p class="v">Católica</p></div>
          <div><p class="k">Estado civil</p><p class="v">Casada</p></div>
          <div><p class="k">Tipo sanguíneo</p><p class="v">A+</p></div>
        </div>
        <p class="section-title">Histórico obstétrico</p>
        <div class="card kv">
          <div><p class="k">G</p><p class="v">6</p></div>
          <div><p class="k">PN</p><p class="v">3</p></div>
          <div><p class="k">PC</p><p class="v">2</p></div>
          <div><p class="k">A</p><p class="v">0</p></div>
          <div style="grid-column:span 2"><p class="muted">G4 foi gemelar</p></div>
        </div>
        <p class="section-title">Dados da gestação</p>
        <div class="card kv">
          <div><p class="k">DUM</p><p class="v">01/01/2026</p></div>
          <div><p class="k">DPP</p><p class="v">08/10/2026</p></div>
          <div style="grid-column:span 2"><p class="k">1ª USG</p><p class="v">20/02/2026 · 7+1</p></div>
        </div>
        <p class="section-title">Parceiro(a)</p>
        <div class="card kv">
          <div><p class="k">Nome</p><p class="v">Victor Magalhães</p></div>
          <div><p class="k">Idade</p><p class="v">38 anos</p></div>
          <div><p class="k">Religião</p><p class="v">Católico</p></div>
          <div><p class="k">Tipo sanguíneo</p><p class="v">A+</p></div>
        </div>
        <p class="section-title">História prévia / gestações anteriores</p>
        <div class="card">
          <p>G4: gemelar mono/di</p>
          <p>Hipotireoidismo</p>
          <p>G1 e G2: cesarianas</p>
          <p>G3 e G4: parto normal, sem intercorrências</p>
        </div>
      </div>
      <app-tab-bar />
    </div>
  `,
})
export class MaisCasal {}

@Component({
  selector: 'app-mais-saude',
  imports: [RouterLink, TabBar],
  template: `
    <div class="phone-inner">
      <div class="topbar"><a class="back" routerLink="/mais">‹ Mais</a></div>
      <div class="screen">
        <div style="padding:0 16px"><p class="eyebrow">Ficha da gestação</p><h1 style="margin-top:4px">Saúde e contatos</h1></div>
        <p class="section-title">Alergias</p>
        <div class="card"><p>Dermatites</p><p>Alergias respiratórias</p></div>
        <p class="section-title">História familiar do casal</p>
        <div class="card"><p>HAS / cardiopatia</p><p>DM</p></div>
        <p class="section-title">Em caso de intercorrência, contatar</p>
        <div class="card"><p class="muted">A preencher no cadastro</p></div>
      </div>
      <app-tab-bar />
    </div>
  `,
})
export class MaisSaude {}

@Component({
  selector: 'app-mais-vacinas',
  imports: [RouterLink, TabBar],
  template: `
    <div class="phone-inner">
      <div class="topbar"><a class="back" routerLink="/mais">‹ Mais</a></div>
      <div class="screen">
        <div style="padding:0 16px"><p class="eyebrow">Vacinas</p><h1 style="margin-top:4px">Calendário vacinal</h1></div>
        <div class="card" style="margin-top:14px; background:var(--soft)">
          <p>DTpa (difteria, tétano e coqueluche): aplicar entre 28 e 36 semanas em todas as gestações. A coqueluche pode ser fatal ao recém-nascido. É desejável que os contactantes do bebê também sejam imunizados.</p>
          <p class="muted" style="margin-top:8px; font-size:13px">Na rede pública, a gratuidade é restrita às gestantes.</p>
        </div>
        <div class="list">
          <div class="row"><div><p style="font-weight:700">DTpa</p><p class="muted">Aplicada em 24/08/2026</p></div><span class="chip ok">Aplicada</span></div>
          <div class="row"><div><p style="font-weight:700">Hepatite B</p><p class="muted">Anotação: relato de exame de sangue urgente</p></div><span class="chip warn">Pendente</span></div>
          <div class="row"><div><p style="font-weight:700">Influenza</p><p class="muted">Recusa registrada</p></div><span class="chip muted">Recusada</span></div>
          <div class="row"><div><p style="font-weight:700">COVID-19</p><p class="muted">Recusa registrada</p></div><span class="chip muted">Recusada</span></div>
          <div class="row"><div><p style="font-weight:700">Bronquiolite (bebê)</p><p class="muted">Aplicada em 24/08/2026</p></div><span class="chip ok">Aplicada</span></div>
        </div>
      </div>
      <app-tab-bar />
    </div>
  `,
})
export class MaisVacinas {}
