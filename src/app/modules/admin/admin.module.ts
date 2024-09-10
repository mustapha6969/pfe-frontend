import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { MainComponent } from './pages/main/main.component';
import { MenuComponent } from './components/menu/menu.component';
import { UsersComponent } from './pages/users/users.component';
import { CreateUserComponent } from './pages/create-user/create-user.component';
import {FormsModule} from "@angular/forms";
import {MatSnackBarModule} from "@angular/material/snack-bar";
import { UpdateUserComponent } from './pages/update-user/update-user.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { CreateProjectComponent } from './pages/create-project/create-project.component';
import { FormsComponent } from './pages/forms/forms.component';
import { ReportsComponent } from './pages/reports/reports.component';
import { UpdateProjectComponent } from './pages/update-project/update-project.component';
import { FormDetailsComponent } from './pages/form-details/form-details.component';


@NgModule({
  declarations: [
    MainComponent,
    MenuComponent,
    UsersComponent,
    CreateUserComponent,
    UpdateUserComponent,
    ProjectsComponent,
    CreateProjectComponent,
    FormsComponent,
    ReportsComponent,
    UpdateProjectComponent,
    FormDetailsComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule,
    MatSnackBarModule
  ]
})
export class AdminModule { }
