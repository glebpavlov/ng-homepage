import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from "@angular/common/http";
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TuiButtonModule } from '@taiga-ui/core';
import { MarkdownModule } from "ngx-markdown";

import { IconModule } from '../../shared/ui/icon/icon.module';
import { AboutComponent } from './about.component';

const routes: Routes = [{ path: '', component: AboutComponent }];

@NgModule({
  imports: [
    CommonModule,
    TuiButtonModule,
    RouterModule.forChild(routes),
    IconModule,
    MarkdownModule.forRoot({ loader: HttpClient }),
    HttpClientModule
  ],
  declarations: [AboutComponent],
})
export class AboutModule {
}
