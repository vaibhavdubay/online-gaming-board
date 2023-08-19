import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'authenticate',
    pathMatch: 'full',
  },
  {
    path: 'authenticate',
    loadChildren: () =>
      import('./modules/authenticate/authenticate.module').then(
        (module) => module.AuthenticateModule
      ),
  },
  {
    path: 'dashboard',
    loadChildren: () =>
      import('./modules/dashboard/dashboard.module').then(
        (module) => module.DashboardModule
      ),
  },
  {
    path: 'game',
    loadChildren: () =>
      import('./games/games.module').then((module) => module.GamesModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
