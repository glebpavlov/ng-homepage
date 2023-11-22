import { Component } from '@angular/core';

import { AuthFacade } from '../../auth/store/auth.facade';
import { USERS } from '../../core/fake-api';
import { CommonModule } from '@angular/common';
import { TuiButtonModule, TuiLinkModule, TuiNotificationModule } from '@taiga-ui/core';
import { TuiBadgeModule } from '@taiga-ui/kit';
import { LetModule, PushModule } from '@ngrx/component';

@Component({
  selector: 'nh-secured-feat',
  templateUrl: './secret.component.html',
  standalone: true,
  imports: [
    CommonModule,
    TuiNotificationModule,
    TuiBadgeModule,
    TuiButtonModule,
    TuiLinkModule,
    LetModule,
    PushModule,
  ],
})
export class SecretComponent {
  user$ = this.authFacade.user$;
  users = USERS;

  constructor(private authFacade: AuthFacade) {}
}
