import { NgModule } from '@angular/core';
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
import { SymptomModule } from './symptoms/symptoms.module';
@NgModule({
    imports: [
        BrowserModule,
        HttpModule,
        AuthenticationModule,
        HomeModule,
        PatientsDataModule,
        PatientsViewModule,
        PatientsListModule,
        SymptomModule,
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

