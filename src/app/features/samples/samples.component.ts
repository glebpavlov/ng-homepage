import { Component } from '@angular/core';
import { TuiDocNavigationModule } from '@taiga-ui/addon-doc';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { TuiModeDirective } from '@taiga-ui/core';

@Component({
  selector: 'nh-samples',
  templateUrl: './samples.component.html',
  styleUrl: './samples.component.scss',
  imports: [CommonModule, TuiDocNavigationModule, RouterOutlet],
  standalone: true,
  providers: [TuiModeDirective],
})
export class SamplesComponent {}
