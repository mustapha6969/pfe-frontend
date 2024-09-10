import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MainComponent} from "./pages/main/main.component";
import {UsersComponent} from "./pages/users/users.component";
import {CreateUserComponent} from "./pages/create-user/create-user.component";
import {UpdateUserComponent} from "./pages/update-user/update-user.component";
import {ProjectsComponent} from "./pages/projects/projects.component";
import {CreateProjectComponent} from "./pages/create-project/create-project.component";
import {FormsComponent} from "./pages/forms/forms.component";
import {ReportsComponent} from "./pages/reports/reports.component";
import {UpdateProjectComponent} from "./pages/update-project/update-project.component";
import {FormDetailsComponent} from "./pages/form-details/form-details.component";

const routes: Routes = [
  {
    path:'',
    component: MainComponent,
    children:[
      {
        path:'users',
        component: UsersComponent
      },

      {
        path:'forms',
        component: FormsComponent
      },

      {
        path:'forms/form-details',
        component: FormDetailsComponent
      },

      {
        path:'reports',
        component: ReportsComponent
      },

      {
        path:'create-user',
        component: CreateUserComponent
      },
      {
        path:'update-user',
        component: UpdateUserComponent
      },
      {
        path:'projects',
        component: ProjectsComponent
      },
      {
        path:'projects/create-project',
        component: CreateProjectComponent
      },
      {
        path:'projects/update-project',
        component: UpdateProjectComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
