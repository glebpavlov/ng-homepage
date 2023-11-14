import { Component } from '@angular/core';

import { AuthFacade } from '../../auth/store/auth.facade';
import { USERS } from '../../core/fake-api';

@Component({
  selector: 'nh-secured-feat',
  templateUrl: './secret.component.html',
})
export class SecretComponent {
  user$ = this.authFacade.user$;
  users = USERS;

  constructor(private authFacade: AuthFacade) {}
}
