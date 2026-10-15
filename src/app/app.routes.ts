import { Routes } from '@angular/router';
import { Home } from './pages/home.page';
import { ConsultasCalendario, ConsultasAcompanhamento } from './pages/consultas.pages';
import { ExamesResultados, ExamesJanelas } from './pages/exames.pages';
import { UltraUltrassons, UltraCurva } from './pages/ultra.pages';
import { Mais, MaisCasal, MaisSaude, MaisVacinas } from './pages/mais.pages';

// Mockup navegável: sem validação, sem guardas de autenticação. Fluxo de acesso ainda não implementado.
export const routes: Routes = [
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

  { path: '**', redirectTo: 'inicio' },
];
