import { Routes } from '@angular/router';
import { MainLayout } from './layouts/main/main.layout';
import { Home } from './features/home/home.page';
import { ConsultasCalendario } from './features/consultas/calendario/calendario.page';
import { ConsultasAcompanhamento } from './features/consultas/acompanhamento/acompanhamento.page';
import { ExamesResultados } from './features/exames/resultados/resultados.page';
import { ExamesJanelas } from './features/exames/janelas/janelas.page';
import { UltraUltrassons } from './features/ultra/ultrassons/ultrassons.page';
import { UltraCurva } from './features/ultra/curva/curva.page';
import { Mais } from './features/mais/mais.page';
import { MaisCasal } from './features/mais/casal/casal.page';
import { MaisSaude } from './features/mais/saude/saude.page';
import { MaisVacinas } from './features/mais/vacinas/vacinas.page';

// Mockup navegável: sem validação, sem guardas de autenticação.
// Fluxo de acesso (login, cadastro, recuperação) ainda não implementado.
export const routes: Routes = [
  {
    path: '',
    component: MainLayout,
    children: [
      { path: '', redirectTo: 'inicio', pathMatch: 'full' },
      { path: 'inicio', component: Home },

      { path: 'consultas', redirectTo: 'consultas/calendario', pathMatch: 'full' },
      { path: 'consultas/calendario', component: ConsultasCalendario },
      { path: 'consultas/acompanhamento', component: ConsultasAcompanhamento },

      { path: 'exames', redirectTo: 'exames/resultados', pathMatch: 'full' },
      { path: 'exames/resultados', component: ExamesResultados },
      { path: 'exames/janelas', component: ExamesJanelas },

      { path: 'ultra', redirectTo: 'ultra/ultrassons', pathMatch: 'full' },
      { path: 'ultra/ultrassons', component: UltraUltrassons },
      { path: 'ultra/curva', component: UltraCurva },

      { path: 'mais', component: Mais },
      { path: 'mais/casal', component: MaisCasal },
      { path: 'mais/saude', component: MaisSaude },
      { path: 'mais/vacinas', component: MaisVacinas },
    ],
  },
  { path: '**', redirectTo: 'inicio' },
];
