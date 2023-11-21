import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthGuardService } from './auth/guards';
import { provideMarkdown } from "ngx-markdown";
import { HttpClient, provideHttpClient } from "@angular/common/http";

const routes: Routes = [
  {
    path: '',
    redirectTo: 'about',
    pathMatch: 'full',
  },
  {
    path: 'about',
    loadComponent: () => import('./features/about/about.component').then(m => m.AboutComponent),
    providers: [provideHttpClient(), provideMarkdown({ loader: HttpClient })]
  },
  {
    path: 'secret',
    canActivate: [AuthGuardService],
    loadComponent: () =>
      import('./features/secret/secret.component').then(c => c.SecretComponent),
  },
  {
    path: 'samples',
    loadChildren: () =>
      import('./features/samples/samples.module').then(m => m.SamplesModule),
  },
  {
    path: '**',
    redirectTo: 'home',
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      scrollPositionRestoration: 'enabled'
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
