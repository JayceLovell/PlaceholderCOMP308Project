import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { PatientsListRoutes } from './patientsList.route';
import { PatientsListComponent } from './patientsList.component';
import { ListComponent } from './list/list.component';
@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        RouterModule.forChild(PatientsListRoutes),
    ],
    declarations: [
        PatientsListComponent,
        ListComponent,
    ]
})
export class PatientsListModule { }