import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DeveleperRoutingModule } from './develeper-routing.module';
import {FormsModule} from "@angular/forms";
import {MatSnackBarModule} from "@angular/material/snack-bar";
import { MenudevComponent } from './components/menudev/menudev.component';
import { MaindevComponent } from './pages/maindev/maindev.component';
import { DevDetailComponent } from './pages/dev-detail/dev-detail.component';
import { DevProjectsComponent } from './pages/dev-projects/dev-projects.component';
import { DevFormsComponent } from './pages/dev-forms/dev-forms.component';
import { DevProjectDetailComponent } from './pages/dev-project-detail/dev-project-detail.component';
import { FillFormComponent } from './pages/fill-form/fill-form.component';
import { ReadFormComponent } from './pages/read-form/read-form.component';


@NgModule({
  declarations: [
    MenudevComponent,
    MaindevComponent,
    MenudevComponent,
    MaindevComponent,
    DevDetailComponent,
    DevProjectsComponent,
    DevFormsComponent,
    DevProjectDetailComponent,
    FillFormComponent,
    ReadFormComponent
  ],
  imports: [
    CommonModule,
    DeveleperRoutingModule,
    FormsModule,
    MatSnackBarModule
  ]
})
export class DeveleperModule { }
