import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TabBar } from '../../shared/components/tab-bar/tab-bar';

@Component({
  selector: 'app-main-layout',
  imports: [RouterOutlet, TabBar],
  template: `
    <div class="phone">
      <router-outlet />
      <app-tab-bar />
    </div>
  `,
})
export class MainLayout {}
