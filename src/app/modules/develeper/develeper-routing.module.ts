import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MaindevComponent} from "./pages/maindev/maindev.component";
import {DevDetailComponent} from "./pages/dev-detail/dev-detail.component";
import {DevFormsComponent} from "./pages/dev-forms/dev-forms.component";
import {DevProjectsComponent} from "./pages/dev-projects/dev-projects.component";
import {DevProjectDetailComponent} from "./pages/dev-project-detail/dev-project-detail.component";
import {FormDetailsComponent} from "../admin/pages/form-details/form-details.component";
import {FillFormComponent} from "./pages/fill-form/fill-form.component";
import {ReadFormComponent} from "./pages/read-form/read-form.component";

const routes: Routes = [
  {
    path:'',
    component: MaindevComponent,
    children:[
      {
        path:'dev-detail',
        component: DevDetailComponent
      },

      {
        path:'dev-forms',
        component: DevFormsComponent
      },

      {
        path:'dev-forms/read-form',
        component: ReadFormComponent
      },

      {
        path:'dev-projects',
        component: DevProjectsComponent
      },

      {
        path:'dev-projects/fill-form',
        component: FillFormComponent
      },

      {
        path: 'dev-projects/dev-project-detail',
        component: DevProjectDetailComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DeveleperRoutingModule { }
