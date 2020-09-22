import { Component } from '@angular/core'

import { AuthService } from '../auth/auth.service'

@Component({
  selector: 'app-home',
  styles: [
    `
      div[fxLayout] {
        margin-top: 32px;
      }
    `,
  ],
  template: `
    <div *ngIf="(authService.authStatus$ | async)?.isAuthenticated; else doLogin">
      <div class="mat-display-4">
        This is LemonMart! The place where
      </div>
      <div class="mat-display-4">
        You get a lemon, you get a lemon, you get a lemon...
      </div>
      <div class="mat-display-4">
        Everybody gets a lemon.
      </div>
    </div>
    <ng-template #doLogin>
      <app-login></app-login>
    </ng-template>
  `,
})
export class HomeComponent {
  // displayLogin = true
  constructor(public authService: AuthService) {}
}
