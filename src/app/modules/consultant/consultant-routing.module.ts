import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MainconsComponent} from "./pages/maincons/maincons.component";
import {MaindevComponent} from "../develeper/pages/maindev/maindev.component";
import {DevDetailComponent} from "../develeper/pages/dev-detail/dev-detail.component";
import {DevFormsComponent} from "../develeper/pages/dev-forms/dev-forms.component";
import {DevProjectsComponent} from "../develeper/pages/dev-projects/dev-projects.component";
import {DevProjectDetailComponent} from "../develeper/pages/dev-project-detail/dev-project-detail.component";
import {ConsDetailComponent} from "./pages/cons-detail/cons-detail.component";
import {ConsProjectsComponent} from "./pages/cons-projects/cons-projects.component";
import {ConsProjectDetailComponent} from "./pages/cons-project-detail/cons-project-detail.component";
import {ConsReportsComponent} from "./pages/cons-reports/cons-reports.component";

const routes: Routes = [
  {
    path:'',
    component: MainconsComponent,
    children:[
      {
        path:'cons-detail',
        component: ConsDetailComponent
      },

      {
        path:'cons-projects',
        component: ConsProjectsComponent
      },

      {
        path: 'cons-projects/cons-project-detail',
        component: ConsProjectDetailComponent
      },

      {
        path:'cons-reports',
        component: ConsReportsComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ConsultantRoutingModule { }
