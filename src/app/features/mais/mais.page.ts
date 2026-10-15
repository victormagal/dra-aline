import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-mais',
  imports: [RouterLink, RouterLinkActive],
  styleUrl: './mais.scss',
  template: `
    <header class="head">
      <p class="eyebrow">Conta e registros</p>
      <h1>Mais</h1>
    </header>

    <main class="content">
      @for (item of items; track item.route) {
        <a class="item" [routerLink]="item.route">
          <span class="icon">{{ item.letter }}</span>
          <span class="texts">
            <span class="t">{{ item.title }}</span>
            <span class="s">{{ item.sub }}</span>
          </span>
          <span class="chev">›</span>
        </a>
      }
    </main>
  `,
})
export class Mais {
  items = [
    { letter: 'F', title: 'Ficha do casal', sub: 'Dados pessoais e do parceiro', route: '/mais/casal' },
    { letter: 'S', title: 'Saúde e contatos', sub: 'Alergias, história clínica e contatos', route: '/mais/saude' },
    { letter: 'V', title: 'Vacinas', sub: '2 aplicadas · 1 pendente · 2 recusadas', route: '/mais/vacinas' },
  ];
}
