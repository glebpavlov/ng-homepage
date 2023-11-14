import { Component } from '@angular/core';

import { ConfigService } from '../../../core/services';

@Component({
  selector: 'nh-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent {
  readonly version = this.configService.getVersion();
  readonly lastModified = this.configService.getLastModified();

  constructor(private configService: ConfigService) {}
}
