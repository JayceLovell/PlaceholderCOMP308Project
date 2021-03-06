﻿import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { AppRoutes } from './app.routes';
import { HomeModule } from './home/home.module';
import { AuthenticationService } from './authentication/authentication.service';
import { AuthenticationModule } from './authentication/authentication.module';
import { PatientsDataModule } from './patientsData/patientsData.module';
import { PatientsViewModule } from './patientsView/patientsView.module';
import { PatientsListModule } from './patientsList/patientsList.module';
import { PatientsSymptomModule } from './patientsSymptom/patientsSymptom.module';
import { PatientsDailyModule } from './patientsDaily/patientsDaily.module';
@NgModule({
    imports: [
        BrowserModule,
        HttpModule,
        AuthenticationModule,
        HomeModule,
        PatientsDataModule,
        PatientsViewModule,
        PatientsListModule,
        PatientsSymptomModule,
        PatientsDailyModule,
        RouterModule.forRoot(AppRoutes),
    ],
    declarations: [
        AppComponent
    ],
    providers: [
        AuthenticationService
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }

