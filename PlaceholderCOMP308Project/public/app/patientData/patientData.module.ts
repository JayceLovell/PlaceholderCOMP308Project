import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { PatientDataRoutes } from './patientData.routes';
import { PatientDataComponent } from './patientData.component';
import { ListComponent } from './list/list.component';
import { ViewComponent } from './view/view.component';
import { EditComponent } from './edit/edit.component';
@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        RouterModule.forChild(PatientDataRoutes),
    ],
    declarations: [
        PatientDataComponent,
        ListComponent,
        ViewComponent,
        EditComponent,
    ]
})
export class PatientDataModule { }
