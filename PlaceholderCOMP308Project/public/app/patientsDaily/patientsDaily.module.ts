import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { PatientsDailyRoutes } from './patientsDaily.routes';
import { PatientsDailyComponent } from './patientsDaily.component';
import { CreateComponent } from './create/create.component';
import { ViewComponent } from './view/view.component';
//import { EditComponent } from './edit/edit.component';
@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        RouterModule.forChild(PatientsDailyRoutes),
    ],
    declarations: [
        PatientsDailyComponent,
        CreateComponent,
        ViewComponent,
        //EditComponent,
    ]
})
export class PatientsDailyModule { }
