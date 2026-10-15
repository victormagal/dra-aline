import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-consultas-acompanhamento',
  imports: [RouterLink, RouterLinkActive],
  styleUrl: '../consultas.scss',
  templateUrl: './acompanhamento.page.html',
})
export class ConsultasAcompanhamento {
  consultas = [
    { date: '27/08/2026', ig: '34 sem', peso: '79 kg', pa: '—', bcf: '143', afu: '29 cm', edema: '+1/4+', conduta: 'Rotina lab T3; Fe EV; ajuste de suplementação' },
    { date: '13/08/2026', ig: '32 sem', peso: '79,9 kg', pa: '133×72', bcf: '142', afu: '28 cm', edema: '+1/4+', conduta: 'Curva glicêmica; nutrição (SOS)' },
    { date: '16/07/2026', ig: '28 sem', peso: '81,8 kg', pa: '106×68', bcf: '148', afu: '26 cm', edema: '+1/4+', conduta: 'Ajuste suplementação; USG; glicemia; dieta; AF; curva glicêmica' },
  ];
}
