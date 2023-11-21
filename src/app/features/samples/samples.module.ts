import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { SamplesRoutingModule } from './samples-routing.module';
import { TuiDocNavigationModule } from "@taiga-ui/addon-doc";


@NgModule({
  imports: [
    CommonModule,
    SamplesRoutingModule,
    TuiDocNavigationModule
  ]
})
export class SamplesModule {
}
