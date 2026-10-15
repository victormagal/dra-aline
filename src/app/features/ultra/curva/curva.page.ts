import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-ultra-curva',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './curva.page.html',
})
export class UltraCurva {
  weeks = [22, 26, 30, 34, 38, 42];
}
