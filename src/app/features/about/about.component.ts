import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TuiButtonModule } from '@taiga-ui/core';
import { IconModule } from '../../shared/ui/icon/icon.module';

import { MarkdownModule } from 'ngx-markdown';
import { HttpClientModule } from '@angular/common/http';

// @ts-ignore
@Component({
  selector: 'nh-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
  standalone: true,
  imports: [CommonModule, TuiButtonModule, IconModule, HttpClientModule, MarkdownModule],
})
export class AboutComponent {
  constructor() {}
}
