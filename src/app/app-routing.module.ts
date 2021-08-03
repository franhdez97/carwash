import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomeModule)
  },
  {
    path: 'empleos',
    loadChildren: () => import('./pages/jobs/jobs.module').then( m => m.JobsModule)
  },
  {
    path: 'contacto',
    loadChildren: () => import('./pages/contact/contact.module').then( m => m.ContactModule)
  },
  {
    path: 'servicio',
    loadChildren: () => import('./pages/services/services.module').then( m => m.ServicesModule)
  },
  {
    path: '**',
    redirectTo: '404',
    pathMatch: 'full'
  },
  {
    path: '404',
    loadChildren: () => import('./pages/not-found/not-found.module').then( m => m.NotFoundModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
