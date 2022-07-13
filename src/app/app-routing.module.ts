import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LayoutComponent} from './components/layout/layout.component';
import {routes} from './consts';

const ROUTES: typeof routes = routes;

const route: Routes = [
  {
    path: '',
    redirectTo: ROUTES.HOME,
    pathMatch: 'full',
  },
  {
    path: '',
    component: LayoutComponent,
    loadChildren: () => import('./pages/pages.module').then(m => m.PagesModule),
  },
  // { path: 'home', component: HomeComponent },
  // { path: 'dashboard', component: DashboardComponent },
  // { path: 'login', component: LoginComponent },
  // { path: 'register', component: RegisterComponent },
  // { path: 'oauth2/redirect', component: Oauth2Component },
  // { path: 'profile', component: ProfileComponent },
  // { path: 'team', component: TeamComponent },
  // { path: 'player/sports', component: SportsComponent },
  // { path: '', redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(route, {onSameUrlNavigation: 'reload'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
