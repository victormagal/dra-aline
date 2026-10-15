import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-tab-bar',
  imports: [RouterLink, RouterLinkActive],
  styleUrl: './tab-bar.scss',
  template: `
    <nav class="tabbar" aria-label="Navegação principal">
      <a routerLink="/inicio" routerLinkActive="active">Início</a>
      <a routerLink="/consultas" routerLinkActive="active">Consultas</a>
      <a routerLink="/exames" routerLinkActive="active">Exames</a>
      <a routerLink="/ultra" routerLinkActive="active">Ultra</a>
      <a routerLink="/mais" routerLinkActive="active">Mais</a>
    </nav>
  `,
})
export class TabBar {}
