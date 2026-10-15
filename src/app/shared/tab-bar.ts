import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-tab-bar',
  imports: [RouterLink, RouterLinkActive],
  template: `
    <nav class="tabbar" aria-label="Navegação principal">
      <a routerLink="/inicio" routerLinkActive="active"><span class="ico">⌂</span>Início</a>
      <a routerLink="/consultas" routerLinkActive="active"><span class="ico">▦</span>Consultas</a>
      <a routerLink="/exames" routerLinkActive="active"><span class="ico">⚗</span>Exames</a>
      <a routerLink="/ultra" routerLinkActive="active"><span class="ico">◉</span>Ultra</a>
      <a routerLink="/mais" routerLinkActive="active"><span class="ico">≡</span>Mais</a>
    </nav>
  `,
})
export class TabBar {}
