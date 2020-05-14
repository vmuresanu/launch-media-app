import { HostComponent } from './host/host.component';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

const routes: Routes = [
  {
    path: 'dashboard',
    children: [{
      path: '**',
      component: HostComponent,
      data: { app: 'dashboard-app' }
    }]
  },
  {
    path: 'settings',
    children: [{
      path: '**',
      component: HostComponent,
      data: { app: 'settings-app' }
    }]
  },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
