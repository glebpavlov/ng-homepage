import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./samples.component').then(c => c.SamplesComponent),
    data: {
      title: 'Примеры кода',
    },
    children: [
      {
        data: {
          title: 'Сжимаем массив чисел',
        },
        path: 'zip-array',
        loadComponent: () =>
          import('./zip-array/zip-array.component').then(c => c.ZipArrayComponent),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SamplesRoutingModule {}
