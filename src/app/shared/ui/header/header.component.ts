import { ChangeDetectionStrategy, Component } from '@angular/core';

import { AuthFacade } from '../../../auth/store/auth.facade';

@Component({
  selector: 'nh-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent {
  readonly menuItems = [
    { link: '/about', label: 'Эбаут', icon: 'tuiIconInfoLarge' },
    { link: '/secret', label: 'Секретная зона', icon: 'tuiIconLockLarge' },
    { link: '/samples', label: 'Примеры', icon: 'tuiIconCodeLarge' },
  ];
  authUser$ = this.authFacade.user$;

  constructor(private authFacade: AuthFacade) {}

  logout() {
    this.authFacade.logout();
  }
}
