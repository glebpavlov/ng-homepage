import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LetModule, PushModule } from "@ngrx/component";
import { TuiButtonModule, TuiLinkModule, TuiNotificationModule } from '@taiga-ui/core';
import { TuiBadgeModule } from '@taiga-ui/kit';

import { SecretComponent } from './secret.component';

const routes: Routes = [{ path: '', component: SecretComponent }];

@NgModule({
  imports: [
    CommonModule,
    TuiNotificationModule,
    TuiBadgeModule,
    RouterModule.forChild(routes),
    TuiButtonModule,
    TuiLinkModule,
    LetModule,
    PushModule
  ],
  declarations: [SecretComponent],
})
export class SecretModule {}
