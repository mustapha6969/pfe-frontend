import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConsultantRoutingModule } from './consultant-routing.module';
import { MenuconsComponent } from './components/menucons/menucons.component';
import { MainconsComponent } from './pages/maincons/maincons.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { ConsReportsComponent } from './pages/cons-reports/cons-reports.component';
import { ConsProjectsComponent } from './pages/cons-projects/cons-projects.component';
import { ConsDetailComponent } from './pages/cons-detail/cons-detail.component';
import { ConsProjectDetailComponent } from './pages/cons-project-detail/cons-project-detail.component';


@NgModule({
  declarations: [
    MenuconsComponent,
    MainconsComponent,
    ConsReportsComponent,
    ConsProjectsComponent,
    ConsDetailComponent,
    ConsProjectDetailComponent
  ],
  imports: [
    CommonModule,
    ConsultantRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class ConsultantModule { }
