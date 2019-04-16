import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { PatientsSymptomRoutes } from './patientsSymptom.routes';
import { PatientsSymptomComponent } from './patientsSymptom.component';
import { CreateComponent } from './create/create.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        RouterModule.forChild(PatientsSymptomRoutes),
    ],
    declarations: [
        PatientsSymptomComponent,
        CreateComponent,
    ]
})
export class PatientsSymptomModule { }