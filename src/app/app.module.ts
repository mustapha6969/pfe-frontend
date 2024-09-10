import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HTTP_INTERCEPTORS, HttpClient, HttpClientModule} from "@angular/common/http";
import { LoginComponent } from './pages/login/login.component';
import {FormsModule} from "@angular/forms";
import { RegisterComponent } from './pages/register/register.component';
import { ActivateAccountComponent } from './pages/activate-account/activate-account.component';
import {CodeInputModule} from "angular-code-input";
import { MainComponent } from './pages/main/main.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { AdminsidebarComponent } from './pages/admin/adminsidebar/adminsidebar.component';
import { AdmindashboardComponent } from './pages/admin/admindashboard/admindashboard.component';
import { AdminusersdataComponent } from './pages/admin/adminusersdata/adminusersdata.component';
import { AdminprojectsdataComponent } from './pages/admin/adminprojectsdata/adminprojectsdata.component';
import { AdminreportsdataComponent } from './pages/admin/adminreportsdata/adminreportsdata.component';
import { AdminformsdataComponent } from './pages/admin/adminformsdata/adminformsdata.component';
import { DevelopersidebarComponent } from './pages/developer/developersidebar/developersidebar.component';
import { DeveloperdashboardComponent } from './pages/developer/developerdashboard/developerdashboard.component';
import { DeveloperformsComponent } from './pages/developer/developerforms/developerforms.component';
import { DeveloperprojectsComponent } from './pages/developer/developerprojects/developerprojects.component';
import { ConsultantsidebarComponent } from './pages/securityconsultant/consultantsidebar/consultantsidebar.component';
import { ConsultantdashboardComponent } from './pages/securityconsultant/consultantdashboard/consultantdashboard.component';
import { ConsultantprojectsComponent } from './pages/securityconsultant/consultantprojects/consultantprojects.component';
import { ConsultantformsComponent } from './pages/securityconsultant/consultantforms/consultantforms.component';
import { ConsultantreportsComponent } from './pages/securityconsultant/consultantreports/consultantreports.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    ActivateAccountComponent,
    MainComponent,
    DashboardComponent,
    AdminsidebarComponent,
    AdmindashboardComponent,
    AdminusersdataComponent,
    AdminprojectsdataComponent,
    AdminreportsdataComponent,
    AdminformsdataComponent,
    DevelopersidebarComponent,
    DeveloperdashboardComponent,
    DeveloperformsComponent,
    DeveloperprojectsComponent,
    ConsultantsidebarComponent,
    ConsultantdashboardComponent,
    ConsultantprojectsComponent,
    ConsultantformsComponent,
    ConsultantreportsComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        FormsModule,
        CodeInputModule,
        BrowserAnimationsModule
    ],
  providers: [
    HttpClient
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
