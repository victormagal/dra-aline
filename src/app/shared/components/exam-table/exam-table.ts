import { Component, input } from '@angular/core';

export interface ExamRow {
  exame: string;
  valor: string;
}

@Component({
  selector: 'app-exam-table',
  styleUrl: './exam-table.scss',
  templateUrl: './exam-table.html',
})
export class ExamTable {
  rows = input.required<ExamRow[]>();
}
