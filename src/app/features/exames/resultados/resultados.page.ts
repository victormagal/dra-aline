import { Component, computed, signal } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { ExamTable } from '../../../shared/components/exam-table/exam-table';
import { PRIMEIRO_TRI, SEGUNDO_TRI, TERCEIRO_TRI } from './resultados.data';

@Component({
  selector: 'app-exames-resultados',
  imports: [RouterLink, RouterLinkActive, ExamTable],
  styleUrl: '../exames.scss',
  templateUrl: './resultados.page.html',
})
export class ExamesResultados {
  readonly trimestres = [
    { label: '1º tri', rows: PRIMEIRO_TRI, observacao: null },
    { label: '2º tri', rows: SEGUNDO_TRI, observacao: null },
    { label: '3º tri', rows: TERCEIRO_TRI, observacao: 'Alguns exames do 3º trimestre foram refeitos em 04/09/2026.' },
  ];

  readonly selected = signal(0);
  readonly atual = computed(() => this.trimestres[this.selected()]);
}
