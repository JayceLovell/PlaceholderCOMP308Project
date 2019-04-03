import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { AppRoutes } from './app.routes';
import { HomeModule } from './home/home.module';
import { AuthenticationService } from './authentication/authentication.service';
import { AuthenticationModule } from './authentication/authentication.module';
import { PatientInfosService } from './patientInfo/patientInfo.service';
import { PatientInfoModule } from './patientInfo/patientInfo.module';
@NgModule({
    imports: [
        BrowserModule,
        HttpModule,
        AuthenticationModule,
        HomeModule,
        RouterModule.forRoot(AppRoutes),
        PatientInfoModule,
    ],
    declarations: [
        AppComponent
    ],
    providers: [
        AuthenticationService,
        PatientInfosService
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }

