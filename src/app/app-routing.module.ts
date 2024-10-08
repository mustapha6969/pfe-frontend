import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "./pages/login/login.component";
import {RegisterComponent} from "./pages/register/register.component";
import {ActivateAccountComponent} from "./pages/activate-account/activate-account.component";
import {MainComponent} from "./pages/main/main.component";
import {DashboardComponent} from "./pages/dashboard/dashboard.component";

const routes: Routes = [

  {
    path: '',
    component: MainComponent
  },

  {
    path: 'dashboard',
    component: DashboardComponent
  },

  {
    path: 'admin',
    loadChildren: () => import('./modules/admin/admin.module').then(m => m.AdminModule)
  },
  {
    path: 'developer',
    loadChildren: () => import('./modules/develeper/develeper.module').then(m => m.DeveleperModule)
  },

  {
    path: 'consultant',
    loadChildren: () => import('./modules/consultant/consultant.module').then(m => m.ConsultantModule)
  },

  {
  path: 'login',
  component: LoginComponent
  },

  {
    path: 'register',
    component: RegisterComponent
  },

  {
    path: 'activate-account',
    component: ActivateAccountComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
