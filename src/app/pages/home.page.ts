import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TabBar } from '../shared/tab-bar';

@Component({
  selector: 'app-home',
  imports: [RouterLink, TabBar],
  template: `
    <div class="phone-inner">
      <div class="topbar">
        <div>
          <p class="eyebrow">Dra. Aline Magalhães</p>
          <h1 style="margin-top:4px">Olá, Patrícia</h1>
        </div>
        <img src="assets/logo-dra-aline.svg" alt="Logo Dra. Aline Magalhães">
      </div>
      <div class="screen">
        <div class="card" style="background:var(--magenta); color:var(--white); margin-top:8px">
          <p class="eyebrow" style="color:var(--rose)">Pós-parto</p>
          <p style="font-family:'Cormorant Garamond',serif; font-size:24px; font-weight:700; margin-top:4px">Bebê nasceu em 01/10/2026</p>
          <p style="opacity:.85">12 dias</p>
          <p style="margin-top:10px; opacity:.9">Próxima consulta: pós-parto, 19/10/2026</p>
        </div>

        <p class="section-title">Próxima consulta</p>
        <div class="card grid4" style="padding:14px 0">
          <div class="span-4" style="padding:0 16px">
            <p style="font-weight:700">Consulta pós-parto</p>
            <p class="muted">Segunda-feira, 19/10/2026</p>
          </div>
          <div class="span-4" style="padding:0 16px"><a class="link" style="margin:0; text-align:left" routerLink="/consultas/calendario">Ver detalhes</a></div>
        </div>

        <p class="section-title">Pendências</p>
        <div class="list">
          <div class="row"><span>Consulta pós-parto</span><span class="chip ok">Agendada</span></div>
          <div class="row"><span>Vacina hepatite B</span><span class="chip warn">Pendente</span></div>
        </div>

        <p class="section-title">Bebê</p>
        <div class="card grid4" style="padding:14px 0">
          <div class="span-2" style="padding:0 0 0 16px"><p class="eyebrow">Nascimento</p><p>01/10/2026</p></div>
          <div class="span-2" style="padding:0 16px 0 0"><p class="eyebrow">Idade</p><p>12 dias</p></div>
        </div>
      </div>
      <app-tab-bar />
    </div>
  `,
})
export class Home {}
