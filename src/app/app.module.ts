import { CommonModule } from "@angular/common";
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  TuiAlertModule,
  TuiButtonModule,
  TuiDialogModule,
  TuiNotificationModule,
  TuiRootModule, TuiSvgModule,
} from '@taiga-ui/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app/app.component';
import { CoreModule } from './core/core.module';
import { FooterModule } from './shared/ui/footer/footer.module';
import { HeaderModule } from './shared/ui/header/header.module';
import { provideMarkdown } from "ngx-markdown";
import { HttpClient, provideHttpClient } from "@angular/common/http";

@NgModule({
  declarations: [AppComponent],
  imports: [
    // Angular
    BrowserModule,
    BrowserAnimationsModule,
    CommonModule,

    // Taiga UI
    TuiRootModule,
    TuiDialogModule,
    TuiNotificationModule,
    TuiAlertModule,

    // Core
    CoreModule,

    // Application
    AppRoutingModule,
    HeaderModule,
    FooterModule,
    TuiButtonModule,
    TuiSvgModule
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
