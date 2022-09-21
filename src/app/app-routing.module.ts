import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CitiesListComponent } from './components';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: CitiesListComponent,
        pathMatch: 'full',
      },
    ],
  },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
