import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-consultas-calendario',
  imports: [RouterLink, RouterLinkActive],
  styleUrl: '../consultas.scss',
  templateUrl: './calendario.page.html',
})
export class ConsultasCalendario {}
