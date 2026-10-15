import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-mais',
  imports: [RouterLink],
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
    </div>
  `,
})
export class Mais {}
